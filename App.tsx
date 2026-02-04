
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tour from './pages/Tour';
import Destinations from './pages/Destinations';
import AboutUs from './pages/AboutUs';
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
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/about-us" element={<AboutUs />} />
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
