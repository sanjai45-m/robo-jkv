import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Workshops from './components/Workshops';
import Learning from './components/Learning';
import Footer from './components/Footer';
import './App.css';
import MapEmbed from './components/MapEmbedded';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div>
        <Hero />
        <About />
        <Workshops />
        <Learning />
      </div>
      <MapEmbed />
      <Footer />
    </div>
  );
}

export default App;