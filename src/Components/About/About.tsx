import './About.scss';
// import cemo_small from 'Images/cemo_transparent_small.png';

import React from 'react';
// Define props type

/*
type PropType= {
  prop1: string;
  prop2: string;
};
*/

// Destructure the props
const About = (/* { prop1, prop2 }: PropType */): JSX.Element => {
  return (
    <div className="About" id="about">
      <div className="Skills">
        <h2>
          <i className="fas fa-cogs"></i>
          Skills
        </h2>
      </div>

      <div className="Education">
        <h2>
          <i className="fas fa-graduation-cap"></i>
          Education
        </h2>
      </div>

      <div className="Experience">
        <h2>
          <i className="fas fa-briefcase"></i>
          Experience
        </h2>
      </div>
    </div>
  );
};

export default About;
