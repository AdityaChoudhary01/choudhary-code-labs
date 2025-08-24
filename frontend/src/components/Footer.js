import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/aditya-choudhary-a46828256/' },
        { icon: <FaGithub />, href: 'https://github.com/AdityaChoudhary01' },
        { icon: <FaTwitter />, href: 'https://twitter.com/your-twitter' },
    ];

    return (
        <footer className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-inner py-8">
            <div className="container mx-auto px-4 text-center text-slate-600 dark:text-slate-300">
                <div className="flex justify-center space-x-6 mb-4">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover:text-[var(--accent-color)] transition-colors"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
                <p>&copy; {new Date().getFullYear()} Aditya Choudhary. All Rights Reserved.</p>
                <p className="text-sm mt-2">Built with React & Tailwind CSS</p>
            </div>
        </footer>
    );
};

export default Footer;
