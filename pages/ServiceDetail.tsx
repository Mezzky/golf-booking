import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SERVICES } from '../data';
import SectionContainer from '../components/SectionContainer';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = SERVICES.find(s => s.id === serviceId);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=6590011558&text=Hello+GolfBooking.sg.+I+would+like+to+get+updates+on+the+upcoming+" + encodeURIComponent(service.title) + "+service.";

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Cinematic Hero Header - Standardized to Destinations Style */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-60 animate-hero-zoom scale-105"
          style={{ backgroundImage: `url('${service.image || 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=2000'}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90 z-10" />
        
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-gold-500 drop-shadow-md">Concierge Service</span>
            <span className="bg-gold-500/10 text-gold-500 text-[8px] font-black px-2 py-0.5 border border-gold-500/20 uppercase tracking-widest">Coming Soon</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8 drop-shadow-2xl leading-none">
            {service.title}
          </h1>
          <p className="max-w-2xl mx-auto text-stone-300 font-medium text-sm md:text-base leading-relaxed uppercase tracking-[0.3em] opacity-90">
            Advanced Golf Management Solutions for the discerning professional player.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <SectionContainer className="py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-center justify-center text-center">
          <div className="lg:col-span-12 space-y-12">
            <div className="space-y-8 max-w-3xl mx-auto">
              <h2 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.4em] mb-3">Upcoming Service</h2>
              <p className="text-3xl md:text-5xl font-black text-stone-900 leading-tight tracking-tight">
                We are currently refining our <span className="text-gold-500">{service.title}</span> experience.
              </p>
              <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
              <p className="text-stone-50 text-lg md:text-xl leading-relaxed font-medium bg-golf-950 p-6 shadow-xl inline-block text-white">
                Our team is working behind the scenes to establish the highest level of integration and priority access for our members. We aim to deliver a service that goes beyond expectations.
              </p>
            </div>

            <div className="pt-8 flex flex-col md:flex-row gap-6 justify-center items-center">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-golf-500 hover:bg-golf-600 text-white font-black uppercase tracking-[0.2em] px-10 py-5 transition-all duration-500 text-[10px] md:text-xs shadow-xl active:scale-95 group"
              >
                Register Interest
                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <Link to="/#services" className="text-[10px] font-black uppercase tracking-widest text-stone-400 hover:text-golf-500 transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default ServiceDetail;