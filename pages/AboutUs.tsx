
import React from 'react';
import SectionContainer from '../components/SectionContainer';
import { IMAGES } from '../data';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24 overflow-hidden">
      <SectionContainer>
        {/* Hero Section of About Us */}
        <div className="max-w-4xl mx-auto text-center mb-24 animate-fade-in">
          <h1 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.5em] mb-6">Our Legacy</h1>
          <h2 className="text-5xl md:text-7xl font-black text-stone-900 tracking-tighter mb-8 italic">The golfbooking.sg Story</h2>
          <p className="text-xl text-stone-600 font-medium leading-relaxed uppercase tracking-widest opacity-80">
            Pioneering the future of golf travel and lifestyle management in Singapore and beyond.
          </p>
        </div>

        {/* Detailed Narrative */}
        <div className="grid lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-7 space-y-12 animate-fade-in-up">
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-golf-900 tracking-tight">Our Philosophy</h3>
              <p className="text-lg text-stone-600 leading-relaxed font-medium">
                At golfbooking.sg, we believe that golf is more than just a sport; it's a lifestyle that demands precision, elegance, and a sense of adventure. Founded by passionate golfers, our mission is to remove the complexities of travel and tee-time management, allowing our clients to focus solely on their game.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed font-medium">
                We have meticulously built a network of the most prestigious clubs across Malaysia, Thailand, Türkiye, and Indonesia. Our partnerships are based on mutual respect and a shared commitment to providing the highest standards of hospitality.
              </p>
            </div>

            <div className="space-y-6 border-t border-stone-100 pt-12">
              <h3 className="text-3xl font-black text-golf-900 tracking-tight">Mastery of Logistics</h3>
              <p className="text-lg text-stone-600 leading-relaxed font-medium">
                From luxury coach transfers to specialized golf gear handling, our logistics are managed with the same precision as a professional's swing. We understand the unique needs of golfers, ensuring that every transition—from airport to hotel to the first tee—is seamless and stress-free.
              </p>
            </div>
            
            <div className="bg-stone-50 p-10 border-l-4 border-golf-500">
               <p className="text-2xl font-black text-stone-900 italic tracking-tight leading-relaxed mb-4">
                 "Our name stands for excellence, and our service exemplifies the mastery of regional travel."
               </p>
               <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">— The golfbooking.sg Team</span>
            </div>
          </div>

          <div className="lg:col-span-5 sticky top-32 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="aspect-[3/4] overflow-hidden shadow-2xl bg-stone-100 relative group">
              <img 
                src={IMAGES.aboutImage} 
                alt="Golf Heritage" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-[2000ms]"
              />
              <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-12 border-t border-stone-100 pt-24">
          <div className="space-y-4">
            <span className="text-gold-500 font-black text-2xl italic">01.</span>
            <h4 className="text-xl font-black text-stone-900 uppercase tracking-widest">Integrity</h4>
            <p className="text-stone-500 font-medium">We build relationships on a foundation of trust and professional transparency.</p>
          </div>
          <div className="space-y-4">
            <span className="text-gold-500 font-black text-2xl italic">02.</span>
            <h4 className="text-xl font-black text-stone-900 uppercase tracking-widest">Excellence</h4>
            <p className="text-stone-500 font-medium">Every detail, from course selection to dinner menus, is curated for perfection.</p>
          </div>
          <div className="space-y-4">
            <span className="text-gold-500 font-black text-2xl italic">03.</span>
            <h4 className="text-xl font-black text-stone-900 uppercase tracking-widest">Community</h4>
            <p className="text-stone-500 font-medium">We foster a community of like-minded golfers who value quality and shared experiences.</p>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default AboutUs;
