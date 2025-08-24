import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/#home", label: "Home" },
    { to: "/#skills", label: "Skills" },
    { to: "/#projects", label: "Projects" },
    { to: "/#contact", label: "Contact" }
  ];

  return (
    <nav className="fixed w-full z-20 top-0 left-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <NavLink to="/" className="font-extrabold text-2xl text-indigo-700 dark:text-indigo-300">
          ChoudharyCodeLabs
        </NavLink>
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map(link => (
            <HashLink
              key={link.to}
              to={link.to}
              smooth
              className="mx-2 text-slate-700 dark:text-slate-200 hover:text-indigo-600 font-semibold transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </HashLink>
          ))}
          <button
            className="ml-4 px-2 py-1 rounded bg-indigo-100 dark:bg-slate-700 text-indigo-700 dark:text-indigo-300"
            onClick={() => setDark(d => !d)}
            title="Toggle dark mode"
          >
            {dark ? '🌙' : '☀️'}
          </button>
        </div>
        {/* Hamburger Button */}
        <button
          className="md:hidden flex items-center px-3 py-2 rounded text-indigo-700 dark:text-indigo-200 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-2">
          {navLinks.map(link => (
            <HashLink
              key={link.to}
              to={link.to}
              smooth
              className="block text-slate-700 dark:text-slate-200 hover:text-indigo-600 py-2 font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </HashLink>
          ))}
          <button
            className="mt-2 px-2 py-1 rounded bg-indigo-100 dark:bg-slate-700 text-indigo-700 dark:text-indigo-300"
            onClick={() => {
              setDark(d => !d);
              setMenuOpen(false);
            }}
            title="Toggle dark mode"
          >
            {dark ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
}
