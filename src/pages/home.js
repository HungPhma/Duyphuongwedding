import React from 'react'
import Header from '../components/header.js';
import Welcome from '../components/welcome.js';
import Time from '../components/time.js';
import Story from '../components/story.js';
import Thank from '../components/thank.js';
import './home.css'
function Home() {
  return (
    <div className='home'>
        <Header />
        <Welcome />
        <Time />
        <Story />
        <Thank />
    </div>
  )
}

export default Home;