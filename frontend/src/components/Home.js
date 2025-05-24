import React from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

export default function Home() {
  return (
    <div className="pt-32 px-4 md:px-16 space-y-20">
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
