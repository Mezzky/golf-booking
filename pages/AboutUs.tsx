import React from 'react';
import SectionContainer from '../components/SectionContainer';
import { IMAGES } from '../data';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* 1. Cinematic Hero Header - Standardized to Destinations Style */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-60 animate-hero-zoom scale-105"
          style={{ backgroundImage: `url('https://cdn.sanity.io/images/iqsqxgxl/production/cedd21b9cd4a3acb7bc21e8eb1f90e81e1b6896f-1920x2880.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90 z-10" />
        
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto animate-fade-in-up">
          <span className="inline-block text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-gold-500 mb-6 drop-shadow-md">The Architect of Your Journey</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8 drop-shadow-2xl leading-none">
            Heritage & Vision
          </h1>
          <p className="max-w-2xl mx-auto text-stone-300 font-medium text-sm md:text-base leading-relaxed uppercase tracking-[0.3em] opacity-90">
            Pioneering the standard for elite golf travel management across Asia and the Mediterranean.
          </p>
        </div>
      </section>

      {/* 2. Brand Ethos Narrative */}
      <SectionContainer className="py-24 md:py-40">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-center">
          <div className="lg:col-span-6 space-y-12 animate-fade-in-up">
            <div className="space-y-6 text-left">
              <h2 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.4em] mb-2">Our Purpose</h2>
              <h3 className="text-4xl md:text-6xl font-black text-golf-900 tracking-tight leading-none">
                Redefining the <br/>
                Logistics of Leisure
              </h3>
            </div>
            
            <div className="space-y-8 text-left">
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-medium">
                At golfbooking.sg, we understand that for the discerning golfer, the game begins long before the first drive. It begins with the anticipation of a perfect fairway and the assurance of a flawless itinerary.
              </p>
              <p className="text-stone-500 leading-relaxed font-medium">
                Founded in Singapore by a collective of lifestyle architects and professional golfers, we identified a critical gap in the market: the complexity of cross-border golf travel. Our mission was simple—create a "One-Stop" ecosystem where every logistical detail, from specialized gear handling to exclusive private club access, is managed with surgical precision.
              </p>
              <div className="pt-4 flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-golf-900 tracking-tighter">50+</div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-stone-400">Club Partners</div>
                </div>
                <div className="w-px h-10 bg-stone-100"></div>
                <div className="text-center">
                  <div className="text-3xl font-black text-golf-900 tracking-tighter">100%</div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-stone-400">Licensed Travel</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative group">
              <div className="absolute -inset-4 border border-stone-100 -z-10 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-700"></div>
              <div className="overflow-hidden bg-stone-100 aspect-[4/5] shadow-2xl">
                <img 
                  src="https://cdn.sanity.io/images/iqsqxgxl/production/be76b0c679be20d4a4c5cad3630169927ad744ec-1920x2400.jpg" 
                  alt="Heritage Image" 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-golf-950 p-10 text-white hidden md:block">
                 <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gold-500 mb-2">The Commitment</p>
                 <p className="text-lg font-black tracking-tight">Focus on the swing, <br/> we'll handle the rest.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* 3. The Golfbooking.sg Edge (CORE SELLING POINTS) */}
      <div className="bg-stone-50 py-32 md:py-48 border-y border-stone-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-golf-900/5 -skew-x-12 translate-x-20"></div>
        
        <SectionContainer>
          <div className="text-left mb-24 max-w-3xl">
             <h3 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.4em] mb-3">The Edge</h3>
             <p className="text-4xl md:text-5xl font-black text-stone-950 tracking-tight">Why leaders choose us.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'Official Credibility', 
                desc: 'A STB Licensed Travel Agent (TA03701) and official partner to the Singapore Golf Association, ensuring global standards of reliability.',
              },
              { 
                title: 'Private Club Access', 
                desc: 'Exclusive gateways to world-renowned private fairways including KLGCC and TPC Kuala Lumpur, often restricted to the public.',
              },
              { 
                title: 'Gear Concierge', 
                desc: 'Our fleet is purpose-built for golf. We manage your specialized equipment with meticulous care from doorstep to clubhouse.',
              },
              { 
                title: 'Native Expertise', 
                desc: 'Singapore-headquartered with a deep-rooted network across Southeast Asia, providing local insights that travel platforms cannot reach.',
              }
            ].map((point, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-stone-100 p-10 md:p-14 group hover:bg-golf-950 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-700 cursor-default relative overflow-hidden text-left shadow-lg hover:shadow-2xl"
              >
                {/* Accent line at the top */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-golf-500 transition-all duration-500 group-hover:h-2"></div>
                
                {/* Expanding border animation */}
                <div className="w-12 h-px bg-golf-500 mb-8 group-hover:w-full transition-all duration-700 ease-in-out"></div>
                
                <h4 className="text-xl font-black text-stone-900 uppercase tracking-widest mb-6 group-hover:text-gold-500 transition-colors duration-500">
                  {point.title}
                </h4>
                
                <p className="text-stone-700 font-medium leading-relaxed group-hover:text-stone-300 transition-colors duration-500 text-sm md:text-base">
                  {point.desc}
                </p>

                {/* Subtle corner detail */}
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gold-500/0 group-hover:bg-gold-500/10 rounded-full blur-xl transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </div>

      {/* 4. Values Section with Minimalist Aesthetic */}
      <div className="bg-golf-950 py-32 md:py-40 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none flex items-center justify-center">
            <span className="text-[250px] font-black uppercase tracking-widest text-white -rotate-12">Legacy</span>
        </div>
        
        <SectionContainer>
          <div className="grid lg:grid-cols-2 gap-24 items-center relative z-10">
             <div className="space-y-12 text-left">
                <h3 className="text-[11px] font-black text-gold-500 uppercase tracking-[0.6em]">Core Ideals</h3>
                <div className="space-y-16">
                  {[
                    { title: 'Integrity', desc: 'Professional transparency in every pricing and booking detail.' },
                    { title: 'Community', desc: 'Building a network of high-performing individuals through the love of the game.' },
                    { title: 'Innovation', desc: 'Constantly evolving our logistics and digital services for the modern golfer.' }
                  ].map((v, i) => (
                    <div key={i} className="group cursor-default">
                       <h4 className="text-2xl md:text-4xl font-black tracking-tight mb-4 group-hover:text-gold-500 transition-colors">{v.title}</h4>
                       <p className="text-stone-400 font-medium text-lg leading-relaxed max-w-md group-hover:text-stone-200 transition-colors">{v.desc}</p>
                    </div>
                  ))}
                </div>
             </div>
             
             <div className="hidden lg:block relative">
                <div className="absolute inset-0 bg-gold-500/20 blur-3xl rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=1200" 
                  alt="Values Image" 
                  className="relative z-10 w-full shadow-3xl grayscale brightness-75 group-hover:grayscale-0 transition-all duration-1000"
                />
             </div>
          </div>
        </SectionContainer>
      </div>

      {/* 5. Contact Teaser with Background Image */}
      <section className="relative py-32 md:py-56 overflow-hidden">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-transform duration-[5000ms] group-hover:scale-110"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=2000')` }}
        />
        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10" />
        
        <SectionContainer className="relative z-20">
           <div className="max-w-4xl mx-auto text-center space-y-14">
              <h3 className="text-[11px] font-black text-gold-500 uppercase tracking-[0.5em] animate-fade-in-up">Connect</h3>
              <p className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight animate-fade-in-up drop-shadow-2xl" style={{ animationDelay: '100ms' }}>
                Your Next Masterpiece <br/> Awaits
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                 <a 
                   href="https://api.whatsapp.com/send/?phone=6591682061"
                   className="inline-flex items-center gap-6 bg-golf-500 hover:bg-golf-600 text-white font-black uppercase tracking-[0.2em] px-14 py-7 transition-all duration-500 text-[10px] md:text-xs shadow-[0_20px_50px_rgba(66,151,22,0.4)] active:scale-95 group"
                 >
                   Enquire with the Concierge
                   <svg className="w-5 h-5 transform group-hover:translate-x-3 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                   </svg>
                 </a>
              </div>
           </div>
        </SectionContainer>
      </section>
    </div>
  );
};

export default AboutUs;