import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryFilter from './GalleryFilter';
import GalleryItem from './GalleryItem';
import './Gallery.css';

const Gallery = () => {
  const [categories, setCategories] = useState([]);
  const [galleryItems, setGalleryItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  // Fetch categories from Firebase
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://snews-8ed67-default-rtdb.asia-southeast1.firebasedatabase.app/categories.json');
      const data = await response.json();
      const categoryList = Object.values(data).map(item => item.category);
      setCategories(['All', ...categoryList]);
    };

    // Fetch gallery items from Firebase
    const fetchGalleryItems = async () => {
      const response = await fetch('https://snews-8ed67-default-rtdb.asia-southeast1.firebasedatabase.app/gallery.json');
      const data = await response.json();
      const items = Object.values(data).map(item => ({
        ...item,
        id: item.id,
        image: item.image,
        title: item.title,
        category: item.category
      }));
      setGalleryItems(items);
    };

    fetchCategories();
    fetchGalleryItems();
  }, []);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <motion.section
      className="gallery-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="gallery-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="gallery-title">Research Gallery</h2>
        <p className="gallery-subtitle">Explore our groundbreaking research projects and discoveries</p>
      </motion.div>

      <GalleryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <motion.div
        className="gallery-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="wait">
          {filteredItems.map((item, index) => (
            <GalleryItem
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};

export default Gallery;
