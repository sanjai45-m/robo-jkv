import React from 'react';
import { Github, Linkedin, Mail, Twitter, Award, BookOpen, Brain, Rocket, Users, TestTube, Target, Lightbulb, Instagram } from 'lucide-react';

import "./DirectorSection.css";
import director from "../assets/director.jpeg";

const DirectorSection = () => {
  return (
    <div className="director-page">
      <div className="hero">
        <div className="hero-content">
          <div className="profile-container">
            <div className="profile-image">
              <img 
                src={director} 
                alt="Dr. James K. Vector" 
              />
              <div className="social-links">
                <a href="#" aria-label="Github"><Instagram size={24} /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin size={24} /></a>
                <a href="#" aria-label="Twitter"><Twitter size={24} /></a>
                <a href="#" aria-label="Email"><Mail size={24} /></a>
              </div>
            </div>
            <div className="hero-text">
              <h1>V.Yuvaraj m.tech</h1>
              <h2>Founder & Director</h2>
              <h3>JKV Robotics Research Lab</h3>
              <p className="quote">"Pushing the boundaries of robotics to create a future where human potential is amplified through technological innovation."</p>
            </div>
          </div>
        </div>
      </div>

      <section className="about-section">
        <div className="section-content">
          <h2><Brain className="section-icon" /> About Our Director</h2>
          <p>
  Our Director is a seasoned expert in robotics automation with over 13 years of experience. 
  He is dedicated to inspiring the next generation of innovators by conducting workshops in colleges, 
  delivering seminars, and guiding students in the exciting fields of robotics and automation.
</p>
<p>
  As the founder of JKV Robotics Research Lab, he fosters a creative and collaborative environment 
  that bridges cutting-edge research with practical applications, paving the way for advancements in adaptive 
  robotics and intelligent automation systems.
</p>

        </div>
      </section>

      <section className="research-section">
        <div className="section-content">
          <h2><Rocket className="section-icon" /> Work Experience</h2>
          <div className="research-grid">
          
            <div className="research-card">
             <h3 className='year'>2020-Present</h3>
              <h3>Founder & Director - JKV Robotics Labs</h3>
              <p>Leading a team of 3000+ engineers in robotics innovation</p>
            </div>
           
            <div className="research-card">
            <h3 className='year'>2016-2020</h3>
              <h3>Assistant Professor in G.K.M college of Engineering & Tech in the dept of ECE</h3>
              <p>Conducted research and mentored engineering students.</p>
            </div>
            <div className="research-card">
            <h3 className='year'>2012-2016</h3>
              <h3>Assistant Professor in Dhanalakshmi Srinivasan College of Engg & Tech in the dept of ECE</h3>
              <p>Developed industry-focused engineering curriculum</p>
            </div>
              
            <div className="research-card">

            <h3 className='year'>2008-2010</h3>
              <h3>Lecturer in Arulmigu Meenakshi Amman College of Engineering in the dept of ECE</h3>
              <p>Specialized in electronics and communication</p>
            </div>
           
           
           


          </div>
        </div>
      </section>

      <section className="publications-section">
        <div className="section-content">
          <h2><BookOpen className="section-icon" /> Latest Publications</h2>
          <div className="publications-grid">
            {[{
                title: "Performance Analysis of FIR",
                journal: "Information Technology",
                year: 2014,
                impact: "Based on multiple constant multiplication techinique with efficient multiplier"
              }, {
                title: "Automation Toll collection  ",
                journal: "Information Technology",
                year: 2017,
                impact: "Hazard detection system using RFID Technology"
              }, {
                title: "Automation Toll collection in volume-issue-1 2017-ISSN",
                journal: "Electronics in Recogniton",
                year: 2021,
                impact: "Hazard detection system using RFID Technology"
              }]
              .map((pub, index) => (
                <div key={index} className="publication-card">
                  <h3>{pub.title}</h3>
                  <p className="journal">{pub.journal} ({pub.year})</p>
                  <p className="impact">{pub.impact}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className="education-section">
        <div className="section-content">
          <h2><Award className="section-icon" /> Education & Awards</h2>
          <div className="education-timeline">
            <div className="timeline-item">
              <div className="education-card">
                <h3>M.TECH VLSI</h3>
                <p>Sathyabama university</p>
                <span className="year">2012</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="education-card">
                <h3>B.E Electronics & communication Engineering</h3>
                <p>Anna University</p>
                <span className="year">2007</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="education-card">
                <h3>Diploma in Electronics and Communication Engg. </h3>
                <p>Pallavan Polytechnic College</p>
                <span className="year">2004</span>
              </div>
            </div>
          </div>

          <div className="awards-grid">
            <div className="award-card">
              <Award className="card-icon" />
              <h3>IEEE Robotics Pioneer Award</h3>
              <p>2023</p>
            </div>
            <div className="award-card">
              <Award className="card-icon" />
              <h3>NSF Career Award</h3>
              <p>2021</p>
            </div>
            <div className="award-card">
              <Award className="card-icon" />
              <h3>AI Innovation Award</h3>
              <p>2020</p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default DirectorSection;
