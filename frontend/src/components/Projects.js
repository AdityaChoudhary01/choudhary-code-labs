import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: "YumRide",
    description: "An innovative food delivery platform connecting users with local restaurants to deliver delicious meals.",
    link: "https://food-delivery-frontend-mo9e.onrender.com/",
    image: "/images/yumride.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    repo: "https://github.com/AdityaChoudhary01/YumRide" // Example
  },
  {
    title: "QR Generator",
    description: "A QR code generator that allows users to create custom QR codes for text, URLs, or contact information.",
    link: "https://adityachoudhary01.github.io/QrCodeGenerator/",
    image: "/images/qr-generator.png",
    tags: ["JavaScript", "REST API", "HTML", "CSS"],
    repo: "https://github.com/AdityaChoudhary01/QrCodeGenerator" // Example
  },
  {
    title: "Weather App",
    description: "A dynamic weather application that fetches real-time weather data and displays it in an intuitive UI.",
    link: "https://adityachoudhary01.github.io/WeatherApp/",
    image: "/images/weather-app.png",
    tags: ["JavaScript", "HTML", "CSS", "API"],
    repo: "https://github.com/AdityaChoudhary01/WeatherApp" // Example
  },
  {
    title: "Chatty",
    description: "A full-stack real-time chat application with user authentication, messaging, and responsive design.",
    link: "", // No live link
    image: "/images/Chatty.png",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    repo: "https://github.com/AdityaChoudhary01/Chatty" // Add your repo link here
  },
  // ... other projects
];

const Projects = () => {
    return (
        <div className="container mx-auto px-4 py-16 min-h-screen">
            <motion.div /* ... */ >
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">My Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            className="glass-card overflow-hidden flex flex-col"
                            /* ... */
                        >
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6 flex flex-col flex-grow">
                                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                                <p className="mb-4 text-base flex-grow">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span key={tagIdx} className="bg-blue-500/20 text-blue-500 dark:bg-sky-500/20 dark:text-sky-400 px-2 py-1 rounded-full text-xs font-semibold">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-auto flex items-center justify-between">
                                    {project.link ? (
                                        <a 
                                            href={project.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            style={{color: 'var(--accent-color)'}} 
                                            className="font-semibold hover:underline"
                                        >
                                            View Project
                                        </a>
                                    ) : (
                                        <span className="text-gray-400">No Live Demo</span>
                                    )}
                                    {project.repo && (
                                        <a
                                            href={project.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-2xl text-slate-600 dark:text-slate-300 hover:text-[var(--accent-color)] transition-colors"
                                            aria-label="GitHub Repository"
                                        >
                                            <FiGithub />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Projects;
