
import React, { useState, useMemo } from 'react';
import SectionContainer from '../components/SectionContainer';
import { COURSES, DESTINATIONS } from '../data';

const TeeTimeBooking: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedDate, setSelectedDate] = useState("");
  const [paxCount, setPaxCount] = useState(4);

  const filteredCourses = useMemo(() => {
    if (selectedCountry === "All") return COURSES;
    return COURSES.filter(c => c.country === selectedCountry);
  }, [selectedCountry]);

  const handleBookRequest = (courseName: string) => {
    const message = `Hello GolfBooking.sg, I'd like to check tee time availability for ${courseName} on ${selectedDate || 'a future date'} for ${paxCount} players.`;
    const whatsappUrl = `https://wa.me/6590011558?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-50 animate-hero-zoom scale-105"
          style={{ backgroundImage: `url('https://cdn.sanity.io/images/iqsqxgxl/production/d5dfcf0c3aa37b71f8e5f0304d65faf1e23bed00-5688x3792.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90 z-10" />
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto animate-fade-in-up">
          <span className="inline-block text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-gold-500 mb-6 drop-shadow-md">Premier Tee Times</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-8 drop-shadow-2xl leading-none">
            Secure Your Flight
          </h1>
          <p className="max-w-2xl mx-auto text-stone-300 font-medium text-sm md:text-base leading-relaxed uppercase tracking-[0.3em] opacity-90">
            Priority access to Asia's most exclusive private and championship courses.
          </p>
        </div>
      </section>

      <SectionContainer className="!py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="w-full lg:w-[320px] flex-shrink-0 space-y-6">
            <div className="bg-white border border-stone-200 p-8 shadow-sm space-y-8">
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 block mb-4">Destination</label>
                <select 
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full bg-white border border-stone-200 px-4 py-3.5 text-sm font-bold text-stone-900 focus:border-golf-500 outline-none transition-all rounded-none"
                >
                  <option value="All">All Countries</option>
                  {Array.from(new Set(COURSES.map(c => c.country))).map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 block mb-4">Preferred Date</label>
                <input 
                  type="date" 
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-white border border-stone-200 px-4 py-3.5 text-sm font-bold text-stone-900 focus:border-golf-500 outline-none transition-all rounded-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 block mb-4">Number of Players</label>
                <div className="flex items-center gap-4">
                  {[1, 2, 3, 4].map(num => (
                    <button 
                      key={num}
                      onClick={() => setPaxCount(num)}
                      className={`flex-1 py-3 text-xs font-black transition-all border ${paxCount === num ? 'bg-golf-500 border-golf-500 text-white' : 'bg-white border-stone-200 text-stone-500 hover:border-stone-900'}`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-golf-950 p-8 text-white">
               <h4 className="text-[10px] font-black uppercase tracking-widest text-gold-500 mb-4">Concierge Note</h4>
               <p className="text-sm font-medium text-stone-300 leading-relaxed">
                 Tee times at private clubs like KLGCC are subject to ballot or member sponsorship. Our team manages these requests on your behalf.
               </p>
            </div>
          </aside>

          <main className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCourses.map((course) => (
                <div key={course.id} className="group bg-white border border-stone-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img src={course.image} alt={course.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/95 backdrop-blur-md text-stone-900 text-[8px] font-black px-4 py-2 rounded-full shadow-xl tracking-widest uppercase border border-white/20">
                        {course.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow text-left">
                    <div className="mb-6">
                      <div className="flex items-center gap-1.5 mb-2">
                        <svg className="w-3 h-3 text-gold-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" /></svg>
                        <span className="text-[9px] font-black text-gold-600 uppercase tracking-[0.2em]">{course.location}, {course.country}</span>
                      </div>
                      <h3 className="text-2xl font-black text-stone-900 tracking-tight leading-none mb-4 group-hover:text-golf-500 transition-colors">{course.name}</h3>
                    </div>

                    <div className="grid grid-cols-3 gap-4 border-y border-stone-100 py-6 mb-8">
                      <div>
                        <span className="text-[8px] font-black text-stone-400 uppercase tracking-widest block mb-1">Par</span>
                        <span className="text-sm font-black text-stone-900">{course.par}</span>
                      </div>
                      <div>
                        <span className="text-[8px] font-black text-stone-400 uppercase tracking-widest block mb-1">Yardage</span>
                        <span className="text-sm font-black text-stone-900">{course.yardage}</span>
                      </div>
                      <div>
                        <span className="text-[8px] font-black text-stone-400 uppercase tracking-widest block mb-1">Level</span>
                        <span className="text-sm font-black text-stone-900">{course.difficulty}</span>
                      </div>
                    </div>

                    <div className="mt-auto flex items-end justify-between">
                      <div className="flex flex-col">
                        <span className="text-[8px] font-black text-stone-400 uppercase tracking-widest mb-1">Starting From</span>
                        <span className="text-2xl font-black text-stone-950">SGD {course.priceFrom}</span>
                      </div>
                      <button 
                        onClick={() => handleBookRequest(course.name)}
                        className="bg-golf-500 hover:bg-black text-white px-8 py-4 transition-all duration-300 text-[10px] font-black uppercase tracking-widest shadow-lg"
                      >
                        Check Slots
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredCourses.length === 0 && (
              <div className="py-40 text-center bg-white border-2 border-dashed border-stone-200">
                <p className="text-stone-400 font-black uppercase tracking-widest">No courses found in this region</p>
              </div>
            )}
          </main>
        </div>
      </SectionContainer>
    </div>
  );
};

export default TeeTimeBooking;
