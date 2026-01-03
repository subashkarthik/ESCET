import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Department from '../models/Department.js';
import News from '../models/News.js';

dotenv.config();

const DEPARTMENTS_DATA = [
  {
    id: 'cse',
    name: 'B.E - Computer Science and Engineering',
    shortName: 'CSE',
    hod: 'Dr. Sarah Mitchell',
    hodEmail: 'hod.cse@escet.in',
    description: 'The primary goal of the department of CSE is to provide best IT infrastructure, world class learning & inculcate moral and ethical values.',
    labs: ['AI & Robotics Lab', 'Cloud Computing Lab', 'Cybersecurity Center'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    seats: 60,
    duration: '4 Years',
    isActive: true
  },
  {
    id: 'it',
    name: 'B.Tech - Information Technology',
    shortName: 'IT',
    hod: 'Dr. M. Sivasakthi',
    hodEmail: 'hod.it@escet.in',
    description: 'Unleash your potential and embrace the endless possibilities that the world of information technology has to offer.',
    labs: ['Web Tech Lab', 'Network Security Lab', 'Data Analytics Hub'],
    image: 'https://images.unsplash.com/photo-1510511459019-5dee2c1479b1?q=80&w=2070&auto=format&fit=crop',
    seats: 60,
    duration: '4 Years',
    isActive: true
  },
  {
    id: 'aids',
    name: 'B.Tech - Artificial Intelligence and Data Science',
    shortName: 'AIDS',
    hod: 'Dr. R. Priyadharshini',
    hodEmail: 'hod.aids@escet.in',
    description: 'The Department of AI & DS was setup with responsibilities for designing and developing AI and data science solutions.',
    labs: ['AI Research Lab', 'Big Data Lab', 'Cognitive Computing'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    seats: 60,
    duration: '4 Years',
    isActive: true
  },
  {
    id: 'ece',
    name: 'B.E - Electronics and Communication Engineering',
    shortName: 'ECE',
    hod: 'Dr. Robert Chen',
    hodEmail: 'hod.ece@escet.in',
    description: 'The sole aim of the Department of Electronics and Communication is to produce the most energetic and professionally competent Electronic Engineers.',
    labs: ['VLSI Lab', 'Communication Hub', 'Embedded Systems'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    seats: 60,
    duration: '4 Years',
    isActive: true
  },
  {
    id: 'eee',
    name: 'B.E - Electrical and Electronics Engineering',
    shortName: 'EEE',
    hod: 'Dr. Elena Rodriguez',
    hodEmail: 'hod.eee@escet.in',
    description: 'The Department of Electrical and electronics Engineering is proud in shaping the future of technology through excellence in education & research.',
    labs: ['Power Systems Lab', 'Renewable Energy', 'Electrical Machines'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop',
    seats: 30,
    duration: '4 Years',
    isActive: true
  },
  {
    id: 'mech',
    name: 'B.E. Mechanical Engineering',
    shortName: 'MECH',
    hod: 'Dr. James Foster',
    hodEmail: 'hod.mech@escet.in',
    description: 'At the Department of Mechanical Engineering, we provide a dynamic learning environment that prepares our students to become skilled engineers.',
    labs: ['Robotics & Automation', 'Thermal Lab', 'Fluid Mechanics'],
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2070&auto=format&fit=crop',
    seats: 60,
    duration: '4 Years',
    isActive: true
  },
  {
    id: 'civil',
    name: 'B.E.-Civil Engineering',
    shortName: 'CIVIL',
    hod: 'Dr. William Grant',
    hodEmail: 'hod.civil@escet.in',
    description: 'Department of civil engineering is committed in providing a comprehensive education that combines theory and practical application.',
    labs: ['Structural Lab', 'Geo-Tech Lab', 'Surveying Center'],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop',
    seats: 30,
    duration: '4 Years',
    isActive: true
  }
];

const NEWS_DATA = [
  {
    title: 'Annual Tech Symposium: IGNITE 2024',
    description: 'Join us for a three-day celebration of innovation, featuring guest speakers from NASA and Google.',
    category: 'Event',
    date: new Date('2024-10-24'),
    isPublished: true,
    isPinned: true
  },
  {
    title: 'International Seminar on Quantum Computing',
    description: 'Deep dive into the future of computing with world-renowned physicists.',
    category: 'Seminar',
    date: new Date('2024-11-02'),
    isPublished: true,
    isPinned: false
  },
  {
    title: 'NCAA Sports Championship Victory',
    description: 'Our basketball team secures the regional title for the third consecutive year.',
    category: 'Achievement',
    date: new Date('2024-10-15'),
    isPublished: true,
    isPinned: false
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Department.deleteMany({});
    await News.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // Create admin user
    const adminUser = await User.create({
      name: 'Admin User',
      email: process.env.ADMIN_EMAIL || 'admin@escet.in',
      password: process.env.ADMIN_PASSWORD || 'Admin@123',
      role: 'admin'
    });
    console.log('👤 Created admin user:', adminUser.email);

    // Seed departments
    await Department.insertMany(DEPARTMENTS_DATA);
    console.log(`🏫 Seeded ${DEPARTMENTS_DATA.length} departments`);

    // Seed news
    await News.insertMany(NEWS_DATA);
    console.log(`📰 Seeded ${NEWS_DATA.length} news items`);

    console.log('\n✅ Database seeded successfully!');
    console.log('\n📋 Login Credentials:');
    console.log(`   Email: ${adminUser.email}`);
    console.log(`   Password: ${process.env.ADMIN_PASSWORD || 'Admin@123'}`);
    console.log('\n🚀 You can now start the server with: npm run dev');

    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
};

seedDatabase();
