import React from 'react';
import '../App.css';
import Navigation from './navigation.js';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

function ContactMe() {
  return (
    <div className='contact-me'>
      <Navigation />
      <div className='contact-me-bg'>
        <div className='contact-me-texts'>
          <div className='section-title'>Get In Touch</div>
          <div className='contact-icons'>
            <div className='contact-icon'>
              <a className='box-fa-two' href='https://github.com/MFreidank' target="_blank" rel="noreferrer"><FaGithub /></a>
              <div>Github</div>
            </div>
            <div className='contact-icon'>
              <a className='box-fa-two' href='mailto:freidankm@gmail.com' target="_blank" rel="noreferrer"><MdOutlineMail /></a>
              <div>Email</div>
            </div>
            <div className='contact-icon'>
              <a className='box-fa-two' href='https://www.linkedin.com/in/moritzfreidank/' target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <div>LinkedIn</div>
            </div>
          </div>
          <div className='footer'>
            <div>Designed and Built by Moritz Freidank</div>
            <div>@copyright2023</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe;
