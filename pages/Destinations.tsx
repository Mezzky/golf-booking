
import React from 'react';
import SectionContainer from '../components/SectionContainer';
import { DESTINATIONS } from '../data';
import { Link } from 'react-router-dom';

const Destinations: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Cinematic Hero Header with Background Image Overlay */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-60 animate-hero-zoom scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&q=80&w=2000')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90 z-10" />
        
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto animate-fade-in-up">
          <span className="inline-block text-[10px] md:text-xs font-black uppercase tracking-[0.6em] text-gold-500 mb-6 drop-shadow-md">Our Global Network</span>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter italic mb-8 drop-shadow-2xl leading-none">
            Iconic Fairways
          </h1>
          <p className="max-w-2xl mx-auto text-stone-300 font-medium text-sm md:text-base leading-relaxed uppercase tracking-[0.2em] opacity-90">
            From the emerald greens of Southeast Asia to the coastal horizons of the Mediterranean.
          </p>
        </div>
        
        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-20"></div>
      </section>

      {/* 2. Destination Grid Section */}
      <SectionContainer className="py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {DESTINATIONS.map((dest, idx) => (
            <div key={idx} className="group relative overflow-hidden bg-stone-100 h-[500px] md:h-[600px] border border-stone-200 shadow-sm transition-all duration-700 hover:shadow-2xl">
              <img 
                src={dest.image} 
                alt={dest.country} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/20 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-16">
                <span className="text-gold-500 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                  {dest.count}
                </span>
                <h3 className="text-4xl md:text-6xl font-black text-white mb-8 italic tracking-tight group-hover:text-gold-100 transition-colors duration-500">
                  {dest.country}
                </h3>
                
                <Link 
                  to="/#tours" 
                  className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-white hover:text-gold-500 transition-all w-fit group/btn"
                >
                  Explore Collection
                  <div className="relative h-px w-12 bg-white/30 overflow-hidden">
                    <div className="absolute inset-0 bg-gold-500 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* 3. Partners Section */}
      <div className="bg-stone-50 py-24 md:py-32 border-t border-stone-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none flex items-center justify-center">
            <span className="text-[180px] font-black uppercase tracking-widest text-stone-900 rotate-12">Network</span>
        </div>
        
        <SectionContainer>
          <div className="text-center mb-20 relative z-10">
             <h3 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.5em] mb-6">Strategic Alliances</h3>
             <p className="text-2xl md:text-4xl font-black text-stone-950 tracking-tight italic">Collaborating with the region's most prestigious golf authorities.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center relative z-10">
            {['SGA', 'MGA', 'TGA', 'VGA', 'IGA'].map((partner) => (
              <div key={partner} className="group cursor-default">
                <span className="text-2xl md:text-4xl font-black tracking-tighter uppercase italic text-stone-300 group-hover:text-golf-900 transition-all duration-500 select-none">
                  {partner}
                </span>
                <div className="h-0.5 w-0 bg-gold-500 mx-auto mt-2 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

export default Destinations;
