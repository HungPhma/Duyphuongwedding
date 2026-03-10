// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home.js';
import Rsvp from './pages/rsvp.js';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/homepage' element={<Home/>}/>
        <Route path='/rsvp' element={<Rsvp/>}/>
        <Route path="/*"  element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  );
}

export default App;
