import React from 'react';
import { IMAGES } from '../data';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-900 py-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
        
        {/* Left Side: Logo and Contact Info */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-10 text-center md:text-left w-full lg:w-auto justify-center lg:justify-start">
            <Link 
              to="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity"
            >
                <img 
                    src={IMAGES.footerLogo}
                    alt="GolfBooking.sg" 
                    className="h-14 md:h-18 w-auto object-contain"
                />
            </Link>
            
            {/* Divider for desktop/tablet */}
            <div className="hidden md:block h-12 w-px bg-gray-200"></div>

            <div className="space-y-1">
                <h4 className="font-bold text-gray-900 text-base uppercase tracking-tight leading-tight">
                  GOLFBOOKING.SG
                </h4>
                <div className="text-sm text-gray-600 font-medium leading-relaxed">
                    <p>STB Licensed Travel Agent: <a 
                        href="https://trust.stb.gov.sg/site/content/tagaem/landing-page/travel-agent/travel-agent-details.html?licenceNo=03701" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-golf-600 hover:text-golf-700 transition-colors"
                      >TA03701</a></p>
                    <p>Email: <a href="mailto:enquiry@golfbooking.sg" className="hover:text-golf-600 transition-colors">enquiry@golfbooking.sg</a></p>
                    <p>Phone: <a href="tel:+6591682061" className="hover:text-golf-600 transition-colors">+65 9168 2061</a></p>
                </div>
            </div>
        </div>
        
        {/* Right Side: Copyright */}
        <div className="text-gray-400 text-xs font-medium text-center lg:text-right w-full lg:w-auto">
            © 2026 golfbooking.sg | All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;