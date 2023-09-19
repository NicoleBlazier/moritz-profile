import React from 'react';
import '../App.css';

function Circle({ title, company, dates, description, skills }) {
  return (
    <div className="circle">
      <div className="circle-text circle-text-left">
        <div className="circle-box-title">
           <div className="circle-text-title">{title}</div>
           <div>{company}</div>
           <div>{dates}</div>
        </div>
      </div>
      <div className="circle-text circle-text-right">
        <div className='circle-box-description'>
           <div>{description}</div>
           <br/>
           <div>{skills}</div>
        </div>
      </div>
     </div>
  )
}

export default Circle;
