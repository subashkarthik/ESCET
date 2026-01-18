
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Users, Mail, Phone, Sparkles, ChevronDown } from 'lucide-react';

const Faculty: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const [selectedDept, setSelectedDept] = useState('All');

  const departments = ['All', 'Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Electrical'];

  const facultyMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      designation: 'Professor & HOD',
      department: 'Computer Science',
      qualification: 'Ph.D. in Computer Science',
      experience: '18 years',
      specialization: 'Artificial Intelligence, Machine Learning',
      email: 'rajesh.kumar@escet.edu',
      phone: '+91 98765 43210',
      image: '👨‍🏫'
    },
    {
      name: 'Dr. Priya Sharma',
      designation: 'Associate Professor',
      department: 'Computer Science',
      qualification: 'Ph.D. in Data Science',
      experience: '12 years',
      specialization: 'Data Analytics, Big Data',
      email: 'priya.sharma@escet.edu',
      phone: '+91 98765 43211',
      image: '👩‍🏫'
    },
    {
      name: 'Dr. Arun Patel',
      designation: 'Professor & HOD',
      department: 'Electronics',
      qualification: 'Ph.D. in VLSI Design',
      experience: '20 years',
      specialization: 'VLSI, Embedded Systems',
      email: 'arun.patel@escet.edu',
      phone: '+91 98765 43212',
      image: '👨‍💼'
    },
    {
      name: 'Dr. Meera Reddy',
      designation: 'Associate Professor',
      department: 'Electronics',
      qualification: 'Ph.D. in Signal Processing',
      experience: '14 years',
      specialization: 'Digital Signal Processing, IoT',
      email: 'meera.reddy@escet.edu',
      phone: '+91 98765 43213',
      image: '👩‍💼'
    },
    {
      name: 'Dr. Suresh Rao',
      designation: 'Professor & HOD',
      department: 'Mechanical',
      qualification: 'Ph.D. in Thermal Engineering',
      experience: '22 years',
      specialization: 'Thermodynamics, Heat Transfer',
      email: 'suresh.rao@escet.edu',
      phone: '+91 98765 43214',
      image: '👨‍🔧'
    },
    {
      name: 'Dr. Kavita Singh',
      designation: 'Associate Professor',
      department: 'Mechanical',
      qualification: 'Ph.D. in Manufacturing',
      experience: '15 years',
      specialization: 'CAD/CAM, Robotics',
      email: 'kavita.singh@escet.edu',
      phone: '+91 98765 43215',
      image: '👩‍🔧'
    },
    {
      name: 'Dr. Ramesh Gupta',
      designation: 'Professor & HOD',
      department: 'Civil',
      qualification: 'Ph.D. in Structural Engineering',
      experience: '19 years',
      specialization: 'Structural Analysis, Earthquake Engineering',
      email: 'ramesh.gupta@escet.edu',
      phone: '+91 98765 43216',
      image: '👨‍🏗️'
    },
    {
      name: 'Dr. Anjali Verma',
      designation: 'Associate Professor',
      department: 'Civil',
      qualification: 'Ph.D. in Environmental Engineering',
      experience: '13 years',
      specialization: 'Water Resources, Environmental Management',
      email: 'anjali.verma@escet.edu',
      phone: '+91 98765 43217',
      image: '👩‍🏗️'
    },
    {
      name: 'Dr. Vikram Joshi',
      designation: 'Professor & HOD',
      department: 'Electrical',
      qualification: 'Ph.D. in Power Systems',
      experience: '21 years',
      specialization: 'Power Electronics, Renewable Energy',
      email: 'vikram.joshi@escet.edu',
      phone: '+91 98765 43218',
      image: '👨‍🔬'
    },
    {
      name: 'Dr. Sneha Iyer',
      designation: 'Associate Professor',
      department: 'Electrical',
      qualification: 'Ph.D. in Control Systems',
      experience: '11 years',
      specialization: 'Automation, Smart Grids',
      email: 'sneha.iyer@escet.edu',
      phone: '+91 98765 43219',
      image: '👩‍🔬'
    }
  ];

  const filteredFaculty = selectedDept === 'All' 
    ? facultyMembers 
    : facultyMembers.filter(f => f.department === selectedDept);

  return (
    <div className="bg-white min-h-screen selection:bg-[#6366f1]/20 selection:text-[#6366f1] pt-[180px]">{/* Fixed navbar padding */}
      {/* Immersive Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            style={{ scale: 1.1, y: y1 }}
            src="/images/faculty/hero.jpg" 
            alt="Faculty" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#6366f1]/40 via-transparent to-white" />
          
          {/* Floating Glass Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 5 + i, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute w-24 h-24 border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl"
                style={{ 
                  top: `${20 + i * 15}%`, 
                  left: `${10 + i * 20}%`,
                  opacity: 0.3
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
              <Sparkles size={14} className="text-[#6366f1]" />
              Academic Excellence
            </span>
            <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter drop-shadow-2xl">
              Our <span className="text-[#6366f1]">Faculty</span>
            </h1>
            <p className="text-white/80 text-xl md:text-2xl font-medium mt-6 max-w-3xl mx-auto">
              Meet our distinguished faculty members who are committed to academic excellence and student success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Faculty Stats */}
      <section className="py-32 relative -mt-32 z-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: 'Faculty Members', value: '150+', color: 'from-blue-500 to-indigo-600' },
              { icon: GraduationCap, label: 'PhD Holders', value: '85%', color: 'from-purple-500 to-pink-600' },
              { icon: Award, label: 'Research Papers', value: '500+', color: 'from-orange-500 to-red-600' },
              { icon: BookOpen, label: 'Books Published', value: '120+', color: 'from-green-500 to-emerald-600' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="water-glass !bg-white/90 p-8 border-white/80 shadow-2xl hover:shadow-3xl transition-all group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  <stat.icon size={32} />
                </div>
                <h3 className="text-5xl font-black text-slate-900 mb-3 tracking-tight">{stat.value}</h3>
                <p className="text-slate-600 font-bold text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {departments.map((dept) => (
              <motion.button
                key={dept}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDept(dept)}
                className={`px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition-all ${
                  selectedDept === dept
                    ? 'bg-[#6366f1] text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                {dept}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFaculty.map((faculty, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.1 }}
                className="water-glass !bg-white/90 p-8 border-white/80 hover:shadow-2xl transition-all group"
              >
                {/* Faculty Image */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-6xl">{faculty.image}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-slate-900 mb-1">{faculty.name}</h3>
                    <p className="text-sm text-[#6366f1] font-bold">{faculty.designation}</p>
                    <p className="text-xs text-slate-500 font-medium mt-1">{faculty.department}</p>
                  </div>
                </div>

                {/* Qualification */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <GraduationCap size={18} className="text-[#6366f1] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Qualification</p>
                      <p className="text-sm text-slate-700 font-medium">{faculty.qualification}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award size={18} className="text-[#6366f1] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Experience</p>
                      <p className="text-sm text-slate-700 font-medium">{faculty.experience}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen size={18} className="text-[#6366f1] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Specialization</p>
                      <p className="text-sm text-slate-700 font-medium">{faculty.specialization}</p>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="pt-6 border-t border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Mail size={14} className="text-[#6366f1]" />
                    <span className="font-medium">{faculty.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Phone size={14} className="text-[#6366f1]" />
                    <span className="font-medium">{faculty.phone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Profiles Image */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h3 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6"
            >
              Experienced <span className="text-[#6366f1]">Educators</span>
            </motion.h3>
            <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto">
              Our faculty members bring decades of combined experience in teaching and research
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-1 bg-gradient-to-br from-[#6366f1] to-[#4f46e5] rounded-[3rem] shadow-2xl overflow-hidden"
          >
            <img 
              src="/images/faculty/profiles.jpg" 
              alt="Faculty Profiles" 
              className="w-full h-[600px] object-cover rounded-[2.8rem]"
            />
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Learn from the <span className="text-[#6366f1]">Best</span>
            </h3>
            <p className="text-slate-600 text-lg font-medium mb-10 max-w-2xl mx-auto">
              Join ESCET and get mentored by experienced faculty members who are passionate about teaching.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-[#6366f1] text-white rounded-2xl text-sm font-black uppercase tracking-[0.2em] hover:bg-[#4f46e5] transition-all shadow-lg"
              onClick={() => window.dispatchEvent(new Event('openEnquiryModal'))}
            >
              Apply Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
