import React, { useState, useMemo, useEffect } from 'react';
import SectionContainer from '../components/SectionContainer';
import { TOURS, DESTINATIONS } from '../data';
import { Link } from 'react-router-dom';

// Internal component for collapsible sidebar sections
const SidebarSection: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="py-5 border-b border-stone-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center mb-4 group/header focus:outline-none"
      >
        <h2 className="text-[11px] font-black text-stone-900 uppercase tracking-[0.2em] group-hover/header:text-golf-500 transition-colors">{title}</h2>
        <svg className={`w-3 h-3 text-stone-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-golf-500' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`space-y-3 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        {children}
      </div>
    </div>
  );
};

const CustomCheckbox: React.FC<{ checked: boolean; onChange: () => void; label: string }> = ({ checked, onChange, label }) => (
  <label className="flex items-center gap-3 cursor-pointer group">
    <div className="relative">
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={onChange} 
        className="peer sr-only" 
      />
      <div className={`w-4 h-4 border transition-all duration-300 rounded-none flex items-center justify-center ${checked ? 'bg-golf-500 border-golf-500 shadow-[0_0_8px_rgba(66,151,22,0.3)]' : 'bg-white border-stone-300 group-hover:bg-stone-50'}`}>
        <svg className={`w-2.5 h-2.5 text-white transition-opacity duration-300 ${checked ? 'opacity-100 scale-110' : 'opacity-0 scale-50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    </div>
    <span className={`text-sm font-medium transition-colors duration-300 ${checked ? 'text-stone-900' : 'text-stone-500 group-hover:text-stone-800'}`}>{label}</span>
  </label>
);

const TourPackages: React.FC = () => {
  const allTours = Object.values(TOURS);
  
  // States for filters and UI
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState(8000);
  const [sortBy, setBy] = useState("low-to-high");
  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);
  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const travelTypes = ["Golf Travel", "Stay & Play", "Both"];
  const airlines = ["Scoot", "Singapore Airlines", "Turkish Airlines"];

  const toggleFilter = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    if (list.includes(value)) {
      setList(list.filter(i => i !== value));
    } else {
      setList([...list, value]);
    }
  };

  const filteredTours = useMemo(() => {
    let result = allTours.filter(tour => {
      const priceNum = parseInt(tour.priceFrom.replace(/,/g, ''), 10);
      const matchesSearch = tour.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            tour.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDest = selectedDestinations.length === 0 || selectedDestinations.some(d => tour.location.includes(d));
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(tour.category);
      const matchesPrice = priceNum <= priceRange;
      const matchesMonth = selectedMonths.length === 0 || selectedMonths.some(m => tour.departureDate.toUpperCase().includes(m.substring(0, 3).toUpperCase()));
      const matchesAirline = selectedAirlines.length === 0 || (tour.flightDetails && tour.flightDetails.some(f => selectedAirlines.includes(f.airline)));

      return matchesSearch && matchesDest && matchesType && matchesPrice && matchesMonth && matchesAirline;
    });

    if (sortBy === "low-to-high") {
      result.sort((a, b) => parseInt(a.priceFrom.replace(/,/g, ''), 10) - parseInt(b.priceFrom.replace(/,/g, ''), 10));
    } else if (sortBy === "high-to-low") {
      result.sort((a, b) => parseInt(b.priceFrom.replace(/,/g, ''), 10) - parseInt(a.priceFrom.replace(/,/g, ''), 10));
    }
    return result;
  }, [allTours, searchTerm, selectedDestinations, selectedTypes, priceRange, sortBy, selectedMonths, selectedAirlines]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedDestinations([]);
    setSelectedTypes([]);
    setPriceRange(8000);
    setSelectedMonths([]);
    setSelectedAirlines([]);
  };

  const getTagStyles = (category: string) => {
    switch (category) {
      case 'Golf Travel': return 'bg-emerald-600 text-white';
      case 'Stay & Play': return 'bg-indigo-600 text-white';
      case 'Both': return 'bg-amber-500 text-white';
      default: return 'bg-stone-800 text-white';
    }
  };

  // Fix: Added missing displayCategory function to handle formatted category text.
  const displayCategory = (category: string) => {
    return category === 'Both' ? 'Golf Travel and Stay & Play' : category;
  };

  useEffect(() => {
    if (isFilterModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isFilterModalOpen]);

  // Reusable Filter Content
  const FilterContent = () => (
    <div className="space-y-2">
      <SidebarSection title="Price range">
        <div className="px-1">
          <div className="text-xs font-bold text-stone-500 mb-4 tracking-tight">Up to {priceRange} SGD</div>
          <input 
            type="range" 
            min="0" 
            max="8000" 
            step="100" 
            value={priceRange} 
            onChange={(e) => setPriceRange(parseInt(e.target.value))} 
            className="w-full h-6 appearance-none cursor-pointer price-range-slider" 
            style={{ 
              background: `linear-gradient(to right, #429716 ${(priceRange / 8000) * 100}%, #e7e5e4 ${(priceRange / 8000) * 100}%)`,
              backgroundSize: '100% 4px',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </div>
      </SidebarSection>

      <SidebarSection title="Airlines">
        {airlines.map(airline => (
          <CustomCheckbox 
            key={airline} 
            label={airline} 
            checked={selectedAirlines.includes(airline)} 
            onChange={() => toggleFilter(selectedAirlines, setSelectedAirlines, airline)} 
          />
        ))}
      </SidebarSection>

      <SidebarSection title="Travel Type">
        {travelTypes.map(type => (
          <CustomCheckbox 
            key={type} 
            label={type} 
            checked={selectedTypes.includes(type)} 
            onChange={() => toggleFilter(selectedTypes, setSelectedTypes, type)} 
          />
        ))}
      </SidebarSection>

      <SidebarSection title="Destinations">
        {DESTINATIONS.map(dest => (
          <CustomCheckbox 
            key={dest.country} 
            label={dest.country} 
            checked={selectedDestinations.includes(dest.country)} 
            onChange={() => toggleFilter(selectedDestinations, setSelectedDestinations, dest.country)} 
          />
        ))}
      </SidebarSection>

      <SidebarSection title="Departure Months">
        {months.map(month => (
          <CustomCheckbox 
            key={month} 
            label={month} 
            checked={selectedMonths.includes(month)} 
            onChange={() => toggleFilter(selectedMonths, setSelectedMonths, month)} 
          />
        ))}
      </SidebarSection>
    </div>
  );

  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      <section className="relative h-[45vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-50 animate-hero-zoom scale-105"
          style={{ backgroundImage: `url('https://cdn.sanity.io/images/iqsqxgxl/production/d5dfcf0c3aa37b71f8e5f0304d65faf1e23bed00-5688x3792.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90 z-10" />
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto animate-fade-in-up">
          <span className="inline-block text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-gold-500 mb-6 drop-shadow-md">The Collection</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-8 drop-shadow-2xl leading-none">
            Signature Journeys
          </h1>
          <p className="max-w-2xl mx-auto text-stone-300 font-medium text-sm md:text-base leading-relaxed uppercase tracking-[0.3em] opacity-90">
            Hand-picked itineraries for the discerning traveler.
          </p>
        </div>
      </section>

      <SectionContainer className="!py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-[300px] flex-shrink-0 space-y-6">
            <div className="bg-white border border-stone-200 p-8 shadow-sm">
              <div className="mb-8">
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Search by tour" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-white border border-stone-200 px-4 py-3.5 text-sm font-medium focus:border-gold-500 outline-none transition-all placeholder:text-stone-300"
                  />
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                </div>
              </div>
              <FilterContent />
              <button 
                onClick={clearFilters} 
                className="w-full bg-golf-500 text-white font-black uppercase tracking-[0.2em] py-4 mt-8 transition-all duration-300 text-[10px] hover:bg-black shadow-lg rounded-none active:scale-[0.98]"
              >
                Clear filters
              </button>
            </div>
          </aside>

          {/* Mobile Filter Controls */}
          <div className="lg:hidden w-full space-y-4 mb-6">
            <div className="relative">
               <input 
                  type="text" 
                  placeholder="Search tours..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white border border-stone-200 px-5 py-4 text-sm font-bold text-stone-900 focus:border-golf-500 outline-none shadow-sm"
                />
                <svg className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </div>
            <button 
              onClick={() => setIsFilterModalOpen(true)}
              className="w-full flex items-center justify-center gap-3 bg-stone-900 text-white py-4 font-black uppercase tracking-widest text-[10px] shadow-xl active:scale-95 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
              Filter Options
              { (selectedDestinations.length + selectedTypes.length + selectedMonths.length + selectedAirlines.length) > 0 && (
                <span className="w-5 h-5 bg-gold-500 rounded-full flex items-center justify-center text-[8px]">{selectedDestinations.length + selectedTypes.length + selectedMonths.length + selectedAirlines.length}</span>
              )}
            </button>
          </div>

          {/* Main Content */}
          <main className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-center bg-white border border-stone-200 px-6 py-4 shadow-sm mb-8 gap-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-stone-500">Showing</span>
                <span className="text-sm font-black text-stone-900">
                  <span className="text-golf-500">{filteredTours.length} Signature Packages</span>
                </span>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-widest hidden sm:block">Sort by:</span>
                  <div className="relative">
                    <select value={sortBy} onChange={(e) => setBy(e.target.value)} className="bg-transparent border-none py-1 pr-8 pl-0 text-sm font-bold text-stone-700 outline-none focus:ring-0 cursor-pointer appearance-none">
                      <option value="low-to-high">Price: Low to High</option>
                      <option value="high-to-low">Price: High to Low</option>
                    </select>
                    <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-stone-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
                
                <div className="hidden sm:flex items-center border border-stone-200">
                  <button onClick={() => setViewMode('list')} className={`p-2 transition-all duration-300 ${viewMode === 'list' ? 'bg-black text-white' : 'bg-white text-stone-400 hover:text-stone-900'}`}><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/></svg></button>
                  <button onClick={() => setViewMode('grid')} className={`p-2 transition-all duration-300 ${viewMode === 'grid' ? 'bg-black text-white' : 'bg-white text-stone-400 hover:text-stone-900'}`}><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"/></svg></button>
                </div>
              </div>
            </div>

            {filteredTours.length > 0 ? (
              <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "flex flex-col gap-6"}>
                {filteredTours.map((tour) => (
                  <Link to={`/tour/${tour.id}`} key={tour.id} className={`group flex flex-col bg-white border border-stone-200 transition-all duration-500 hover:shadow-2xl hover:border-stone-400 rounded-none relative overflow-hidden ${viewMode === 'list' ? 'md:flex-row' : ''}`}>
                    <div className={`overflow-hidden rounded-none relative bg-stone-100 flex-shrink-0 ${viewMode === 'list' ? 'aspect-[16/10] md:aspect-square md:w-[260px]' : 'aspect-[16/10]'}`}>
                      <img src={tour.heroImage} alt={tour.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out" />
                      <div className="absolute top-4 left-4 z-10 pointer-events-none">
                        <span className={`${getTagStyles(tour.category)} text-[8px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-xl`}>
                          {displayCategory(tour.category)}
                        </span>
                      </div>
                    </div>
                    <div className={`${viewMode === 'list' ? 'p-8' : 'p-8'} flex flex-col flex-grow bg-white text-left ${viewMode === 'list' ? 'md:justify-center' : ''}`}>
                      <div className="mb-4">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <svg className="w-3 h-3 text-gold-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" /></svg>
                          <span className="text-[9px] font-black text-gold-600 uppercase tracking-[0.2em] block">{tour.location}</span>
                        </div>
                        <h4 className="text-xl font-black leading-tight transition-colors duration-300 text-stone-900 group-hover:text-golf-500 tracking-tighter">{tour.shortName}</h4>
                      </div>
                      <div className={`grid grid-cols-2 gap-4 border-y border-stone-100 ${viewMode === 'list' ? 'mb-6 py-4' : 'mb-6 py-5'}`}>
                         <div><span className="text-[8px] font-black text-stone-400 uppercase tracking-widest block mb-1">Duration</span><span className="text-xs font-black text-stone-900 uppercase">{tour.durationLabel}</span></div>
                         <div><span className="text-[8px] font-black text-stone-400 uppercase tracking-widest block mb-1">Departure</span><span className="text-xs font-black text-stone-900 uppercase">{tour.departureDate}</span></div>
                      </div>
                      <div className="mt-auto flex items-end justify-between">
                        <div className="flex flex-col">
                          <span className="text-[8px] font-black text-stone-400 uppercase tracking-widest mb-1">Package From</span>
                          <span className="text-2xl font-black text-stone-950">SGD {tour.priceFrom}</span>
                        </div>
                        <div className="w-12 h-12 flex items-center justify-center bg-golf-500 border border-golf-500 transition-all duration-300 text-white group-hover:bg-black group-hover:border-black shadow-lg">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-40 bg-white border border-stone-200 border-dashed animate-fade-in">
                <h3 className="text-xl font-black text-stone-300 uppercase tracking-widest mb-4">No matching tours found</h3>
                <p className="text-stone-400 font-medium text-sm">Try adjusting your filters to explore more of our collection.</p>
                <button onClick={clearFilters} className="mt-8 text-gold-500 font-black uppercase tracking-widest text-[10px] border-b-2 border-gold-100 hover:border-gold-500 transition-all pb-1">Reset All Filters</button>
              </div>
            )}
          </main>
        </div>
      </SectionContainer>

      {/* Mobile Filter Modal */}
      {isFilterModalOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden animate-fade-in">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsFilterModalOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col animate-fade-in transform transition-transform duration-300">
            {/* Header */}
            <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-stone-50">
               <h3 className="text-xs font-black uppercase tracking-widest text-stone-900">Filter Collections</h3>
               <button onClick={() => setIsFilterModalOpen(false)} className="p-2 text-stone-400 hover:text-stone-900 transition-colors">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
               </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
              <FilterContent />
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-stone-100 bg-white space-y-4">
              <button 
                onClick={() => setIsFilterModalOpen(false)}
                className="w-full bg-golf-500 text-white py-5 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl"
              >
                Show Results ({filteredTours.length})
              </button>
              <button 
                onClick={clearFilters}
                className="w-full text-stone-400 text-[10px] font-black uppercase tracking-widest hover:text-red-500 transition-colors"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourPackages;
