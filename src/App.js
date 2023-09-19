import './App.css';
import Home from './components/home.js';
import AboutMe from './components/about-me.js';
import Skills from './components/skills.js';
import Experience from './components/experience.js';
import Projects from './components/projects.js';
import ContactMe from './components/contact-me.js';
import {experiences, projects} from './data/data.jsx';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about-me' element={<AboutMe />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/experience' element={<Experience experiences={experiences}/>}/>
        <Route path='/projects' element={<Projects boxes={projects}/>}/>
        <Route path='/contact-me' element={<ContactMe />}/>
      </Routes>
    </Router>

    </div>
  );
}

export default App;
