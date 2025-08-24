import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

// Core sections
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import FloatingContactButton from './components/FloatingContactButton'; 
import Footer from './components/Footer'; // Import Footer
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop

function App() {
  const [dark, setDark] = useState(() => {
    const theme = localStorage.getItem('theme');
    return theme === 'dark';
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <Router>
      <div className={`min-h-screen ${dark ? 'bg-slate-900 text-white' : 'bg-gray-100 text-black'} transition-colors duration-500`}>
        {/* 3D Background */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Canvas>
            <Suspense fallback={<Preloader />}>
              <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
            </Suspense>
          </Canvas>
        </div>
        
        {/* Floating Buttons */}
        <FloatingContactButton /> 
        <ScrollToTop />

        {/* Content */}
        <div className="relative z-10">
          <Navbar dark={dark} setDark={setDark} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
