
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tour from './pages/Tour';
import Destinations from './pages/Destinations';
import TourPackages from './pages/TourPackages';
import TeeTimeBooking from './pages/TeeTimeBooking';
import HandicapMaintenance from './pages/HandicapMaintenance';
import GolfTransport from './pages/GolfTransport';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ServiceDetail from './pages/ServiceDetail';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

// Helper component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
  return null;
};

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen relative flex flex-col transition-colors duration-500">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tour/:tourId" element={<Tour />} />
            <Route path="/tour-packages" element={<TourPackages />} />
            <Route path="/services/tee-time" element={<TeeTimeBooking />} />
            <Route path="/services/handicap" element={<HandicapMaintenance />} />
            <Route path="/services/transport" element={<GolfTransport />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        
        <Footer />
        <ChatWidget />
      </div>
    </HashRouter>
  );
}

export default App;
