
import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  Building2, 
  Users, 
  BookOpen, 
  Trophy, 
  MapPin, 
  Calendar,
  CheckCircle,
  Target,
  Sparkles,
  Globe,
  TrendingUp,
  Briefcase,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { DEPARTMENTS } from '../constants';

const CollegeProfile: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Active Students', value: '2000+', color: 'bg-blue-100 text-blue-600' },
    { icon: GraduationCap, label: 'Alumni Network', value: '5000+', color: 'bg-orange-100 text-orange-600' },
    { icon: Building2, label: 'Departments', value: '7', color: 'bg-green-100 text-green-600' },
    { icon: BookOpen, label: 'Library Books', value: '50,000+', color: 'bg-purple-100 text-purple-600' },
    { icon: Trophy, label: 'Awards Won', value: '100+', color: 'bg-red-100 text-red-600' },
    { icon: Briefcase, label: 'Placement Rate', value: '85%', color: 'bg-indigo-100 text-indigo-600' }
  ];

  const achievements = [
    {
      title: 'NAAC Accreditation',
      description: 'Grade "A" accreditation by National Assessment and Accreditation Council',
      icon: Award,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'AICTE Approved',
      description: 'Approved by All India Council for Technical Education',
      icon: CheckCircle,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'ISO Certified',
      description: 'ISO 9001:2015 certified for quality management systems',
      icon: Trophy,
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Industry Partnerships',
      description: 'Collaborations with leading tech companies and research institutions',
      icon: Briefcase,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const facilities = [
    { name: 'Modern Laboratories', count: '50+', description: 'State-of-the-art labs with latest equipment' },
    { name: 'Smart Classrooms', count: '100+', description: 'Digitally equipped learning spaces' },
    { name: 'Research Centers', count: '5', description: 'Dedicated centers for innovation' },
    { name: 'Hostel Facilities', count: '2', description: 'Separate hostels for boys and girls' },
    { name: 'Sports Complex', count: '1', description: 'Multi-purpose sports and recreation facility' },
    { name: 'Auditorium', count: '2', description: 'Large capacity halls for events' }
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-[#004a99]/10 selection:text-[#004a99] pt-[180px]">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            src="public/images/campus-hero.jpg" 
            alt="ESCET Campus" 
            className="w-full h-full object-cover brightness-[0.5]"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#004a99]/60 via-[#004a99]/40 to-white" />
          
          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -30, 0],
                  rotate: [0, 15, 0],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  duration: 4 + i, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
                className="absolute w-20 h-20 border border-white/20 bg-white/5 backdrop-blur-sm rounded-xl"
                style={{ 
                  top: `${15 + i * 10}%`, 
                  left: `${5 + i * 12}%`
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              <Sparkles size={14} className="text-orange-400" />
              Institutional Excellence
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter drop-shadow-2xl mb-6">
              College Profile
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-3xl mx-auto">
              E.S. College of Engineering and Technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#004a99]/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left: Image & Quick Info */}
            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative p-1.5 bg-gradient-to-br from-orange-500 to-red-600 rounded-[2.5rem] shadow-2xl mb-8"
              >
                <div className="overflow-hidden rounded-[2.3rem] aspect-[4/3]">
                  <img 
                    src="public/images/main-building.jpg" 
                    alt="College Building" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Quick Stats Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="blue-water-glass !bg-[#004a99] p-8 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Calendar size={24} className="text-white" />
                  <h3 className="text-xl font-black text-white">Established</h3>
                </div>
                <p className="text-4xl font-black text-white mb-2">1999</p>
                <p className="text-blue-100 text-sm font-medium">25+ Years of Excellence</p>
              </motion.div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 text-[#004a99] mb-6">
                  <GraduationCap size={28} />
                  <span className="font-black uppercase tracking-[0.2em] text-xs">
                    About ESCET
                  </span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
                  Shaping Future <br />
                  <span className="text-[#004a99]">Engineers</span>
                </h2>
                
                <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                  <p className="relative pl-8 border-l-4 border-[#004a99]">
                    E.S. College of Engineering and Technology (ESCET) is a premier educational institution established in 1999, dedicated to nurturing future engineers and empowering them with cutting-edge knowledge and skills. Located strategically on National Highway 45 in Villupuram, Tamil Nadu, the college stands at the forefront of technological advancements.
                  </p>
                  
                  <p>
                    Over the past 25+ years, ESCET has been committed to providing a transformative educational experience that equips students with the skills and knowledge needed to excel in an era of rapid technological advancements. Our institution is part of the prestigious E.S. Group of Educational Institutions, recognized as a think tank of educationalists in and around Villupuram.
                  </p>

                  <p>
                    The college offers a comprehensive range of undergraduate programs across seven engineering disciplines, each designed to meet industry standards and prepare students for successful careers. With state-of-the-art infrastructure, experienced faculty, and a strong emphasis on research and innovation, ESCET continues to be a beacon of excellence in engineering education.
                  </p>
                </div>

                {/* Location Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="water-glass !bg-white/90 p-8 border-[#004a99]/10 mt-8 rounded-2xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#004a99] rounded-xl flex items-center justify-center text-white">
                      <MapPin size={24} />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">Prime Location</h3>
                  </div>
                  <p className="text-slate-600 mb-2">
                    <strong>Address:</strong> National Highway 45, Villupuram, Tamil Nadu
                  </p>
                  <p className="text-slate-500 text-sm">
                    • 160 km from Chennai (State Capital)<br />
                    • 40 km from Puducherry (UT Capital)<br />
                    • Well-connected by road and rail networks
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[#004a99] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
              By The Numbers
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
              Institutional <span className="text-[#004a99]">Excellence</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="water-glass !bg-white p-8 rounded-2xl text-center border-white/60 shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon size={32} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-2">{stat.value}</h3>
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation & Recognition */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[#004a99] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
              Recognition
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
              Accreditation & <span className="text-[#004a99]">Awards</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg`}>
                    <achievement.icon size={32} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">
                    {achievement.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[#004a99] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
              Academic Programs
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
              Our <span className="text-[#004a99]">Departments</span>
            </h2>
            <p className="text-slate-600 text-lg mt-6 max-w-2xl mx-auto">
              Seven specialized engineering departments offering comprehensive undergraduate programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEPARTMENTS.map((dept, i) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="water-glass !bg-white p-6 rounded-2xl border-white/60 shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <h3 className="text-lg font-black text-[#004a99] mb-2">{dept.shortName}</h3>
                <p className="text-sm text-slate-600 font-medium mb-4">{dept.name}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{dept.description.substring(0, 100)}...</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              to="/departments" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#004a99] text-white font-black rounded-2xl text-xs uppercase tracking-[0.2em] hover:brightness-125 transition-all shadow-xl shadow-[#004a99]/20 group"
            >
              Explore All Departments
              <TrendingUp size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure Highlights */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[#004a99] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
              Infrastructure
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
              World-Class <span className="text-[#004a99]">Facilities</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#004a99]/10 rounded-xl flex items-center justify-center">
                    <Building2 size={24} className="text-[#004a99]" />
                  </div>
                  <span className="text-3xl font-black text-[#004a99]">{facility.count}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight">
                  {facility.name}
                </h3>
                <p className="text-slate-600 text-sm font-medium">
                  {facility.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              to="/facilities" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-white border-2 border-[#004a99] text-[#004a99] font-black rounded-2xl text-xs uppercase tracking-[0.2em] hover:bg-[#004a99] hover:text-white transition-all shadow-xl group"
            >
              View All Facilities
              <Building2 size={18} className="group-hover:scale-110 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Quick Link */}
      <section className="py-32 bg-gradient-to-br from-[#004a99] to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h3 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8"
            >
              "Excellence in Education, <span className="text-orange-400">Innovation</span> in Action"
            </motion.h3>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
              Committed to transforming Villupuram into a premier resource factory for the global IT landscape through quality engineering education.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/about/vision" 
                className="px-10 py-5 bg-white text-[#004a99] font-black rounded-2xl text-xs uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-xl"
              >
                Our Vision
              </Link>
              <Link 
                to="/about/chairman-message" 
                className="px-10 py-5 border-2 border-white/30 text-white font-black rounded-2xl text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all backdrop-blur-md"
              >
                Leadership Messages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Ready to Join ESCET?
            </h3>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Start your journey towards academic excellence and technological innovation
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/admissions/procedure" 
                className="px-10 py-5 bg-[#004a99] text-white font-black rounded-2xl text-xs uppercase tracking-[0.2em] hover:brightness-125 transition-all shadow-xl"
              >
                Admission Process
              </Link>
              <Link 
                to="/contact" 
                className="px-10 py-5 bg-white border-2 border-[#004a99] text-[#004a99] font-black rounded-2xl text-xs uppercase tracking-[0.2em] hover:bg-[#004a99] hover:text-white transition-all shadow-xl"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CollegeProfile;

