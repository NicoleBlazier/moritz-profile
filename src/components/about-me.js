import React from 'react';
import '../App.css';
import Navigation from './navigation.js';
import MortizPic from '../assets/moritzPic.png';


function AboutMe() {
  return (
    <div className='about-me'>
      <Navigation />
        <div className='about-me-bg'>
          <div className='about-me-texts'>
          <div className='section-title'>About Me</div>
          <div className='about-me-section'>
            <div className='about-me-description'>
              <div className='about-me-text header-two'>Hello. My name is Mortiz.</div>
              <div className='about-me-text'>I have five years of experience as a Senior ML Engineer.  I began my professional career working at Novartis as a AI/ML engineer coding algos and testing algos on the AE Brain project.</div>
              <div className='about-me-text'>My experience spans from the UX/UI design experience, engineering requirements, front-end development, back-end development, AI/ML algos, and testing coding.</div>
            </div>
            <div className='about-me-image'>
              <img className='moritz-image' src={MortizPic} alt='Moritz Freidank' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;
