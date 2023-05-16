import './App.css';
import Navigation from './components/navigation.js';
import Home from './components/home.js';
import AboutMe from './components/about-me.js';
import Skills from './components/skills.js';
import Projects from './components/projects.js';
import ContactMe from './components/contact-me.js';
import data from './data/data.json';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-scroll";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about-me' element={<AboutMe />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/projects' element={<Projects boxes={data}/>}/>
        <Route path='/contact-me' element={<ContactMe />}/>
      </Routes>
    </Router>

    </div>
  );
}

export default App;
