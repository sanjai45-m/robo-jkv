import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Workshops from './components/Workshops';
import Learning from './components/Learning';
import Footer from './components/Footer';
import MapEmbed from './components/MapEmbedded';
import DirectorSection from './components/DirectorSection';
import WorkshopList from './components/WorkshopList';
import './App.css';
import ContactSection from './components/ContactUs/ContactSection'
import Gallery from './components/Gallery'
const AppContent = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hide Navbar on specific routes
  const hideNavbar = location.pathname === '/director' || location.pathname === '/workshop';

  console.log(`Current Path: ${location.pathname}`); // Log current path

  return (
    <div className="app">
      {!hideNavbar && <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="hero-section"><Hero /></div>
              <div id="about-section"><About /></div>
              <div id="workshop-section"><Workshops /></div>
              <div id="learning-section"><Learning /></div>
              <div id="map-section"><MapEmbed /></div>
              <div id="contacted-section"><ContactSection  /></div>
              <div id="footer-section"><Footer /></div>
              
            </>
          }
        />
        <Route path="/director" element={<DirectorSection />} />
        <Route path="/workshop" element={<WorkshopList />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
