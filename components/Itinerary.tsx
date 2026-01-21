
import React, { useState } from 'react';
import SectionContainer from './SectionContainer';
import { ItineraryItem } from '../types';

interface ItineraryProps {
  itinerary: ItineraryItem[];
}

const Itinerary: React.FC<ItineraryProps> = ({ itinerary }) => {
  // Initialize with Day 1 (index 0) expanded as per request
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
    <div id="itinerary" className="bg-stone-50 scroll-mt-28 border-y border-stone-200">
      <SectionContainer>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.4em] mb-4">Journey</h2>
            <h3 className="text-4xl md:text-5xl font-black text-golf-900 tracking-tight">Daily Itinerary</h3>
          </div>
          <button 
            onClick={handleToggleAll}
            className="text-[10px] font-black uppercase tracking-[0.2em] text-golf-600 hover:text-white hover:bg-golf-600 transition-all border border-stone-200 px-6 py-3 rounded-lg bg-white shadow-sm"
          >
            {allExpanded ? 'Collapse All' : 'Expand All'}
          </button>
        </div>

        {/* Itinerary Accordion List */}
        <div className="space-y-6">
          {itinerary.map((item, index) => {
            const isExpanded = expandedDays.has(index);
            
            return (
              <div 
                key={index} 
                className={`bg-white border transition-all duration-500 overflow-hidden rounded-2xl ${
                  isExpanded ? 'border-stone-300 shadow-xl' : 'border-stone-200 hover:border-stone-300 shadow-sm'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button 
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                  onClick={() => toggleDay(index)}
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <div className="flex flex-col items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-stone-50 border border-stone-200 rounded-xl group-hover:bg-golf-50 transition-colors">
                      <span className="text-[8px] font-black text-stone-400 uppercase tracking-widest mb-0.5">DAY</span>
                      <span className="text-xl md:text-3xl font-black text-golf-900">{(index + 1).toString().padStart(2, '0')}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[10px] font-black text-gold-600 uppercase tracking-widest">{item.day}</span>
                        <span className="text-stone-300 font-light text-[10px]">|</span>
                        <span className="text-[10px] font-bold text-stone-400">{item.date}</span>
                      </div>
                      <h4 className="text-xl md:text-3xl font-black text-stone-900 tracking-tight leading-tight">{item.title}</h4>
                    </div>
                  </div>
                  
                  <div className={`w-10 h-10 rounded-full border border-stone-100 flex items-center justify-center transition-transform duration-500 ${isExpanded ? 'rotate-180 bg-stone-50' : 'bg-white'}`}>
                    <svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>

                {/* Expanded Content Area */}
                <div 
                  className={`transition-all duration-700 ease-in-out ${
                    isExpanded ? 'max-h-[1500px] opacity-100 border-t border-stone-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 md:p-12 lg:p-16">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                      {/* Image on the Left */}
                      <div className="relative group/img overflow-hidden rounded-xl shadow-lg">
                        <div className="aspect-[16/10] overflow-hidden bg-stone-100">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105"
                          />
                        </div>
                        {item.highlight && (
                          <div className="absolute top-6 left-6">
                            <span className="bg-white/95 backdrop-blur-md text-stone-900 text-[9px] font-black px-4 py-2 rounded-lg shadow-xl tracking-widest uppercase border border-stone-100">
                              {item.highlight}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Description / Activities on the Right */}
                      <div className="flex flex-col">
                        <h5 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.3em] mb-8">Planned Activities</h5>
                        <ul className="space-y-6">
                          {item.activities.map((activity, i) => (
                            <li key={i} className="flex items-start gap-5 group/item">
                              <div className="mt-2 w-3 h-3 rounded-full bg-golf-500 flex-shrink-0" />
                              <p className="text-stone-700 leading-relaxed font-medium text-base md:text-lg opacity-90 group-hover/item:opacity-100 transition-opacity">
                                {activity}
                              </p>
                            </li>
                          ))}
                        </ul>

                        {item.flightNote && item.flightNote.length > 0 && (
                          <div className="mt-12 p-8 bg-stone-50 border border-stone-100 rounded-xl">
                            <div className="flex items-center gap-3 mb-4">
                              <svg className="w-4 h-4 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-stone-500">Logistics Note</span>
                            </div>
                            <ul className="space-y-2">
                              {item.flightNote.map((note, idx) => (
                                <li key={idx} className="text-sm font-bold text-stone-900 tracking-tight opacity-80">
                                  {note}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Footer */}
        <div className="mt-20 pt-10 border-t border-stone-200 text-center">
          <p className="text-[10px] text-stone-400 font-bold uppercase tracking-[0.2em] mb-4">Itinerary Management</p>
          <p className="text-[11px] text-stone-400 max-w-2xl mx-auto leading-relaxed uppercase tracking-widest font-medium">
            *Sequence may be adjusted based on local conditions, tee times, or operational necessities to ensure the best possible experience for our guests.
          </p>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Itinerary;
