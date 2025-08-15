import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "YumRide",
    description: "An innovative food delivery platform connecting users with local restaurants to deliver delicious meals.",
    link: "https://your-yumride-link.com",
    image: "/images/yumride.png", // Local image
    tags: ["JavaScript", "React", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "QR Generator",
    description: "A QR code generator that allows users to create custom QR codes for text, URLs, or contact information.",
    link: "https://your-qr-generator-link.com",
    image: "/images/qr-generator.png", // Local image
    tags: ["JavaScript", "REST API", "QRCode", "HTML", "CSS"]
  },
  {
    title: "Weather App",
    description: "A dynamic weather application that fetches real-time weather data and displays it in an intuitive UI.",
    link: "https://your-weather-app-link.com",
    image: "/images/weather-app.png", // Local image
    tags: ["JavaScript", "HTML", "CSS", "REST API"]
  },
  {
    title: "aktuwrld",
    description: "A study platform for AKTU students providing resources, notes, and previous year question papers.",
    link: "https://your-aktuwrld-link.com",
    image: "/images/aktuwrld.png", // Local image
    tags: ["JavaScript", "HTML", "CSS"]
  },
  {
    title: "Wifi QR Code Generator",
    description: "A tool to generate QR codes for Wi-Fi networks, simplifying the process of sharing Wi-Fi credentials.",
    link: "https://your-wifi-qr-code-link.com",
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
    title: "Portfolio Website 3",
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    link: "https://your-portfolio-link.com",
    image: "/images/portfolio.png", // Local image
    tags: ["React", "Tailwind CSS", "JavaScript"]
  },
  {
    title: "Expense Tracker",
    description: "An application to manage finances by recording income and expenses, with visualizations and budgeting features.",
    link: "https://your-expense-tracker-link.com",
    image: "/images/expense-tracker.png", // Local image
    tags: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "JAT Universal",
    description: "A comprehensive platform offering e-commerce, logistics, and customer support services.",
    link: "https://your-jat-universal-link.com",
    image: "/images/jat-universal.png", // Local image
    tags: ["HTML", "CSS"]
  },
  {
    title: "Chatty",
    description: "A full-stack real-time chat application with user authentication, real-time messaging, and responsive design.",
    link: "https://your-chatty-link.com",
    image: "/images/chatty.png", // Local image
    tags: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "Axios", "React Hot Toast"]
  }
];

   const Projects = () => {
    // ... projects array
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        className="glass-card overflow-hidden" // <-- APPLY THE NEW CLASS HERE
                        whileHover={{
                            scale: 1.05,
                            y: -10,
                            boxShadow: "0 20px 40px -5px var(--shadow-color)"
                        }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                            <p className="mb-4">{project.description}</p>
                            <a href={project.link} style={{color: 'var(--accent-color)'}} className="font-semibold hover:underline">View Project</a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
