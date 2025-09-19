import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Branches from './pages/Branches';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen grid-background">
        {/* Saffron blur effects */}
        <div className="saffron-blur-1" style={{ top: '10%', left: '15%' }}></div>
        <div className="saffron-blur-2" style={{ top: '60%', right: '10%' }}></div>
        <div className="saffron-blur-3" style={{ top: '30%', left: '70%' }}></div>
        <div className="saffron-blur-1" style={{ bottom: '20%', left: '5%', opacity: '0.6' }}></div>
        <div className="saffron-blur-2" style={{ top: '80%', left: '50%', opacity: '0.4' }}></div>
        
        <div className="content-layer">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
        </div>
    </Router>
  );
}

export default App;