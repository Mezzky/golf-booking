
import React from 'react';
import SectionContainer from './SectionContainer';
import { HighlightItem } from '../types';

interface HighlightsProps {
  highlights: HighlightItem[];
  tourId: string;
}

const Highlights: React.FC<HighlightsProps> = ({ highlights, tourId }) => {
  const scrollToRegister = () => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      <SectionContainer id="highlights">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-golf-900 mb-4 tracking-tight">Trip Highlights</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-none"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="group p-6 rounded-none bg-gray-50 hover:bg-golf-50 transition-colors border border-gray-100 hover:border-golf-200">
              <div className="mb-4 text-golf-600 group-hover:text-golf-800 transition-colors p-3 bg-white rounded-none w-fit shadow-sm">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">{highlight.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-medium">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 relative max-w-6xl mx-auto text-center px-4">
            <p className="relative z-10 text-xl md:text-2xl font-light italic text-gray-700 leading-relaxed">
              {tourId === 'golf' ? (
                <>
                  "Join us this January for a perfect blend of <span className="text-golf-700 font-bold px-1 not-italic">Golf</span>, <br className="hidden md:block"/>
                  <span className="text-red-600 font-bold px-1 not-italic">Festive Atmosphere</span>
                  <span className="text-gray-400 font-light px-1">&</span>
                  <span className="text-gold-600 font-bold px-1 not-italic">Culinary Delights</span>!"
                </>
              ) : (
                <>
                  "Embark on a journey through <span className="text-golf-700 font-bold px-1 not-italic">Golf</span>, <br className="hidden md:block"/>
                  <span className="text-red-600 font-bold px-1 not-italic">Ancient History</span>
                  <span className="text-gray-400 font-light px-1">&</span>
                  <span className="text-gold-600 font-bold px-1 not-italic">Turkish Hospitality</span>!"
                </>
              )}
            </p>

            <div className="mt-8 relative z-10">
              <button 
                onClick={scrollToRegister}
                className="px-8 py-3 rounded-none text-base font-bold bg-golf-500 text-white hover:bg-golf-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 uppercase tracking-widest"
              >
                Book Now
              </button>
            </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Highlights;
