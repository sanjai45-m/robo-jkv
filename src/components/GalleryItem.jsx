import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Modal from './Modal';
import './GalleryItem.css';

const GalleryItem = ({ item, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 }
  };

  const overlayVariants = {
    rest: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const contentVariants = {
    rest: { y: 20, opacity: 0 },
    hover: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.div
        ref={ref}
        className={`gallery-item ${isExpanded ? 'expanded' : ''}`}
        variants={cardVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        whileHover="hover"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <motion.div
          className="gallery-image-container"
          onClick={handleImageClick}
        >
          <motion.img
            src={item.image}
            alt={item.title}
            className="gallery-image"
            variants={imageVariants}
          />
          <motion.div
            className="gallery-overlay"
            variants={overlayVariants}
            initial="rest"
            whileHover="hover"
          >
            <motion.div
              className="gallery-category"
              variants={contentVariants}
            >
              {item.category}
            </motion.div>
            <motion.div
              className="overlay-content"
              variants={contentVariants}
            >
              <h3>{item.title}</h3>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="gallery-details"
          animate={{
            maxHeight: isExpanded ? 200 : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="details-content">
            {/* Additional item details */}
          </div>
        </motion.div>
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        image={item.image}
        title={item.title}
      />
    </>
  );
};

export default GalleryItem;
