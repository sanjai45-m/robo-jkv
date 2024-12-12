import { motion } from 'framer-motion';
import { useState } from 'react';
import WorkshopDetails from './WorkshopDetails';
import ImageWithFallback from './ImageWithFallback';
import './WorkshopCard.css';
const WorkshopCard = ({ workshop }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className="workshop-card"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsOpen(true)}
      >
        <ImageWithFallback
          src={workshop.imageUrl}
          alt={workshop.collegeName}
          className="workshop-card-image"
        />
        <div className="workshop-card-content">
         
          <h3>{workshop.eventName}</h3>
          <h4>"{workshop.collegeName}"</h4>
          <p>{workshop.date}</p>
        </div>
      </motion.div>

      {isOpen && (
        <WorkshopDetails
          workshop={workshop}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default WorkshopCard;