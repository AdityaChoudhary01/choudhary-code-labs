import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi'; 

const Home = () => {
    return (
        <div className="container mx-auto px-4 flex items-center justify-center text-center min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                    Hi, I'm Aditya Choudhary
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                    A passionate Full Stack Developer specializing in creating beautiful, functional, and user-friendly web applications.
                </p>
                
                {/* --- Resume Download Button --- */}
                <motion.a
                    href="/resume.pdf" 
                    download="Aditya-Choudhary-Resume.pdf" 
                    className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white rounded-lg shadow-lg transition-all duration-300"
                    style={{ backgroundColor: 'var(--accent-color)' }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FiDownload className="mr-3 text-2xl" />
                    Download Resume
                </motion.a>
            </motion.div>
        </div>
    );
};

export default Home;
