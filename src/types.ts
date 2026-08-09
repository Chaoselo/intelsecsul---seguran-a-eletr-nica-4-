export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  iconName: string;
  imageUrl: string;
  imageAlt: string;
}

export interface CityItem {
  slug: string;
  name: string;
  region: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  content: string;
  rating: number;
  date?: string;
  service?: string;
  avatarUrl?: string;
}
