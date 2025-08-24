import React from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = ({ target }) => {
  return (
    <a href={target} className="absolute bottom-10 left-1/2 -translate-x-1/2">
      <motion.div
        className="w-8 h-12 border-2 border-white rounded-full flex justify-center items-start p-1"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
      >
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </motion.div>
    </a>
  );
};

export default ScrollIndicator;
