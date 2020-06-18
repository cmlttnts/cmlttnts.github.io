import './Projects.scss';

import React from 'react';

// Destructure the props
const Projects = (): JSX.Element => {
  return (
    <div className="Projects" id="projects">
      <h2>My Projects</h2>
      <ul>
        <li>
          <a href="https://cmlttnts.github.io/BeverageTracker/">BeverageTracker</a>
          {' '}
          <span data-after="App for office place, keep track of the beverages with timestamps!" className="InfoCircle">🛈</span>
        </li>
        <li> Coming Soon ...</li>
      </ul>
    </div>
  );
};

export default Projects;
