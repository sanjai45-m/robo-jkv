import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Pioneering the Future of Robotics & Automation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Leading innovation in Industrial Automation, AI-Powered Robotics, and Smart Manufacturing Solutions. 
          Join our community of 15,000+ trained professionals across 182 colleges.
        </motion.p>
        <motion.div
          className="cta-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="cta-button primary">Explore Workshops</button>
          <button className="cta-button secondary">Watch Demo</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
