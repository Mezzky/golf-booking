
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
    <footer className="bg-[#FCFAF7] text-stone-900 pt-16 pb-8 border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Logo - Centered */}
        <div className="flex flex-col items-center mb-16">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src={IMAGES.footerLogo} 
              alt="golfbooking.sg" 
              className="h-16 md:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>
          <div className="mt-2 h-px w-12 bg-gold-500/30"></div>
        </div>

        {/* Main Grid - 4 Columns Equivalent */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Golf */}
          <div>
            <h5 className="text-[11px] font-black uppercase tracking-[0.2em] mb-6 text-stone-950">Golf Packages</h5>
            <ul className="space-y-4 text-[13px] text-stone-500 font-medium">
              <li><Link to="/tour/golf" className="hover:text-gold-600 transition-colors">KL & Melaka</Link></li>
              <li><Link to="/tour/turkey" className="hover:text-gold-600 transition-colors">Türkiye Odyssey</Link></li>
              <li><Link to="/tour/bali" className="hover:text-gold-600 transition-colors">Bali Greens</Link></li>
              <li><Link to="/tour/danang" className="hover:text-gold-600 transition-colors">Da Nang Coastal</Link></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h5 className="text-[11px] font-black uppercase tracking-[0.2em] mb-6 text-stone-950">Our Services</h5>
            <ul className="space-y-4 text-[13px] text-stone-500 font-medium">
              <li><button onClick={() => scrollTo('services')} className="hover:text-gold-600 transition-colors">Tee Time Booking</button></li>
              <li><button onClick={() => scrollTo('hms')} className="hover:text-gold-600 transition-colors">Handicap Maintenance</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-gold-600 transition-colors">Luxury Transport</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-gold-600 transition-colors">Regional Partners</button></li>
            </ul>
          </div>

          {/* Column 3: Corporate */}
          <div>
            <h5 className="text-[11px] font-black uppercase tracking-[0.2em] mb-6 text-stone-950">Corporate</h5>
            <ul className="space-y-4 text-[13px] text-stone-500 font-medium">
              <li><button onClick={() => scrollTo('about')} className="hover:text-gold-600 transition-colors">About Us</button></li>
              <li><span className="text-stone-400">STB License TA03701</span></li>
              <li><a href="#" className="hover:text-gold-600 transition-colors">Information Services</a></li>
              <li><a href="#" className="hover:text-gold-600 transition-colors">Press Center</a></li>
            </ul>
          </div>

          {/* Column 4: Enquiries */}
          <div>
            <h5 className="text-[11px] font-black uppercase tracking-[0.2em] mb-6 text-stone-950">Enquiries</h5>
            <div className="space-y-4">
              <p className="text-[13px] text-stone-500 font-medium italic mb-1">Bookings:</p>
              <a href="tel:+6591682061" className="block text-stone-900 font-bold border-b border-stone-900/10 pb-1 w-fit hover:border-gold-500 transition-all">+65 9168 2061</a>
              <a href="mailto:enquiry@golfbooking.sg" className="block text-stone-900 font-bold border-b border-stone-900/10 pb-1 w-fit hover:border-gold-500 transition-all italic">enquiry@golfbooking.sg</a>
            </div>
          </div>
        </div>

        {/* Social Bar */}
        <div className="flex justify-center gap-8 py-8 border-t border-stone-200/50">
          <a href="#" className="text-stone-900 hover:text-gold-600 transition-all hover:scale-110" aria-label="Instagram">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="#" className="text-stone-900 hover:text-gold-600 transition-all hover:scale-110" aria-label="YouTube">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
          </a>
          <a href="#" className="text-stone-900 hover:text-gold-600 transition-all hover:scale-110" aria-label="Facebook">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
          </a>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-stone-200/50">
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">
            <a href="#" className="hover:text-stone-900 transition-colors">GDPR</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Cookies</a>
          </div>
          <p className="text-[10px] font-medium text-stone-400 tracking-widest uppercase">
            Copyright ©2026 golfbooking.sg. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
