import React, { useState, useEffect } from 'react'
import './time.css'
function Time() {
    const targetDate = new Date('2026-06-14T17:00:00');

    const calculateTime = () =>{
        const currentTime = new Date();
        const difference = targetDate - currentTime;
        let timeLeft = {};

        if(difference > 0){
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            }
        }
        else{
            timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }

        return timeLeft;
    };
    const [timeLeft, setTimeLeft] = useState(calculateTime());
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTime());
        }, 1000);

        return () => {clearInterval(timer)};
    },[]);

    return (
        <div className='Time'>
            <div className='message'>We’re so happy to have you here, sharing in the love and joy of our wedding day.</div>
            <div className='message-see-you'>See You In</div>
            <div className='countdown'>
                {/* {timeLeft.days} Days {timeLeft.hours} <span className="blink-slow">:</span> {timeLeft.minutes} <span className="blink-slow">:</span> {timeLeft.seconds} */}
                <div>
                    <div>{timeLeft.days}</div>
                    <div className='countdown-time'>{timeLeft.days > 1 ? 'DAYS' : 'DAY'}</div>
                </div>
                <div>
                    <div>{timeLeft.hours}</div>
                    <div className='countdown-time'>{timeLeft.hours > 1 ? 'HOURS' : 'HOUR'}</div>
                </div>
                <div>
                    <div>{timeLeft.minutes}</div>
                    <div className='countdown-time'>{timeLeft.minutes > 1 ? 'MINUTES' : 'MINUTE'}</div>
                </div>
                <div>
                    <div>{timeLeft.seconds}</div>
                    <div className='countdown-time'>{timeLeft.seconds > 1 ? 'SECONDS' : 'SECOND'}</div>
                </div>
            </div>
        </div>
    )
}

export default Time