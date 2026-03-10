const express = require('express');
const cors    = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_TOKEN
    },
});

const app = express();

const corsOptions = {
    origin: process.env.URL_CONNECT,
    methods: 'GET,POST',
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());


app.get('/', (req,res) => {
    res.send('Duyphuongwedding backend running');
});
app.post('/rsvp', async (req,res) => {
    const { name, guestCount, attending, mealChoice } = req.body;

    // validate form
    if(!name || typeof name !== 'string' || name.trim() === ''){
        return res.status(400).json({error: 'Name is required.'});
    }

    if(!guestCount || isNaN(guestCount) || guestCount < 1 || guestCount > 20){
        return res.status(400).json({error: 'Guest count must be between 1 and 20'});
    }

    if(typeof attending !== 'boolean'){
        return res.status(400).json({error: 'Attendance response is required.'});
    }

    const validMeals = ['Beef', 'Chicken', 'Vegetarian'];

    if(attending && (!mealChoice || !validMeals.includes(mealChoice))){
        return res.status(400).json({ error: 'Please select a valid meal: chicken, beef, or vegetarian.' });
    }

    // send email
    const attendingHTML = attending 
        ? `<p><b>Meal Choice:</b> ${mealChoice.charAt(0).toUpperCase() + mealChoice.slice(1)}</p>`
        : '';
    const notAttendingHTML = `<p>Though they cannot attend, they will be celebrating from afar! 🎉</p>`;

    const emailHTML = `
        <h2>New RSVP from ${name}</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Number of Guests:</b> ${guestCount}</p>
        <p><b>Attending:</b> ${attending ? 'Yes 🎊' : 'No'}</p>
        ${attending ? attendingHTML : notAttendingHTML}
    `;
    const sendEmailWithRetry = async (mailOptions, retries = 3, delay = 3000) => {
        for(let attempt = 1; attempt <= retries; attempt++){
            try{
                await transporter.sendMail(mailOptions);
                console.log(`Email sent on attempt ${attempt}`);
                return;
            }
            catch(err){
                console.error(`Attempt ${attempt} failed: `, err.message);
                if(attempt === retries) throw err;
                await new Promise(resolve => setTimeout(resolve, delay * attempt));
            }
        }
    };

    try{
        await sendEmailWithRetry({
            from: "Duyphuongwedding.com",
            to: "Hpham23.official@gmail.com",
            subject: "Duyphuongwedding Respond From Guest",
            html: emailHTML
        });
    }
    catch(err){
        console.error('Mail error:', err);
        return res.status(500).json({error: 'Failed to send email. Please try again.'});
    }
    // respond back
    const message = attending ? 
                    `Thank You, ${name}! We're so excited to celebrate with you and your ${guestCount} guest(s). See you soon! 💍`:
                    `Thank You, ${name}! We'll miss you, but we're grateful you'll be celebrating with us in spirit. 💕`;
    
    return res.status(200).json({message});
});

const CURRENT_PORT = process.env.PORT || 8000;

app.listen(CURRENT_PORT, () => {
    console.log('Server running on port ' + CURRENT_PORT);
})