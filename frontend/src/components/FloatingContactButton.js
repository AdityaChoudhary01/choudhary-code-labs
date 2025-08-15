import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMessageSquare } from 'react-icons/fi'; // Using a nice icon from react-icons

const FloatingContactButton = () => {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
    >
      <Link
        to="/contact"
        className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
        aria-label="Contact Me"
      >
        <FiMessageSquare size={30} />
      </Link>
    </motion.div>
  );
};

export default FloatingContactButton;
