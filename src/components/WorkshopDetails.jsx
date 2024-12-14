import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import ImageWithFallback from './ImageWithFallback';
import styles from './WorkshopDetails.module.css';

const WorkshopDetails = ({ workshop, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Ensure that all necessary fields are available with default values
  const aboutWorkshopDetails = workshop.aboutWorkshopDetails || {};
  const technologiesUsed = aboutWorkshopDetails.technologiesUsed || [];
  const outcomes = aboutWorkshopDetails.outcomes || [];
  const futureScope = aboutWorkshopDetails.futureScope || [];
  const impact = aboutWorkshopDetails.impact || { students: 'No data available', industry: 'No data available', research: 'No data available' };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClosePreview = () => {
    setSelectedImage(null);
  };

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          className={styles.container}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 25, stiffness: 500 }}
        >
          <button className={styles.closeButton} onClick={onClose}>
            <IoClose />
          </button>

          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className={styles.header}>
              <h2 className={styles.collegeName}>{workshop.collegeName}</h2>
              <h4 className={styles.eventName}>{workshop.workshopName}</h4>
              <p className={styles.date}>{new Date(workshop.dateTime).toLocaleDateString()}</p>
            </motion.div>

            {aboutWorkshopDetails && (
              <motion.div variants={itemVariants} className={styles.gallery}>
                {aboutWorkshopDetails.images?.length > 0 ? (
                  aboutWorkshopDetails.images.map((image, index) => (
                    <ImageWithFallback
                      key={index}
                      src={image}
                      alt={`Workshop moment ${index + 1}`}
                      className={styles.galleryImage}
                      onClick={() => handleImageClick(image)}
                    />
                  ))
                ) : (
                  <p>No images available</p>
                )}
              </motion.div>
            )}

            <div className={styles.content}>
              <motion.div variants={itemVariants} className={styles.section}>
                <h3>Workshop Overview</h3>
                <p>{aboutWorkshopDetails.description || 'No description available'}</p>
              </motion.div>
              <motion.div variants={itemVariants} className={styles.section}>
                <h3>Workshop Objective</h3>
                <p>{aboutWorkshopDetails.objective || 'No Objective available'}</p>
              </motion.div>

              <motion.div variants={itemVariants} className={styles.section}>
                <h3>Technologies Used</h3>
                <div className={styles.techGrid}>
                  {technologiesUsed.length > 0 ? (
                    technologiesUsed.map((tech, index) => (
                      <div key={index} className={styles.techItem}>
                        {tech}
                      </div>
                    ))
                  ) : (
                    <p>No technologies listed</p>
                  )}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className={styles.section}>
                <h3>Learning Outcomes</h3>
                <ul className={styles.list}>
                  {outcomes.length > 0 ? (
                    outcomes.map((outcome, index) => (
                      <li key={index}>{outcome}</li>
                    ))
                  ) : (
                    <p>No learning outcomes listed</p>
                  )}
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className={styles.section}>
                <h3>Future Scope</h3>
                <ul className={styles.list}>
                  {futureScope.length > 0 ? (
                    futureScope.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  ) : (
                    <p>No future scope listed</p>
                  )}
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className={styles.section}>
                <h3>Impact Analysis</h3>
                <div className={styles.impactGrid}>
                  <div className={styles.impactItem}>
                    <h4>Students</h4>
                    <p>{impact.students}</p>
                  </div>
                  <div className={styles.impactItem}>
                    <h4>Industry</h4>
                    <p>{impact.industry}</p>
                  </div>
                  <div className={styles.impactItem}>
                    <h4>Research</h4>
                    <p>{impact.research}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {selectedImage && (
        <motion.div
          className={styles.previewOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClosePreview();
          }}
        >
          <motion.div
            className={styles.previewContainer}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 500 }}
          >
            <button className={styles.closeButton} onClick={handleClosePreview}>
              <IoClose />
            </button>
            <img src={selectedImage} alt="Preview" className={styles.previewImage} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


export default WorkshopDetails;
