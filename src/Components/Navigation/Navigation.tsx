import './Navigation.scss';

import React /* , { useState, useEffect, useContext } */ from 'react';
import { NavItemsType } from 'navMain';
import BurgerButton from 'Components/BurgerButton/BurgerButton';
// Define props type

type NavProps= {
  items: NavItemsType;
};

// Destructure the props
const Navigation = ({ items }: NavProps): JSX.Element => {
  return (
    <div className="Navigation">
      <div className="NavMenu">

        {items.map(
          (item) => <a href={item.to} key={item.text}>{item.text}</a>,
        )}
      </div>
      <BurgerButton />
    </div>
  );
};

export default Navigation;
