import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRobot, FaLightbulb, FaGraduationCap, FaCogs } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const features = [
    {
      icon: <FaRobot />,
      title: "Advanced Robotics",
      description: "Cutting-edge research in robotics, AI, and autonomous systems for next-generation applications."
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation Hub",
      description: "State-of-the-art facilities fostering innovation and technological breakthroughs."
    },
    {
      icon: <FaGraduationCap />,
      title: "Education Excellence",
      description: "Comprehensive learning programs designed by industry experts and researchers."
    },
    {
      icon: <FaCogs />,
      title: "Industry Integration",
      description: "Strong partnerships with leading technology companies and research institutions."
    }
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="about-header">
          <h2>Pioneering Tomorrow's Technology</h2>
          <p className="about-description">
            At JKV Robotics Research Lab, we're dedicated to pushing the boundaries
            of what's possible in robotics and automation. Our multidisciplinary
            approach combines cutting-edge research with practical applications.
          </p>
        </div>
        
        <div className="features">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;