import React from 'react'
import './rsvp.css'

function rsvp() {
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
          <h1>Reply by 22 . 04 . 2026</h1>
          <form className='submit-form' >
            <label>
              Name: 
              <input className="input-name" type='text' name='name' placeholder='Your full name' required/>
            </label>

            <label>
              Number of Guest(included children):
              <input className='input-number' type='number' name='people' min="1" max="100" required/>
            </label>

            {/* <fieldset> */}
              <label>
                <input className='radio' type='radio' name="response" value="accept"/>
                Accept with pleasure
              </label>

              <label>
                <input className='radio' type='radio' name='response' value="deny"/>
                Will celerate from afar
              </label>
            {/* </fieldset> */}
          </form>
        </div>
      </div>
      <button>Send</button>
    </div>
  )
}

export default rsvp;