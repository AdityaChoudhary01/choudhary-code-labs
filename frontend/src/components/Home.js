import React from 'react';
import { motion } from 'framer-motion';

// Import the sections to be displayed
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
    return (
        // The main container for all sections - reduced vertical spacing here
        <div className="pt-24 md:pt-32 px-4 md:px-8 space-y-16 md:space-y-24">
            
            {/* --- Hero Section --- */}
            <div className="container mx-auto px-4 flex items-center justify-center text-center min-h-[calc(100vh-8rem)]">
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
                    
                </motion.div>
            </div>

            {/* --- Other Sections --- */}
            <About />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;
