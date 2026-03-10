import React from 'react'
import duyphuongimg from '../assets/duyphuong.webp'
import './header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const handleClick = () => {
        const storySection = document.getElementById('Story');
        if (storySection) {
            storySection.scrollIntoView({ behavior: 'smooth' });
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
                    <h2>We tied the knot — come celebrate with us</h2>
                    <h1>Duy & Phuong</h1>
                    <h3>ORANGE HILL, ORANGE COUNTY</h3>
                </div>
                <div className='img-page'>
                    <img src={duyphuongimg} alt="Duy and Phuong wedding" decoding="sync" loading='eager' fetchPriority="high" />
                </div>
            </div>
        </div>
    )
}

export default Header;