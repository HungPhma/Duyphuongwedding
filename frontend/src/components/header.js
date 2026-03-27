import React, { useState, useEffect, useMemo, useCallback } from 'react'
import duyphuongimg from '../assets/duyphuongwedding1.webp'
import duyphuongimg2 from '../assets/Duyphuongwedding2.webp'
import duyphuongimg3 from '../assets/Duyphuongwedding3.webp'
import duyphuongimg4 from '../assets/Duyphuongwedding4.webp'
import duyphuongimg5 from '../assets/Duyphuongwedding5.webp'
import duyphuongimg6 from '../assets/Duyphuongwedding6.webp'
import duyphuongimg7 from '../assets/Duyphuongwedding7.webp'
import duyphuongimg8 from '../assets/Duyphuongwedding8.webp'
import duyphuongimg9 from '../assets/Duyphuongwedding9.webp'
import duyphuongimg10 from '../assets/Duyphuongwedding10.webp'
import duyphuongimg11 from '../assets/Duyphuongwedding11.webp'
import duyphuongimg12 from '../assets/Duyphuongwedding12.webp'
import './header.css';
import { useNavigate } from 'react-router-dom';

const imagines = [
    {src: duyphuongimg, alt: "Duy and Phuong wedding", order: 1},
    {src: duyphuongimg2, alt: "Duy and Phuong wedding photo 2", order: 4},
    {src: duyphuongimg3, alt: "Duy and Phuong wedding photo 3", order: 5},
    {src: duyphuongimg4, alt: "Duy and Phuong wedding photo 4", order: 6},
    {src: duyphuongimg5, alt: "Duy and Phuong wedding photo 5", order: 7},
    {src: duyphuongimg6, alt: "Duy and Phuong wedding photo 6", order: 8},
    {src: duyphuongimg7, alt: "Duy and Phuong wedding photo 7", order: 9},
    {src: duyphuongimg8, alt: "Duy and Phuong wedding photo 8", order: 10},
    {src: duyphuongimg9, alt: "Duy and Phuong wedding photo 9", order: 11},
    {src: duyphuongimg10, alt: "Duy and Phuong wedding photo 10", order: 12},
    {src: duyphuongimg11, alt: "Duy and Phuong wedding photo 11", order: 2},
    {src: duyphuongimg12, alt: "Duy and Phuong wedding photo 12", order: 3}
];

const sortedImages = imagines.sort((a, b) => a.order - b.order);

const CarouselSlide = React.memo(({ image, isActive }) => (
    <div className={`carousel-slide ${isActive ? 'active' : ''}`}>
        <img src={image.src} alt={image.alt} />
    </div>
));

function Header({ autoPlay = true }) {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!autoPlay) return;
        
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % sortedImages.length);
        }, 7000);

        return () => clearInterval(interval);
    }, [autoPlay]);

    const handleClick = useCallback(() => {
        const storySection = document.getElementById('Story');
        if (storySection) {
            storySection.scrollIntoView({ behavior: 'auto' });
        }
    }, []);

    const handleRsvp = useCallback(() => {
        navigate('/rsvp');
    }, [navigate]);

    const handlePrev = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + sortedImages.length) % sortedImages.length);
    }, []);

    const handleNext = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % sortedImages.length);
    }, []);
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
                <div className='img-page carousel-container'>
                    <div className='carousel-wrapper'>
                        <div className='carousel-inner'>
                            {sortedImages.map((imagine, index) => (
                                <CarouselSlide key={index} image={imagine} isActive={activeIndex === index} />
                            ))}
                        </div>
                        <button className='carousel-control prev' onClick={handlePrev}>❮</button>
                        <button className='carousel-control next' onClick={handleNext}>❯</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;