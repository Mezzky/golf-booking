import React, { useState } from 'react';
import SectionContainer from '../components/SectionContainer';

const ContactUs: React.FC = () => {
  const WHATSAPP_NUMBER = "+6591682061";
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    inquiryType: '',
    requirements: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the formatted message
    const messageBody = `Hello GolfBooking.sg, I have a new inquiry:

Name: ${formData.fullName}
Email: ${formData.email}
Interest: ${formData.inquiryType || 'General Inquiry'}
Requirements: ${formData.requirements}`;

    const encodedMessage = encodeURIComponent(messageBody);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  const WHATSAPP_LINK_DIRECT = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=Hello+Welcome+to+GolfBooking.sg.+How+may+we+assist+you+today%3F`;

  return (
    <div className="bg-white min-h-screen overflow-hidden text-left">
      {/* 1. Cinematic Hero Header - Standardized to Destinations Style */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-50 animate-hero-zoom scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&q=80&w=2000')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90 z-10" />
        
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto animate-fade-in-up">
          <span className="inline-block text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-gold-500 mb-6 drop-shadow-md">The Concierge Service</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8 drop-shadow-2xl leading-none">
            Let's Connect
          </h1>
          <p className="max-w-2xl mx-auto text-stone-300 font-medium text-sm md:text-base leading-relaxed uppercase tracking-[0.3em] opacity-90">
            Our specialized team is ready to curate your next championship journey.
          </p>
        </div>
      </section>

      {/* 2. Contact Grid & Form Section */}
      <SectionContainer className="py-24 md:py-40">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-10 animate-fade-in-up">
            <div className="space-y-6">
              <h2 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.4em] mb-2">Direct Channels</h2>
              <h3 className="text-4xl md:text-5xl font-black text-golf-900 tracking-tight leading-tight">Speak with our <br/> Lifestyle Architects</h3>
            </div>

            <div className="space-y-6">
              {/* WhatsApp Link Box */}
              <a 
                href={WHATSAPP_LINK_DIRECT} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-8 p-8 border border-stone-200 bg-white hover:bg-golf-950 transition-all duration-700 shadow-xl hover:shadow-2xl relative overflow-hidden"
              >
                <div className="absolute -right-4 -bottom-4 text-6xl opacity-[0.03] text-stone-900 group-hover:text-white transition-colors font-black">WA</div>
                <div className="w-16 h-16 flex items-center justify-center bg-stone-50 text-golf-500 rounded-full group-hover:bg-gold-500 group-hover:text-white transition-all duration-500 shadow-md">
                   <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </div>
                <div>
                   <h4 className="text-lg font-black text-stone-900 uppercase tracking-widest mb-1 group-hover:text-white transition-colors">WhatsApp Us</h4>
                   <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest group-hover:text-stone-300 transition-colors">Instant Response Concierge</p>
                </div>
              </a>

              {/* Call HQ Box */}
              <a 
                href="tel:+6590011558" 
                className="group flex items-center gap-8 p-8 border border-stone-200 bg-white hover:bg-golf-950 transition-all duration-700 shadow-xl hover:shadow-2xl relative overflow-hidden"
              >
                <div className="absolute -right-4 -bottom-4 text-6xl opacity-[0.03] text-stone-900 group-hover:text-white transition-colors font-black">PH</div>
                <div className="w-16 h-16 flex items-center justify-center bg-stone-50 text-stone-900 rounded-full group-hover:bg-gold-500 group-hover:text-white transition-all duration-500 shadow-md">
                   <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                   <h4 className="text-lg font-black text-stone-900 uppercase tracking-widest mb-1 group-hover:text-white transition-colors">Call HQ</h4>
                   <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest group-hover:text-stone-300 transition-colors">+65 9001 1558</p>
                </div>
              </a>

              {/* Email Box */}
              <a 
                href="mailto:enquiry@golfbooking.sg" 
                className="group flex items-center gap-8 p-8 border border-stone-200 bg-white hover:bg-golf-950 transition-all duration-700 shadow-xl hover:shadow-2xl relative overflow-hidden"
              >
                <div className="absolute -right-4 -bottom-4 text-6xl opacity-[0.03] text-stone-900 group-hover:text-white transition-colors font-black">EM</div>
                <div className="w-16 h-16 flex items-center justify-center bg-stone-50 text-stone-900 rounded-full group-hover:bg-gold-500 group-hover:text-white transition-all duration-500 shadow-md">
                   <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                   <h4 className="text-lg font-black text-stone-900 uppercase tracking-widest mb-1 group-hover:text-white transition-colors">Email Enquiries</h4>
                   <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest group-hover:text-stone-300 transition-colors">enquiry@golfbooking.sg</p>
                </div>
              </a>
            </div>

            <div className="pt-10 border-t border-stone-100">
               <h4 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.4em] mb-4">Headquarters</h4>
               <p className="text-stone-900 font-black uppercase tracking-widest leading-relaxed">
                 Singapore <br/> 
                 Golf Lifestyle Management
               </p>
            </div>
          </div>

          {/* Right: Contact Form - DEFINED BORDER AND BOX SHADOW IN DEFAULT STATE */}
          <div className="lg:col-span-7 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="bg-white border border-stone-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] transition-all duration-700 relative overflow-hidden group">
              {/* Decorative Accent for the Form Box */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-golf-500 transition-all duration-500 group-hover:h-2"></div>
              
              <div className="p-8 md:p-16">
                <div className="mb-12">
                   <h3 className="text-[10px] font-black text-gold-600 uppercase tracking-[0.4em] mb-4">Concierge Form</h3>
                   <p className="text-2xl md:text-4xl font-black text-stone-900 tracking-tight">Request a Bespoke Proposal</p>
                </div>

                <form className="space-y-10" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder=" "
                        required
                        className="w-full bg-stone-50/50 border-b-2 border-stone-100 px-4 py-4 outline-none transition-all focus:border-golf-500 peer font-medium text-stone-900"
                      />
                      <label className="absolute left-4 top-4 text-stone-400 font-black text-[10px] uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-gold-500 peer-[:not(:placeholder-shown)]:-top-4 pointer-events-none">Full Name</label>
                    </div>
                    <div className="relative group">
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=" "
                        required
                        className="w-full bg-stone-50/50 border-b-2 border-stone-100 px-4 py-4 outline-none transition-all focus:border-golf-500 peer font-medium text-stone-900"
                      />
                      <label className="absolute left-4 top-4 text-stone-400 font-black text-[10px] uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-gold-500 peer-[:not(:placeholder-shown)]:-top-4 pointer-events-none">Email Address</label>
                    </div>
                  </div>

                  <div className="relative group">
                    <select 
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      className="w-full bg-stone-50/50 border-b-2 border-stone-100 px-4 py-4 outline-none transition-all focus:border-golf-500 peer font-medium text-stone-900 appearance-none cursor-pointer"
                    >
                       <option value="">Select Tour Interest</option>
                       <option value="KL & Melaka CNY 2026">KL & Melaka CNY 2026</option>
                       <option value="Türkiye Odyssey 2026">Türkiye Odyssey 2026</option>
                       <option value="Bespoke Destination">Bespoke Destination</option>
                    </select>
                    <label className="absolute left-4 -top-4 text-gold-500 font-black text-[10px] uppercase tracking-widest pointer-events-none">Inquiry Type</label>
                    <div className="absolute right-4 top-5 pointer-events-none text-stone-400">
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>

                  <div className="relative group">
                    <textarea 
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      rows={4} 
                      placeholder=" "
                      required
                      className="w-full bg-stone-50/50 border-b-2 border-stone-100 px-4 py-4 outline-none transition-all focus:border-golf-500 peer font-medium text-stone-900 resize-none"
                    ></textarea>
                    <label className="absolute left-4 top-4 text-stone-400 font-black text-[10px] uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-gold-500 peer-[:not(:placeholder-shown)]:-top-4 pointer-events-none">Tell us about your requirements</label>
                  </div>

                  <button type="submit" className="w-full bg-golf-500 hover:bg-golf-600 text-white font-black uppercase tracking-[0.3em] px-16 py-7 transition-all duration-500 text-[10px] shadow-2xl active:scale-[0.98] group flex items-center justify-center gap-4">
                    Submit via WhatsApp
                    <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* 3. Branding Strip */}
      <div className="bg-stone-50 py-16 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-40">
           {['Singapore Golf Association', 'Licensed Travel Agent TA03701', 'Official Partner'].map((partner, i) => (
             <span key={i} className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-400">{partner}</span>
           ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;