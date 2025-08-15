import React from 'react';
import { motion } from 'framer-motion';
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaJava, FaPython } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss, SiCplusplus } from 'react-icons/si';

// --- Add your skills here ---
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

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen flex items-center">
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">About Me</h1>
        
        {/* --- Profile Section --- */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mb-12">
          
          {/* Image */}
          <motion.div
            className="w-48 h-48 md:w-64 md:h-64"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="/profile-pic.png" // IMPORTANT: Make sure your image is in the `public` folder
              alt="Your Name" 
              className="rounded-full w-full h-full object-cover shadow-lg"
            />
          </motion.div>

          {/* Bio Text */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg leading-relaxed mb-4">
              Hello! I'm a passionate and dedicated full-stack developer with a love for creating beautiful and functional web applications. My journey in tech has been driven by a curiosity to learn and a desire to build things that make a difference.
            </p>
            <p className="text-lg leading-relaxed">
              I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and I'm always eager to explore new technologies to expand my skillset.
            </p>
          </motion.div>
        </div>

        {/* --- Skills Section --- */}
        <div>
            <h2 className="text-3xl font-semibold text-center mb-8">My Skills</h2>
            <motion.div 
                className="flex flex-wrap justify-center gap-4 md:gap-6"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-4 bg-gray-200 dark:bg-slate-800 rounded-lg shadow-md w-32 h-32 text-center">
                   <div className="text-5xl mb-2">{skill.icon}</div>
                   <p className="font-semibold">{skill.name}</p>
                </div>
              ))}
            </motion.div>
        </div>

      </motion.div>
    </div>
  );
};

export default About;
