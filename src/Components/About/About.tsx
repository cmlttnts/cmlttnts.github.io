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
    <div className="About MajorSection" id="about">
      <a className="ctaHomePri" href="cv/cemalettin_tas_cv.pdf">CV</a>
      <div className="Skills">
        <h2>
          <i className="fas fa-cogs iconFas"></i>
          Skills
        </h2>
        <ul className="SkillsFED">
          <h3>Front End Development</h3>
          <li>HTML, CSS, SASS</li>
          <li>JavaScript, TypeScript</li>
          <li>React, Node, Npm</li>
          <li>Webpack, Gulp</li>
        </ul>
        <ul className="OtherSkills">
          <h3>Other Programming Skills</h3>
          <li>C / C++</li>
          <li>Python</li>
          <li>Git, Github</li>
          <li>Linux, Bash</li>
          <li>Visual Studio Code</li>
        </ul>
      </div>
      <div className="Experience">
        <h2>
          <i className="fas fa-briefcase iconFas"></i>
          Experience
        </h2>

        <table>
          <tbody>

            <tr>
              <td>02.2019-09.2019</td>
              <td>Software Engineer</td>
              <td>Levitate Gösteri Teknolojileri</td>
            </tr>
          </tbody>
        </table>

      </div>

      <div className="Education">
        <h2>
          <i className="fas fa-graduation-cap iconFas"></i>
          Education
        </h2>
        <table>
          <thead>
            <tr>
              <th>Graduation</th>
              <th>Department</th>
              <th>University</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01.2020</td>
              <td>Electrical And Electronics Engineering</td>
              <td>Middle East Technical Universtiy</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default About;
