import React from 'react'
import './welcome.css'

function Welcome() {
  return (
    <div className='welcome'>
        <div className='official-date'><span>06</span><span>.</span><span>14</span><span>.</span><span>2026</span></div>
        <div className='official-time'>5<span className="blink">:</span>00 pm</div>
        <div className='text'>You are</div>
        <div className="invited">
            Invite
            <span className="tail-d">
                d
                <svg
                    className="tail-svg"
                    viewBox="0 0 600 80"
                    preserveAspectRatio="none"
                    >
                    <path
                        d="M5 44 C 160 5, 360 95, 595 40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                </svg>
            </span>
        </div>
    </div>
  )
}

export default Welcome