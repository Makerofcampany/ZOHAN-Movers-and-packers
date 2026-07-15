export interface Service {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  iconName: string;
  imageUrl: string;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  feedback: string;
  avatarUrl: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'process' | 'security';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'house' | 'office' | 'packing' | 'loading' | 'vehicles';
  imageUrl: string;
  description: string;
}

export interface QuoteRequest {
  id: string;
  name: string;
  phone: string;
  email: string;
  originCity: string;
  destinationCity: string;
  serviceType: string;
  movingDate: string;
  homeSize: string; // e.g., '1-bedroom', '2-bedroom', 'office-small', etc.
  hasPacking: boolean;
  hasUnpacking: boolean;
  loadingHelp: boolean;
  message: string;
  status: 'pending' | 'accepted' | 'completed';
  estimatedPrice?: number;
  createdAt: string;
}
