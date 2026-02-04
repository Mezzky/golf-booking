import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { IMAGES } from '../data';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownTimer = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleMouseEnter = (menu: string) => {
    if (dropdownTimer.current) window.clearTimeout(dropdownTimer.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimer.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=6590011558&text=Hello+Welcome+to+GolfBooking.sg.+How+may+we+assist+you+today%3F";

  const navLinks = [
    { label: 'Tour Packages', path: '/#tours' },
    { label: 'Destination', path: '/destinations' },
    {
      label: 'Services',
      dropdown: [
        { label: 'Tee Time Booking', path: '/services/tee-time' },
        { label: 'Handicap Maintenance', path: '/services/handicap' },
        { label: 'Golf Transport', path: '/services/transport' }
      ]
    },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact Us', path: '#footer' }
  ];

  const scrollToFooter = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.querySelector('footer');
    footer?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-[60] transition-all duration-500 ease-in-out ${scrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Left Side: Logo & Brand Name */}
          <Link 
            to="/"
            className="flex items-center gap-3 cursor-pointer flex-shrink-0 z-[70]" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src={IMAGES.logo} 
              alt="golfbooking.sg" 
              className={`w-auto object-contain transition-all duration-500 ease-in-out ${scrolled ? 'h-9 md:h-11' : 'h-16 md:h-20'}`}
            />
            <div className={`font-semibold tracking-tight transition-all duration-500 lowercase ${scrolled || isMenuOpen ? 'text-golf-900 text-[10px] md:text-sm' : 'text-white text-base md:text-xl'}`}>
              golfbooking.sg
            </div>
          </Link>

          {/* Right Side: Navigation & Hamburger */}
          <div className="flex items-center gap-4 md:gap-10">
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex space-x-7 items-center">
              {navLinks.map((item) => {
                const isDisabled = item.label === 'About Us' || item.label === 'Contact Us';
                
                return (
                  <div 
                    key={item.label} 
                    className="relative h-full py-4"
                    onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {isDisabled ? (
                      <span
                        className={`text-[10px] font-black uppercase tracking-widest hover:text-gold-500 transition-colors whitespace-nowrap flex items-center gap-1 cursor-pointer ${scrolled ? 'text-stone-700' : 'text-stone-100'}`}
                      >
                        {item.label}
                      </span>
                    ) : item.path?.startsWith('#') ? (
                      <button
                        onClick={item.label === 'Contact Us' ? scrollToFooter : undefined}
                        className={`text-[10px] font-black uppercase tracking-widest hover:text-gold-500 transition-colors whitespace-nowrap flex items-center gap-1 ${scrolled ? 'text-stone-700' : 'text-stone-100'}`}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        to={item.path || '#'}
                        className={`text-[10px] font-black uppercase tracking-widest hover:text-gold-500 transition-colors whitespace-nowrap flex items-center gap-1 ${scrolled ? 'text-stone-700' : 'text-stone-100'}`}
                      >
                        {item.label}
                        {item.dropdown && (
                          <svg className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        )}
                      </Link>
                    )}

                    {/* Dropdown Menu */}
                    {item.dropdown && activeDropdown === item.label && (
                      <div className="absolute top-full left-0 w-52 bg-white shadow-2xl border border-stone-100 py-2.5 animate-fade-in">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.path}
                            className="block px-6 py-2.5 text-[9px] font-black uppercase tracking-widest text-stone-600 hover:text-gold-500 hover:bg-stone-50 transition-all border-l-4 border-transparent hover:border-gold-500"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="h-5 w-px bg-stone-200/20 hidden lg:block"></div>

            {/* Main CTA: Enquire Button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:flex items-center gap-2 px-5 md:px-7 py-2.5 rounded-none text-[9px] md:text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 shadow-xl hover:-translate-y-0.5 ${
                scrolled 
                  ? 'bg-golf-500 text-white hover:bg-golf-600 shadow-golf-500/10' 
                  : 'bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20'
              }`}
            >
              Enquire
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 focus:outline-none transition-colors duration-300 ${scrolled || isMenuOpen ? 'text-golf-900' : 'text-white'}`}
              aria-label="Toggle Menu"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
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
        <div className="flex flex-col h-full pt-28 pb-10 px-6 overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => {
              const isDisabled = item.label === 'About Us' || item.label === 'Contact Us';
              
              return (
                <div key={item.label} className="border-b border-stone-50 pb-3 mb-1">
                  <div className="flex items-center justify-between py-2">
                    {isDisabled ? (
                      <span className="text-xs font-black text-golf-900 uppercase tracking-[0.3em] text-left cursor-pointer">
                        {item.label}
                      </span>
                    ) : item.path?.startsWith('#') ? (
                      <button 
                        onClick={item.label === 'Contact Us' ? scrollToFooter : undefined}
                        className="text-xs font-black text-golf-900 uppercase tracking-[0.3em] text-left"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        to={item.path || '#'}
                        className="text-xs font-black text-golf-900 uppercase tracking-[0.3em] text-left"
                      >
                        {item.label}
                      </Link>
                    )}
                    {item.dropdown && (
                      <button onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)} className="p-2">
                        <svg className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </button>
                    )}
                  </div>
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="pl-4 mt-1 space-y-3 animate-fade-in">
                      {item.dropdown.map((sub) => (
                        <Link 
                          key={sub.label} 
                          to={sub.path} 
                          className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest py-1 border-l-2 border-gold-500 pl-4"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-auto space-y-5">
            <p className="text-[9px] font-black text-stone-400 uppercase tracking-[0.4em]">Let's Connect</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-golf-500 text-white py-5 rounded-none text-[10px] font-black uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all"
            >
              Start Enquiry
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[50] lg:hidden animate-fade-in" onClick={() => setIsMenuOpen(false)}></div>
      )}
    </>
  );
};

export default Navbar;