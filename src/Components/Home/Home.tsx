import './Home.scss';

import React /* , { useState, useEffect, useContext } */ from 'react';
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
      <header>
        <h1>Hi, I am Cemalettin</h1>
        <h2>I am a software engineer, building front end products</h2>
      </header>
    </div>
  );
};

export default Home;
