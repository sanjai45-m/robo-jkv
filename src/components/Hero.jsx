import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    console.log('Watch Demo button clicked');
    window.open('https://youtu.be/DHlVDPM-Glw?si=hXEzXA6--7WXJoLw', '_blank');
  };

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
          Join our community of 5,000+ trained professionals
        </motion.p>
        <motion.div
          className="cta-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            className="cta-button primary"
            onClick={() => {
              console.log('Button clicked: Explore Workshops');
              navigate('/workshop');
            }}
          >
            Explore Workshops
          </button>
          <button className="cta-button secondary" onClick={handleButtonClick}>
            Watch Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
