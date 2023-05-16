import React from 'react';
import '../App.css';
import Navigation from './navigation.js';
import Resume from '../assets/Blazier_Resume_Apr_2023.pdf';
import { FaLinkedin } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { FaFileDownload } from 'react-icons/fa';

function ContactMe() {
  return (
    <div className='contact-me'>
      <Navigation />
      <div className='contact-me-bg'>
        <div className='contact-me-texts'>
          <div className='section-title'>Contact Me</div>
          <div className='contact-icons'>
            <div className='contact-icon'>
              <a className='box-fa-two' href={Resume} download><FaFileDownload /></a>
              <div>Resume</div>
            </div>
            <div className='contact-icon'>
              <a className='box-fa-two' href='mailto:nicole.blazier@gmail.com?subject=Job Opportunity' target="_blank"><MdOutlineMail /></a>
              <div>Email</div>
            </div>
            <div className='contact-icon'>
              <a className='box-fa-two' href='https://www.linkedin.com' target="_blank"><FaLinkedin /></a>
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
