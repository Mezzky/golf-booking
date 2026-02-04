
import React from 'react';
import { IMAGES } from '../data';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-[#FCFAF7] text-stone-900 pt-16 pb-8 border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 items-start">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link 
              to="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mb-6 block"
            >
              <img 
                src={IMAGES.footerLogo} 
                alt="golfbooking.sg" 
                className="h-20 w-auto object-contain opacity-95 hover:opacity-100 transition-all duration-500"
              />
            </Link>
            
            <p className="text-[11px] text-stone-500 font-medium leading-relaxed max-w-sm mb-8 tracking-tight">
              Singapore's premier one-stop golf service provider. We handle the logistics of regional travel and tee-time management, so you can focus on the perfect swing.
            </p>
            
            <a 
              href="https://trust.stb.gov.sg/site/content/tagaem/landing-page/travel-agent/travel-agent-details.html?licenceNo=03701"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start"
            >
              <div className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-400 mb-1 group-hover:text-gold-600 transition-colors">
                Licensed Travel Agent
              </div>
              <div className="text-[11px] font-bold text-stone-900 border-b border-stone-200 group-hover:border-gold-500 group-hover:text-gold-600 transition-all pb-0.5 uppercase tracking-widest">
                TA03701
              </div>
            </a>
          </div>

          {/* Column 2: Collections */}
          <div>
            <h5 className="text-[11px] font-black uppercase tracking-[0.4em] mb-8 text-stone-950 relative">
              Collections
              <span className="absolute -bottom-3 left-0 w-8 h-px bg-gold-500"></span>
            </h5>
            <ul className="space-y-4 text-[13px] text-stone-500 font-medium">
              <li><Link to="/" className="hover:text-gold-600 transition-colors">Home</Link></li>
              <li><Link to="/#tours" className="hover:text-gold-600 transition-colors">Tour Packages</Link></li>
              <li><Link to="/destinations" className="hover:text-gold-600 transition-colors">Destinations</Link></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-gold-600 transition-colors text-left">Our Services</button></li>
              <li><Link to="/about-us" className="hover:text-gold-600 transition-colors text-left">About Us</Link></li>
              <li><button onClick={() => scrollTo('footer')} className="hover:text-gold-600 transition-colors text-left">Contact Us</button></li>
            </ul>
          </div>

          {/* Column 3: Personal Concierge */}
          <div>
            <h5 className="text-[11px] font-black uppercase tracking-[0.4em] mb-8 text-stone-950 relative">
              Personal Concierge
              <span className="absolute -bottom-3 left-0 w-8 h-px bg-gold-500"></span>
            </h5>
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[9px] font-black text-stone-300 uppercase tracking-widest block">Phone</span>
                <a href="tel:+6591682061" className="text-lg font-black text-stone-900 hover:text-gold-600 transition-colors tracking-tighter block">
                  +65 9168 2061
                </a>
              </div>
              
              <div className="space-y-1">
                <span className="text-[9px] font-black text-stone-300 uppercase tracking-widest block">Email</span>
                <a href="mailto:enquiry@golfbooking.sg" className="text-base font-bold text-stone-500 hover:text-gold-600 transition-colors italic tracking-tight block">
                  enquiry@golfbooking.sg
                </a>
              </div>

              <div className="space-y-1">
                <span className="text-[9px] font-black text-stone-300 uppercase tracking-widest block">Location</span>
                <p className="text-sm font-bold text-stone-900 tracking-tight leading-relaxed uppercase">
                  Singapore Headquarters
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Legal Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-stone-200/50">
          <div className="flex gap-4 items-center">
            <a 
              href="#" 
              className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-200 text-stone-800 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1" 
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-200 text-stone-800 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1" 
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex gap-8 text-[9px] font-black uppercase tracking-[0.4em] text-stone-300">
              <a href="#" className="hover:text-stone-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-stone-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-stone-900 transition-colors">Cookies</a>
            </div>
            <p className="text-[9px] font-bold text-stone-300 tracking-[0.5em] uppercase">
              ©2026 golfbooking.sg
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
