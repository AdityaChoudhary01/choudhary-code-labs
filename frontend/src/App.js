import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Core sections
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
// Optional: import Footer from './components/Footer';

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

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
      <div className={`min-h-screen ${dark ? 'bg-slate-900' : 'bg-gradient-to-br from-indigo-300 to-pink-200'} transition`}>
        <Navbar dark={dark} setDark={setDark} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* WhatsApp Chat Widget */}
        <a
          href="https://wa.me/8527633416"
          className="fixed bottom-8 right-8 bg-green-500 p-3 rounded-full shadow-lg text-white text-2xl z-50"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
        >
          💬
        </a>
      </div>
    </Router>
  );
}

export default App;
