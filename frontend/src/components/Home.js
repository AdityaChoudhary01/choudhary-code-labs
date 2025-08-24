import React from 'react';
import { motion } from 'framer-motion';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import ScrollIndicator from './ScrollIndicator';
// Remove the direct import of the image from the public folder
// import image from '../../public/profile.jpg'; 

const Home = () => {
    return (
        <div id="home" className="pt-24 md:pt-32 px-4 md:px-8 space-y-12 md:space-y-20">
            <div className="container mx-auto px-16 flex-col relative flex min-h-screen w-full items-center justify-center">
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left Side (Text) */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center md:text-left"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400">
                            Aditya Choudhary
                        </h1>
                        <h2 className="text-2xl bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent md:text-3xl lg:text-4xl mt-3">
                            Mern-Stack Web Developer | DSA Enthusiast | Problem Solver
                        </h2>
                        <p className="mt-4 text-gray-500 text-[12px] sm:text-xs md:text-sm lg:text-base max-w-md sm:max-w-lg md:max-w-xl leading-tight sm:leading-normal">
                            I'm a passionate Full-Stack Web Developer with a strong foundation in JavaScript, Data Structures and Algorithms (DSA) with Java, MERN Stack, and C++. I specialize in creating interactive, scalable, and high-performance web applications, focusing on clean UI, responsive design, and delivering seamless user experiences. With a problem-solving mindset and a dedication to continuous learning, I strive to build solutions that make an impact.
                        </p>

                        <a href="#contact">
                            <button className="mt-6 cursor-pointer border border-blue-800 px-7 py-3 sm:px-8 sm:py-3 bg-transparent text-white rounded-xl shadow-sm shadow-blue-600 hover:shadow-purple-800 transition-all duration-300 transform text-xs sm:text-sm md:text-base">
                                Contact Me
                            </button>
                        </a>
                    </motion.div>

                    {/* Right Side (Image) */}
                    <div className="mt-10 md:mt-0 md:ml-12 flex justify-center items-center">
                        <motion.img
                            // Update the src to point to the public path
                            src="/profile.jpg" 
                            alt="Aditya"
                            className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full shadow-md hover:shadow-lg shadow-blue-600 hover:shadow-purple-800 transition-all duration-300 hover:scale-102"
                            style={{ objectPosition: "top" }} // Ensures the top of the image is visible
                            animate={{
                                y: [0, -30, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "reverse", // scroll oscillation
                            }}
                        />
                    </div>
                </div>
                <div>
                    <ScrollIndicator target="#about" />
                </div>
            </div>

            {/* --- Other Sections --- */}
            <div id="about">
                <About />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
    );
};

export default Home;
