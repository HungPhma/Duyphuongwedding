import React from 'react'
import './thank.css'
import { useNavigate } from 'react-router-dom';

function Thank() {
    const usenavigate = useNavigate();
    const handClick = () => {
        usenavigate('/rsvp');
    };
  return (
    <div className='thank'>
        <h1 className='thank-you'>"Your presence would mean the world to us"</h1>
        <button onClick={handClick}>Rsvp</button>
    </div>
  )
}

export default Thank