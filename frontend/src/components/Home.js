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
    <div className="space-y-12 md:space-y-20">
      {/* --- Hero and About Section --- */}
      <div id="home" className="px-4 md:px-16 pt-[84px] flex-col relative flex min-h-screen w-full items-center justify-center">
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
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <a href="#contact">
                {/* FIX: Changed text color to be visible in light/dark modes */}
                <button className="mt-6 cursor-pointer border border-blue-800 px-7 py-3 sm:px-8 sm:py-3 bg-transparent text-slate-800 dark:text-white rounded-xl shadow-sm shadow-blue-600 hover:shadow-purple-800 transition-all duration-300 transform text-xs sm:text-sm md:text-base">
                  Contact Me
                </button>
              </a>
              <motion.a
                href="/resume.pdf"
                download="Aditya-Choudhary-Resume.pdf"
                className="mt-6 inline-flex items-center justify-center px-8 py-3 font-semibold text-white rounded-lg shadow-lg transition-all duration-300"
                style={{ backgroundColor: 'var(--accent-color)' }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="mr-2 text-xl" />
                Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side (Image) */}
          <div className="mt-10 md:mt-0 md:ml-12 flex justify-center items-center">
            <motion.img
              src="/profile.jpg"
              alt="Aditya"
              className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full shadow-md hover:shadow-lg shadow-blue-600 hover:shadow-purple-800 transition-all duration-300 hover:scale-102"
              style={{ objectPosition: "top" }}
              animate={{
                y: [0, -30, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
        </div>
        <div>
          <ScrollIndicator target="#skills" />
        </div>
      </div>

      {/* --- Skills Section --- */}
      <div id="skills" className="container mx-auto px-4">
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
