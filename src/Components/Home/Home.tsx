import "./Home.scss";

import Navigation from "Components/Navigation/Navigation";
import React from "react";
import navMain from "navMain";

const Home = (): JSX.Element => {
  return (
    <div className="Home MajorSection" id="home">
      <header className="Header">
        <h1>I am Cemalettin.</h1>
        <h2>I develop elegant and fast user interfaces</h2>
        <div className="HeaderSec">
          <a className="ctaHomeSec" href="#about">
            About
          </a>
          <a className="ctaHomeSec" href="#contact">
            Contact
          </a>
        </div>
        <div className="SocialLinks">
          <a href="https://www.linkedin.com/in/cemalettintas/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/cemalettin-simsoft" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            <span className="tooltip">Work Account</span>
          </a>
          <a href="https://github.com/cmlttnts" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            <span className="tooltip">Personal Account</span>
          </a>
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
