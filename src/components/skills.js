import React from 'react';
import '../App.css';
import Navigation from './navigation.js';
import { FaJsSquare } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaAngular } from 'react-icons/fa';
import { FaVuejs } from 'react-icons/fa';
import { FaBitbucket } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaGitlab } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { FaPhp } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
import { SiMongodb } from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaAws } from 'react-icons/fa';
import { SiMicrosoftazure } from 'react-icons/si';
import { FaBootstrap } from 'react-icons/fa';


function Skills() {
  return (
    <div className='skills'>
      <Navigation />
      <div className='skills-texts'>
        <div className='section-title'>Skills</div>
        <div className='icons'>
          <div className='icon'><FaJsSquare /></div>
          <div className='icon'><FaReact /></div>
          <div className='icon'><FaAngular /></div>
          <div className='icon'><FaVuejs /></div>
          <div className='icon'><FaBootstrap /></div>
          <div className='icon'><FaBitbucket /></div>
          <div className='icon'><FaGithub /></div>
          <div className='icon'><FaGitlab /></div>
          <div className='icon'><FaPython /></div>
          <div className='icon'><FaNodeJs /></div>
          <div className='icon'><FaPhp /></div>
          <div className='icon'><FaAngular /></div>
          <div className='icon'><FaVuejs /></div>
          <div className='icon'><FaJava /></div>
          <div className='icon'><SiPostgresql /></div>
          <div className='icon'><DiMysql /></div>
          <div className='icon'><SiMongodb /></div>
          <div className='icon'><GiArtificialIntelligence /></div>
          <div className='icon'><FaHtml5 /></div>
          <div className='icon'><FaCss3Alt /></div>
          <div className='icon'><FaAws /></div>
          <div className='icon'><SiMicrosoftazure /></div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
