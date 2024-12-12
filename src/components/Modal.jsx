import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Modal.css';

const Modal = ({ isOpen, onClose, image, title }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            onClick={e => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose}>×</button>
            <motion.img
              src={image}
              alt={title}
              className="modal-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
            <motion.h3
              className="modal-title"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {title}
            </motion.h3>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;