import React from 'react';
import { motion } from 'framer-motion';

// Import the sections to be displayed
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
    return (
        // The main container for all sections - Reduced the vertical spacing here
        <div className="pt-24 md:pt-32 px-4 md:px-8 space-y-12 md:space-y-20">
            
            {/* --- Hero Section --- */}
            <div className="container mx-auto px-4 flex items-center justify-center text-center py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">
                        Hey there! I'm Aditya Choudhary
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-semibold text-[var(--accent-color)]">
                        Mern-Stack Web Developer | DSA Enthusiast | Problem Solver
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
