import './Home.scss';
import navMain from 'navMain';
import Navigation from 'Components/Navigation/Navigation';

import React from 'react';

const Home = (): JSX.Element => {
  return (
    <div className="Home MajorSection" id="home">
      <header className="Header">
        <h1>I am Cemalettin.</h1>
        <h2>I develop elegant and fast user interfaces</h2>
        <div className="HeaderSec">
          <a className="ctaHomeSec" href="#about">About</a>
          <a className="ctaHomeSec" href="#contact">Contact</a>
        </div>
      </header>
      <a className="ctaHomePri" href="#projects">
        My Work
      </a>
      <Navigation items={navMain} />
    </div>
  );
};

export default Home;
