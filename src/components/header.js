import React from 'react'
import duyphuongimg from '../assets/duyphuong.jpg'
import './header.css';
import { useNavigate } from 'react-router-dom';
function Header() {
    const navigate = useNavigate();
    const handleClick = () => {
        const storySection = document.getElementById('Story');
        if(storySection){
            storySection.scrollIntoView({behavior:'smooth'});
        }
    };
    const handleRsvp = () => {
        navigate('/rsvp');
    };
    return (
        <div className='header' id='header'>
            <div className='navigation'>
                <button onClick={handleClick}>Our Story</button>
                <button onClick={handleRsvp}>RSVP</button>
            </div>
            <div className='picture-page'>
                <div className='title'>
                    <h2>We are getting married</h2>
                    <h1>Duy & Phuong</h1>
                    <h3>BUON ME THUOT, VIETNAM</h3>
                </div>
                <div className='img-page'>
                    <img src={duyphuongimg} alt="Duy and Phuong wedding" loading='eager' fetchpriority="high" as="image"/>
                </div>
            </div>
        </div>
    )
}

export default Header;