
export interface Department {
  id: string;
  name: string;
  shortName: string;
  hod: string;
  description: string;
  labs: string[];
  image: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
  category: 'Event' | 'Seminar' | 'Achievement' | 'Notification';
}

export interface Facility {
  id: string;
  name: string;
  icon: string;
  description: string;
  images: string[];
}
