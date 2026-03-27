import React, { useState } from 'react'
import './rsvp.css'
import Swal from 'sweetalert2'

function Rsvp() {
  const [response, setResponse] = useState('');
  const [form, setForm] = useState({name: '', numGuest: ''});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!response) {
      Swal.fire({ icon: 'warning', title: 'Please select your attendance response.' });
      return;
    }
    setLoading(true);
    try{
      const resquest = await fetch('https://duyphuongwedding.onrender.com/rsvp', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: form.name,
          guestCount: Number(form.numGuest),
          attending: response === 'accept'
        })
      });

      const data = await resquest.json();
      if(!resquest.ok) throw new Error(data.error);
      Swal.fire({
        icon: 'success',
        title: 'Thank You!',
        html: data.message,
        confirmButtonColor: '#b07d62'
      });
      setForm({name: '', numGuest: ''});
      setResponse('');
    }
    catch(err){
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        html: err.message,
        confirmButtonColor: '#b07d62'
      });
    }
    finally{
      setLoading(false);
    }
  };

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
            <form className='submit-form' onSubmit={handleSubmit}>
              <label>
                Name:
                <input className="input-name" type='text' name='name' value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required />
              </label>

              <label>
                Number of Guest:
                <input className='input-number' type='number' value={form.numGuest} min="1" max="20" name='people' onChange={(e) => setForm({...form, numGuest: e.target.value})} required />
              </label>

              <label>
                <input className='radio' type='radio' name="response" value="accept"
                  onChange={(e) => setResponse(e.target.value)} />
                Accept with pleasure
              </label>

              <label>
                <input className='radio' type='radio' name='response' value="deny"
                  onChange={(e) => setResponse(e.target.value)} />
                Will celebrate from afar
              </label>

              <div className='form-footer'>
                <button type='submit' disabled={loading}>
                  <span>{loading ? 'Sending...' : 'Send'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rsvp;