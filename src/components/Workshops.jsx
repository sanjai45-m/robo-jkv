import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUniversity, FaUsers, FaRobot, FaAward, FaClock, FaGraduationCap } from 'react-icons/fa';
import './Workshops.css';

const Workshops = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // State to hold the fetched stats data
  const [stats, setStats] = useState([
    { icon: <FaUniversity />, value: "", label: "Partner Colleges" },
    { icon: <FaUsers />, value: "", label: "Students Trained" },
    { icon: <FaRobot />, value: "", label: "Workshops Conducted" },
    { icon: <FaAward />, value: "", label: "Industry Partners" },
  ]);

  // Fetch data from Firebase on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://snews-8ed67-default-rtdb.asia-southeast1.firebasedatabase.app/numbers.json'
        );
        const data = await response.json();
        if (data) {
          setStats([
            { icon: <FaUniversity />, value: `${data.partnerColleges}+`, label: "Partner Colleges" },
            { icon: <FaUsers />, value: `${data.studentsTrained}+`, label: "Students Trained" },
            { icon: <FaRobot />, value: `${data.workshopsConducted}+`, label: "Workshops Conducted" },
            { icon: <FaAward />, value: `${data.industryPartners}+`, label: "Industry Partners" },
          ]);
        }
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchData();
  }, []);

  const workshops = [
    {
      title: "Advanced Industrial Automation",
      duration: "4 Weeks",
      description:
        "Master PLC programming, SCADA systems, industrial robotics with training on industry-standard equipment.",
      features: ["PLC Programming", "HMI Design", "Industrial Networks", "Safety Systems"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=500",
    },
    {
      title: "Robotics & AI Integration",
      duration: "6 Weeks",
      description:
        "Learn to develop intelligent robotic systems using advanced AI algorithms and machine learning techniques.",
      features: ["Robot Programming", "Computer Vision", "AI Integration", "Path Planning"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=500",
    },
    {
      title: "IoT & Smart Manufacturing",
      duration: "5 Weeks",
      description:
        "Implement Industry 4.0 concepts with IoT integration, data analytics, and smart manufacturing solutions.",
      features: ["IoT Protocols", "Sensor Networks", "Data Analytics", "Cloud Integration"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=500",
    },
  ];

  return (
    <section id="workshops" className="workshops" ref={ref}>
      <motion.div
        className="workshops-content"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2>Industry-Leading Training Programs</h2>

        {/* Stats Section */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <h3 className="stat-count">{stat.value || "Loading..."}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Workshops Section */}
        <div className="workshop-grid">
          {workshops.map((workshop, index) => (
            <motion.div
              key={index}
              className="workshop-card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="workshop-image" style={{ backgroundImage: `url(${workshop.image})` }}>
                <div className="workshop-overlay">
                  <FaClock className="duration-icon" />
                  <span>{workshop.duration}</span>
                </div>
              </div>
              <div className="workshop-content">
                <h3>{workshop.title}</h3>
                <p className="description">{workshop.description}</p>
                <div className="features-list">
                  {workshop.features.map((feature, i) => (
                    <span key={i} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <button className="enroll-btn">
                  <FaGraduationCap className="enroll-icon" />
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Workshops;
