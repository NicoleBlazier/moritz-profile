import React from 'react';
import '../App.css';
import Navigation from './navigation.js';
import Box from './box.js';


function Projects(props) {

  return (
    <div className='projects'>
      <Navigation />
      <div className='projects-texts'>
        <div className='section-title-projects'>Projects</div>
        <div className='boxes'>
        {props.boxes.map((box, i) => (
          <Box key={i} {...box} />
        ))}
        </div>
      </div>
    </div>
  )
}

export default Projects;
