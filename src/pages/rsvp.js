import React, { useState } from 'react'
import './rsvp.css'

function Rsvp() {
  const [response, setResponse] = useState('');

  return (
    <div className='rsvp'>
      <div className='content1'>
        <div className='content1-1'>
          <h1>Kindly</h1>
          <div>
            <p>R</p>
            <p>S</p>
            <p>V</p>
            <p>P</p>
          </div>
        </div>
        <div className='content1-2'>
          <h1>Reply by 05 . 15 . 2026</h1>
          <div className='form-scroll'>
            <form className='submit-form'>
              <label>
                Name:
                <input className="input-name" type='text' name='name' required />
              </label>

              <label>
                Number of Guest:
                <input className='input-number' type='number' min="1" max="20" name='people' required />
              </label>

              <label>
                <input
                  className='radio'
                  type='radio'
                  name="response"
                  value="accept"
                  onChange={(e) => setResponse(e.target.value)}
                />
                Accept with pleasure
              </label>

              <label>
                <input
                  className='radio'
                  type='radio'
                  name='response'
                  value="deny"
                  onChange={(e) => setResponse(e.target.value)}
                />
                Will celebrate from afar
              </label>

              {/* ── Meal selection — only shown when accepted ── */}
              {response === 'accept' && (
                <div className='meal-section'>
                  <p className='meal-title'>🎉 Now the fun part — pick your feast!</p>
                  <div className='meal-options'>

                    <label className='meal-card'>
                      <input className='radio meal-radio' type='radio' name='meal' value='beef' />
                      <div className='meal-icon'>🥩</div>
                      <div className='meal-name'>The Classic</div>
                      <div className='meal-desc'>Juicy grilled beef tenderloin — for the one who likes to keep it deliciously simple</div>
                    </label>

                    <label className='meal-card'>
                      <input className='radio meal-radio' type='radio' name='meal' value='fish' />
                      <div className='meal-icon'>🐟</div>
                      <div className='meal-name'>The Catch</div>
                      <div className='meal-desc'>Pan-seared fish with lemon butter — light, bright & ready to celebrate</div>
                    </label>

                    <label className='meal-card'>
                      <input className='radio meal-radio' type='radio' name='meal' value='vegetarian' />
                      <div className='meal-icon'>🌿</div>
                      <div className='meal-name'>The Garden</div>
                      <div className='meal-desc'>Stuffed portobello with roasted veggies — proof that plants know how to party too</div>
                    </label>

                  </div>
                </div>
              )}
            </form>
          </div>
          <div className='form-footer'>
            <button><span>Send</span></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rsvp;