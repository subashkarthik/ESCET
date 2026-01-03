
import React from 'react';
import { Department, NewsItem, Facility } from './types';
import { Cpu, Radio, Zap, Settings, Building2, BookOpen, UserCheck, Trophy, FlaskConical, Wifi, Coffee, Dumbbell } from 'lucide-react';

export interface ManagementMember {
  id: string;
  name: string;
  role: string;
  image: string;
  message: string;
  path: string;
}

export const MANAGEMENT: ManagementMember[] = [
  {
    id: 'founder',
    name: 'E.Swamikkannu',
    role: "Founder Chairman's Message",
    image: '/images/founder-chairman.jpg',
    message: 'Nurturing excellence through vision and dedication to the future of engineering education.',
    path: '/about/chairman-message' // Defaulting to chairman message as placeholder for founder
  },
  {
    id: 'chairman',
    name: 'Er.S.Selvamani',
    role: "Chairman's Message",
    image: '/images/chairman.jpg',
    message: 'Empowering students with innovative skills to lead in a rapidly evolving technological landscape.',
    path: '/about/chairman-message'
  },
  {
    id: 'principal',
    name: 'Dr.K.Indira',
    role: "Principal's Message",
    image: '/images/principal.jpg',
    message: 'Committed to academic rigor and holistic development of our engineering professionals.',
    path: '/about/principal-message'
  }
];

export const DEPARTMENTS: Department[] = [
  {
    id: 'cse',
    name: 'B.E - Computer Science and Engineering',
    shortName: 'CSE',
    hod: 'Dr. Sarah Mitchell',
    description: 'The primary goal of the department of CSE is to provide best IT infrastructure, world class learning & inculcate moral and ethical values.',
    labs: ['AI & Robotics Lab', 'Cloud Computing Lab', 'Cybersecurity Center'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'it',
    name: 'B.Tech - Information Technology',
    shortName: 'IT',
    hod: 'Dr. M. Sivasakthi',
    description: 'Unleash your potential and embrace the endless possibilities that the world of information technology has to offer.',
    labs: ['Web Tech Lab', 'Network Security Lab', 'Data Analytics Hub'],
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'aids',
    name: 'B.Tech - Artificial Intelligence and Data Science',
    shortName: 'AIDS',
    hod: 'Dr. R. Priyadharshini',
    description: 'The Department of AI & DS was setup with responsibilities for designing and developing AI and data science solutions.',
    labs: ['AI Research Lab', 'Big Data Lab', 'Cognitive Computing'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'ece',
    name: 'B.E - Electronics and Communication Engineering',
    shortName: 'ECE',
    hod: 'Dr. Robert Chen',
    description: 'The sole aim of the Department of Electronics and Communication is to produce the most energetic and professionally competent Electronic Engineers.',
    labs: ['VLSI Lab', 'Communication Hub', 'Embedded Systems'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'eee',
    name: 'B.E - Electrical and Electronics Engineering',
    shortName: 'EEE',
    hod: 'Dr. Elena Rodriguez',
    description: 'The Department of Electrical and electronics Engineering is proud in shaping the future of technology through excellence in education & research.',
    labs: ['Power Systems Lab', 'Renewable Energy', 'Electrical Machines'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'mech',
    name: 'B.E. Mechanical Engineering',
    shortName: 'MECH',
    hod: 'Dr. James Foster',
    description: 'At the Department of Mechanical Engineering, we provide a dynamic learning environment that prepares our students to become skilled engineers.',
    labs: ['Robotics & Automation', 'Thermal Lab', 'Fluid Mechanics'],
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'civil',
    name: 'B.E.-Civil Engineering',
    shortName: 'CIVIL',
    hod: 'Dr. William Grant',
    description: 'Department of civil engineering is committed in providing a comprehensive education that combines theory and practical application.',
    labs: ['Structural Lab', 'Geo-Tech Lab', 'Surveying Center'],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: '1',
    date: 'OCT 24, 2024',
    title: 'Annual Tech Symposium: IGNITE 2024',
    description: 'Join us for a three-day celebration of innovation, featuring guest speakers from NASA and Google.',
    category: 'Event'
  },
  {
    id: '2',
    date: 'NOV 02, 2024',
    title: 'International Seminar on Quantum Computing',
    description: 'Deep dive into the future of computing with world-renowned physicists.',
    category: 'Seminar'
  },
  {
    id: '3',
    date: 'OCT 15, 2024',
    title: 'NCAA Sports Championship Victory',
    description: 'Our basketball team secures the regional title for the third consecutive year.',
    category: 'Achievement'
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'lib',
    name: 'Central Library',
    icon: 'BookOpen',
    description: 'A 4-story knowledge hub with over 100,000 volumes and digital access to IEEE journals.',
    images: ['https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop']
  },
  {
    id: 'lab',
    name: 'Advanced Research Lab',
    icon: 'FlaskConical',
    description: 'Equipped with the latest industry-standard tools for robotics and nanotechnology research.',
    images: ['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop']
  },
  {
    id: 'sports',
    name: 'Sports Complex',
    icon: 'Dumbbell',
    description: 'Featuring Olympic-sized pools, indoor stadium, and multi-purpose athletic fields.',
    images: ['https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop']
  }
];

// Gallery Images with Categories
export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: 'campus' | 'events' | 'labs' | 'sports' | 'cultural' | 'achievements';
  description?: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  // Campus Images
  {
    id: 'campus-1',
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop',
    title: 'Main Campus Building',
    category: 'campus',
    description: 'Our state-of-the-art main campus building'
  },
  {
    id: 'campus-2',
    url: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop',
    title: 'Campus Grounds',
    category: 'campus',
    description: 'Beautiful green campus with modern facilities'
  },
  {
    id: 'campus-3',
    url: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop',
    title: 'Academic Block',
    category: 'campus',
    description: 'Modern classrooms and lecture halls'
  },
  
  // Events
  {
    id: 'event-1',
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop',
    title: 'Annual Tech Symposium',
    category: 'events',
    description: 'Students presenting innovative projects'
  },
  {
    id: 'event-2',
    url: 'https://images.unsplash.com/photo-1540575861501-7ad0582373f0?q=80&w=2070&auto=format&fit=crop',
    title: 'Technical Workshop',
    category: 'events',
    description: 'Industry experts conducting hands-on sessions'
  },
  {
    id: 'event-3',
    url: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070&auto=format&fit=crop',
    title: 'Guest Lecture Series',
    category: 'events',
    description: 'Distinguished speakers sharing knowledge'
  },
  
  // Labs
  {
    id: 'lab-1',
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    title: 'Computer Science Lab',
    category: 'labs',
    description: 'Advanced computing facilities'
  },
  {
    id: 'lab-2',
    url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
    title: 'Electronics Lab',
    category: 'labs',
    description: 'State-of-the-art electronics equipment'
  },
  {
    id: 'lab-3',
    url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop',
    title: 'Robotics Lab',
    category: 'labs',
    description: 'AI and robotics research facility'
  },
  
  // Sports
  {
    id: 'sports-1',
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
    title: 'Sports Complex',
    category: 'sports',
    description: 'Olympic-sized sports facilities'
  },
  {
    id: 'sports-2',
    url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop',
    title: 'Basketball Court',
    category: 'sports',
    description: 'Indoor basketball arena'
  },
  {
    id: 'sports-3',
    url: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop',
    title: 'Football Field',
    category: 'sports',
    description: 'Professional football ground'
  },
  
  // Cultural
  {
    id: 'cultural-1',
    url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop',
    title: 'Cultural Fest',
    category: 'cultural',
    description: 'Annual cultural celebrations'
  },
  {
    id: 'cultural-2',
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
    title: 'Music Performance',
    category: 'cultural',
    description: 'Student musical performances'
  },
  {
    id: 'cultural-3',
    url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074&auto=format&fit=crop',
    title: 'Dance Competition',
    category: 'cultural',
    description: 'Inter-college dance fest'
  },
  
  // Achievements
  {
    id: 'achievement-1',
    url: 'https://images.unsplash.com/photo-1592285334235-7d4d4512b1c4?q=80&w=2070&auto=format&fit=crop',
    title: 'Award Ceremony',
    category: 'achievements',
    description: 'Excellence awards distribution'
  },
  {
    id: 'achievement-2',
    url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
    title: 'Graduation Day',
    category: 'achievements',
    description: 'Celebrating our graduates'
  },
  {
    id: 'achievement-3',
    url: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2072&auto=format&fit=crop',
    title: 'Research Publication',
    category: 'achievements',
    description: 'Students with published research papers'
  }
];

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Photos', count: GALLERY_IMAGES.length },
  { id: 'campus', label: 'Campus', count: GALLERY_IMAGES.filter(img => img.category === 'campus').length },
  { id: 'events', label: 'Events', count: GALLERY_IMAGES.filter(img => img.category === 'events').length },
  { id: 'labs', label: 'Laboratories', count: GALLERY_IMAGES.filter(img => img.category === 'labs').length },
  { id: 'sports', label: 'Sports', count: GALLERY_IMAGES.filter(img => img.category === 'sports').length },
  { id: 'cultural', label: 'Cultural', count: GALLERY_IMAGES.filter(img => img.category === 'cultural').length },
  { id: 'achievements', label: 'Achievements', count: GALLERY_IMAGES.filter(img => img.category === 'achievements').length }
];

export const GALLERY_VIDEOS = [
  {
    title: 'ESCET Campus Tour',
    thumbnail: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    duration: '03:45'
  },
  {
    title: 'Annual Symposium 2024 Highlights',
    thumbnail: 'https://images.unsplash.com/photo-1540575861501-7ad0582373f0?q=80&w=2070&auto=format&fit=crop',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    duration: '05:20'
  },
  {
    title: 'Research Excellence at ESCET',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    duration: '04:15'
  },
  {
    title: 'Student Innovation Lab Showcase',
    thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    duration: '02:50'
  }
];

