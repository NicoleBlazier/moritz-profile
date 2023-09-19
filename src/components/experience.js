import React from 'react';
import Navigation from './navigation.js';
import Circle from './circle.js';
import '../App.css';

function Experience (props) {
  return (
    <div>
      <Navigation />
      <div className="experience-text">
        <div className="section-title">Experience</div>
        <div className='experience-border'>
          <div className="circles-container">
            {props.experiences.map((experience, index) => (
              <div className="circles">
                <Circle
                  key={index}
                  title={experience.title}
                  company={experience.company}
                  dates={experience.dates}
                  description={experience.description}
                  skills={experience.skills}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
