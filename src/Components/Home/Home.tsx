import './Home.scss';

import React /* , { useState, useEffect, useContext } */ from 'react';
import cemoMid from 'Images/cemo_cropped.png';


// Define props type

/*
type PropType= {
  prop1: string;
  prop2: string;
};
*/

// Destructure the props
const Home = (/* { prop1, prop2 }: PropType */): JSX.Element => {
  return (
    <div className="Home" id="home">
      <header className="Header">
        <img className="HeaderPic" src={cemoMid} alt="cemalettin taş profile" />
        <h1>Lorem, ipsum dolor.</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, impedit?</h2>
      </header>
    </div>
  );
};

export default Home;
