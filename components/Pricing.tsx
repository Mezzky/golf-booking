
import React from 'react';
import SectionContainer from './SectionContainer';

interface PricingProps {
  pricing: { 
    twin: string; 
    single: string; 
    note: string;
    registrationLink: string;
    groups?: Array<{ name: string; twin: string; single: string }>;
  };
  inclusions: string[];
  exclusions: string[];
}

const Pricing: React.FC<PricingProps> = ({ pricing, inclusions, exclusions }) => {
  return (
    <div id="pricing" className="bg-golf-900 text-white scroll-mt-28">
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
                <h3 className="text-3xl font-bold mb-8 text-gold-400 tracking-tight">Package Includes</h3>
                <ul className="space-y-4 mb-12">
                    {inclusions.map((item, i) => {
                        const isLabel = item.toLowerCase() === "for golfers" || item.toLowerCase() === "for non-golfers";
                        
                        if (isLabel) {
                          return (
                            <li key={i} className="pt-4 first:pt-0">
                              <span className="text-gray-400 font-medium text-sm select-none tracking-wide">{item}</span>
                            </li>
                          );
                        }

                        return (
                          <li key={i} className="flex gap-4 items-start">
                              <div className="p-1 bg-gold-500/20 rounded-none mt-1">
                                  <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path></svg>
                              </div>
                              <span className="text-gray-300 leading-relaxed font-medium">{item}</span>
                          </li>
                        );
                    })}
                </ul>
                <h3 className="text-2xl font-bold mb-4 text-red-400 tracking-tight">Excludes</h3>
                <ul className="space-y-2">
                    {exclusions.map((item, i) => (
                        <li key={i} className="flex gap-4 items-center text-gray-400 text-sm font-medium">
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-none"></div>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-white text-gray-900 rounded-none p-8 md:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-none -mr-8 -mt-8"></div>
                <h3 className="text-3xl font-bold mb-2 tracking-tight">Pricing</h3>
                <p className="text-gray-500 mb-8 font-medium">All rates are per person in SGD</p>
                
                <div className="space-y-8 mb-8">
                    {pricing.groups ? (
                      pricing.groups.map((group, idx) => (
                        <div key={idx} className="space-y-4">
                          <h4 className="text-sm font-black text-golf-500 uppercase tracking-widest">{group.name}</h4>
                          <div className="grid gap-4">
                            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-none border border-gray-100">
                                <span className="font-semibold text-gray-600">Twin Sharing</span>
                                <span className="font-bold text-xl text-golf-800 tracking-tight">{group.twin}</span>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-none border border-gray-100">
                                <span className="font-semibold text-gray-600">Single Occupancy</span>
                                <span className="font-bold text-xl text-golf-800 tracking-tight">{group.single}</span>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="space-y-6">
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-none border border-gray-100">
                            <span className="font-semibold text-gray-600">Twin Sharing</span>
                            <span className="font-bold text-2xl text-golf-800 tracking-tight">{pricing.twin}</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-none border border-gray-100">
                            <span className="font-semibold text-gray-600">Single Occupancy</span>
                            <span className="font-bold text-2xl text-golf-800 tracking-tight">{pricing.single}</span>
                        </div>
                      </div>
                    )}
                </div>

                <div className="text-center text-xs text-red-500 mb-8 font-medium">*{pricing.note}</div>
                <a id="register" href={pricing.registrationLink} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-golf-500 hover:bg-golf-600 text-white font-bold py-4 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 uppercase tracking-widest">
                    Online Registration Form
                </a>
                <div className="mt-6 text-center">
                     <p className="text-sm text-gray-500 font-medium">Or speak with our consultants</p>
                     <a href="https://api.whatsapp.com/send/?phone=6590011558&text=Hello+Welcome+to+GolfBooking.sg.+How+may+we+assist+you+today%3F&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="font-bold text-lg text-golf-800 hover:text-golf-600 transition-colors inline-block uppercase tracking-widest text-sm mt-2">WhatsApp Chat</a>
                </div>
            </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Pricing;
