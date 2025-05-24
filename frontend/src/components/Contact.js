import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, link: "https://github.com/yourusername" },
  { icon: <FaLinkedin />, link: "https://linkedin.com/in/yourusername" },
  { icon: <FaTwitter />, link: "https://twitter.com/yourusername" }
];

function SocialLinks() {
  return (
    <div className="flex justify-center gap-6 mt-6">
      {socials.map((s, idx) => (
        <a
          key={idx}
          href={s.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-indigo-700 dark:text-indigo-300 hover:text-pink-600"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('https://portfolio3-cj9i.onrender.com', form);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } catch {
      setSent(false);
    }
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-center min-h-screen pt-32 px-4"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left Side: Image */}
      <div className="hidden md:block w-1/3">
        <img
          src="/contact-image.svg" // Place your image in the public folder and name it contact-image.svg
          alt="Contact Us"
          className="w-full h-auto max-w-sm mx-auto"
        />
      </div>

      {/* Right Side: Form */}
      <div className="bg-glass dark:bg-glassDark backdrop-blur-md rounded-3xl p-10 shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700 dark:text-indigo-200">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            className="rounded-lg px-4 py-2 bg-white/80 dark:bg-slate-800 text-slate-900 dark:text-white outline-none"
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="rounded-lg px-4 py-2 bg-white/80 dark:bg-slate-800 text-slate-900 dark:text-white outline-none"
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="rounded-lg px-4 py-2 bg-white/80 dark:bg-slate-800 text-slate-900 dark:text-white outline-none"
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows="4"
          />
          <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-indigo-500 text-white rounded-lg font-bold hover:scale-105 transition" type="submit">
            Send
          </button>
          {sent && <p className="text-green-500 font-bold mt-2">Thank you! Your message has been sent.</p>}
        </form>
        <SocialLinks />
      </div>
    </motion.div>
  );
}
