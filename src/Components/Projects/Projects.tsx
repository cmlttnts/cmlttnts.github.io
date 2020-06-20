import './Projects.scss';

import React from 'react';

// Destructure the props
const Projects = (): JSX.Element => {
  return (
    <div className="Projects MajorSection" id="projects">
      <h2>My Projects</h2>
      <ul>
        <li>
          <a href="https://cmlttnts.github.io/BeverageTracker/">BeverageTracker</a>
          {' '}
          <span data-after="App for office place, keep track of the beverages with timestamps!" className="InfoCircle"><i className="fas fa-question-circle"></i></span>
        </li>
        <li>
          <a href="https://cmlttnts.github.io/Carousel/">Carousel</a>
          {' '}
          <span data-after="App for image sliding" className="InfoCircle"><i className="fas fa-question-circle"></i></span>
        </li>
        <li> Coming Soon ...</li>
      </ul>
    </div>
  );
};

export default Projects;
