import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/rsvp' element={<Rsvp/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
