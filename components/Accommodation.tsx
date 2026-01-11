
import React from 'react';
import SectionContainer from './SectionContainer';
import { AccommodationItem } from '../types';

interface AccommodationProps {
  accommodation: AccommodationItem[];
}

const Accommodation: React.FC<AccommodationProps> = ({ accommodation }) => {
  const isSingle = accommodation.length === 1;

  return (
    <div id="accommodation" className="bg-white scroll-mt-28">
      <SectionContainer>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-golf-900 mb-4 tracking-tight">Accommodation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">Rest and recharge in our hand-picked premium stays selected for their comfort and strategic locations.</p>
        </div>

        <div className={isSingle ? "flex justify-center" : "grid md:grid-cols-2 gap-8"}>
          {accommodation.map((hotel, index) => (
            <div 
              key={index} 
              className={`group rounded-none overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white border border-gray-100 ${isSingle ? 'max-w-2xl w-full' : ''}`}
            >
              <div className="h-64 overflow-hidden rounded-none">
                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-8">
                <div className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-2">{hotel.location}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{hotel.name}</h3>
                <ul className="space-y-2">
                    {hotel.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm font-medium">
                            <svg className="w-5 h-5 text-golf-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            {feature}
                        </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};

export default Accommodation;
