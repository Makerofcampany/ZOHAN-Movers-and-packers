import { Service, Testimonial, FaqItem, GalleryItem } from './types';

export const CITIES = [
  'Karachi',
  'Lahore',
  'Islamabad',
  'Rawalpindi',
  'Faisalabad',
  'Multan',
  'Peshawar',
  'Gujranwala',
  'Sialkot',
  'Hyderabad',
  'Quetta',
  'Sargodha',
  'Bahawalpur'
];

export const SERVICES: Service[] = [
  {
    id: 'house-shifting',
    title: 'House Shifting',
    description: 'Complete home relocation with utmost care. From small apartments to large bungalows, we handle everything seamlessly.',
    detailedDescription: 'Our signature House Shifting service takes the stress out of moving your family. We coordinate the entire process: supply premium materials, wrap fragile items, pack, load, transport, unload, unpack, and arrange your furniture in the new house exactly where you want it.',
    iconName: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&q=80&w=800',
    benefits: [
      'Comprehensive bubble wrapping for all delicate items',
      'Disassembly and reassembly of beds, cabinets, and dining tables',
      'Placement of electronics (AC, TV, Fridge) in designated areas',
      'Scratch-resistant padding and high-tensile security strapping'
    ]
  },
  {
    id: 'office-relocation',
    title: 'Office Relocation',
    description: 'Minimize business downtime with our swift, organized corporate and office moving services.',
    detailedDescription: 'Corporate relocation requires systematic precision. Our office shifting team labels and organizes all assets—from IT infrastructure and sensitive files to ergonomic furniture—ensuring a secure transition that gets your business back up and running with minimal operational downtime.',
    iconName: 'Briefcase',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    benefits: [
      'Specialized handling of IT equipment, servers, and computers',
      'Systematic packing of archives and paper files with custom labeling',
      'After-hours and weekend moving options to prevent work disruption',
      'Secure dismantling and rebuilding of workstation cubicles'
    ]
  },
  {
    id: 'furniture-moving',
    title: 'Furniture Moving',
    description: 'Expert dismantling, safe transport, and professional assembly of heavy or delicate furniture.',
    detailedDescription: 'Bulky wardrobes, elegant glass tables, and heavy sofas require professional handling to prevent damage. Our specialists dismantle complicated structures, protect them with thick moving blankets, and reassemble them flawlessly at your destination.',
    iconName: 'PackageOpen',
    imageUrl: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800',
    benefits: [
      'Wrapping in layered corrugated sheets and bubble wrap',
      'Experienced carpenters on-site for custom disassembly',
      'Specialized sliders and lift straps to avoid wall scratches',
      'Lashing belts inside trucks to secure heavy items during travel'
    ]
  },
  {
    id: 'packing-unpacking',
    title: 'Packing & Unpacking',
    description: 'Premium layered packing using bubble wrap, corrugated boxes, stretch wrap, and heavy-duty tape.',
    detailedDescription: 'The key to a damage-free move is correct packing. We utilize premium, export-quality packing materials including thick corrugated sheets, five-layer heavy-duty boxes, bubble wrap, thermocol sheets, stretch wrap, and customized wooden crates for high-value valuables.',
    iconName: 'Layers',
    imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800',
    benefits: [
      'Multi-layered cushioning for glassware and kitchen crockery',
      'Custom heavy-duty wardrobes for wrinkle-free clothes hanging',
      'Moisture-resistant plastic sealing for electronics and mattress protection',
      'Efficient unpacking and sorting into closets and cabinets'
    ]
  },
  {
    id: 'loading-unloading',
    title: 'Loading & Unloading',
    description: 'Safe handling of your belongings by our trained, energetic ground crew using professional gear.',
    detailedDescription: 'Loading and unloading require strength, technique, and proper equipment. Our physically fit and trained loaders use hand trucks, furniture dollies, ramp sliders, and lifting straps to safely move heavy boxes up and down stairs, avoiding accidents and stress.',
    iconName: 'ChevronDownUp',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    benefits: [
      'Trained lifters handling items of all shapes and weights',
      'Use of non-slip gloves, security harness, and hydraulic ramps',
      'Careful stacking inside container trucks (heavy on bottom, light on top)',
      'Prompt offloading and room-by-room box distribution'
    ]
  },
  {
    id: 'intercity-moving',
    title: 'Intercity Moving',
    description: 'Relocating to another city? We provide containerized fleet transport from Karachi to Lahore, Islamabad, and beyond.',
    detailedDescription: 'Long-distance relocations require heavy-duty security. ZOHAN Movers offers closed-container containerized trucks for secure intercity transportation. We monitor transit timelines and guarantee that your cargo arrives safely across provinces.',
    iconName: 'Truck',
    imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800',
    benefits: [
      '100% enclosed metal body container trucks for weather protection',
      'Experienced long-haul drivers familiar with national highway routes',
      'Live status updates and direct contact with the driver/supervisor',
      'Affordable flat-rate long distance packages with zero hidden fees'
    ]
  },
  {
    id: 'warehouse-storage',
    title: 'Warehouse Storage',
    description: 'Secure, clean, and 24/7 monitored warehouse spaces in Pakistan for temporary or long-term storage.',
    detailedDescription: 'Whether you are waiting for your new home to be renovated or traveling abroad, our secure warehouse storage provides clean, moisture-free, and pest-controlled environments. Store your furniture, household goods, or corporate inventories with full peace of mind.',
    iconName: 'Warehouse',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    benefits: [
      '24/7 CCTV surveillance, fire alarms, and security personnel',
      'Pest-controlled, moisture-free, and dust-free sealed vaults',
      'Flexible weekly, monthly, or yearly rental packages',
      'Detailed inventory log of all items stored with digital barcodes'
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: '24/7 Customer Support',
    description: 'We are always available to assist you. Our support representatives are on hand day and night to answer queries, track shipments, and assist with immediate bookings.',
    iconName: 'PhoneCall'
  },
  {
    title: 'Professional Packing Team',
    description: 'Our team consists of certified, polite, and skilled packers who treat your belongings as if they were their own, ensuring complete safety from start to finish.',
    iconName: 'Users'
  },
  {
    title: 'Affordable Pricing',
    description: 'We offer the most competitive rates in Pakistan with no hidden costs. Our transparent quotes detail every single rupee so you know exactly what you are paying for.',
    iconName: 'Coins'
  },
  {
    title: 'On-Time Delivery',
    description: 'Punctuality is our core value. We arrive exactly at the agreed-upon time and deliver your belongings to the destination strictly on schedule.',
    iconName: 'Clock'
  },
  {
    title: 'Fully Secure Transportation',
    description: 'With modern, well-maintained closed-body container trucks and soft shock-absorption padding, your items are completely safe from road bumps, rain, and dust.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Experienced Staff',
    description: 'With over a decade of combined moving experience in Pakistan, we have safely completed over 5,000 relocations across major national cities.',
    iconName: 'Award'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Muhammad Salman',
    location: 'DHA Phase 6, Karachi',
    rating: 5,
    feedback: 'Shifting from Karachi to Lahore was a huge worry for me, but Zohan Movers made it incredibly simple. They packed everything with double-layered bubble wrap and cardboard sheets. Not a single glass item broke! Professional behavior, highly recommended!',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't2',
    name: 'Ayesha Khan',
    location: 'Gulberg III, Lahore',
    rating: 5,
    feedback: 'I used Zohan Movers & Packers for shifting our 3-bedroom portion. The carpenters they sent were amazing—they disassembled my massive modern bridal bed and reassembled it flawlessly in our new house. The price was exactly as quoted, with zero hidden charges.',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't3',
    name: 'Dr. Bilal Siddiqui',
    location: 'G-11, Islamabad',
    rating: 5,
    feedback: 'Very polite, energetic, and professional boys. They arrived on time at 8:00 AM sharp with all their boxes, tapes, and bubble wrap. They carefully loaded everything and unpacked it. Their 24/7 helpline kept me updated during intercity transport. Superb service!',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't4',
    name: 'Zainab Ahmed',
    location: 'Bahria Town, Rawalpindi',
    rating: 5,
    feedback: 'Excellent service for office relocation. They moved our entire software agency in Rawalpindi over the weekend. All computers, LED screens, server racks, and delicate desks were handled with exceptional care. We resumed our operations on Monday without any loss.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'f1',
    question: 'How do you calculate shifting prices in Pakistan?',
    answer: ' Shifting costs depend on three main factors: 1) The volume of items/furniture (dictating truck size like Suzuki, Mazda, or 20ft Container), 2) Shifting distance (Local within a city vs Intercity like Karachi to Lahore), and 3) Additional services like professional packing, carpenter work, and multi-floor loading without an elevator.',
    category: 'pricing'
  },
  {
    id: 'f2',
    question: 'Do you provide professional cartons and bubble wrapping materials?',
    answer: 'Yes! We bring premium-quality 5-ply packing boxes, thick bubble wrap, stretch film, corrugated sheets, thermocol sheets, and heavy-duty tape. Our team does all the packing for you, or we can provide material if you prefer self-packing.',
    category: 'process'
  },
  {
    id: 'f3',
    question: 'Can you disassemble and reassemble wardrobes, ACs, and double beds?',
    answer: 'Absolutely! Our standard crew includes experienced carpenters who specialize in carefully dismantling double beds, complex wardrobes, dining tables, and re-fixing them at your new location. We can also coordinate professional AC technicians for safe AC uninstallation and installation.',
    category: 'process'
  },
  {
    id: 'f4',
    question: 'How long does an intercity move take (e.g., Karachi to Islamabad)?',
    answer: 'Intercity shifting usually takes 24 to 48 hours depending on the highway route and weather conditions. Once loaded, our container truck travels directly to the destination. We provide constant tracking and the drivers contact number for full peace of mind.',
    category: 'general'
  },
  {
    id: 'f5',
    question: 'Are my belongings secure from rain and dust during transport?',
    answer: 'Yes, 100%. We use closed-body containerized trucks (Mazda, Bedford, or modern containers) that are completely waterproof and airtight. Your furniture, electronics, and cardboard boxes will remain completely safe from dust, heavy rain, and direct sunlight.',
    category: 'security'
  },
  {
    id: 'f6',
    question: 'What happens if something gets damaged during the shifting process?',
    answer: 'At ZOHAN Movers, safety is our highest priority, which is why our damage rate is under 0.2%. If any damage occurs due to our crew’s handling, we take full responsibility to repair, replace, or compensate you for the item as per our fair transit guarantee.',
    category: 'security'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Premium House Shifting',
    category: 'house',
    imageUrl: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&q=80&w=800',
    description: 'Expert home shifting in Karachi with high-grade cardboard box packaging.'
  },
  {
    id: 'g2',
    title: 'Professional Bubble Wrapping',
    category: 'packing',
    imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800',
    description: 'Bubble wrapping and custom packing fragile items and luxury dining wares.'
  },
  {
    id: 'g3',
    title: 'Office Equipment Packaging',
    category: 'office',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    description: 'Secure, labeled box arrangement for seamless corporate relocation.'
  },
  {
    id: 'g4',
    title: 'Safe Furniture Transport',
    category: 'vehicles',
    imageUrl: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800',
    description: 'Protected sofas and bulky cabinets being tied down inside our heavy-duty containers.'
  },
  {
    id: 'g5',
    title: 'Heavy Loading & Lifting',
    category: 'loading',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    description: 'Skilled ground staff safely carrying loaded cartons and heavy electrical machinery.'
  },
  {
    id: 'g6',
    title: 'Modern Closed Containers',
    category: 'vehicles',
    imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800',
    description: 'Our fleet of weather-resistant trucks ready for long haul inter-city relocations.'
  }
];

export const PRICING_PLANS = [
  {
    id: 'p1',
    name: 'Standard Move (Local)',
    priceLabel: 'Starting from Rs. 15,000',
    description: 'Perfect for small portions, apartments, or single rooms within the same city.',
    features: [
      'Suzuki or Small Mazda truck transport',
      'Basic furniture wrapping (sofa, mattresses)',
      '2 Professional loader boys',
      'Standard carpenter bed dismantling/assembly',
      'Under 15 km distance included'
    ],
    popular: false
  },
  {
    id: 'p2',
    name: 'Premium Family Move',
    priceLabel: 'Starting from Rs. 35,000',
    description: 'Our most popular comprehensive shifting service for 2-3 bedroom homes.',
    features: [
      'Large Mazda container truck (17 or 20 feet)',
      'Full premium bubble wrapping & carton boxes',
      '4 Trained packing & loader crew members',
      'Master carpenter on-site for wardrobes & beds',
      'Electronic safety packing & setup assistance',
      'Free tracking & dedicated coordinator'
    ],
    popular: true
  },
  {
    id: 'p3',
    name: 'Intercity Executive Shifting',
    priceLabel: 'Starting from Rs. 75,000',
    description: 'Premium long-haul containerized relocation between any major cities of Pakistan.',
    features: [
      '20ft to 40ft fully sealed weather-proof container',
      'Export-quality multi-layer custom packaging',
      '5 Loader specialists with professional supervisors',
      'Full dismantling & rebuilding at destination',
      'Transit security assurance and express shipping',
      'Direct contact & toll clearances covered'
    ],
    popular: false
  }
];
