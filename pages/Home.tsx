

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Trophy, Users, Building2, GraduationCap, Laptop, Quote, Send, ChevronUp, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import DepartmentCard from '../components/DepartmentCard';
import NewsTimeline from '../components/NewsTimeline';
import { DEPARTMENTS, MANAGEMENT } from '../constants';

const Home: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 500);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openEnquiry = () => {
    window.dispatchEvent(new CustomEvent('openEnquiryModal'));
  };

  return (
    <div className="relative bg-white pt-[180px]">{/* Added padding-top for fixed navbar */}

      {/* Scroll to Top FAB */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 z-[60] w-14 h-14 bg-[#004a99] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-orange-600 transition-colors group"
          >
            <ChevronUp size={28} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            {/* Replace 'college-video.mp4' with your actual video filename */}
            <source src="/videos/college-video.mp4" type="video/mp4" />
            {/* Fallback to online video if local file not found */}
            <source src="https://assets.mixkit.co/videos/preview/mixkit-group-of-students-working-together-in-a-computer-lab-4516-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-8 h-[2px] bg-[#004a99]" />
              <span className="text-white font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
                Welcome to ESCET
              </span>
              <div className="w-8 h-[2px] bg-[#004a99]" />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-10 leading-[1.1] tracking-tight max-w-5xl"
            >
              Better education<br />
              for Beautiful world.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button 
                onClick={openEnquiry}
                className="group relative flex items-center gap-4 px-12 py-5 text-white font-black rounded-full text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 border border-white/40 bg-orange-600/30 backdrop-blur-[40px] saturate-[250%] rounded-full shadow-[0_20px_40px_-10px_rgba(255,69,0,0.4)]" />
                <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-orange-600/60 via-orange-500/40 to-white/20 pointer-events-none shadow-[inset_0_4px_10px_rgba(255,255,255,0.6),inset_0_-4px_10px_rgba(0,0,0,0.2)]" />
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[0.3px]" />
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                <span className="relative z-10">Enquire Now</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* Management Messages Section - Matched to Screenshot */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#004a99] font-black uppercase tracking-[0.2em] text-xs mb-4 block"
            >
              Our Management
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl font-black text-slate-900 tracking-tighter"
            >
              Messages
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {MANAGEMENT.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 60, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  delay: i * 0.15, 
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Floating Glow Effect */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -inset-4 bg-gradient-to-r from-[#004a99]/20 via-blue-400/20 to-[#004a99]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                />

                <Link to={member.path} className="block">
                  {/* Card Container with Glass Effect */}
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] group-hover:shadow-[0_20px_60px_rgba(0,74,153,0.25)] transition-all duration-700">
                    
                    {/* Image Section with Advanced Hover */}
                    <div className="relative h-[420px] overflow-hidden">
                      <motion.img 
                        src={member.image} 
                        alt={member.name}
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                      
                      {/* Animated Shine Effect */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
                      />

                      {/* Role Badge - Top Right */}
                      <motion.div 
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.15 + 0.3 }}
                        className="absolute top-4 right-4 water-glass !bg-white/95 backdrop-blur-xl px-4 py-2 rounded-full border border-white/60 shadow-lg"
                      >
                        <span className="text-[9px] font-black text-[#004a99] uppercase tracking-[0.15em]">
                          {member.id === 'founder' ? 'Founder' : member.id === 'chairman' ? 'Chairman' : 'Principal'}
                        </span>
                      </motion.div>

                      {/* Bottom Info Overlay - Glassmorphism */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-md">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: i * 0.15 + 0.4 }}
                        >
                          <h3 className="text-2xl font-black text-[#004a99] mb-1 tracking-tight leading-tight">
                            {member.role}
                          </h3>
                          <p className="text-sm font-bold text-[#004a99]/70 uppercase tracking-[0.15em] flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-[#004a99]/30"></span>
                            {member.name}
                          </p>
                        </motion.div>
                      </div>
                    </div>

                    {/* Hover Arrow Indicator */}
                    <motion.div 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowRight size={24} className="text-[#004a99]" />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* "Discover What Sets Us Apart" Section */}
      <section className="py-32 relative z-10 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#004a99] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block"
            >
              Our Competitive Edge
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter"
            >
              Discover What Sets Us Apart
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                icon: Users, 
                label: 'Expert Faculty', 
                description: 'With years of experience and a commitment to student success, our educators inspire and empower learners to reach their fullest potential.' 
              },
              { 
                icon: Building2, 
                label: 'Modern Facilities', 
                description: 'From well-equipped classrooms to cutting-edge laboratories and recreational spaces, our campus provides the resources and environment needed for students to excel academically.' 
              },
              { 
                icon: GraduationCap, 
                label: 'Scholarship Opportunities', 
                description: 'Whether it\'s recognizing academic achievements or fostering talent in specific fields, our scholarship programs empower students to pursue their academic goals without financial constraints.' 
              },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="water-glass !bg-white/80 p-10 group hover:-translate-y-4 transition-all duration-500 border-white/60 shadow-xl"
              >
                <div className="w-16 h-16 bg-[#004a99]/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#004a99] group-hover:text-white transition-all duration-500 shadow-inner">
                  <feature.icon size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{feature.label}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life Video Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#004a99] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block"
            >
              Experience ESCET
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter"
            >
              Campus Life & Facilities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-lg mt-6 max-w-2xl mx-auto"
            >
              Take a virtual tour of our state-of-the-art facilities and vibrant campus community
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative group">
              {/* Video Container with Glass Effect */}
              <div className="water-glass !bg-white/60 p-4 border-white/80 shadow-2xl overflow-hidden">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900">
                  {/* Local Video */}
                  <video 
                    controls
                    className="w-full h-full object-cover"
                    poster="/images/ESbuild.jpeg"
                  >
                    {/* Replace with your video filename */}
                    <source src="/videos/campus-tour.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Play Button Overlay (shows before playing) */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                      <Play size={36} className="text-[#004a99] ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#004a99]/5 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl -z-10" />
            </div>

            {/* Video Stats/Info Below */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            >
              <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-[#004a99]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Building2 size={24} className="text-[#004a99]" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-2">50+</h3>
                <p className="text-slate-600 font-semibold text-sm uppercase tracking-wider">Modern Labs</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-[#004a99]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users size={24} className="text-[#004a99]" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-2">2000+</h3>
                <p className="text-slate-600 font-semibold text-sm uppercase tracking-wider">Active Students</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-[#004a99]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Trophy size={24} className="text-[#004a99]" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-2">100+</h3>
                <p className="text-slate-600 font-semibold text-sm uppercase tracking-wider">Awards Won</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-32 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#004a99] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Our Schools</span>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight">Future-Proof <br /><span className="text-[#004a99]">Curriculum</span></h2>
            </div>
            <Link to="/departments" className="flex items-center gap-3 text-[#004a99] font-black uppercase tracking-widest text-xs hover:gap-6 transition-all bg-white px-8 py-4 rounded-2xl border border-slate-100 shadow-sm">
              View All Departments <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DEPARTMENTS.slice(0, 4).map((dept) => (
              <DepartmentCard key={dept.id} dept={dept} />
            ))}
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-40 bg-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-28">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#004a99] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block"
            >
              TIMELINE
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter"
            >
              Campus News
            </motion.h2>
          </div>
          <NewsTimeline />
        </div>
      </section>

      {/* Enquire Now Section - High End Lead Generation */}
      <section className="relative py-40 overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
            alt="Engineering Background" 
            className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-7xl font-black text-white mb-8 tracking-tighter"
            >
              Enquire Now
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-300 text-lg md:text-xl font-medium mb-16 max-w-2xl leading-relaxed"
            >
              Reach out to us today to embark on your journey towards academic excellence and personal growth. Our team is ready to assist you in discovering how our institution can shape your future.
            </motion.p>

            <div className="flex flex-col md:flex-row gap-6">
              <button 
                onClick={openEnquiry}
                className="flex items-center gap-4 px-12 py-5 bg-[#004a99] text-white font-black rounded-xl text-sm uppercase tracking-widest hover:brightness-110 shadow-xl shadow-[#004a99]/20 group/btn"
              >
                Launch Enquiry Portal <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-40 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6">
          <div className="relative blue-water-glass !bg-[#004a99] p-16 md:p-32 rounded-[4rem] overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 animate-pulse" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <h2 className="text-5xl md:text-8xl font-black text-white mb-10 max-w-5xl leading-[0.9] tracking-tighter">
                Start Your Tech <br /> Journey Today.
              </h2>
              <p className="text-blue-100 text-xl md:text-2xl font-medium mb-16 max-w-3xl opacity-80 leading-relaxed">
                Join a community that breathes innovation. Seats for the 2025 engineering cycle are filling fast.
              </p>
              <div className="flex flex-col sm:flex-row gap-8">
                <button 
                  onClick={openEnquiry}
                  className="px-16 py-6 bg-white text-[#004a99] font-black rounded-[2rem] hover:scale-105 transition-all shadow-3xl text-sm uppercase tracking-widest"
                >
                  Apply Online
                </button>
                <Link 
                  to="/contact" 
                  className="px-16 py-6 border-2 border-white/20 text-white font-black rounded-[2rem] hover:bg-white/10 transition-all text-sm uppercase tracking-widest backdrop-blur-md"
                >
                  Contact Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
