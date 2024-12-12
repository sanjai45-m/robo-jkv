import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WorkshopCard from './WorkshopCard';
import AllWorkshops from './AllWorkshops';
import axios from 'axios';
import './WorkshopList.css';

const WorkshopList = () => {
  const [showAll, setShowAll] = useState(false);
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    // Fetch workshop data from Firebase
    axios
      .get('https://snews-8ed67-default-rtdb.asia-southeast1.firebasedatabase.app/workshop.json')
      .then((response) => {
        const fetchedWorkshops = [];
        for (let key in response.data) {
          fetchedWorkshops.push({
            id: key,
            ...response.data[key]
          });
        }
        setWorkshops(fetchedWorkshops); // Corrected this line to store fetched workshops
      })
      .catch((error) => {
        console.error('Error fetching data from Firebase:', error);
      });
  }, []);

  if (showAll) {
    return <AllWorkshops onBack={() => setShowAll(false)} />;
  }

  return (
    <div className="workshop-list">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Workshops and Seminars
      </motion.h1>
      <motion.div
        className="workshop-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence>
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
            >
              <WorkshopCard workshop={workshop} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default WorkshopList;
