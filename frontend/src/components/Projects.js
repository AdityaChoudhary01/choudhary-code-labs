import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "YumRide",
    description: "An innovative food delivery platform connecting users with local restaurants to deliver delicious meals.",
    link: "https://food-delivery-frontend-mo9e.onrender.com/",
    image: "/images/yumride.png", // Local image
    tags: ["JavaScript", "React", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "QR Generator",
    description: "A QR code generator that allows users to create custom QR codes for text, URLs, or contact information.",
    link: "https://adityachoudhary01.github.io/QrCodeGenerator/",
    image: "/images/qr-generator.png", // Local image
    tags: ["JavaScript", "REST API", "QRCode", "HTML", "CSS"]
  },
  {
    title: "Weather App",
    description: "A dynamic weather application that fetches real-time weather data and displays it in an intuitive UI.",
    link: "https://adityachoudhary01.github.io/WeatherApp/",
    image: "/images/weather-app.png", // Local image
    tags: ["JavaScript", "HTML", "CSS", "REST API"]
  },
  {
    title: "aktuwrld",
    description: "A study platform for AKTU students providing resources, notes, and previous year question papers.",
    link: "https://aktuwrld.netlify.app/",
    image: "/images/aktuwrld.png", // Local image
    tags: ["JavaScript", "HTML", "CSS"]
  },
  {
    title: "Wifi QR Code Generator",
    description: "A tool to generate QR codes for Wi-Fi networks, simplifying the process of sharing Wi-Fi credentials.",
    link: "https://adityachoudhary01.github.io/WifiQrCodeGenerator/",
    image: "/images/wifi-qr-code-generator.png", // Local image
    tags: ["JavaScript", "HTML", "CSS", "REST API"]
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    link: "https://your-portfolio-link.com",
    image: "/images/portfolio-website.png", // Local image
    tags: ["React", "Tailwind CSS", "JavaScript"]
  },
    {
    title: "Portfolio Website 2",
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    link: "https://your-portfolio-link.com",
    image: "/images/portfolio.png", // Local image
    tags: ["React", "Tailwind CSS", "JavaScript"]
  },
  {
    title: "Expense Tracker",
    description: "An application to manage finances by recording income and expenses, with visualizations and budgeting features.",
    link: "https://khatabook-qcb9.onrender.com",
    image: "/images/expense-tracker.png", // Local image
    tags: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "JAT Universal",
    description: "A comprehensive platform offering e-commerce, logistics, and customer support services.",
    link: "https://jatuniversal-history.netlify.app/",
    image: "/images/jat-universal.png", // Local image
    tags: ["HTML", "CSS"]
  },
  {
    title: "Chatty",
    description: "A full-stack real-time chat application with user authentication, real-time messaging, and responsive design.",
    link: "",
    image: "/images/chatty.png", // Local image
    tags: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "Axios", "React Hot Toast"]
  }
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
                            className="glass-card overflow-hidden" // Applies our custom glassmorphism style
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                boxShadow: "0 20px 40px -5px var(--shadow-color)"
                            }}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                                <p className="mb-4 text-base">{project.description}</p>
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: 'var(--accent-color)'}} 
                                    className="font-semibold hover:underline"
                                >
                                    View Project
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Projects;
  
