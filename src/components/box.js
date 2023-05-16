import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdOpenInNew } from 'react-icons/md';


function Box({name, description, languages, github, website}) {
  return (
      <div className='box'>
        <div className='box-icons'>
          <div className='box-icon'>
            <a className='box-fa' href={github} target='_blank'><FaGithub /></a>
          </div>
          <div className='box-icon'>
            <a className='box-fa' href={website} target='_blank'><MdOpenInNew /></a>
          </div>
        </div>
        <div className='box-title'>{name}</div>
        <div className='box-text'>{description}</div>
        <div className='box-lang'>{languages.join(' ')}</div>
      </div>
  )
}

export default Box;
