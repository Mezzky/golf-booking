import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Itinerary from '../components/Itinerary';
import FlightRecommendation from '../components/FlightRecommendation';
import Accommodation from '../components/Accommodation';
import Pricing from '../components/Pricing';
import { TOURS } from '../data';

const Tour: React.FC = () => {
  const { tourId } = useParams<{ tourId: string }>();
  const tour = tourId ? TOURS[tourId] : null;

  if (!tour) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Hero tour={tour} />
      <Highlights highlights={tour.highlights} tourId={tour.id} />
      <Itinerary itinerary={tour.itinerary} />
      
      {tour.flightDetails && (
        <FlightRecommendation flightDetails={tour.flightDetails} />
      )}
      
      <Accommodation accommodation={tour.accommodation} />
      <Pricing 
        pricing={tour.pricing} 
        inclusions={tour.inclusions} 
        exclusions={tour.exclusions} 
      />
    </>
  );
};

export default Tour;