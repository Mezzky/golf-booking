import React, { useState } from 'react';
import SectionContainer from './SectionContainer';
import { ItineraryItem } from '../types';

interface ItineraryProps {
  itinerary: ItineraryItem[];
}

const Itinerary: React.FC<ItineraryProps> = ({ itinerary }) => {
  // Initialize with Day 1 (index 0) expanded
  const [expandedDays, setExpandedDays] = useState<Set<number>>(new Set([0]));

  const toggleDay = (index: number) => {
    setExpandedDays(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const allExpanded = expandedDays.size === itinerary.length;

  const handleToggleAll = () => {
    if (allExpanded) {
      setExpandedDays(new Set());
    } else {
      setExpandedDays(new Set(itinerary.map((_, i) => i)));
    }
  };

  return (
    <div id="itinerary" className="bg-golf-50 scroll-mt-28 border-y border-golf-100/50">
      <SectionContainer>
        {/* Standardized Section Header - Left Alignment */}
        <div className="text-left mb-12 md:mb-24">
          <h2 className="text-4xl font-extrabold text-golf-900 mb-4 tracking-tight">Itinerary</h2>
          <div className="w-24 h-1 bg-gold-500 rounded-none mb-8"></div>
          
          {/* Mobile Accordion Control (Single Toggle) - Left Alignment */}
          <div className="flex md:hidden justify-start items-center">
            <button 
              onClick={handleToggleAll}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-golf-600 hover:text-golf-800 transition-colors border border-golf-200 px-6 py-2 rounded-none bg-white shadow-sm"
            >
              {allExpanded ? 'Collapse All' : 'Expand All'}
            </button>
          </div>
        </div>

        {/* Itinerary Items Container */}
        <div className="space-y-6 md:space-y-32">
          {itinerary.map((item, index) => {
            const isExpanded = expandedDays.has(index);
            
            return (
              <div 
                key={index} 
                className={`group flex flex-col gap-6 md:gap-12 transition-all duration-300 ${isExpanded && 'md:bg-transparent'}`}
              >
                {/* Mobile Card-Style Header */}
                <div 
                  className={`md:hidden flex gap-4 p-4 bg-white rounded-none border transition-all duration-300 cursor-pointer select-none ${isExpanded ? 'border-golf-200 shadow-md ring-1 ring-golf-100' : 'border-golf-100 shadow-sm'}`}
                  onClick={() => toggleDay(index)}
                >
                  {/* Square Badge (Consistent with Desktop) - Sharp Corners */}
                  <div className="flex flex-col items-center justify-center w-16 h-16 bg-white rounded-none border border-golf-100 flex-shrink-0">
                    <span className="text-[8px] font-black text-gold-600 uppercase tracking-[0.2em] mb-0.5">DAY</span>
                    <span className="text-2xl font-black text-golf-900 tracking-tight">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>

                  <div className="flex-1 pt-1">
                    <div className="flex justify-between items-start mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-gold-600 uppercase tracking-widest">{item.day}</span>
                        <span className="text-golf-200 font-light text-[10px]">|</span>
                        <span className="text-[10px] font-bold text-golf-400">{item.date}</span>
                      </div>
                      
                      {/* Expand/Collapse Icon */}
                      <div className={`transition-transform duration-300 transform p-1 rounded-full bg-gray-50 border border-gray-100 ${isExpanded ? 'rotate-180' : ''}`}>
                        <svg className="w-4 h-4 text-golf-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-extrabold text-golf-900 tracking-tight leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Desktop Header (Hidden on Mobile) */}
                <div 
                  className="hidden md:flex items-start gap-8 border-b border-golf-200/30 pb-8 cursor-default select-none"
                >
                  {/* Day Badge Component - Sharp Corners */}
                  <div className="flex flex-col items-center justify-center w-24 h-24 bg-white rounded-none border border-golf-100 flex-shrink-0">
                    <span className="text-[10px] font-black text-gold-600 uppercase tracking-[0.25em] mb-1">DAY</span>
                    <span className="text-4xl font-black text-golf-900 tracking-tight">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>

                  <div className="pt-2">
                    <h3 className="text-xl md:text-3xl font-extrabold text-golf-900 tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="text-sm font-bold text-gold-600 uppercase tracking-widest">{item.day}</span>
                      <span className="text-golf-300 font-light select-none">|</span>
                      <span className="text-sm font-bold text-golf-400">{item.date}</span>
                    </div>
                  </div>
                </div>

                {/* Day Content Area */}
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start px-2 md:px-0 ${isExpanded ? 'block' : 'hidden md:grid'}`}>
                  
                  {/* Image Component - Fixed 16:9 Aspect Ratio - Sharp Corners */}
                  <div className="lg:col-span-7">
                    <div className="relative aspect-video rounded-none overflow-hidden shadow-2xl shadow-golf-900/10">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      {item.highlight && (
                        <div className="absolute top-6 left-6">
                          {/* Tag - Rounded as requested */}
                          <span className="bg-white/95 backdrop-blur-md text-golf-900 text-[10px] font-black px-4 py-2 rounded-full shadow-xl tracking-widest uppercase border border-white/20">
                            {item.highlight}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Activities List */}
                  <div className="lg:col-span-5 pt-2">
                    <h4 className="text-xs font-black text-golf-400 uppercase tracking-[0.2em] mb-6">Day Activities</h4>
                    <ul className="space-y-3">
                      {item.activities.map((activity, i) => (
                        <li key={i} className="flex items-start gap-4">
                          {/* Bullet - Circle as requested */}
                          <div className="mt-1.5 w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-golf-500" />
                          </div>
                          <p className="text-gray-700 leading-relaxed font-semibold text-base md:text-lg">
                            {activity}
                          </p>
                        </li>
                      ))}
                    </ul>

                    {item.flightNote && item.flightNote.length > 0 && (
                      <div className="mt-10 p-6 bg-white/60 backdrop-blur-sm rounded-none border border-dashed border-golf-200">
                        <div className="mb-3">
                          <span className="text-[10px] font-black uppercase tracking-widest text-golf-400">Recommended Flight:</span>
                        </div>
                        <ul className="space-y-2">
                          {item.flightNote.map((note, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                              {/* Flight note dot - Circle for consistency */}
                              <div className="w-1.5 h-1.5 rounded-full bg-gold-600 flex-shrink-0 shadow-sm shadow-gold-600/50" />
                              <span className="text-sm font-bold text-golf-900 leading-tight">
                                {note}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Footer - Reduced Spacing */}
        <div className="mt-10 md:mt-16 pt-10 md:pt-16 border-t border-golf-100 text-center">
          <div className="inline-flex flex-col items-center mb-6">
            <div className="w-12 h-1 bg-gold-400/30 mb-6 rounded-none"></div>
            <p className="text-golf-300 font-bold uppercase tracking-[0.3em] text-xs">
              End of Itinerary
            </p>
          </div>
          <p className="text-xs text-red-500 font-medium max-w-3xl mx-auto leading-relaxed">
            *Please note that the itinerary sequence may be adjusted due to weather or operational considerations, with all changes made in the best interests of guest safety and overall experience.
          </p>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Itinerary;