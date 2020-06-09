import React from 'react';
import 'main.scss';
import Navigation from 'Components/Navigation/Navigation';
import navMain from 'navMain';
import Home from 'Components/Home/Home';
import About from 'Components/About/About';
import Contact from 'Components/Contact/Contact';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Home />
      <About />
      <Contact />
      <Navigation items={navMain} />
    </div>
  );
};

export default App;
