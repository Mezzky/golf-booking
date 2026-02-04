
import React, { useEffect, useRef, useState } from 'react';
import SectionContainer from '../components/SectionContainer';
import { TOURS, SERVICES, DESTINATIONS, TESTIMONIALS, IMAGES } from '../data';
import { Link, useNavigate } from 'react-router-dom';

const HERO_BG_IMAGES = [
  'https://cdn.sanity.io/images/iqsqxgxl/production/d5dfcf0c3aa37b71f8e5f0304d65faf1e23bed00-5688x3792.jpg',
  'https://cdn.sanity.io/images/iqsqxgxl/production/295f25ae4be24f87e36b3f563e290ca200b3f7c1-5464x3219.jpg',
  'https://cdn.sanity.io/images/iqsqxgxl/production/46c03cce3a8a65068123b1af0b45f54ae57f7523-6000x4000.jpg',
  'https://cdn.sanity.io/images/iqsqxgxl/production/a8a45efcd7b09991e3cd67c76ebbbb3e3ff86eeb-6000x4000.jpg',
  'https://cdn.sanity.io/images/iqsqxgxl/production/45bf7b03ae74fe0cddb1ebd169d352387979c346-8192x4594.jpg'
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [heroBgIndex, setHeroBgIndex] = useState(0);
  const [activeTourIndex, setActiveTourIndex] = useState(0);
  const [activeTestiIndex, setActiveTestiIndex] = useState(0);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const testiCarouselRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLElement>(null);
  const [parallaxY, setParallaxY] = useState(0);
  
  const [searchDest, setSearchDest] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchMonth, setSearchMonth] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLFormElement>(null);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const tourList = Object.values(TOURS);
  const testimonialList = TESTIMONIALS;

  useEffect(() => {
    const handleScroll = () => {
      if (aboutSectionRef.current) {
        const rect = aboutSectionRef.current.getBoundingClientRect();
        const scrollPercent = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        setParallaxY(scrollPercent); 
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroBgIndex((prev) => (prev + 1) % HERO_BG_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const jumpToSlide = (ref: React.RefObject<HTMLDivElement | null>, index: number, total: number) => {
    const el = ref.current;
    if (!el) return;
    const scrollAmount = (el.scrollWidth - el.offsetWidth) * (index / (total - 1));
    el.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleNextTour = () => {
    const next = Math.min(activeTourIndex + 1, tourList.length - 1);
    setActiveTourIndex(next);
    jumpToSlide(carouselRef, next, tourList.length);
  };

  const handlePrevTour = () => {
    const prev = Math.max(activeTourIndex - 1, 0);
    setActiveTourIndex(prev);
    jumpToSlide(carouselRef, prev, tourList.length);
  };

  const handleNextTesti = () => {
    const next = Math.min(activeTestiIndex + 1, testimonialList.length - 1);
    setActiveTestiIndex(next);
    jumpToSlide(testiCarouselRef, next, testimonialList.length);
  };

  const handlePrevTesti = () => {
    const prev = Math.max(activeTestiIndex - 1, 0);
    setActiveTestiIndex(prev);
    jumpToSlide(testiCarouselRef, prev, testimonialList.length);
  };

  const handleJumpTour = (idx: number) => {
    setActiveTourIndex(idx);
    jumpToSlide(carouselRef, idx, tourList.length);
  };

  const handleJumpTesti = (idx: number) => {
    setActiveTestiIndex(idx);
    jumpToSlide(testiCarouselRef, idx, testimonialList.length);
  };

  const getTagStyles = (category: string) => {
    switch (category) {
      case 'Golf Travel':
        return 'bg-emerald-600 text-white';
      case 'Stay & Play':
        return 'bg-indigo-600 text-white';
      case 'Both':
        return 'bg-amber-500 text-white';
      default:
        return 'bg-stone-800 text-white';
    }
  };

  const displayCategory = (category: string) => {
    return category === 'Both' ? 'Golf Travel and Stay & Play' : category;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const toursSection = document.getElementById('tours');
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSearch = () => {
    const searchSection = document.getElementById('tour-search');
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden text-stone-900">
      {/* 1. Brand Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {HERO_BG_IMAGES.map((img, idx) => (
          <div 
            key={img}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${heroBgIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ backgroundImage: `url('${img}')` }}
          >
            {heroBgIndex === idx && (
              <div className="absolute inset-0 bg-inherit bg-cover bg-center animate-hero-zoom" />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90 z-20" />
          </div>
        ))}
        
        <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-12 w-full text-white flex flex-col items-center">
          <div className="text-center animate-fade-in mb-10 md:mb-12">
            <span className="inline-block text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-gold-500 mb-6 animate-fade-in-up">Elite Golf Experiences</span>
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight max-w-4xl tracking-tight">
              Seamless Golf Travel Experiences, <br className="hidden md:block"/> 
              On and Off the Course
            </h1>
          </div>

          <div id="tour-search" className="w-full max-w-4xl animate-fade-in-up scroll-mt-32" style={{ animationDelay: '400ms' }}>
            <form 
              onSubmit={handleSearch}
              className="bg-white rounded-none shadow-2xl flex flex-col md:flex-row items-stretch"
              ref={dropdownRef}
            >
              <div className="flex-1 flex flex-col px-6 py-5 border-b md:border-b-0 md:border-r border-stone-100 group transition-all hover:bg-stone-50 relative cursor-pointer" onClick={() => setOpenDropdown(openDropdown === 'dest' ? null : 'dest')}>
                <label className="text-[8px] font-black uppercase tracking-[0.3em] text-stone-400 mb-1 group-hover:text-gold-500 transition-colors pointer-events-none">Destination</label>
                <div className="flex items-center justify-between">
                  <span className="text-stone-900 font-bold text-xs md:text-sm uppercase tracking-wider">{searchDest || 'Any Region'}</span>
                  <svg className={`w-3 h-3 text-stone-400 transition-transform duration-300 ${openDropdown === 'dest' ? 'rotate-180 text-gold-500' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                </div>
                {openDropdown === 'dest' && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-stone-100 py-2 z-[100] animate-fade-in">
                    <div className="px-6 py-3 text-[9px] font-black uppercase tracking-widest text-stone-600 hover:text-gold-500 hover:bg-stone-50 transition-all border-l-4 border-transparent hover:border-gold-500" onClick={(e) => { e.stopPropagation(); setSearchDest(""); setOpenDropdown(null); }}>Any Region</div>
                    {DESTINATIONS.map(d => (
                      <div key={d.country} className="px-6 py-3 text-[9px] font-black uppercase tracking-widest text-stone-600 hover:text-gold-500 hover:bg-stone-50 transition-all border-l-4 border-transparent hover:border-gold-500" onClick={(e) => { e.stopPropagation(); setSearchDest(d.country); setOpenDropdown(null); }}>{d.country}</div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex-1 flex flex-col px-6 py-5 border-b md:border-b-0 md:border-r border-stone-100 group transition-all hover:bg-stone-50 relative cursor-pointer" onClick={() => setOpenDropdown(openDropdown === 'type' ? null : 'type')}>
                <label className="text-[8px] font-black uppercase tracking-[0.3em] text-stone-400 mb-1 group-hover:text-gold-500 transition-colors pointer-events-none">Travel Type</label>
                <div className="flex items-center justify-between">
                  <span className="text-stone-900 font-bold text-xs md:text-sm uppercase tracking-wider">{searchType === 'travel' ? 'Golf Travel' : searchType === 'stay' ? 'Stay & Play' : 'Any Type'}</span>
                  <svg className={`w-3 h-3 text-stone-400 transition-transform duration-300 ${openDropdown === 'type' ? 'rotate-180 text-gold-500' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                </div>
                {openDropdown === 'type' && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-stone-100 py-2 z-[100] animate-fade-in">
                    <div className="px-6 py-3 text-[9px] font-black uppercase tracking-widest text-stone-600 hover:text-gold-500 hover:bg-stone-50 transition-all border-l-4 border-transparent hover:border-gold-500" onClick={(e) => { e.stopPropagation(); setSearchType(""); setOpenDropdown(null); }}>Any Type</div>
                    <div className="px-6 py-3 text-[9px] font-black uppercase tracking-widest text-stone-600 hover:text-gold-500 hover:bg-stone-50 transition-all border-l-4 border-transparent hover:border-gold-500" onClick={(e) => { e.stopPropagation(); setSearchType("travel"); setOpenDropdown(null); }}>Golf Travel</div>
                    <div className="px-6 py-3 text-[9px] font-black uppercase tracking-widest text-stone-600 hover:text-gold-500 hover:bg-stone-50 transition-all border-l-4 border-transparent hover:border-gold-500" onClick={(e) => { e.stopPropagation(); setSearchType("stay"); setOpenDropdown(null); }}>Stay & Play</div>
                  </div>
                )}
              </div>

              <div className="flex-1 flex flex-col px-6 py-5 border-b md:border-b-0 md:border-r border-stone-100 group transition-all hover:bg-stone-50 relative cursor-pointer" onClick={() => setOpenDropdown(openDropdown === 'month' ? null : 'month')}>
                <label className="text-[8px] font-black uppercase tracking-[0.3em] text-stone-400 mb-1 group-hover:text-gold-500 transition-colors pointer-events-none">Month</label>
                <div className="flex items-center justify-between">
                  <span className="text-stone-900 font-bold text-xs md:text-sm uppercase tracking-wider">{searchMonth ? `${searchMonth} 2026` : 'Any Month'}</span>
                  <svg className={`w-3 h-3 text-stone-400 transition-transform duration-300 ${openDropdown === 'month' ? 'rotate-180 text-gold-500' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                </div>
                {openDropdown === 'month' && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-stone-100 py-2 z-[100] animate-fade-in max-h-60 overflow-y-auto">
                    <div className="px-6 py-3 text-[9px] font-black uppercase tracking-widest text-stone-600 hover:text-gold-500 hover:bg-stone-50 transition-all border-l-4 border-transparent hover:border-gold-500" onClick={(e) => { e.stopPropagation(); setSearchMonth(""); setOpenDropdown(null); }}>Any Month</div>
                    {months.map((m) => (
                      <div key={m} className="px-6 py-3 text-[9px] font-black uppercase tracking-widest text-stone-600 hover:text-gold-500 hover:bg-stone-50 transition-all border-l-4 border-transparent hover:border-gold-500" onClick={(e) => { e.stopPropagation(); setSearchMonth(m); setOpenDropdown(null); }}>{m} 2026</div>
                    ))}
                  </div>
                )}
              </div>

              <button type="submit" className="bg-golf-500 hover:bg-golf-600 text-white font-black uppercase tracking-[0.2em] px-10 py-6 md:py-0 transition-all duration-500 text-[10px] md:text-xs whitespace-nowrap active:scale-[0.98] flex items-center justify-center gap-3">
                Find Tours
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </form>
          </div>
        </div>

        {/* Scroll Indicator with smooth float animation and click behavior */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40 hover:opacity-100 z-30 transition-all duration-500 cursor-pointer animate-smooth-float group"
        >
           <span className="text-[8px] font-black text-white uppercase tracking-[0.5em] group-hover:text-gold-500 transition-colors">Explore</span>
           <div className="w-px h-16 bg-white/50 group-hover:bg-gold-500 transition-colors animate-pulse"></div>
        </button>
      </section>

      {/* 2. Unique Selling Points Bar */}
      <div className="bg-white border-y border-stone-200 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap justify-center md:justify-between items-center gap-y-10 gap-x-16">
          
          <div className="flex items-center gap-6 group">
            <div className="w-14 h-14 flex items-center justify-center bg-golf-50 text-golf-500 rounded-full group-hover:bg-golf-500 group-hover:text-white transition-all duration-500 shadow-sm">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="text-left">
              <h4 className="text-sm font-black text-stone-900 uppercase tracking-widest leading-none mb-2">Trusted & Licensed</h4>
              <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Official SGA & STB Partner</p>
            </div>
          </div>

          <span className="hidden lg:block h-12 w-px bg-stone-100"></span>

          <div className="flex items-center gap-6 group">
            <div className="w-14 h-14 flex items-center justify-center bg-golf-50 text-golf-500 rounded-full group-hover:bg-golf-500 group-hover:text-white transition-all duration-500 shadow-sm">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-left">
              <h4 className="text-sm font-black text-stone-900 uppercase tracking-widest leading-none mb-2">World-Class Fairways</h4>
              <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Curated Championship Courses</p>
            </div>
          </div>

          <span className="hidden lg:block h-12 w-px bg-stone-100"></span>

          <div className="flex items-center gap-6 group">
            <div className="w-14 h-14 flex items-center justify-center bg-golf-50 text-golf-500 rounded-full group-hover:bg-golf-500 group-hover:text-white transition-all duration-500 shadow-sm">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <div className="text-left">
              <h4 className="text-sm font-black text-stone-900 uppercase tracking-widest leading-none mb-2">Worry-Free Logistics</h4>
              <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">End-to-End Gear Handling</p>
            </div>
          </div>

        </div>
      </div>

      {/* 3. About Us Section */}
      <section id="about" ref={aboutSectionRef} className="bg-white py-20 md:py-24 relative overflow-hidden group/about">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-start">
            <div className="text-left space-y-16">
              <div className="animate-fade-in-up">
                <h2 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.4em] mb-2">The Brand</h2>
                <h3 className="text-4xl md:text-6xl font-black text-golf-900 tracking-tight leading-none">About Us</h3>
              </div>
              <div className="space-y-12">
                <div className="group animate-fade-in-up cursor-default">
                  <h4 className="text-2xl font-black text-golf-900 tracking-tight mb-3 group-hover:text-gold-600 transition-colors duration-500">The Legacy of Excellence</h4>
                  <div className="pl-6 border-l-2 border-stone-100 group-hover:border-l-4 group-hover:border-gold-500 transition-all duration-500">
                    <p className="text-stone-600 text-lg md:text-xl leading-relaxed font-medium opacity-90 group-hover:translate-x-3 transition-transform duration-500">
                      Singapore's premier one-stop golf service provider. We are dedicated to delivering a seamless experience across the Mediterranean, South East Asia, and beyond.
                    </p>
                  </div>
                </div>
                <div className="group animate-fade-in-up cursor-default" style={{ animationDelay: '200ms' }}>
                  <h4 className="text-2xl font-black text-golf-900 tracking-tight mb-3 group-hover:text-gold-600 transition-colors duration-500">A Vision for Perfection</h4>
                  <div className="pl-6 border-l-2 border-stone-100 group-hover:border-l-4 group-hover:border-gold-500 transition-all duration-500">
                    <p className="text-stone-500 text-lg md:text-xl leading-relaxed font-medium mb-6 group-hover:translate-x-3 transition-transform duration-500">
                      The Golfbooking.sg name stands for excellence, and our service exemplifies the mastery of regional travel logistics.
                    </p>
                    <div className="relative pt-6 border-t border-stone-100 overflow-hidden">
                      <p className="text-stone-400 text-base md:text-lg leading-relaxed font-medium italic group-hover:text-stone-600 group-hover:opacity-100 transition-all duration-700">
                        "Built on a foundation of trust and professional integrity, our brand embodies a vision of perfection."
                      </p>
                      <div className="absolute bottom-0 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-1000"></div>
                    </div>
                  </div>
                </div>
                <div className="pt-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                  <Link to="/about-us" className="inline-flex items-center gap-4 bg-golf-500 hover:bg-golf-600 text-white font-black uppercase tracking-[0.2em] px-10 py-5 transition-all duration-500 text-[10px] md:text-xs shadow-lg active:scale-[0.98] group/aboutbtn">
                    Explore More
                    <svg className="w-4 h-4 transform group-hover/aboutbtn:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:sticky md:top-40 relative animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="relative aspect-[4/5] w-full overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.25)] bg-stone-100 group/parallax">
                <div className="absolute inset-0 w-full h-[160%] -top-[30%] transition-transform duration-300 ease-out will-change-transform" style={{ transform: `translateY(${(parallaxY - 0.5) * -200}px)` }}>
                  <img src={IMAGES.aboutImage} alt="Golf Heritage" className="w-full h-full object-cover grayscale-[10%] group-hover/parallax:grayscale-0 transition-all duration-[2500ms]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
                <div className="absolute inset-0 border-[24px] border-white/5 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-0 -rotate-90 origin-left pointer-events-none opacity-[0.015] group-hover/about:opacity-[0.04] transition-all duration-1000 select-none hidden xl:block will-change-transform" style={{ transform: `translateY(calc(-50% + ${(parallaxY - 0.5) * 300}px))` }}>
           <span className="text-[220px] font-black text-stone-950 tracking-[0.05em] uppercase leading-none">Excellence</span>
        </div>
      </section>

      {/* 4. Tour Packages Section */}
      <section id="tours" className="bg-stone-50 py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <div className="max-w-2xl text-left flex-1">
              <h2 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.4em] mb-3">Featured Travel</h2>
              <h3 className="text-4xl md:text-5xl font-black text-golf-900 tracking-tight">Curated Packages</h3>
              <p className="mt-4 text-stone-600 text-sm md:text-base font-medium leading-relaxed opacity-80">Explore signature golf adventures.</p>
            </div>
            <button onClick={scrollToSearch} className="bg-golf-500 text-white px-8 py-4 hover:bg-golf-600 transition-all duration-500 rounded-none shadow-xl active:scale-[0.98] whitespace-nowrap text-xs font-black uppercase tracking-widest border border-golf-500/10">See More</button>
          </div>
        </div>
        <div className="relative max-w-full">
          <button onClick={handlePrevTour} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center border border-stone-200 bg-white/90 backdrop-blur-sm text-stone-500 hover:text-gold-600 hover:border-gold-600 hover:bg-white transition-all duration-300 rounded-none shadow-xl active:scale-90"><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
          <button onClick={handleNextTour} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center border border-stone-200 bg-white/90 backdrop-blur-sm text-stone-500 hover:text-gold-600 hover:border-gold-600 hover:bg-white transition-all duration-300 rounded-none shadow-xl active:scale-90"><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
          <div ref={carouselRef} className="flex overflow-hidden gap-8 px-6 md:px-32 pb-12 transition-all duration-500">
            {tourList.map((tour, index) => (
              <Link to={`/tour/${tour.id}`} key={tour.id} className="flex-shrink-0 w-[85vw] md:w-[400px] group flex flex-col bg-white border border-stone-200 transition-all duration-500 hover:shadow-2xl hover:border-stone-300 rounded-none relative overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden rounded-none relative bg-stone-100">
                  <img src={tour.heroImage} alt={tour.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out" />
                  <div className="absolute top-4 left-4 z-10 pointer-events-none">
                    <span className={`${getTagStyles(tour.category)} text-[8px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-xl`}>
                      {displayCategory(tour.category)}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow bg-white text-left">
                  <div className="mb-4">
                    <div className="flex items-center gap-1.5 mb-1.5"><svg className="w-2.5 h-2.5 text-gold-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" /></svg><span className="text-[9px] font-black text-gold-600 uppercase tracking-[0.2em] block">{tour.location}</span></div>
                    <h4 className="text-xl md:text-2xl font-black leading-tight transition-colors duration-300 text-stone-900 group-hover:text-golf-500 tracking-tighter">{tour.shortName}</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6 border-y border-stone-100 py-5">
                     <div><span className="text-[8px] font-black text-stone-400 uppercase tracking-widest block mb-1">Duration</span><span className="text-xs font-black text-stone-900 uppercase">{tour.durationLabel}</span></div>
                     <div><span className="text-[8px] font-black text-stone-400 uppercase tracking-widest block mb-1">Departure</span><span className="text-xs font-black text-stone-900 uppercase">{tour.departureDate}</span></div>
                  </div>
                  <div className="mt-auto flex items-end justify-between">
                    <div className="flex flex-col"><span className="text-[8px] font-black text-stone-400 uppercase tracking-widest mb-0.5">Package Price</span><span className="text-lg md:text-xl font-black text-stone-950">SGD {tour.priceFrom}</span></div>
                    <div className="w-10 h-10 flex items-center justify-center bg-golf-500 border border-golf-500 transition-all duration-300 text-white group-hover:bg-golf-600 group-hover:border-golf-600 shadow-sm">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {tourList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleJumpTour(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeTourIndex === idx ? 'bg-golf-500 w-8' : 'bg-stone-300 hover:bg-stone-400'}`}
                aria-label={`Go to tour slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Destination Highlights */}
      <section className="bg-golf-950 py-16 md:py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-golf-800/20 rounded-none blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-10">
            <div className="max-w-xl text-left">
              <h2 className="text-[10px] font-black text-gold-400 uppercase tracking-[0.5em] mb-4">Our Network</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">Iconic Fairways</h3>
              <p className="text-stone-400 text-lg leading-relaxed font-medium">We've established exclusive partnerships with the most prestigious clubs across Southeast Asia and the Mediterranean.</p>
            </div>
            <div className="hidden md:block">
              <Link to="/destinations" className="text-xs font-black uppercase tracking-widest border border-white/20 px-8 py-4 hover:bg-white hover:text-golf-950 transition-all duration-500 rounded-none">explore more</Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATIONS.slice(0, 4).map((dest, idx) => (
              <Link 
                key={idx} 
                to="/destinations"
                className="group relative overflow-hidden bg-stone-900 border border-white/10 shadow-xl aspect-[3/4] block"
              >
                <img 
                  src={dest.image} 
                  alt={dest.country} 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[2000ms] ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/10 to-transparent" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="transition-all duration-700">
                    <span className="text-gold-400 text-[10px] font-black uppercase tracking-[0.4em] mb-2 drop-shadow-lg text-left block">
                      {dest.count}
                    </span>
                    <h4 className="text-3xl font-black text-white italic tracking-tighter drop-shadow-2xl text-left">
                      {dest.country}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Services Section - Updated to Coming Soon */}
      <section id="services" className="bg-white py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row items-start justify-between mb-16 md:mb-24 gap-10">
            <div className="max-w-2xl text-left">
              <h2 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.4em] mb-3">Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-black text-golf-900 tracking-tight">Our Services</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-stone-100 shadow-2xl">
            {SERVICES.map((service, idx) => (
              <Link 
                key={service.id} 
                to={`/services/${service.id}`}
                className="group relative bg-white p-12 md:p-16 flex flex-col border-b md:border-b-0 md:border-r last:border-r-0 border-stone-100 transition-all duration-700 hover:bg-golf-950 overflow-hidden cursor-pointer"
              >
                <div className="absolute -bottom-6 -right-6 text-9xl font-black text-stone-50 group-hover:text-white/5 transition-colors duration-700 select-none">0{idx + 1}</div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-10 flex items-center justify-between">
                    <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center text-golf-700 group-hover:bg-gold-500 group-hover:text-white transition-all duration-700 transform group-hover:scale-110">
                      {service.icon}
                    </div>
                    <span className="text-[9px] font-black text-gold-600 uppercase tracking-widest border border-gold-100 px-3 py-1 group-hover:text-white group-hover:border-white/20 transition-colors duration-700">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-stone-950 mb-6 group-hover:text-white transition-colors duration-700 tracking-tight text-left">{service.title}</h3>
                  <p className="text-stone-500 leading-relaxed mb-12 group-hover:text-stone-300 transition-colors duration-700 text-left font-medium text-base md:text-lg">{service.description}</p>
                  
                  {/* Updated CTA to 'Coming Soon' */}
                  <div className="mt-auto pt-6 flex items-center gap-3 text-gold-600 group-hover:text-white transition-all duration-500">
                    <span className="text-[10px] font-black uppercase tracking-widest">Coming Soon</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials Carousel */}
      <section className="bg-stone-50 py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div className="max-w-2xl text-left"><h2 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.4em] mb-4">Reviews</h2><h3 className="text-4xl md:text-5xl font-black text-golf-900 tracking-tight">Voices from the Fairway</h3></div>
          <div className="flex gap-3"><button onClick={handlePrevTesti} className="w-14 h-14 flex items-center justify-center border border-stone-200 bg-white text-stone-500 hover:text-gold-600 hover:border-gold-600 hover:bg-stone-50 transition-all duration-300 shadow-sm active:scale-90"><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button><button onClick={handleNextTesti} className="w-14 h-14 flex items-center justify-center border border-stone-200 bg-white text-stone-500 hover:text-gold-600 hover:border-gold-600 hover:bg-stone-50 transition-all duration-300 shadow-sm active:scale-90"><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button></div>
        </div>
        <div ref={testiCarouselRef} className="flex overflow-hidden gap-6 px-6 md:px-12 pb-12 transition-all duration-500">
          {testimonialList.map((t, idx) => (
            <div key={`${t.name}-${idx}`} className="flex-shrink-0 w-[85vw] md:w-[400px] bg-white p-10 rounded-none border border-stone-200 shadow-sm relative group hover:border-stone-300 transition-all duration-500"><svg className="absolute top-10 right-10 w-12 h-12 text-stone-100 group-hover:text-gold-50 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 15.238 16.255 13 19.017 13L21.017 13L21.017 21L14.017 21ZM3.01697 21L3.01697 18C3.01697 15.238 5.255 13 8.01697 13L10.017 13L10.017 21L3.01697 21Z"/></svg><p className="text-stone-600 text-lg italic mb-10 leading-relaxed text-left">"{t.content}"</p><div className="flex items-center gap-4"><div className="w-12 h-12 bg-golf-100 rounded-none flex items-center justify-center font-black text-golf-700 group-hover:bg-golf-500 group-hover:text-white transition-all duration-500">{t.initials}</div><div className="text-left"><h5 className="font-black text-stone-900 leading-tight">{t.name}</h5><p className="text-xs font-bold text-stone-400 uppercase tracking-widest">{t.role}</p></div></div></div>
          ))}
        </div>
        
        <div className="flex justify-center mt-4 gap-2">
          {testimonialList.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleJumpTesti(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${activeTestiIndex === idx ? 'bg-gold-500 w-6' : 'bg-stone-300 hover:bg-stone-400'}`}
              aria-label={`Go to testimonial slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center z-0 scale-105" style={{ backgroundImage: `url(${IMAGES.finalCtaBg})` }}><div className="absolute inset-0 bg-black/20" /></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="max-w-xl bg-golf-950/60 backdrop-blur-2xl p-8 md:p-16 border border-white/10 shadow-2xl text-left">
            <h4 className="text-[10px] font-black text-gold-400 uppercase tracking-[0.4em] mb-6">Join the Community</h4>
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8 leading-[1.15]">Ready for Your Next Round?</h3>
            <div className="flex flex-col gap-4">
              <button className="group flex items-center justify-between px-8 py-5 bg-golf-500 text-white font-black hover:bg-golf-600 transition-all duration-500 uppercase tracking-[0.2em] text-[10px] md:text-xs">Start Booking <svg className="w-5 h-5 transform group-hover:translate-x-3 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
              <a href="https://api.whatsapp.com/send/?phone=6590011558" className="group flex items-center justify-between px-8 py-5 border border-white/10 bg-white/5 hover:bg-white/10 text-white font-black transition-all duration-500 uppercase tracking-[0.2em] text-[10px] md:text-xs">Talk to Us <svg className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
