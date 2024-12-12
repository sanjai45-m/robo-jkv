import React from 'react';
import { motion } from 'framer-motion';
import './GalleryFilter.css';

const GalleryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <motion.div
      className="gallery-filter"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {categories.map((category, index) => (
        <motion.button
          key={category}
          className={`filter-button ${activeCategory === category ? 'active' : ''}`}
          onClick={() => onCategoryChange(category)}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 5px 15px rgba(52, 152, 219, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.1 + 0.5
          }}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default GalleryFilter;
