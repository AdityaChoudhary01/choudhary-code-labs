import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp, FiMessageSquare } from 'react-icons/fi';

const FloatingButtons = () => {
    const [isScrollVisible, setIsScrollVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsScrollVisible(true);
        } else {
            setIsScrollVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center space-y-4">
            {/* Scroll to Top Button */}
            <AnimatePresence>
                {isScrollVisible && (
                    <motion.button
                        onClick={scrollToTop}
                        className="w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Scroll to top"
                    >
                        <FiArrowUp size={24} />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Contact Button */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Link
                    to="/#contact"
                    className="flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300"
                    aria-label="Contact Me"
                >
                    <FiMessageSquare size={30} />
                </Link>
            </motion.div>
        </div>
    );
};

export default FloatingButtons;
