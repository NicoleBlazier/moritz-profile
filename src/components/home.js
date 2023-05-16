import React from 'react';
import Navigation from './navigation.js';
import Resume from '../assets/Blazier_Resume_Apr_2023.pdf';
import AboutMe from './about-me.js';
import Skills from './skills.js';
import Projects from './projects.js';
import ContactMe from './contact-me.js';
import '../App.css';

function Home() {
  return (
    <div className='home'>
      <Navigation />
      <div className='home-bg'>
        <div className='home-texts'>
          <div className='home-text header-one'>Welcome</div>
          <div className='home-text header-two'>My name is Mortiz</div>
          <div className='home-text header-three'>Software Engineer</div>
          <div className='home-text'>I am a professional Software Engineer with 5 years of experience and a specialized focus in AI and ML</div>
          <button className='home-btn'>
            <a className='btn' href={Resume} target="_blank">
              Hire Me
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home;
