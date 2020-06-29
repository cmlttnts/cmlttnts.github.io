import React from 'react';
import 'main.scss';
import Home from 'Components/Home/Home';
import About from 'Components/About/About';
import Contact from 'Components/Contact/Contact';
import Projects from 'Components/Projects/Projects';
import Blog from 'Components/Blog/Blog';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Home />
      <About />
      <Contact />
      <Projects />
      <Blog />
    </div>
  );
};

export default App;
