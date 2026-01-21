
import React from 'react';

export interface FlightInfo {
  airline: string;
  flightNumber: string;
  logo: string;
  origin: { code: string; city: string; time: string; date: string };
  destination: { code: string; city: string; time: string; date: string };
  duration: string;
  type: string;
}

export interface ItineraryItem {
  date: string;
  day: string;
  title: string;
  activities: string[];
  image: string;
  highlight?: string;
  flightNote?: string[];
}

export interface AccommodationItem {
  name: string;
  location: string;
  features: string[];
  image: string;
}

export interface HighlightItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TourStat {
  label: string;
  value: string;
}

export interface TourData {
  id: string;
  name: string;
  shortName: string;
  dates: string;
  heroImage: string;
  badgeText?: string;
  durationLabel: string;
  golfLabel: string;
  transportLabel: string;
  transportTitle?: string;
  category: string; // New field
  location: string; // New field
  departureDate: string; // New field
  priceFrom: string; // New field
  stats?: TourStat[];
  highlights: HighlightItem[];
  itinerary: ItineraryItem[];
  accommodation: AccommodationItem[];
  pricing: {
    twin: string;
    single: string;
    note: string;
    registrationLink: string;
    groups?: Array<{
      name: string;
      twin: string;
      single: string;
    }>;
  };
  inclusions: string[];
  exclusions: string[];
  flightDetails?: FlightInfo[];
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag?: string;
}

export interface DestinationItem {
  country: string;
  count: string;
  image: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  initials: string;
}

export interface BlogPostItem {
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}
