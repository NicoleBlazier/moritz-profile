import React from 'react';
import { Link } from "react-router-dom";
import moritzLogo from '../assets/moritz-logo.png';
import moritzLogoBlue from '../assets/moritz-logo-blue.png';
import Home from './home.js';
import '../App.css';


function Navigation() {
  return (
    <div className='navigation'>
      <div className='logo'>
        <img src={moritzLogoBlue} alt='logo' />
      </div>
      <nav className='nav'>
        <Link to='/' className='link'>Home</Link>
        <Link to='/about-me' className='link'>About Me</Link>
        <Link to='/skills' className='link'>Skills</Link>
        <Link to='/projects' className='link'>Projects</Link>
        <Link to='/contact-me' className='link'>Contact Me</Link>
      </nav>
    </div>
  );
}

export default Navigation;
