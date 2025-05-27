import React from 'react'
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/header';

function App() {
  return (
    <div>
      <Header/>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
