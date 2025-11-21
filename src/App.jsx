import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import BookingModal from './components/booking/BookingModal';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Combos from './pages/Combos';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/index.css';
import AOS from 'aos';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white font-inter">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/combos" element={<Combos />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <BookingModal />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;