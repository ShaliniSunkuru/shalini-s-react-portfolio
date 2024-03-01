import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import './App.css'

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path='/projects' element={<Projects />} ></Route>
        <Route path='/resume' element={<Resume />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
      </Routes>    
    </Router>
  )
}

export default App
