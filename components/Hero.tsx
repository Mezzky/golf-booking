
import React from 'react';
import { TourData } from '../types';

interface HeroProps {
  tour: TourData;
}

const Hero: React.FC<HeroProps> = ({ tour }) => {
  const scrollToHighlights = () => {
    const element = document.getElementById('highlights');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Dynamically split the title at " Golf" to create two structured lines
  const splitIndex = tour.name.indexOf(' Golf');
  const line1 = splitIndex !== -1 ? tour.name.substring(0, splitIndex) : tour.name;
  const line2 = splitIndex !== -1 ? tour.name.substring(splitIndex).trim() : '';

  // Use stats array if available, otherwise fallback to legacy labels
  const infoStats = tour.stats || [
    { label: "Duration", value: tour.durationLabel },
    { label: "Golf", value: tour.golfLabel },
    { label: tour.transportTitle || "Transport", value: tour.transportLabel }
  ];

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        key={tour.heroImage}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-105 transition-all duration-1000 animate-fade-in"
        style={{ backgroundImage: `url(${tour.heroImage})` }}
      >
        {/* INCREASED INTENSITY GOLF OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-block mb-6 px-4 py-2 border-2 rounded-lg text-xs sm:text-sm font-bold tracking-widest uppercase cursor-default neon-blink bg-black/20 backdrop-blur-sm">
          {tour.badgeText || 'CHINESE NEW YEAR SPECIAL'}
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.2] drop-shadow-lg flex flex-col items-center">
          <span className="block">{line1}</span>
          {line2 && <span className="block">{line2}</span>}
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 font-medium tracking-wide">
          {tour.dates}
        </p>
        
        {/* KPI Boxes Container - Flexible layout for 4 boxes (3+1) - SHARP -> SOFT MODERN */}
        <div className="flex flex-wrap gap-4 justify-center items-center max-w-4xl mx-auto">
            {infoStats.map((stat, idx) => (
              <div 
                key={idx} 
                className="w-64 h-24 bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl text-white hover:-translate-y-1 transition-transform duration-300 cursor-default shadow-lg hover:shadow-xl text-center flex flex-col justify-center flex-shrink-0"
              >
                  <p className="text-xs uppercase tracking-wider text-gold-400 font-bold mb-1">{stat.label}</p>
                  <p className="font-bold text-lg leading-tight">{stat.value}</p>
              </div>
            ))}
        </div>
      </div>

      <div 
        onClick={scrollToHighlights}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50 hover:text-white transition-colors cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
