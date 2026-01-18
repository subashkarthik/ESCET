
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Microscope, BookOpen, Award, Users, Lightbulb, TrendingUp, Sparkles, FileText } from 'lucide-react';

const Research: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const researchStats = [
    { label: 'Research Papers', value: '500+', icon: FileText, color: 'from-blue-500 to-indigo-600' },
    { label: 'Ongoing Projects', value: '45+', icon: Lightbulb, color: 'from-purple-500 to-pink-600' },
    { label: 'Patents Filed', value: '28', icon: Award, color: 'from-orange-500 to-red-600' },
    { label: 'Research Scholars', value: '120+', icon: Users, color: 'from-green-500 to-emerald-600' }
  ];

  const researchAreas = [
    {
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Deep learning, neural networks, computer vision, and natural language processing',
      icon: '🤖',
      projects: 12
    },
    {
      title: 'Internet of Things (IoT)',
      description: 'Smart cities, industrial IoT, sensor networks, and edge computing',
      icon: '🌐',
      projects: 8
    },
    {
      title: 'Renewable Energy Systems',
      description: 'Solar energy, wind power, energy storage, and smart grid technologies',
      icon: '⚡',
      projects: 10
    },
    {
      title: 'Robotics & Automation',
      description: 'Industrial robotics, autonomous systems, and human-robot interaction',
      icon: '🦾',
      projects: 7
    },
    {
      title: 'VLSI & Embedded Systems',
      description: 'Chip design, embedded software, and system-on-chip development',
      icon: '💾',
      projects: 9
    },
    {
      title: 'Structural Engineering',
      description: 'Earthquake-resistant structures, sustainable construction, and smart materials',
      icon: '🏗️',
      projects: 6
    }
  ];

  const ongoingProjects = [
    {
      title: 'AI-Powered Healthcare Diagnostics',
      department: 'Computer Science',
      pi: 'Dr. Rajesh Kumar',
      funding: '₹25 Lakhs',
      duration: '2023-2025',
      status: 'In Progress'
    },
    {
      title: 'Smart Grid Optimization using IoT',
      department: 'Electrical Engineering',
      pi: 'Dr. Vikram Joshi',
      funding: '₹30 Lakhs',
      duration: '2023-2026',
      status: 'In Progress'
    },
    {
      title: 'Autonomous Navigation for Mobile Robots',
      department: 'Electronics',
      pi: 'Dr. Arun Patel',
      funding: '₹20 Lakhs',
      duration: '2024-2026',
      status: 'In Progress'
    },
    {
      title: 'Sustainable Building Materials',
      department: 'Civil Engineering',
      pi: 'Dr. Ramesh Gupta',
      funding: '₹18 Lakhs',
      duration: '2023-2025',
      status: 'In Progress'
    }
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-[#f59e0b]/20 selection:text-[#f59e0b] pt-[180px]">{/* Fixed navbar padding */}
      {/* Immersive Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            style={{ scale: 1.1, y: y1 }}
            src="/images/research/hero.jpg" 
            alt="Research" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f59e0b]/40 via-transparent to-white" />
          
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
              <Sparkles size={14} className="text-[#f59e0b]" />
              Innovation & Discovery
            </span>
            <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter drop-shadow-2xl">
              Research <span className="text-[#f59e0b]">& Development</span>
            </h1>
            <p className="text-white/80 text-xl md:text-2xl font-medium mt-6 max-w-3xl mx-auto">
              Pioneering cutting-edge research to solve real-world problems and advance technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Statistics */}
      <section className="py-32 relative -mt-32 z-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchStats.map((stat, i) => (
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

      {/* Research Areas */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h3 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6"
            >
              Research <span className="text-[#f59e0b]">Focus Areas</span>
            </motion.h3>
            <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto">
              Exploring diverse domains to drive innovation and technological advancement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.1 }}
                className="water-glass !bg-white/90 p-8 border-white/80 hover:shadow-2xl transition-all group"
              >
                <div className="text-6xl mb-6">{area.icon}</div>
                <h4 className="text-xl font-black text-slate-900 mb-3">{area.title}</h4>
                <p className="text-slate-600 text-sm font-medium leading-relaxed mb-4">
                  {area.description}
                </p>
                <div className="flex items-center gap-2 text-[#f59e0b]">
                  <Lightbulb size={16} />
                  <span className="text-xs font-black uppercase tracking-wider">{area.projects} Active Projects</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h3 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6"
            >
              Ongoing <span className="text-[#f59e0b]">Projects</span>
            </motion.h3>
            <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto">
              Current research initiatives making a real-world impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ongoingProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.1 }}
                className="water-glass !bg-white/90 p-8 border-white/80 hover:shadow-2xl transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-black text-slate-900 flex-1">{project.title}</h4>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-black uppercase tracking-wider rounded-full">
                    {project.status}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <BookOpen size={16} className="text-[#f59e0b] flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Department</p>
                      <p className="text-sm text-slate-700 font-medium">{project.department}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users size={16} className="text-[#f59e0b] flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Principal Investigator</p>
                      <p className="text-sm text-slate-700 font-medium">{project.pi}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200">
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Funding</p>
                    <p className="text-lg font-black text-[#f59e0b]">{project.funding}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Duration</p>
                    <p className="text-sm font-bold text-slate-700">{project.duration}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Projects Image */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Image */}
            <motion.div 
              className="lg:col-span-7 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ y: y2 }}
            >
              <div className="relative p-1 bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-[3rem] shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <img 
                  src="/images/research/projects.jpg" 
                  alt="Research Projects" 
                  className="w-full h-[600px] object-cover rounded-[2.8rem] transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </motion.div>

            {/* Right Column: Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="water-glass !bg-white/50 p-12 md:p-16 border-white/80 shadow-[0_40px_100px_-20px_rgba(245,158,11,0.1)] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                  <Microscope size={300} strokeWidth={1} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-[#f59e0b] mb-8">
                    <div className="w-12 h-1 bg-[#f59e0b] rounded-full" />
                    <span className="font-black uppercase tracking-[0.2em] text-xs">Innovation Lab</span>
                  </div>

                  <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                    State-of-the-Art <br />
                    <span className="text-[#f59e0b]">Research Facilities</span>
                  </h2>

                  <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
                    <p className="relative pl-8 border-l-4 border-[#f59e0b]">
                      Our advanced research laboratories are equipped with cutting-edge technology and instruments.
                    </p>
                    <p>
                      From AI/ML workstations to robotics labs, we provide researchers with the tools they need to innovate and excel.
                    </p>
                  </div>

                  {/* Facilities */}
                  <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-slate-200/50">
                    {[
                      { icon: Microscope, title: 'Advanced Labs', desc: 'Cutting-edge equipment' },
                      { icon: TrendingUp, title: 'Funding Support', desc: 'Research grants available' }
                    ].map((facility, i) => (
                      <div key={i} className="space-y-3">
                        <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                          <facility.icon size={20} />
                        </div>
                        <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">{facility.title}</h5>
                        <p className="text-xs text-slate-500 font-medium">{facility.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
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
              Join Our <span className="text-[#f59e0b]">Research Community</span>
            </h3>
            <p className="text-slate-600 text-lg font-medium mb-10 max-w-2xl mx-auto">
              Be part of groundbreaking research and contribute to technological advancement.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-[#f59e0b] text-white rounded-2xl text-sm font-black uppercase tracking-[0.2em] hover:bg-[#d97706] transition-all shadow-lg"
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

export default Research;
