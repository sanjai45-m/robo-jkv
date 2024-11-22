import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRobot, FaCode, FaMicrochip, FaServer, FaCogs, FaBrain } from 'react-icons/fa';
import './Learning.css';

const Learning = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const topics = [
    {
      title: "Industrial Robotics",
      icon: <FaRobot />,
      topics: [
        "Robot Kinematics & Dynamics",
        "Industrial Robot Programming",
        "End-effector Design",
        "Robot Vision Systems"
      ]
    },
    {
      title: "Automation Control",
      icon: <FaCogs />,
      topics: [
        "PLC Programming",
        "SCADA Systems",
        "Motion Control",
        "Industrial Networks"
      ]
    },
    {
      title: "IoT & Embedded Systems",
      icon: <FaMicrochip />,
      topics: [
        "Sensor Integration",
        "Wireless Communication",
        "Real-time Systems",
        "Edge Computing"
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <FaBrain />,
      topics: [
        "Computer Vision",
        "Deep Learning",
        "Reinforcement Learning",
        "Neural Networks"
      ]
    },
    {
      title: "Industry 4.0",
      icon: <FaServer />,
      topics: [
        "Digital Twin Technology",
        "Smart Manufacturing",
        "Predictive Maintenance",
        "Data Analytics"
      ]
    },
    {
      title: "Software Development",
      icon: <FaCode />,
      topics: [
        "ROS Programming",
        "Python for Robotics",
        "C++ Applications",
        "API Integration"
      ]
    }
  ];

  return (
    <section id="learning" className="learning" ref={ref}>
      <motion.div
        className="learning-content"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2>Comprehensive Learning Paths</h2>
        <p className="learning-description">
          Master the future of automation with our industry-aligned curriculum
        </p>
        
        <div className="topics-grid">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              className="topic-card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="topic-icon">{topic.icon}</div>
              <h3>{topic.title}</h3>
              <ul>
                {topic.topics.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Learning;