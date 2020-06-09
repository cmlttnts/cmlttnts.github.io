import './BurgerButton.scss';
import burger from 'Images/burger.svg';
import React /* , { useState, useEffect, useContext } */ from 'react';
// Define props type

/*
type PropType= {
  prop1: string;
  prop2: string;
};
*/

// Destructure the props
const BurgerButton = (/* { prop1, prop2 }: PropType */): JSX.Element => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
  };

  return (
    <button type="button" className="BurgerButton" onClick={handleClick}>
      <img src={burger} alt="burger" />
    </button>
  );
};

export default BurgerButton;
