
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { IMAGES } from '../data';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isTourPage = location.pathname.startsWith('/tour/');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=6590011558&text=Hello+Welcome+to+GolfBooking.sg.+How+may+we+assist+you+today%3F";

  const navItems = isTourPage 
    ? ['Highlights', 'Itinerary', 'Accommodation', 'Pricing']
    : ['Services', 'Tours', 'HMS', 'Insights'];

  return (
    <>
      <nav className={`fixed top-0 w-full z-[60] transition-all duration-500 ease-in-out ${scrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Left Side: Logo */}
          <Link 
            to="/"
            className="flex items-center gap-3 cursor-pointer flex-shrink-0 z-[70]" 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
          >
            <img 
              src={IMAGES.logo} 
              alt="golfbooking.sg Logo" 
              className={`w-auto object-contain transition-all duration-500 ease-in-out ${scrolled ? 'h-10 md:h-12' : 'h-16 md:h-20'}`}
            />
            <div className={`font-black tracking-tighter uppercase transition-all duration-500 ${scrolled || isMenuOpen ? 'text-golf-900 text-sm md:text-base' : 'text-white text-lg md:text-2xl'}`}>
              golfbooking.sg
            </div>
          </Link>

          {/* Right Side: Navigation & Hamburger */}
          <div className="flex items-center gap-4 md:gap-10">
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex space-x-10 items-center">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`text-xs font-black uppercase tracking-widest hover:text-gold-500 transition-colors whitespace-nowrap ${scrolled ? 'text-stone-700' : 'text-stone-100'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="h-6 w-px bg-stone-200/20 hidden lg:block"></div>

            {/* Main CTA: Enquire Button - Desktop */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:flex items-center gap-2 px-6 md:px-8 py-3 rounded-none text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 shadow-xl hover:-translate-y-0.5 ${
                scrolled 
                  ? 'bg-golf-800 text-white hover:bg-golf-900 shadow-golf-900/10' 
                  : 'bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20'
              }`}
            >
              Enquire
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 focus:outline-none transition-colors duration-300 ${scrolled || isMenuOpen ? 'text-golf-900' : 'text-white'}`}
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-[55] lg:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-full'
        }`}
      >
        <div className="flex flex-col h-full pt-32 pb-10 px-6 overflow-y-auto">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm font-black text-golf-900 uppercase tracking-[0.3em] text-left border-b border-stone-50 pb-5"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-auto space-y-6">
            <p className="text-[10px] font-black text-stone-400 uppercase tracking-[0.4em]">Let's Connect</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-golf-800 text-white py-6 rounded-none text-xs font-black uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all"
            >
              Start Enquiry
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <div className="flex flex-col space-y-2 text-stone-500 text-[10px] font-black uppercase tracking-widest">
              <a href="mailto:enquiry@golfbooking.sg">enquiry@golfbooking.sg</a>
              <a href="tel:+6591682061">+65 9168 2061</a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Dimmer when menu open */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[50] lg:hidden animate-fade-in" onClick={() => setIsMenuOpen(false)}></div>
      )}
    </>
  );
};

export default Navbar;
