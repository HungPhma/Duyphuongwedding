import React from 'react'
import Header from '../components/header.js';
import Welcome from '../components/welcome.js';
import Time from '../components/time.js';
import './home.css'
function Home() {
  return (
    <div className='home'>
        <Header />
        <Welcome />
        <Time />
        {/* <story /> */}
        {/* <thanks /> */}
    </div>
  )
}

export default Home;