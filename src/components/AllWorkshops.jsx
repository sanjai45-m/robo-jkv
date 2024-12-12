import { motion } from 'framer-motion';
import { IoArrowBack } from 'react-icons/io5';
import WorkshopCard from './WorkshopCard';
import { workshopData } from '../data/workshopData';

const AllWorkshops = ({ onBack }) => {
  return (
    <div className="all-workshops-page">
      <motion.button
        className="back-button"
        onClick={onBack}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <IoArrowBack /> Back to Featured Workshops
      </motion.button>
      
      <h2>All Workshops</h2>
      <motion.div 
        className="workshop-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {workshopData.map((workshop, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <WorkshopCard workshop={workshop} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AllWorkshops;