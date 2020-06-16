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
        <h1>Lorem, ipsum dolor.</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, impedit?</h2>
      </header>
      <div>
        <a className="ctaHomeSec" href="#about">About</a>
        <a className="ctaHomeSec" href="#contact">Contact</a>

      </div>
      <a className="ctaHomePri" href="#projects">
        See My Work
      </a>
      <Navigation items={navMain} />
    </div>
  );
};

export default Home;
