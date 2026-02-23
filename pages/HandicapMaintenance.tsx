
import React from 'react';
import SectionContainer from '../components/SectionContainer';
import { HANDICAP_PLANS } from '../data';

const HandicapMaintenance: React.FC = () => {
  const handlePlanInquiry = (planName: string) => {
    const message = `Hello GolfBooking.sg, I'm interested in the ${planName} for Handicap Maintenance. Please provide more details on registration.`;
    const whatsappUrl = `https://wa.me/6590011558?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-40 animate-hero-zoom scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&q=80&w=2000')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90 z-10" />
        
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto animate-fade-in-up">
          <span className="inline-block text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-gold-500 mb-6 drop-shadow-md">Global Standards</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight mb-8 drop-shadow-2xl leading-none">
            Master Your Index
          </h1>
          <p className="max-w-2xl mx-auto text-stone-300 font-medium text-sm md:text-base leading-relaxed uppercase tracking-[0.3em] opacity-90">
            Official WHS handicap maintenance and indexing for amateur golfers in Singapore.
          </p>
        </div>
      </section>

      {/* 2. Educational / Benefits Section */}
      <SectionContainer className="py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="text-left space-y-10">
            <div>
              <h2 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.4em] mb-3">Why Maintain a Handicap?</h2>
              <h3 className="text-3xl md:text-5xl font-black text-stone-900 leading-tight tracking-tight">Leveling the Playing Field</h3>
            </div>
            
            <div className="space-y-6">
              {[
                { title: 'Tournament Access', desc: 'Participate in amateur and club tournaments globally with a certified index.' },
                { title: 'WHS Compliance', desc: 'Stay current with the World Handicap System standards and rules.' },
                { title: 'Progress Tracking', desc: 'Monitor your improvement with professional score history and peer review.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-12 h-12 bg-white border border-stone-200 flex items-center justify-center text-golf-500 rounded-none shadow-sm group-hover:bg-golf-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="font-black text-stone-900 uppercase tracking-widest text-sm mb-1">{item.title}</h4>
                    <p className="text-stone-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-stone-100 overflow-hidden shadow-2xl relative group">
               <img src="https://cdn.sanity.io/images/iqsqxgxl/production/cedd21b9cd4a3acb7bc21e8eb1f90e81e1b6896f-1920x2880.jpg" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
               <div className="absolute inset-0 border-[16px] border-white/10 pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-golf-950 text-white p-8 max-w-[240px] shadow-2xl">
               <span className="text-gold-500 font-black text-[10px] uppercase tracking-widest block mb-2">Licensed Partner</span>
               <p className="text-sm font-bold leading-relaxed">Official services managed in cooperation with the SGA.</p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* 3. Pricing / Membership Plans */}
      <div className="bg-stone-50 py-24 md:py-32 border-y border-stone-100">
        <SectionContainer>
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.4em] mb-4">Membership Plans</h2>
            <h3 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tight">Select Your Subscription</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {HANDICAP_PLANS.map((plan) => (
              <div 
                key={plan.id} 
                className={`relative bg-white p-10 md:p-14 border transition-all duration-500 flex flex-col ${plan.isPopular ? 'border-golf-500 shadow-2xl scale-105 z-10' : 'border-stone-200 shadow-sm hover:border-stone-400'}`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-10 -translate-y-1/2 bg-golf-500 text-white text-[9px] font-black uppercase tracking-widest px-4 py-2">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-10 text-left">
                  <h4 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.4em] mb-2">{plan.duration}</h4>
                  <h3 className="text-3xl font-black text-stone-900 tracking-tight mb-6">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-stone-400 text-sm font-bold uppercase">SGD</span>
                    <span className="text-5xl font-black text-stone-950 tracking-tighter">{plan.price}</span>
                    <span className="text-stone-400 text-xs font-bold uppercase ml-1">Flat rate</span>
                  </div>
                </div>

                <div className="space-y-4 mb-12 flex-grow text-left">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <svg className="w-4 h-4 text-golf-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-sm font-bold text-stone-600 tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => handlePlanInquiry(plan.name)}
                  className={`w-full py-5 text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${plan.isPopular ? 'bg-golf-500 text-white hover:bg-black shadow-xl' : 'bg-stone-950 text-white hover:bg-golf-500 shadow-md'}`}
                >
                  Join Now
                </button>
              </div>
            ))}
          </div>
        </SectionContainer>
      </div>

      {/* 4. Process Section */}
      <SectionContainer className="py-24 md:py-32">
         <div className="max-w-3xl mx-auto text-center space-y-12">
            <h3 className="text-[11px] font-black text-gold-600 uppercase tracking-[0.5em]">The Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
               {[
                 { step: '01', title: 'Register', desc: 'Fill out our concierge form or speak with a consultant.' },
                 { step: '02', title: 'Transfer', desc: 'We handle the scores transfer from your previous club or SGA portal.' },
                 { step: '03', title: 'Maintain', desc: 'Submit scores via the official app and keep your index updated.' }
               ].map((s, i) => (
                 <div key={i} className="space-y-4">
                    <div className="text-4xl font-black text-stone-100 italic select-none">{s.step}</div>
                    <h4 className="text-sm font-black text-stone-950 uppercase tracking-widest">{s.title}</h4>
                    <p className="text-xs font-medium text-stone-500 leading-relaxed">{s.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </SectionContainer>
    </div>
  );
};

export default HandicapMaintenance;
