
import { TourData, ServiceItem, DestinationItem, TestimonialItem, BlogPostItem } from './types';
import React from 'react';

export const IMAGES = {
  logo: "https://cdn.sanity.io/images/osg5upb6/production/79b3a3f9c509fac52ff591ea136f92b98e1eaaf5-422x420.png",
  footerLogo: "https://cdn.sanity.io/images/osg5upb6/production/345e7c0c4260728121b79a075ca6a0f9e5cd107d-1291x420.png",
  sqLogo: "https://cdn.sanity.io/images/osg5upb6/production/f1fc947dcedae2ea89b960c433e641b1f74e4ac6-400x400.jpg",
  tkLogo: "https://cdn.sanity.io/images/osg5upb6/production/091af9efc37bd56d93ccda0d31023f4dc712b590-400x400.jpg",
  planeIcon: "https://cdn.sanity.io/images/osg5upb6/production/67dee4d9ad0d9d233df25292b1d84c54f0a354bb-400x400.png",
  heroLanding: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=2000",
  hmsImage: "https://cdn.sanity.io/images/iqsqxgxl/production/be76b0c679be20d4a4c5cad3630169927ad744ec-1920x2400.jpg",
  aboutImage: "https://cdn.sanity.io/images/iqsqxgxl/production/cedd21b9cd4a3acb7bc21e8eb1f90e81e1b6896f-1920x2880.jpg",
  finalCtaBg: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=2000",
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Tee Time Booking",
    description: "Instant access to premier golf courses with exclusive rates and seamless booking.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    tag: "Instant Confirm"
  },
  {
    title: "Handicap Maintenance",
    description: "Official USGA/SGA handicap indexing and maintenance service for amateur golfers.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    tag: "Official Partner"
  },
  {
    title: "Golf Transport",
    description: "Luxury coach and private transfers tailored specifically for golfers and their gear.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    tag: "Premium Fleet"
  }
];

export const DESTINATIONS: DestinationItem[] = [
  { country: "Malaysia", count: "12+ Packages", image: "https://cdn.sanity.io/images/iqsqxgxl/production/d0b27d89e23c4bfd50b399a29b253c899dc92792-1920x2400.jpg" },
  { country: "Thailand", count: "8+ Packages", image: "https://cdn.sanity.io/images/iqsqxgxl/production/729139609ef7639c763387604f1c319d4e093472-1920x1280.jpg" },
  { country: "Türkiye", count: "4+ Packages", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800" },
  { country: "Indonesia", count: "6+ Packages", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800" },
];

export const TESTIMONIALS: TestimonialItem[] = [
  { name: "Robert Tan", role: "Frequent Golfer", content: "The best golf service in Singapore. The KLGCC tour was seamless and the hotel choice was perfect.", initials: "RT" },
  { name: "Sarah Lim", role: "Beginner", content: "Setting up my handicap was so easy with Golfbooking.sg. They handled everything professionally with the SGA.", initials: "SL" },
  { name: "James Wilson", role: "Corporate Client", content: "Outstanding transportation service. Our corporate retreat to Melaka was handled with absolute precision.", initials: "JW" },
  { name: "David Chen", role: "Handicap Client", content: "Exceptional attention to detail. Every course on the Malaysia tour was a gem, and the transport was always on time.", initials: "DC" },
  { name: "Amanda Phua", role: "Solo Golfer", content: "As a solo golfer, I felt completely welcomed. The coordination was flawless and I made great friends on the trip.", initials: "AP" },
  { name: "Kelvin Seah", role: "WHS Member", content: "The HMS service is a lifesaver. No more tracking scores manually; it's all done for me via their seamless portal.", initials: "KS" },
  { name: "Michelle Wong", role: "Travel Enthusiast", content: "Golfing in Türkiye was a dream. The resort was 5-star and the Sultan course was world-class. Highly recommended!", initials: "MW" },
];

export const BLOG_POSTS: BlogPostItem[] = [
  { title: "Top 5 Courses in KL", category: "Guides", date: "Jan 2026", excerpt: "Discover where to tee off in the heart of Malaysia's capital.", image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=800" },
  { title: "WHS Explained", category: "Education", date: "Dec 2025", excerpt: "Everything you need to know about the new World Handicap System.", image: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&q=80&w=800" },
  { title: "Golfing in Autumn", category: "Travel", date: "Nov 2025", excerpt: "Why Belek, Türkiye is the ultimate destination for October golfing.", image: "https://images.unsplash.com/photo-1622321594246-097f48a1202e?auto=format&fit=crop&q=80&w=800" },
];

export const TOURS: Record<string, TourData> = {
  golf: {
    id: 'golf',
    name: "KL & Melaka Golf & Shopping Getaway 2026",
    shortName: "CNY KL & Melaka",
    dates: "19 - 23 January 2026",
    heroImage: "https://cdn.sanity.io/images/osg5upb6/production/057b62ea739004f08d27874725a543a32dbce26d-2461x1339.jpg",
    badgeText: "CHINESE NEW YEAR SPECIAL",
    durationLabel: "5D4N",
    golfLabel: "4 Rounds (18H)",
    transportLabel: "Luxury Coach",
    transportTitle: "Transport",
    stats: [
      { label: "Duration", value: "5D4N" },
      { label: "Golf", value: "4 Rounds (18H)" },
      { label: "Transport", value: "Luxury Coach" }
    ],
    highlights: [
      {
        title: "Premier Golf",
        description: "Tee off at 4 of Malaysia's premier courses including KLGCC, home to the Malaysian Open.",
        icon: <img src="https://cdn.sanity.io/images/osg5upb6/production/a698908958edf8d2df6b05c6a005de34e933b686-200x200.png" alt="Golf" className="h-10 w-10" />
      },
      {
        title: "Premium Travel",
        description: "Travel in comfort with a luxury coach and stay in hand-picked 4-star superior accommodations.",
        icon: <img src="https://cdn.sanity.io/images/osg5upb6/production/884c99cf69a089cbf2e218df376b311379bd4178-200x200.png" alt="Travel" className="h-10 w-10" />
      },
      {
        title: "Peranakan Dining",
        description: "Welcome dinner at Madam Lee’s Restaurant in Melaka, served with one of the town’s best chendol.",
        icon: <img src="https://cdn.sanity.io/images/osg5upb6/production/5485bee82189b5f5dd7794376e3027757b9a8292-200x200.png" alt="Dining" className="h-10 w-10" />
      },
      {
        title: "Night Indulgence",
        description: "Experience Jalan Alor food street & Musang King durian, plus shopping in Kuala Lumpur.",
        icon: <img src="https://cdn.sanity.io/images/osg5upb6/production/016fa15e9354ac6e7633b0427c7afa113feda274-200x200.png" alt="Nightlife" className="h-10 w-10" />
      }
    ],
    itinerary: [
      {
        date: "19 Jan 2026",
        day: "Monday",
        title: "Departure & Ayer Keroh",
        image: "https://cdn.sanity.io/images/osg5upb6/production/f508578a3b5eb3e161cba3eb20f6c0ad083d9432-800x468.jpg",
        activities: [
          "Depart Singapore in the morning via Luxury Coach",
          "Golf: Afternoon tee-off at Ayer Keroh Country Club",
          "Hotel: Check in to Swan Garden Hotel 4*",
          "Dinner @ Madam Lee's Restaurant (Authentic Nyonya cuisine)",
          "Optional: Joinker Walk Night Market & Melaka River Cruise"
        ]
      },
      {
        date: "20 Jan 2026",
        day: "Tuesday",
        title: "Kota Seriemas & Transfer to KL",
        image: "https://cdn.sanity.io/images/osg5upb6/production/a50056178a6914a06239377057ad4deec75e47f6-800x468.jpg",
        activities: [
          "After breakfast, check out and depart for Kota Seriemas Golf Course",
          "Tee off in the morning at Kota Seriemas",
          "Dinner at Restoran Hee Lai Ton Semenyih",
          "Transfer to KL & Check-in to Park Royal Serviced Suite, Bukit Bintang 4*",
          "Nightlife: Jalan Alor Food Street & Pavilion Shopping Mall"
        ]
      },
      {
        date: "21 Jan 2026",
        day: "Wednesday",
        title: "Shopping & Culture",
        image: "https://cdn.sanity.io/images/osg5upb6/production/9b3bc379535223cf1f8cebcce60ea88f15925a87-800x468.jpg",
        activities: [
          "After Breakfast, Shopping at KLCC, Pavilion, and Bukit Bintang",
          "Musang King Feasting at Famous SS2 Durian Stall in the afternoon",
          "Dinner Recommendation: Bijan Bar & Restaurant (Modern Malay Fine Dining) or Tamarind Springs"
        ]
      },
      {
        date: "22 Jan 2026",
        day: "Thursday",
        title: "KLGCC - Home of Malaysian Open",
        highlight: "Award-winning Course",
        image: "https://cdn.sanity.io/images/osg5upb6/production/cbf329f7bd440c19deb9c8d082eaeb2154710e8e-800x468.jpg",
        activities: [
          "After Breakfast, depart for KLGCC",
          "Kuala Lumpur Golf & Country Club West Course (PM) - Home of Malaysian Open",
          "After golf, Dinner at the Clubhouse"
        ]
      },
      {
        date: "23 Jan 2026",
        day: "Friday",
        title: "Kota Permai & Return",
        image: "https://cdn.sanity.io/images/osg5upb6/production/a78b8f09b900b86dcaea2f4a68ed246aa75594a0-800x468.jpg",
        activities: [
          "After Breakfast, depart for Golf Course",
          "Kota Permai (AM) – One of the Best Clubs in Kuala Lumpur",
          "Lunch at the Clubhouse",
          "Transfer to Kuala Lumpur Intl Airport T1"
        ],
        flightNote: [
          "Singapore Airlines (SQ125)",
          "Depart KLIA @ 20:30",
          "Arrive Changi @ 21:45"
        ]
      }
    ],
    accommodation: [
      {
        name: "Swan Garden Resort Hotel",
        location: "Melaka (19-20 Jan)",
        image: "https://cdn.sanity.io/images/osg5upb6/production/28853f46352c0b90bc50d70ae1b20d20b463a1b0-921x484.jpg",
        features: ["1 night stay in Superior King/Twin - 4★", "Centrally located with many restaurants and massage spas around the vicinity"]
      },
      {
        name: "PARKROYAL Serviced Suites",
        location: "Kuala Lumpur (20-23 Jan)",
        image: "https://cdn.sanity.io/images/osg5upb6/production/751617d1cc8d5a056285d34b39f7c83898d2cf04-921x484.jpg",
        features: ["3 nights stay in Studio Suite - 4★", "Located at Bukit Bintang, excellent location for shopping and dining"]
      }
    ],
    pricing: { 
      twin: "SGD 1,178", 
      single: "SGD 1,398", 
      note: "A minimum of 20 pax is needed for the trip to be confirmed.",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeMckBxo162AGFQcyXEexO2b3mF8Z7MLxkh8KOg0uxCYAPHmw/viewform"
    },
    inclusions: [
      "Luxury Coach Transfer from Singapore to Melaka and KL",
      "Welcome Peranakan Dinner at Madam Lee's Restaurant",
      "1 night accommodation at Swan Garden Hotel/Resort 4*",
      "3 nights accommodation at Park Royal Serviced Suite 4*",
      "4 rounds of 18-hole golf (green fees, caddie & shared buggy)",
      "Daily breakfast",
      "Daily Ground transport for all golf activities, shopping and dinner until 9.30pm"
    ],
    exclusions: [
      "Air Ticket (Back from KL to Singapore)",
      "Caddie Tips",
      "Guide & Driver Tips",
      "Travel Insurance"
    ],
    flightDetails: [
      {
        airline: "Singapore Airlines",
        flightNumber: "SQ125",
        logo: IMAGES.sqLogo,
        origin: { code: "KUL", city: "Kuala Lumpur", time: "20:30", date: "23 Jan 2026" },
        destination: { code: "SIN", city: "Singapore", time: "21:45", date: "23 Jan 2026" },
        duration: "01h 15m",
        type: "Non-stop"
      }
    ]
  },
  turkey: {
    id: 'turkey',
    name: "Türkiye Golf Odyssey 2026",
    shortName: "Türkiye Golf Odyssey",
    dates: "22 – 29 October 2026",
    heroImage: "https://cdn.sanity.io/images/osg5upb6/production/b6c5ff7f9883b5facf0dd68df223d09abe640f85-2461x1339.jpg",
    badgeText: "AUTUMN 2026 EDITION",
    durationLabel: "8D7N",
    golfLabel: "4 Rounds (18H)",
    transportLabel: "Golf Course Only",
    transportTitle: "Transfers",
    stats: [
      { label: "Duration", value: "8D7N" },
      { label: "Golf", value: "4 Rounds (18H)" },
      { label: "Transfers", value: "Airport, Hotel & Golf Course" }
    ],
    highlights: [
      {
        title: "Premier Golf",
        description: "Four 18-hole rounds at Türkiye’s most acclaimed championship courses along the Mediterranean coast.",
        icon: <img src="https://cdn.sanity.io/images/osg5upb6/production/a698908958edf8d2df6b05c6a005de34e933b686-200x200.png" alt="Premier Golf" className="h-10 w-10" />
      },
      {
        title: "Luxury Resort",
        description: "Relax at an elegant golf resort offering refined comforts, leisure facilities and seamless downtime.",
        icon: <img src="https://cdn.sanity.io/images/osg5upb6/production/b6a34aaf7b45dc1d5a82afdc2a66b6d1e8023fcb-200x200.png" alt="Luxury Resort" className="h-10 w-10" />
      },
      {
        title: "Autumn Climate",
        description: "Mild October temperatures and clear skies, ideal for both golf and resort living.",
        icon: <img src="https://cdn.sanity.io/images/osg5upb6/production/47cf8b5c6baa776e1919b871dd3503050950caf1-200x200.png" alt="Autumn Climate" className="h-10 w-10" />
      },
      {
        title: "Turkish Heritage",
        description: "Explore Türkiye’s rich history through iconic landmarks, local traditions and cultural experiences.",
        icon: <img src="https://cdn.sanity.io/images/osg5upb6/production/ff83fcc5aa0c958fa686dbe0d0e745f22bc6c349-200x200.png" alt="Turkish Heritage" className="h-10 w-10" />
      }
    ],
    itinerary: [
      {
        date: "22 Oct 2026",
        day: "Thursday",
        title: "Arrival in Türkiye",
        image: "https://cdn.sanity.io/images/osg5upb6/production/f4e32365ea53d7dd3a7757f399e0c43dcb5d2f48-800x468.jpg",
        activities: [
          "Arrival at Antalya Airport and private transfer to your resort in Belek.",
          "Check-in and enjoy the resort facilities at leisure."
        ]
      },
      {
        date: "23 Oct 2026",
        day: "Friday",
        title: "Leisure Day",
        image: "https://cdn.sanity.io/images/osg5upb6/production/f3bfc42b0bbcb7565b321d21e5ba72ea82b5cc1c-800x468.jpg",
        activities: [
          "Free day to relax — explore the resort, spa, pools, beach, or nearby Belek town."
        ]
      },
      {
        date: "24 Oct 2026",
        day: "Saturday",
        title: "Round 1 - Pasha Golf Course",
        image: "https://cdn.sanity.io/images/osg5upb6/production/d352016b0d47715b595a41edca0dbae8261c5c93-800x468.jpg",
        activities: [
          "🏌️ 18 holes * 1 round",
          "A strategic course suitable for all skill levels, set amid pine forests."
        ]
      },
      {
        date: "25 Oct 2026",
        day: "Sunday",
        title: "Round 2 - Montgomerie Golf Course",
        image: "https://cdn.sanity.io/images/osg5upb6/production/1d5dbdf84d2bf1ee5b265981ae2195745512f31b-800x468.jpg",
        activities: [
          "🏌️ 18 holes * 1 round",
          "One of Türkiye’s most prestigious layouts — host of international tournaments."
        ]
      },
      {
        date: "26 Oct 2026",
        day: "Monday",
        title: "Leisure Day",
        image: "https://cdn.sanity.io/images/osg5upb6/production/5aa128aa547b5f735534d6a9204ed16c13c09f21-800x468.jpg",
        activities: [
          "Optional sightseeing, wellness treatments, or simply unwind at the resort."
        ]
      },
      {
        date: "27 Oct 2026",
        day: "Tuesday",
        title: "Round 3 - Kaya Golf Course",
        image: "https://cdn.sanity.io/images/osg5upb6/production/9406527c4043f58e85eb60da93e4879b82299fe5-800x468.jpg",
        activities: [
          "🏌️ 18 holes * 1 round",
          "A scenic parkland course with wide fairways and water features."
        ]
      },
      {
        date: "28 Oct 2026",
        day: "Wednesday",
        title: "Leisure Day",
        image: "https://cdn.sanity.io/images/osg5upb6/production/a5d7af3989b899e76dc5b0e8bf95fad0d078cdb0-800x468.jpg",
        activities: [
          "Enjoy your final full day in Belek — beach time, dining, or shopping."
        ]
      },
      {
        date: "29 Oct 2026",
        day: "Thursday",
        title: "Round 4 - Sultan Golf Course & Departure",
        image: "https://cdn.sanity.io/images/osg5upb6/production/06635b19cab27d1efd02cf49451011011f606465-800x468.jpg",
        activities: [
          "🏌️ 18 holes * 1 round",
          "Morning round followed by transfer to Antalya Airport for departure."
        ]
      }
    ],
    accommodation: [
      {
        name: "Sirene Belek Hotel",
        location: "Belek (22–29 Oct)",
        image: "https://cdn.sanity.io/images/osg5upb6/production/9f196ed1076b0a77528709f1ce1d7c4626a0f1e4-1260x839.jpg",
        features: [
          "7 nights stay in Standard Junior Suite (Garden View) – 5★",
          "Spacious suites with modern comforts",
          "Resort amenities include pools, spa, dining outlets and beach access",
          "Located minutes from Belek’s top golf courses"
        ]
      }
    ],
    pricing: { 
      twin: "SGD 3,500", 
      single: "SGD 4,470", 
      note: "A minimum of 20 pax is needed for the trip to be confirmed.",
      registrationLink: "https://forms.gle/f4SzrikbX8Fqgfdq9",
      groups: [
        { name: "Golfers", twin: "SGD 3,500", single: "SGD 4,470" },
        { name: "Non-Golfers", twin: "SGD 2,400", single: "SGD 3,430" }
      ]
    },
    inclusions: [
      "For Golfers",
      "7 nights accommodation at Sirene Belek Hotel",
      "4 rounds of 18-hole gold",
      "Return airport transfers",
      "Transfers between hotel and golf courses",
      "For Non-Golfers",
      "7 nights accommodation at Sirene Belek Hotel",
      "Return airport transfers"
    ],
    exclusions: [
      "Air Tickets",
      "Caddie Tips",
      "Guide & Driver Tips",
      "Travel Insurance"
    ],
    flightDetails: [
      {
        airline: "Turkish Airlines",
        flightNumber: "TK249 & TK2446",
        logo: IMAGES.tkLogo,
        origin: { code: "SIN", city: "Singapore", time: "10:25 AM", date: "22 Oct 2026" },
        destination: { code: "AYT", city: "Antalya", time: "8:00 PM", date: "22 Oct 2026" },
        duration: "14h 35m",
        type: "1 stop in Istanbul"
      },
      {
        airline: "Turkish Airlines",
        flightNumber: "TK2415 & TK208",
        logo: IMAGES.tkLogo,
        origin: { code: "AYT", city: "Antalya", time: "2:15 PM", date: "29 Oct 2026" },
        destination: { code: "SIN", city: "Singapore", time: "8:45 AM", date: "30 Oct 2026" },
        duration: "13h 30m",
        type: "1 stop in Istanbul"
      }
    ]
  },
  chiangmai: {
    id: 'chiangmai',
    name: "Chiang Mai Lanna Golf & Heritage",
    shortName: "Chiang Mai Lanna",
    dates: "12 - 18 May 2026",
    heroImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000",
    durationLabel: "7D6N",
    golfLabel: "3 Rounds (18H)",
    transportLabel: "Private Van",
    highlights: [{ title: "Lanna Style", description: "Experience Northern Thai culture.", icon: null }],
    itinerary: [],
    accommodation: [],
    pricing: { twin: "SGD 1,450", single: "SGD 1,850", note: "", registrationLink: "" },
    inclusions: [],
    exclusions: []
  },
  bali: {
    id: 'bali',
    name: "Bali Island Greens & Shores",
    shortName: "Bali Greens",
    dates: "05 - 11 June 2026",
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=2000",
    durationLabel: "7D6N",
    golfLabel: "3 Rounds (18H)",
    transportLabel: "Private Driver",
    highlights: [{ title: "Island Paradise", description: "Golf with ocean views.", icon: null }],
    itinerary: [],
    accommodation: [],
    pricing: { twin: "SGD 1,680", single: "SGD 2,100", note: "", registrationLink: "" },
    inclusions: [],
    exclusions: []
  },
  danang: {
    id: 'danang',
    name: "Da Nang Coastal Fairways 2026",
    shortName: "Da Nang Coastal",
    dates: "14 - 20 September 2026",
    heroImage: "https://cdn.sanity.io/images/iqsqxgxl/production/dc64dd225a660816790223419394df185aaa48fa-1920x1438.jpg",
    durationLabel: "7D6N",
    golfLabel: "4 Rounds (18H)",
    transportLabel: "Private Transfers",
    highlights: [{ title: "Links Courses", description: "Play on the finest coastal layouts.", icon: null }],
    itinerary: [],
    accommodation: [],
    pricing: { twin: "SGD 1,890", single: "SGD 2,350", note: "", registrationLink: "" },
    inclusions: [],
    exclusions: []
  },
  perth: {
    id: 'perth',
    name: "Perth West Coast Golf Adventure",
    shortName: "Perth West Coast",
    dates: "02 - 09 November 2026",
    heroImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=2000",
    durationLabel: "8D7N",
    golfLabel: "4 Rounds (18H)",
    transportLabel: "SUV Rental",
    highlights: [{ title: "Swan River", description: "Iconic Australian golfing scenery.", icon: null }],
    itinerary: [],
    accommodation: [],
    pricing: { twin: "SGD 2,450", single: "SGD 3,100", note: "", registrationLink: "" },
    inclusions: [],
    exclusions: []
  }
};

export const getSystemInstruction = (tour: TourData): string => {
  return `You are an expert travel assistant for golfbooking.sg. 
  You are helping a customer with details for the following tour: ${tour.name}.
  
  TOUR SUMMARY:
  - Dates: ${tour.dates}
  - Duration: ${tour.durationLabel}
  - Golf: ${tour.golfLabel}
  - Transport: ${tour.transportLabel}
  
  HIGHLIGHTS:
  ${tour.highlights.map(h => `- ${h.title}: ${h.description}`).join('\n')}
  
  ITINERARY:
  ${tour.itinerary.map((day, i) => `Day ${i + 1}: ${day.title} (${day.date}). Activities: ${day.activities.join(', ')}`).join('\n')}
  
  ACCOMMODATION:
  ${tour.accommodation.map(a => `- ${a.name} (${a.location}): ${a.features.join(', ')}`).join('\n')}
  
  PRICING & PACKAGE:
  - Twin Sharing: ${tour.pricing.twin}
  - Single: ${tour.pricing.single}
  - Inclusions: ${tour.inclusions.join(', ')}
  - Air Ticket (Back from KL to Singapore)
  - Caddie Tips
  - Guide & Driver Tips
  - Travel Insurance
  - Note: ${tour.pricing.note}
  
  INSTRUCTIONS:
  - Be professional, friendly, and concise.
  - Only use the provided information. 
  - If asked about something not in the details, politely refer them to enquiry@golfbooking.sg or +65 9001 1558.
  - Mention that bookings can be made via the "Book Now" buttons on the page.`;
};
