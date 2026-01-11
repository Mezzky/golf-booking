
import React from 'react';
import SectionContainer from './SectionContainer';
import { IMAGES } from '../data';
import { FlightInfo } from '../types';

interface FlightProps {
  flightDetails: FlightInfo[];
}

const FlightRecommendation: React.FC<FlightProps> = ({ flightDetails }) => {
  const isMultiple = flightDetails.length > 1;

  return (
    <div className="bg-white border-b border-gray-100">
      <SectionContainer>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-golf-900 mb-4 tracking-tight">
            {isMultiple ? 'Suggested Flight Details' : 'Suggested Return Flight'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium text-base">
            Indicative flight details shown for reference. Please contact us should you require booking assistance or alternative options.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {flightDetails.map((flight, index) => (
            <div key={index} className="bg-white rounded-none shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="p-6 border-b border-gray-50 flex items-center justify-between bg-gray-50/50">
                  <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-none flex items-center justify-center overflow-hidden shadow-md border border-gray-100">
                         <img src={flight.logo} alt={flight.airline} className="w-full h-full object-cover" />
                      </div>
                      <div>
                          <h3 className="font-bold text-gray-900 text-lg leading-tight">{flight.airline}</h3>
                          <p className="text-sm text-gray-500 font-medium">{flight.flightNumber}</p>
                      </div>
                  </div>
                  <div className="bg-green-100 text-green-700 px-4 py-1.5 rounded-none text-xs font-bold uppercase tracking-wider shadow-sm">
                      Recommended
                  </div>
              </div>

              <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
                      <div className="text-center md:text-left min-w-[120px]">
                          <div className="text-4xl font-extrabold text-golf-900 mb-1 tracking-tight">{flight.origin.code}</div>
                          <div className="text-sm text-gray-400 font-medium mb-3">{flight.origin.city}</div>
                          <div className="text-2xl font-bold text-gray-800">{flight.origin.time}</div>
                          <div className="text-sm text-gray-400 font-medium mt-1">{flight.origin.date}</div>
                      </div>

                      <div className="flex-1 w-full flex flex-col items-center px-4">
                          <span className="text-sm font-bold text-gray-500 mb-2">{flight.duration}</span>
                          <div className="w-full relative flex items-center justify-center">
                              <div className="h-[2px] w-full bg-gray-200 absolute"></div>
                              <div className="z-10 bg-white p-2 rounded-none border border-gray-100 shadow-sm">
                                  <img src={IMAGES.planeIcon} alt="Path" className="w-6 h-6 object-contain" />
                              </div>
                          </div>
                          <span className="text-xs font-medium text-gray-400 mt-2">{flight.type}</span>
                      </div>

                      <div className="text-center md:text-right min-w-[120px]">
                          <div className="text-4xl font-extrabold text-golf-900 mb-1 tracking-tight">{flight.destination.code}</div>
                          <div className="text-sm text-gray-400 font-medium mb-3">{flight.destination.city}</div>
                          <div className="text-2xl font-bold text-gray-800">{flight.destination.time}</div>
                          <div className="text-sm text-gray-400 font-medium mt-1">{flight.destination.date}</div>
                      </div>
                  </div>
              </div>
              
              <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                  <p className="text-xs text-red-500 font-medium">
                      *Flight tickets are not included in the package and must be booked separately.
                  </p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};

export default FlightRecommendation;
