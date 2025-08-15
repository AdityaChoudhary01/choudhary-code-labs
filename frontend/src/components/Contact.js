import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, link: "https://github.com/AdityaChoudhary01" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/aditya-kumar-38093a304/" },
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
      await axios.post('https://portfolio3-cj9i.onrender.com/api/contact', form);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } catch {
      setSent(false);
    }
  };

  return (
        <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-screen">
            <motion.div
                className="glass-card p-8 md:p-12 w-full max-w-2xl" // <-- APPLY THE NEW CLASS HERE
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl font-bold text-center mb-8">Get In Touch</h1>
                <form onSubmit={handleSubmit}>
                    {/* ... your form inputs ... */}
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 bg-white/50 dark:bg-slate-800/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-[var(--accent-color)] outline-none" required />
                    </div>
                    {/* ... other inputs ... */}
                    <motion.button type="submit" disabled={loading}
                        style={{ backgroundColor: 'var(--accent-color)' }}
                        className="w-full text-white font-bold py-3 px-4 rounded-lg transition-transform duration-300"
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        {loading ? 'Sending...' : 'Send Message'}
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default Contact;
