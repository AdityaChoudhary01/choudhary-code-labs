import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

const projects = [
    {
    title: "PeerNotez",
    description: "PeerNotez is a collaborative platform dedicated to helping students learn and share knowledge freely",
    link: "https://peernotez.netlify.app/",
    image: "/images/peernotez.png",
    tags: ["React", "Node.js", "Express", "MongoDB","AWS","Cloudinary","TailWind CSS","Redux","JWT","Bycrypt"],
    repo: "https://github.com/AdityaChoudhary01/public-peernotez"
  },
        {
    title: "JatPedia",
    description: "JatPedia is a community-driven initiative to document, preserve, and celebrate the rich history, culture, and heritage of the Jat community for future generations.",
    link: "https://jatpedia.netlify.app/",
    image: "/images/jatpedia.png",
    tags: ["React", "Node.js", "Express", "MongoDB","AWS","Cloudinary","TailWind CSS","Redux","JWT","Bycrypt","Gemini Ai","Firebase","SEO Ready"],
    repo: "https://github.com/AdityaChoudhary01/public-jatpedia"
  },
      {
    title: "PingNest",
    description: "A full-stack real-time chat application with user authentication, messaging, and responsive design.",
    link: "https://pingnest.netlify.app/login",
    image: "/images/Chatty.png",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    repo: "https://github.com/AdityaChoudhary01/PingNest"
  },
      {
    title: "AuravoAi",
    description: "Auravo AI is a cutting-edge chat application designed to provide intelligent, helpful, and engaging conversations. Our mission is to push the boundaries of artificial intelligence to create a seamless and intuitive user experience.",
    link: "https://auravoai.vercel.app/",
    image: "/images/auravoai.png",
    tags:  ["React", "Node.js", "Express", "MongoDB","AWS","Cloudinary","TailWind CSS","Redux","JWT","Bycrypt","Gemini Ai","Firebase","SEO Ready"],
    repo: "https://github.com/AdityaChoudhary01/PingNest"
  },
  {
    title: "YumRide",
    description: "An innovative food delivery platform connecting users with local restaurants to deliver delicious meals.",
    link: "https://food-delivery-frontend-mo9e.onrender.com/",
    image: "/images/yumride.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    repo: "https://github.com/AdityaChoudhary01/YumRide"
  },
  {
    title: "QR Generator",
    description: "A QR code generator that allows users to create custom QR codes for text, URLs, or contact information.",
    link: "https://adityachoudhary01.github.io/QrCodeGenerator/",
    image: "/images/qr-generator.png",
    tags: ["JavaScript", "REST API", "HTML", "CSS"],
    repo: "https://github.com/AdityaChoudhary01/QrCodeGenerator"
  },
  {
    title: "Aether Sense",
    description: "A dynamic weather application that fetches real-time weather data and displays it in an intuitive UI.",
    link: "https://adityachoudhary01.github.io/WeatherApp/",
    image: "/images/weather-app.png",
    tags: ["JavaScript", "HTML", "CSS", "API"],
    repo: "https://github.com/AdityaChoudhary01/WeatherApp"
  },
  {
    title: "aktuwrld",
    description: "A study platform for AKTU students providing resources, notes, and previous year question papers.",
    link: "https://aktuwrld.netlify.app/",
    image: "/images/aktuwrld.png",
    tags: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/AdityaChoudhary01/aktuwrld" // Please add correct repo link
  },
  {
    title: "Wifi QR Code Generator",
    description: "A tool to generate QR codes for Wi-Fi networks, simplifying the process of sharing Wi-Fi credentials.",
    link: "https://adityachoudhary01.github.io/WifiQrCodeGenerator/",
    image: "/images/wifi-qr-code-generator.png",
    tags: ["JavaScript", "HTML", "CSS", "API"],
    repo: "https://github.com/AdityaChoudhary01/WifiQrCodeGenerator" // Please add correct repo link
  },
  {
    title: "Choudhary Code Labs",
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    link: "https://choudharycodelabs.netlify.app/",
    image: "/images/portfolio.png",
    tags: ["React", "Tailwind CSS", "Framer Motion","NodeMailer"],
    repo: "https://github.com/AdityaChoudhary01/portfolio3"
  },
      {
    title: "FolioForge",
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    link: "https://folioforge.vercel.app/",
    image: "/images/Folioforge.png",
    tags: ["MongoDb","React","Firebase","Express","NodeJs","Gemini Ai Integration", "Tailwind CSS", "Framer Motion"],
    repo: "https://github.com/AdityaChoudhary01/portfolio3"
  },
  {
    title: "KhataBook",
    description: "An application to manage finances by recording income and expenses, with visualizations.",
    link: "https://khatabook-qcb9.onrender.com",
    image: "/images/expense-tracker.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    repo: "https://github.com/AdityaChoudhary01/Expense-Tracker" // Please add correct repo link
  },
  {
    title: "JAT Universal",
    description: "A comprehensive platform offering e-commerce, logistics, and customer support services.",
    link: "https://jatuniversal-history.netlify.app/",
    image: "/images/jat-universal.png",
    tags: ["HTML", "CSS"],
    repo: "https://github.com/AdityaChoudhary01/JAT-Universal" // Please add correct repo link
  },
];

const Projects = () => {
    return (
        <div className="container mx-auto px-4 py-16 min-h-screen">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">My Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            className="glass-card overflow-hidden flex flex-col"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                boxShadow: "0 20px 40px -5px var(--shadow-color)",
                                transition: { duration: 0.2, ease: "easeOut" }
                            }}
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
