
export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  name: string;
  dogName: string;
  content: string;
  image: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
