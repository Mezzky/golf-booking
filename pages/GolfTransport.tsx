
import React from 'react';
import SectionContainer from '../components/SectionContainer';
import { VEHICLES } from '../data';

const GolfTransport: React.FC = () => {
  const handleQuoteRequest = (vehicleName: string) => {
    const message = `Hello GolfBooking.sg, I'm interested in the ${vehicleName} for our upcoming golf trip. Please provide a quote for transport services.`;
    const whatsappUrl = `https://wa.me/6590011558?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-50 animate-hero-zoom scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90 z-10" />
        
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto animate-fade-in-up">
          <span className="inline-block text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-gold-500 mb-6 drop-shadow-md">Premium Logistics</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight mb-8 drop-shadow-2xl leading-none">
            Golf Fleet Excellence
          </h1>
          <p className="max-w-2xl mx-auto text-stone-300 font-medium text-sm md:text-base leading-relaxed uppercase tracking-[0.3em] opacity-90">
            Tailored transport solutions with ample space for every player and their gear.
          </p>
        </div>
      </section>

      {/* 2. Intro / Capabilities Section */}
      <SectionContainer className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-24">
          <h2 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.4em]">Designed for Golfers</h2>
          <h3 className="text-3xl md:text-5xl font-black text-stone-900 tracking-tight">The Perfect Ride to the Green</h3>
          <p className="text-stone-500 text-lg md:text-xl font-medium leading-relaxed">
            Standard transport often fails the gear test. Our fleet is hand-picked to ensure your luxury bags and clubs travel in the same comfort you do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {VEHICLES.map((vehicle) => (
             <div key={vehicle.id} className="group bg-white border border-stone-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="aspect-[16/10] overflow-hidden relative">
                   <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out" />
                   <div className="absolute top-4 left-4">
                      <span className="bg-white/95 backdrop-blur-md text-stone-900 text-[8px] font-black px-4 py-2 rounded-full shadow-xl tracking-widest uppercase border border-white/20">
                        {vehicle.category}
                      </span>
                   </div>
                </div>

                <div className="p-8 flex flex-col flex-grow text-left">
                   <h4 className="text-2xl font-black text-stone-900 mb-6 group-hover:text-golf-500 transition-colors tracking-tight">{vehicle.name}</h4>
                   
                   <div className="flex items-center gap-8 mb-8">
                      <div className="flex flex-col">
                         <div className="flex items-center gap-2 mb-1">
                            <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Pax</span>
                         </div>
                         <span className="text-sm font-black text-stone-900">{vehicle.capacity.split(' ')[0]} Max</span>
                      </div>

                      <div className="w-px h-8 bg-stone-100"></div>

                      <div className="flex flex-col">
                         <div className="flex items-center gap-2 mb-1">
                            <svg className="w-4 h-4 text-golf-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                            <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Bags</span>
                         </div>
                         <span className="text-sm font-black text-stone-900">{vehicle.bagCapacity.split(' ')[0]} Max</span>
                      </div>
                   </div>

                   <ul className="space-y-3 mb-10 flex-grow">
                      {vehicle.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                           <div className="w-1 h-1 rounded-full bg-golf-500"></div>
                           <span className="text-xs font-bold text-stone-500 tracking-tight">{feature}</span>
                        </li>
                      ))}
                   </ul>

                   <div className="mt-auto flex items-end justify-between">
                      <div className="flex flex-col">
                         <span className="text-[8px] font-black text-stone-400 uppercase tracking-widest mb-1">Pricing From</span>
                         <span className="text-2xl font-black text-stone-950">SGD {vehicle.priceFrom}</span>
                      </div>
                      <button 
                        onClick={() => handleQuoteRequest(vehicle.name)}
                        className="bg-golf-500 hover:bg-black text-white px-8 py-4 transition-all duration-300 text-[10px] font-black uppercase tracking-widest shadow-lg"
                      >
                        Request Quote
                      </button>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </SectionContainer>

      {/* 3. Service Scenarios */}
      <div className="bg-stone-950 py-24 md:py-32 text-white border-y border-stone-800">
        <SectionContainer>
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="text-left space-y-12">
                 <div>
                    <h4 className="text-gold-500 text-[10px] font-black uppercase tracking-[0.6em] mb-4">Service Scope</h4>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tight">Full Lifecycle Support</h3>
                 </div>
                 
                 <div className="space-y-10">
                    {[
                      { title: 'Airport Transfers', desc: 'Direct pick-up from Changi or KLIA with specialized bag-handling protocols.' },
                      { title: 'Multi-Day Concierge', desc: 'A dedicated driver and vehicle assigned to your group for the entire tour duration.' },
                      { title: 'Cross-Border Luxury', desc: 'Seamless transport from Singapore to major Malaysian golf hubs in Melaka and KL.' }
                    ].map((s, idx) => (
                      <div key={idx} className="group cursor-default border-l-2 border-white/10 pl-8 hover:border-gold-500 transition-all duration-500">
                         <h5 className="text-xl font-black tracking-tight mb-2 group-hover:text-gold-500 transition-colors">{s.title}</h5>
                         <p className="text-stone-400 font-medium leading-relaxed">{s.desc}</p>
                      </div>
                    ))}
                 </div>
              </div>
              
              <div className="hidden lg:block relative group">
                 <div className="absolute inset-0 border-[20px] border-white/5 -z-10 translate-x-8 translate-y-8"></div>
                 <div className="aspect-[4/5] bg-stone-900 overflow-hidden shadow-3xl">
                    <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-[2000ms]" />
                 </div>
              </div>
           </div>
        </SectionContainer>
      </div>
    </div>
  );
};

export default GolfTransport;
