import React from 'react';
import { motion } from 'framer-motion';
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaJava, FaPython } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss, SiCplusplus } from 'react-icons/si';
import { FiDownload } from 'react-icons/fi';
import Projects from './Projects';
import Contact from './Contact';
import ScrollIndicator from './ScrollIndicator';

// --- Skills Data ---
const skills = [
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'React.js', icon: <FaReact className="text-blue-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-400 dark:text-white" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
    { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
    { name: 'Java', icon: <FaJava className="text-red-400" /> },
    { name: 'Python', icon: <FaPython className="text-blue-300" /> },
    { name: 'C++', icon: <SiCplusplus className="text-blue-600" /> },
];

const Home = () => {
    return (
        <div className="pt-24 md:pt-32 px-4 md:px-8 space-y-12 md:space-y-20">

            {/* --- Hero and About Section --- */}
            <div id="home" className="container mx-auto px-4 min-h-screen">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">
                        Hey there! I'm Aditya Choudhary
                    </h1>
                    <h2 className="text-2xl bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent md:text-3xl lg:text-4xl mt-3">
                        Mern-Stack Web Developer | DSA Enthusiast | Problem Solver
                    </h2>
                </motion.div>

                <motion.div
                    className="w-full mt-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mb-12">
                        <motion.div
                            className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <img
                                src="/profile.jpg"
                                alt="Aditya Choudhary"
                                className="rounded-full w-full h-full object-cover shadow-lg"
                            />
                        </motion.div>

                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <p className="text-lg leading-relaxed mb-4">
                                I'm a passionate Full-Stack Web Developer with a strong foundation in JavaScript, Data Structures and Algorithms (DSA) with Java, MERN Stack, and C++. I specialize in creating interactive, scalable, and high-performance web applications, focusing on clean UI, responsive design, and delivering seamless user experiences.
                            </p>
                            <p className="text-lg leading-relaxed">
                                With a problem-solving mindset and a dedication to continuous learning, I strive to build solutions that make an impact. I love creating colorful, playful user experiences and writing clean backend code. My expertise includes React, Node/Express, MongoDB, and creative UI/UX design!
                            </p>
                            <motion.a
                                href="/resume.pdf"
                                download="Aditya-Choudhary-Resume.pdf"
                                className="mt-6 inline-flex items-center justify-center px-8 py-4 font-semibold text-white rounded-lg shadow-lg transition-all duration-300"
                                style={{ backgroundColor: 'var(--accent-color)' }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiDownload className="mr-3 text-2xl" />
                                Download Resume
                            </motion.a>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold text-center mb-8">My Skills</h2>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center justify-center p-4 bg-gray-200 dark:bg-slate-800 rounded-lg shadow-md w-32 h-32 text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="text-5xl mb-2">{skill.icon}</div>
                                    <p className="font-semibold">{skill.name}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
                <ScrollIndicator target="#projects" />
            </div>

            {/* --- Other Sections --- */}
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
