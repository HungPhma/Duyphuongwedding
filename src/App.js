// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home.js';
import Rsvp from '../src/pages/rsvp.js';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/homepage' element={<Home/>}/>
        <Route path='/rsvp' element={<Rsvp/>}/>
      </Routes>
    </div>
  );
}

export default App;
