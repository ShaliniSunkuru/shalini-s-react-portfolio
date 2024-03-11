import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import './App.css'
import ProjectDetail from './components/ProjectDetail';

function App() {
 

  return (
    <div className='app'>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path='/projects/*' element={<Projects />} ></Route>
        <Route path='/resume' element={<Resume />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
        <Route path='/projects/:id' element={<ProjectDetail/>}></Route>
      </Routes>    
    </Router>
    </div>

  )
}

export default App
