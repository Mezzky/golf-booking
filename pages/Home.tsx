
import React, { useEffect, useRef, useState } from 'react';
import SectionContainer from '../components/SectionContainer';
import { TOURS, SERVICES, DESTINATIONS, TESTIMONIALS, IMAGES } from '../data';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [testiActiveIndex, setTestiActiveIndex] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const testiCarouselRef = useRef<HTMLDivElement>(null);
  
  const tourList = Object.values(TOURS);
  const tripledTours = [...tourList, ...tourList, ...tourList];
  const numRealTours = tourList.length;

  // For testimonials
  const tripleTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
  const numRealTestis = TESTIMONIALS.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (carouselRef.current) {
        const el = carouselRef.current;
        el.scrollLeft = el.scrollWidth / 3;
      }
      if (testiCarouselRef.current) {
        const el = testiCarouselRef.current;
        el.scrollLeft = el.scrollWidth / 3;
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleCarouselScroll = () => {
    const el = carouselRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, offsetWidth } = el;
    const third = scrollWidth / 3;

    if (scrollLeft < 50) {
      el.scrollLeft = scrollLeft + third;
    } else if (scrollLeft > (third * 2) + 50) {
      el.scrollLeft = scrollLeft - third;
    }

    const cardWidthWithGap = 364;
    const currentCenterIndex = Math.round((scrollLeft + offsetWidth / 2 - cardWidthWithGap / 2) / cardWidthWithGap);
    const normalizedIndex = (currentCenterIndex % numRealTours + numRealTours) % numRealTours;
    
    if (normalizedIndex !== activeIndex) {
      setActiveIndex(normalizedIndex);
    }
  };

  const handleTestiScroll = () => {
    const el = testiCarouselRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, offsetWidth } = el;
    const third = scrollWidth / 3;

    if (scrollLeft < 50) {
      el.scrollLeft = scrollLeft + third;
    } else if (scrollLeft > (third * 2) + 50) {
      el.scrollLeft = scrollLeft - third;
    }

    const cardWidthWithGap = 400; // Adjusted for testimonial width
    const currentCenterIndex = Math.round((scrollLeft + offsetWidth / 2 - cardWidthWithGap / 2) / cardWidthWithGap);
    const normalizedIndex = (currentCenterIndex % numRealTestis + numRealTestis) % numRealTestis;
    
    if (normalizedIndex !== testiActiveIndex) {
      setTestiActiveIndex(normalizedIndex);
    }
  };

  const scrollCarousel = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right', step: number = 364) => {
    const el = ref.current;
    if (!el) return;

    const moveAmount = direction === 'left' ? -step : step;
    el.scrollBy({
      left: moveAmount,
      behavior: 'smooth'
    });
  };

  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!parallaxRef.current) return;
      const rect = parallaxRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const normalized = (elementCenter - viewportCenter) / viewportHeight;
      setParallaxY(normalized * 120);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Brand Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-105"
          style={{ backgroundImage: `url(${IMAGES.heroLanding})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-golf-950/80 via-golf-950/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
          <div className="max-w-3xl text-left">
            <h1 className="text-5xl md:text-8xl font-extrabold mb-8 leading-[1.1] tracking-tight text-white drop-shadow-sm">
              One-Stop <br/>
              <span className="text-gold-400">Golf Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 mb-12 font-medium max-w-xl leading-relaxed">
              Enabling you to play golf with absolute ease. From curated tours to professional handicap maintenance.
            </p>
            <div className="flex flex-row gap-3 md:gap-5">
              <a href="#about" className="flex-1 md:flex-none text-center px-4 py-3 md:px-10 md:py-5 bg-golf-500 hover:bg-gold-600 text-white font-bold rounded-none transition-all shadow-xl hover:-translate-y-1 uppercase tracking-widest text-[10px] md:text-sm whitespace-nowrap">
                About Us
              </a>
              <a href="#tours" className="flex-1 md:flex-none text-center px-4 py-3 md:px-10 md:py-5 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 text-white font-bold rounded-none transition-all uppercase tracking-widest text-[10px] md:text-sm whitespace-nowrap">
                View Packages
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Indicators Bar */}
      <div className="bg-white border-y border-stone-200 py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="flex items-center gap-4">
            <img src={IMAGES.logo} alt="STB" className="h-12 w-auto" />
            <div className="text-[10px] font-black uppercase tracking-widest text-stone-500 leading-tight">
              Licensed Travel Agent<br/>TA03701
            </div>
          </div>
          <span className="hidden md:block h-10 w-px bg-stone-200"></span>
          <div className="text-sm font-bold text-stone-500">Official Partner of SGA</div>
          <span className="hidden md:block h-10 w-px bg-stone-200"></span>
          <div className="text-sm font-bold text-stone-500">10k+ Rounds Booked</div>
          <span className="hidden md:block h-10 w-px bg-stone-200"></span>
          <div className="text-sm font-bold text-stone-500">20+ Regional Partners</div>
        </div>
      </div>

      {/* 3. About Section */}
      <section id="about" className="bg-stone-50 py-8 md:py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-stone-500 text-2xl font-medium mb-1 uppercase tracking-widest">Welcome to</h2>
            <h3 className="text-5xl md:text-7xl font-black text-stone-900 italic tracking-tight mb-8">Golfbooking.sg</h3>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed max-w-4xl mx-auto font-medium opacity-80 uppercase tracking-widest px-4">
              Singapore's premier one-stop golf service provider. We are dedicated to delivering a seamless experience across the Mediterranean, 
              South East Asia, and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start" ref={parallaxRef}>
            <div className="relative overflow-hidden rounded-none shadow-2xl h-[450px] md:h-[650px] bg-stone-200">
              <div 
                className="absolute inset-0 w-full h-[120%] -top-[10%] rounded-none will-change-transform"
                style={{ 
                  backgroundImage: `url(${IMAGES.aboutImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transform: `translateY(${parallaxY}px)`
                }}
              />
            </div>
            
            <div className="pt-4 md:pt-12">
              <div className="mb-8">
                <h4 className="text-xs font-black text-stone-400 uppercase tracking-[0.3em] mb-4">The Vision</h4>
                <h5 className="text-3xl md:text-4xl font-black text-stone-900 uppercase tracking-tighter">EXCELLENCE IN EVERY SWING</h5>
              </div>
              <div className="space-y-6 text-stone-700 text-base md:text-lg leading-relaxed opacity-90 font-medium">
                <p>
                  The Golfbooking.sg name stands for excellence, and our service exemplies the mastery of regional travel logistics. 
                  Designed in collaboration with premier golf clubs and luxury partners.
                </p>
                <p>
                  Built on a foundation of trust and professional integrity, our brand embodies a vision of perfection, 
                  delivering an unforgettable golfing experience that transcends the game itself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Services Grid - Stacked on Tablet (md) */}
      <SectionContainer id="services" className="bg-white">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-golf-900 mb-6 tracking-tight">How We Serve You</h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg font-medium">Expertly curated solutions that remove the complexity from your golfing life.</p>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-10">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="bg-white p-12 rounded-none shadow-sm border border-stone-200 hover:shadow-2xl hover:shadow-golf-900/5 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-gold-600 bg-gold-50 px-3 py-1 rounded-none">{service.tag}</span>
              </div>
              <div className="w-16 h-16 bg-golf-50 rounded-none flex items-center justify-center text-golf-600 mb-8 group-hover:bg-golf-500 group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-golf-900 mb-4">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed mb-8">{service.description}</p>
              <button className="text-golf-600 font-bold hover:text-golf-800 flex items-center gap-2 group/btn uppercase tracking-widest text-xs">
                Inquire Now
                <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* 5. Minimalist Infinite Packages Carousel */}
      <section id="tours" className="bg-stone-50 py-8 md:py-16 relative">
        <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.4em] mb-4">Packages</h2>
            <h3 className="text-4xl md:text-5xl font-black text-golf-900 tracking-tight">Curated Getaways</h3>
            <p className="mt-6 text-stone-600 text-sm md:text-base font-medium leading-relaxed opacity-80">
              Meticulously planned itineraries combining championship-level golf with local discovery.
            </p>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={() => scrollCarousel(carouselRef, 'left')}
              className="w-14 h-14 flex items-center justify-center border border-stone-200 bg-white text-stone-500 hover:text-golf-600 hover:border-gold-600 hover:bg-stone-50 transition-all duration-300 rounded-none shadow-sm active:scale-90"
              aria-label="Previous Package"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button 
              onClick={() => scrollCarousel(carouselRef, 'right')}
              className="w-14 h-14 flex items-center justify-center border border-stone-200 bg-white text-stone-500 hover:text-golf-600 hover:border-gold-600 hover:bg-stone-50 transition-all duration-300 rounded-none shadow-sm active:scale-90"
              aria-label="Next Package"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>

        <div 
          ref={carouselRef}
          onScroll={handleCarouselScroll}
          className="flex overflow-x-auto gap-6 px-6 md:px-[calc((100vw-80rem)/2+1.5rem)] scrollbar-hide snap-x snap-mandatory no-scrollbar pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {tripledTours.map((tour, index) => (
            <Link 
              to={`/tour/${tour.id}`} 
              key={`${tour.id}-${index}`} 
              className="flex-shrink-0 w-[80vw] md:w-[340px] snap-center group flex flex-col bg-white border border-stone-200 hover:border-gold-400 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 rounded-none relative overflow-hidden"
            >
              <div className="aspect-[16/11] overflow-hidden rounded-none relative bg-stone-100">
                <img 
                  src={tour.heroImage} 
                  alt={tour.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-out" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700" />
              </div>
              
              <div className="p-7 flex flex-col flex-grow bg-white">
                <div className="mb-2">
                  <span className="text-[8px] font-black text-stone-400 uppercase tracking-[0.3em]">
                    {tour.durationLabel} • {tour.golfLabel}
                  </span>
                </div>
                
                <h4 className="text-xl md:text-2xl font-black italic mb-3 leading-tight transition-colors duration-300 text-stone-900 group-hover:text-golf-600">
                  {tour.shortName}
                </h4>
                
                <p className="text-stone-500 text-[9px] font-bold uppercase tracking-widest mb-4 opacity-70">
                  {tour.dates}
                </p>
                
                <p className="text-stone-600 text-sm leading-relaxed mb-8 line-clamp-2 font-medium opacity-80">
                  {tour.highlights[0]?.description || "Experience the ultimate golf getaway curated for the discerning player."}
                </p>
                
                <div className="pt-6 border-t border-stone-100 mt-auto flex items-center justify-between">
                  <div className="inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 text-stone-900 group-hover:text-gold-600">
                    Discover More
                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center items-center gap-3 mt-12">
          {tourList.map((_, idx) => (
            <button
              key={idx}
              className="group relative flex items-center justify-center p-2 focus:outline-none"
              aria-label={`Go to tour package ${idx + 1}`}
            >
              <div className={`h-1.5 rounded-none transition-all duration-500 ease-out ${
                activeIndex === idx 
                  ? 'w-12 bg-gold-500 shadow-[0_0_15px_rgba(245,158,11,0.3)]' 
                  : 'w-4 bg-stone-300 group-hover:bg-stone-400 group-hover:w-6'
              }`} />
            </button>
          ))}
        </div>
      </section>

      {/* 6. Destination Highlights - CLEAR IMAGES BENTO GRID */}
      <div className="bg-golf-950 py-8 md:py-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-golf-800/20 rounded-none blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
        <SectionContainer>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-10">
            <div className="max-w-xl">
              <h2 className="text-[10px] font-black text-gold-400 uppercase tracking-[0.5em] mb-4">Our Network</h2>
              <h3 className="text-4xl md:text-6xl font-black mb-6 italic tracking-tight">Iconic Fairways</h3>
              <p className="text-stone-400 text-lg leading-relaxed font-medium">
                We've established exclusive partnerships with the most prestigious clubs across Southeast Asia and the Mediterranean.
              </p>
            </div>
            <div className="hidden md:block">
              <button className="text-xs font-black uppercase tracking-widest border border-white/20 px-8 py-4 hover:bg-white hover:text-golf-950 transition-all duration-500 rounded-none">
                Explore Full Network
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6 min-h-[600px] md:min-h-[800px]">
            <div className="md:col-span-7 md:row-span-2 group relative overflow-hidden bg-stone-900 border border-white/10 shadow-2xl h-[400px] md:h-auto">
              <img 
                src={DESTINATIONS[0].image} 
                alt={DESTINATIONS[0].country} 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:rotate-1 transition-transform duration-[2000ms] ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
              <div className="absolute top-6 left-6 md:top-10 md:left-10">
                <span className="text-[10px] font-black text-white uppercase tracking-[0.3em] border-l-2 border-gold-500 pl-3 bg-black/30 backdrop-blur-sm py-1 pr-3">Featured Hub</span>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
                <span className="text-gold-400 text-[10px] md:text-sm font-black uppercase tracking-[0.4em] mb-2 md:mb-4 drop-shadow-lg">{DESTINATIONS[0].count}</span>
                <h4 className="text-4xl md:text-7xl font-black text-white mb-4 md:mb-8 italic tracking-tighter drop-shadow-2xl">{DESTINATIONS[0].country}</h4>
                <div className="hidden md:block h-px w-0 group-hover:w-full bg-white/30 transition-all duration-1000 mb-8" />
                <button className="md:opacity-0 md:group-hover:opacity-100 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-700 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] flex items-center gap-3 text-white bg-black/20 backdrop-blur-md px-4 py-2 w-fit">
                  Explore Now
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>

            <div className="md:col-span-5 md:row-span-1 group relative overflow-hidden bg-stone-900 border border-white/10 shadow-xl h-[300px] md:h-auto">
              <img 
                src={DESTINATIONS[1].image} 
                alt={DESTINATIONS[1].country} 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[1500ms]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                <span className="text-gold-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2 drop-shadow-md">{DESTINATIONS[1].count}</span>
                <h4 className="text-3xl md:text-4xl font-black text-white mb-4 italic drop-shadow-lg">{DESTINATIONS[1].country}</h4>
                <div className="md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
                  <span className="text-[10px] font-black uppercase tracking-widest text-stone-200">View Packages</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 md:row-span-1 group relative overflow-hidden bg-stone-900 border border-white/10 shadow-xl h-[300px] md:h-auto">
              <img 
                src={DESTINATIONS[2].image} 
                alt={DESTINATIONS[2].country} 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[1500ms]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:items-center md:justify-center md:text-center md:p-6 border border-white/5">
                <span className="text-gold-400 text-[10px] font-black uppercase tracking-[0.3em] mb-1 md:hidden">{DESTINATIONS[2].count}</span>
                <h4 className="text-3xl md:text-xl font-black text-white md:mb-2 uppercase tracking-tight drop-shadow-lg italic md:not-italic">{DESTINATIONS[2].country}</h4>
                <p className="hidden md:block text-[8px] font-black text-gold-500 uppercase tracking-widest drop-shadow-md">{DESTINATIONS[2].count}</p>
              </div>
            </div>

            <div className="md:col-span-3 md:row-span-1 group relative overflow-hidden bg-stone-900 border border-white/10 shadow-xl h-[300px] md:h-auto">
              <img 
                src={DESTINATIONS[3].image} 
                alt={DESTINATIONS[3].country} 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[1500ms]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="text-gold-400 text-[10px] font-black uppercase tracking-[0.3em] mb-1">{DESTINATIONS[3].count}</span>
                <h4 className="text-3xl md:text-2xl font-black text-white italic drop-shadow-lg">{DESTINATIONS[3].country}</h4>
                <div className="md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 hidden md:block">
                  <span className="text-[10px] font-black uppercase tracking-widest text-stone-200">Explore Bali</span>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>

      {/* 7. HMS Detail Highlight */}
      <SectionContainer id="hms">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold-100 rounded-none blur-3xl opacity-50 animate-pulse"></div>
            <div className="relative rounded-none overflow-hidden shadow-[0_50px_100px_-20px_rgba(49,81,34,0.3)]">
              <img src={IMAGES.hmsImage} alt="Handicap Service" className="w-full h-auto rounded-none" />
              <div className="absolute top-8 left-8 bg-white/95 backdrop-blur px-5 py-3 rounded-none shadow-xl border border-stone-100">
                <span className="text-[10px] font-black text-golf-900 uppercase tracking-[0.2em]">Official Indexing Service</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-golf-900 mb-8 leading-tight">Professional Handicap Maintenance</h2>
            <p className="text-lg text-stone-600 mb-10 leading-relaxed font-medium">
              We handle the administrative complexities of your USGA/SGA handicap index so you can focus on your swing.
            </p>
            <div className="space-y-6 mb-12">
              {["Monthly Score Verification", "Digital Scorecards & History", "Official SGA Affiliation", "Golfer Insurance Benefits"].map((item, i) => (
                <div key={i} className="flex items-center gap-5">
                  <div className="w-8 h-8 bg-golf-500 rounded-none flex items-center justify-center flex-shrink-0 shadow-lg shadow-golf-500/20">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="font-bold text-stone-800">{item}</span>
                </div>
              ))}
            </div>
            <button className="px-10 py-5 bg-golf-800 text-white font-black rounded-none hover:bg-golf-950 transition-all shadow-xl hover:-translate-y-1 uppercase tracking-widest text-sm">
              Enroll in HMS
            </button>
          </div>
        </div>
      </SectionContainer>

      {/* 8. Social Proof - CAROUSEL VERSION */}
      <div className="bg-stone-50 py-8 md:py-16 border-y border-stone-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.4em] mb-4">Reviews</h2>
            <h3 className="text-4xl md:text-5xl font-black text-golf-900 tracking-tight">Voices from the Fairway</h3>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={() => scrollCarousel(testiCarouselRef, 'left', 400)}
              className="w-14 h-14 flex items-center justify-center border border-stone-200 bg-white text-stone-500 hover:text-golf-600 hover:border-gold-600 hover:bg-stone-50 transition-all duration-300 rounded-none shadow-sm active:scale-90"
              aria-label="Previous Testimonial"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button 
              onClick={() => scrollCarousel(testiCarouselRef, 'right', 400)}
              className="w-14 h-14 flex items-center justify-center border border-stone-200 bg-white text-stone-500 hover:text-golf-600 hover:border-gold-600 hover:bg-stone-50 transition-all duration-300 rounded-none shadow-sm active:scale-90"
              aria-label="Next Testimonial"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>

        <div 
          ref={testiCarouselRef}
          onScroll={handleTestiScroll}
          className="flex overflow-x-auto gap-6 px-6 md:px-[calc((100vw-80rem)/2+1.5rem)] scrollbar-hide snap-x snap-mandatory no-scrollbar pb-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {tripleTestimonials.map((t, idx) => (
            <div 
              key={`${t.name}-${idx}`} 
              className="flex-shrink-0 w-[85vw] md:w-[380px] snap-center bg-white p-10 rounded-none border border-stone-200 shadow-sm relative group hover:border-gold-400 transition-all duration-500"
            >
              <svg className="absolute top-10 right-10 w-12 h-12 text-stone-100 group-hover:text-gold-50 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 15.238 16.255 13 19.017 13L21.017 13L21.017 21L14.017 21ZM3.01697 21L3.01697 18C3.01697 15.238 5.255 13 8.01697 13L10.017 13L10.017 21L3.01697 21Z"/></svg>
              <p className="text-stone-600 text-lg italic mb-10 leading-relaxed relative z-10">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-golf-100 rounded-none flex items-center justify-center font-black text-golf-700 group-hover:bg-golf-500 group-hover:text-white transition-all duration-500">
                  {t.initials}
                </div>
                <div>
                  <h5 className="font-black text-stone-900 leading-tight">{t.name}</h5>
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial pagination dots */}
        <div className="flex justify-center items-center gap-3">
          {TESTIMONIALS.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 rounded-none transition-all duration-500 ${
                testiActiveIndex === idx 
                  ? 'w-10 bg-gold-500' 
                  : 'w-2 bg-stone-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 10. Final CTA - REDESIGNED PER MOCKUP */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105"
          style={{ backgroundImage: `url(${IMAGES.finalCtaBg})` }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <SectionContainer className="relative z-10 w-full">
          <div className="max-w-xl bg-golf-950/60 backdrop-blur-2xl p-8 md:p-16 border border-white/10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)]">
            <h4 className="text-[10px] font-black text-gold-400 uppercase tracking-[0.4em] mb-6">Join the Community</h4>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 italic tracking-tight leading-[1.15]">
              Ready for Your <br className="hidden md:block"/> Next Round?
            </h2>
            
            <p className="text-stone-200 text-lg mb-12 font-medium leading-relaxed opacity-90 max-w-sm">
              Join Singapore's premier community of golfers. We handle the logistics so you can focus on the perfect swing.
            </p>
            
            <div className="flex flex-col gap-4">
              <button className="group flex items-center justify-between px-8 py-5 border border-white/30 text-white font-black hover:bg-white hover:text-golf-950 transition-all duration-500 uppercase tracking-[0.2em] text-[10px] md:text-xs">
                Start Booking
                <svg className="w-5 h-5 transform group-hover:translate-x-3 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <a 
                href="https://api.whatsapp.com/send/?phone=6590011558" 
                className="group flex items-center justify-between px-8 py-5 border border-white/10 bg-white/5 hover:bg-white/10 text-white font-black transition-all duration-500 uppercase tracking-[0.2em] text-[10px] md:text-xs"
              >
                Talk to Us
                <svg className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
};

export default Home;
