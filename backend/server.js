const express = require('express');
const cors    = require('cors');
const { Resend } = require('resend');
const dotenv = require('dotenv');
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    console.log('CORS origin set to:', process.env.URL_CONNECT);
    res.send('Duyphuongwedding backend running');
});

app.get('/awake', (req,res) => {
    console.log("Sending status back to frontend!");
    res.status(200).json({message: "Render wakes up!"});
});

app.post('/rsvp', async (req,res) => {
    const { name, guestCount, attending } = req.body;

    if(!name || typeof name !== 'string' || name.trim() === ''){
        return res.status(400).json({error: 'Name is required.'});
    }
    if(!guestCount || isNaN(guestCount) || guestCount < 1 || guestCount > 20){
        return res.status(400).json({error: 'Guest count must be between 1 and 20'});
    }
    if(typeof attending !== 'boolean'){
        return res.status(400).json({error: 'Attendance response is required.'});
    }

    const emailHTML = `
        <h2>New RSVP from ${name}</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Number of Guests:</b> ${guestCount}</p>
        <p><b>Attending:</b> ${attending ? 'Yes 🎊' : 'No'}</p>
        ${attending
            ? '<p>They will be joining the celebration! 🎊</p>'
            : '<p>Though they cannot attend, they will be celebrating from afar! 🎉</p>'
        }
    `;

    try {
        await resend.emails.send({
            from: 'DuyPhuong Wedding <wedding@duyphuongwedding.com>',
            to: 'Hpham23.official@gmail.com',
            subject: 'Duyphuongwedding Respond From Guest',
            html: emailHTML
        });
    } catch(err) {
        console.error('Mail error:', err);
        return res.status(500).json({error: 'Failed to send email. Please try again.'});
    }

    const message = attending
        ? `Thank You, ${name}!<br> We're so excited to celebrate with you and your ${guestCount} ${guestCount > 1 ? 'guests' : 'guest'}.<br> See you soon!`
        : `Thank You, ${name}!<br> We'll miss you, but we're grateful you'll be celebrating with us in spirit. 💕`;

    return res.status(200).json({message});
});

const CURRENT_PORT = process.env.PORT || 8000;

app.listen(CURRENT_PORT, () => {
    console.log('Server running on port ' + CURRENT_PORT);
});