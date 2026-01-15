
import React from 'react';
import SectionContainer from '../components/SectionContainer';
import { DESTINATIONS } from '../data';
import { Link } from 'react-router-dom';

const Destinations: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-32">
      <SectionContainer>
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.5em] mb-4">Our Network</h1>
          <h2 className="text-5xl md:text-7xl font-black text-stone-900 tracking-tighter italic mb-8">Iconic Destinations</h2>
          <p className="max-w-3xl mx-auto text-stone-600 font-medium text-lg leading-relaxed uppercase tracking-widest opacity-80">
            From the emerald greens of Southeast Asia to the coastal fairways of the Mediterranean, discover our world-class golf network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {DESTINATIONS.map((dest, idx) => (
            <div key={idx} className="group relative overflow-hidden bg-stone-100 h-[500px] border border-stone-200">
              <img 
                src={dest.image} 
                alt={dest.country} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-16">
                <span className="text-gold-500 text-xs font-black uppercase tracking-[0.4em] mb-4">{dest.count}</span>
                <h3 className="text-4xl md:text-6xl font-black text-white mb-6 italic tracking-tight">{dest.country}</h3>
                <p className="text-stone-300 mb-8 max-w-sm font-medium">Experience curated golf experiences tailored to the unique landscape of {dest.country}.</p>
                
                <Link 
                  to="/#tours" 
                  className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white hover:text-gold-500 transition-colors w-fit group/btn"
                >
                  View Packages
                  <div className="w-10 h-px bg-white group-hover/btn:w-16 transition-all group-hover/btn:bg-gold-500"></div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Partners Section */}
      <div className="bg-stone-50 py-24 border-t border-stone-100">
        <SectionContainer>
          <div className="text-center mb-16">
             <h3 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.4em] mb-4">Official Partners</h3>
             <p className="text-2xl font-black text-stone-900 tracking-tight">Collaborating with the region's most prestigious clubs.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale items-center">
            {/* Using text labels for dummy partners */}
            <span className="text-xl font-black tracking-tighter uppercase italic">SGA</span>
            <span className="text-xl font-black tracking-tighter uppercase italic">MGA</span>
            <span className="text-xl font-black tracking-tighter uppercase italic">TGA</span>
            <span className="text-xl font-black tracking-tighter uppercase italic">VGA</span>
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

export default Destinations;
