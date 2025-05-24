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

const allTags = ["All", ...Array.from(new Set(projects.flatMap(p => p.tags)))];

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState("All");
  const filtered = selectedTag === "All"
    ? projects
    : projects.filter(p => p.tags.includes(selectedTag));

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700 dark:text-indigo-300">Projects</h2>
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {allTags.map(tag => (
          <button
            key={tag}
            className={`px-4 py-2 rounded-full font-bold mb-2 ${selectedTag === tag ? "bg-pink-600 text-white" : "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200"}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {filtered.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-glass dark:bg-glassDark backdrop-blur-md rounded-2xl shadow-xl p-6 hover:scale-105 transition relative"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl mb-4 w-full h-40 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2 text-indigo-700 dark:text-indigo-200">{project.title}</h3>
            <p className="mb-4 text-slate-700 dark:text-slate-200">{project.description}</p>
            <div className="mb-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 rounded-full px-3 py-1 text-xs font-bold mr-2 mb-2"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 font-bold hover:underline"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
