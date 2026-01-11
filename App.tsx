import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tour from './pages/Tour';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

// Helper component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
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