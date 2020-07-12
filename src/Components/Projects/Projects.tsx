import './Projects.scss';

import React from 'react';
import ProjectLink from 'Components/ProjectLink/ProjectLink';

// Destructure the props
const Projects = (): JSX.Element => {
  return (
    <div className="Projects MajorSection" id="projects">
      <h2>My Projects</h2>
      <ul>
        <li>
          <ProjectLink
            name="Beverage Tracker"
            url="https://cmlttnts.github.io/BeverageTracker/"
            tooltip="App for office place, keep track of the beverages with timestamps!"
          />
        </li>
        <li>
          <ProjectLink
            name="2048 Game"
            url="https://cmlttnts.github.io/game-2048/"
            tooltip="A clone of famous mobile game 2048 in javascript and html5 canvas"
          />
        </li>
        <li>
          <ProjectLink
            name="Carousel"
            url="https://cmlttnts.github.io/Carousel/"
            tooltip="App for image sliding with different styles"
          />
        </li>
        <li>
          <ProjectLink
            name="Login-Sign Up"
            url="https://cmlttnts.github.io/login-signup/"
            tooltip="Login and sign up page with progress steps"
          />
        </li>
        <li>
          <ProjectLink
            name="Infinite Scroll"
            url="https://cmlttnts.github.io/infinite-scrolling/"
            tooltip="When you scroll to bottom, you load more image"
          />
        </li>
        <li>
          <ProjectLink
            name="Roommate Finder"
            url="https://cmlttnts.github.io/room-mate-finder/"
            tooltip="In Construction... Find a roommate online, seach cities, filter according to your needs"
          />
        </li>
        <li> Coming Soon ...</li>
      </ul>
    </div>
  );
};

export default Projects;
