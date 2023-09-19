import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdOpenInNew } from 'react-icons/md';
import logo from '../assets/project-img/Project_Title.png';


function Box({img, name, description, languages, github, website}) {
  console.log('Box', img)
  return (
    <div className='project'>
      <div className='project-img'>
        <img src={logo} className='img' alt='project'/>
      </div>
      <div className='box'>
        <div className='box-icons'>
          <div className='box-icon'>
            <a className='box-fa' href={github} target='_blank' rel="noreferrer"><FaGithub /></a>
          </div>
          <div className='box-icon'>
            <a className='box-fa' href={website} target='_blank' rel="noreferrer"><MdOpenInNew /></a>
          </div>
        </div>
        <div className='box-title'>{name}</div>
        <div className='box-text'>{description}</div>
        <div className='box-lang'>{languages.join(' ')}</div>
      </div>
    </div>
  )
}

export default Box;
