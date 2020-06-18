import './Home.scss';
import navMain from 'navMain';
import Navigation from 'Components/Navigation/Navigation';

import React /* , { useState, useEffect, useContext } */ from 'react';
import picMid from 'Images/cemo_cropped.png';

// Destructure the props
const Home = (/* { prop1, prop2 }: PropType */): JSX.Element => {
  return (
    <div className="Home" id="home">
      <header className="Header">
        <img className="HeaderPic" src={picMid} alt="cemalettin taş profile" />
        <div className="HeaderSec">
          <h1>I am Cemalettin.</h1>
          <h2>I develop elegant and fast user interfaces</h2>
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
