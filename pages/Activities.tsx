
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Code, Music, Trophy, Users, Sparkles, Lightbulb, Heart, Star, Zap } from 'lucide-react';

const Activities: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="bg-white min-h-screen selection:bg-[#ff6b35]/20 selection:text-[#ff6b35] pt-[180px]">{/* Fixed navbar padding */}
      {/* Immersive Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            style={{ scale: 1.1, y: y1 }}
            src="/images/activities_hero.jpg" 
            alt="Student Activities" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#004a99]/40 via-transparent to-white" />
          
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
              <Sparkles size={14} className="text-[#ff6b35]" />
              Beyond Academics
            </span>
            <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter drop-shadow-2xl">
              Student <span className="text-[#ff6b35]">Activities</span>
            </h1>
            <p className="text-white/80 text-xl md:text-2xl font-medium mt-6 max-w-3xl mx-auto">
              Where passion meets opportunity - explore, create, and excel
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technical Events Section */}
      <section className="py-32 relative -mt-32 z-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Image */}
            <motion.div 
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ y: y2 }}
            >
              <div className="relative p-1 bg-gradient-to-br from-[#004a99] to-[#0066cc] rounded-[3rem] shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <img 
                  src="/images/technical_events.jpg" 
                  alt="Technical Events" 
                  className="w-full h-[500px] object-cover rounded-[2.8rem] transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Floating Glass Data Card */}
                <div className="absolute bottom-10 -right-10 water-glass p-8 bg-white/95 backdrop-blur-2xl border-white shadow-3xl max-w-[280px]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#004a99] rounded-xl flex items-center justify-center text-white">
                      <Code size={24} />
                    </div>
                    <h4 className="text-lg font-black text-[#004a99] tracking-tight">Tech Events</h4>
                  </div>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    Hackathons, coding competitions, project expos
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="water-glass !bg-slate-50/50 p-12 md:p-20 border-white/80 shadow-[0_40px_100px_-20px_rgba(0,74,153,0.1)] relative overflow-hidden">
                {/* Refractive Watermark */}
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                  <Code size={300} strokeWidth={1} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-[#004a99] mb-8">
                    <div className="w-12 h-1 bg-[#ff6b35] rounded-full" />
                    <span className="font-black uppercase tracking-[0.2em] text-xs">Technical Events</span>
                  </div>

                  <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                    Innovation <br />
                    <span className="text-[#004a99]">& Technology</span>
                  </h2>

                  <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed max-w-2xl">
                    <p className="relative pl-8 border-l-4 border-[#ff6b35]">
                      Participate in hackathons, coding competitions, and project expos that challenge your technical skills and foster innovation.
                    </p>
                    <p>
                      Our annual tech fest features workshops, guest lectures from industry experts, and competitions in AI/ML, web development, robotics, and more.
                    </p>
                  </div>

                  {/* Events Grid */}
                  <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-slate-200/50">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        <Lightbulb size={20} />
                      </div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">Hackathons</h5>
                      <p className="text-xs text-slate-500 font-medium">24-hour coding marathons</p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                        <Zap size={20} />
                      </div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">Project Expo</h5>
                      <p className="text-xs text-slate-500 font-medium">Showcase innovative projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Cultural Programs Section - Reversed Layout */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="water-glass !bg-white/50 p-12 md:p-20 border-white/80 shadow-[0_40px_100px_-20px_rgba(0,74,153,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 p-10 opacity-[0.03] pointer-events-none">
                  <Music size={300} strokeWidth={1} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-[#004a99] mb-8">
                    <div className="w-12 h-1 bg-[#ff6b35] rounded-full" />
                    <span className="font-black uppercase tracking-[0.2em] text-xs">Cultural Programs</span>
                  </div>

                  <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                    Arts <br />
                    <span className="text-[#004a99]">& Culture</span>
                  </h2>

                  <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed max-w-2xl">
                    <p className="relative pl-8 border-l-4 border-[#ff6b35]">
                      Express your creativity through music, dance, drama, and art at our vibrant cultural festivals and events throughout the year.
                    </p>
                    <p>
                      Our annual cultural fest brings together talented performers, artists, and enthusiasts for three days of non-stop entertainment and celebration.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-slate-200/50">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                        <Music size={20} />
                      </div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">Annual Fest</h5>
                      <p className="text-xs text-slate-500 font-medium">3-day cultural extravaganza</p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        <Star size={20} />
                      </div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">Talent Shows</h5>
                      <p className="text-xs text-slate-500 font-medium">Showcase your artistic skills</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Image */}
            <motion.div 
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative p-1 bg-gradient-to-br from-[#ff6b35] to-[#ff9e7d] rounded-[3rem] shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <img 
                  src="/images/cultural_programs.jpg" 
                  alt="Cultural Programs" 
                  className="w-full h-[500px] object-cover rounded-[2.8rem] transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Sports Events Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Image */}
            <motion.div 
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative p-1 bg-gradient-to-br from-[#004a99] to-[#0066cc] rounded-[3rem] shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <img 
                  src="/images/sports_events.jpg" 
                  alt="Sports Events" 
                  className="w-full h-[500px] object-cover rounded-[2.8rem] transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Floating Glass Data Card */}
                <div className="absolute bottom-10 -right-10 water-glass p-8 bg-white/95 backdrop-blur-2xl border-white shadow-3xl max-w-[280px]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#004a99] rounded-xl flex items-center justify-center text-white">
                      <Trophy size={24} />
                    </div>
                    <h4 className="text-lg font-black text-[#004a99] tracking-tight">Championships</h4>
                  </div>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    Inter-college tournaments and sports day
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="water-glass !bg-slate-50/50 p-12 md:p-20 border-white/80 shadow-[0_40px_100px_-20px_rgba(0,74,153,0.1)] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                  <Trophy size={300} strokeWidth={1} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-[#004a99] mb-8">
                    <div className="w-12 h-1 bg-[#ff6b35] rounded-full" />
                    <span className="font-black uppercase tracking-[0.2em] text-xs">Sports Events</span>
                  </div>

                  <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                    Athletic <br />
                    <span className="text-[#004a99]">Excellence</span>
                  </h2>

                  <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed max-w-2xl">
                    <p className="relative pl-8 border-l-4 border-[#ff6b35]">
                      Compete in inter-college tournaments, annual sports day, and various athletic events across cricket, football, basketball, and more.
                    </p>
                    <p>
                      Our sports program emphasizes teamwork, discipline, and physical fitness while providing opportunities to represent the college at state and national levels.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-slate-200/50">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        <Trophy size={20} />
                      </div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">Tournaments</h5>
                      <p className="text-xs text-slate-500 font-medium">Inter-college competitions</p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                        <Users size={20} />
                      </div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">Sports Day</h5>
                      <p className="text-xs text-slate-500 font-medium">Annual athletic meet</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-40 bg-[#004a99] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.h3 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6"
            >
              Upcoming <span className="text-[#ff6b35]">Events</span>
            </motion.h3>
            <p className="text-white/70 text-xl font-medium max-w-2xl mx-auto">
              Mark your calendar for these exciting activities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Code, title: 'Tech Symposium', date: 'February 15-17', desc: 'Annual technical festival with workshops and competitions' },
              { icon: Music, title: 'Cultural Fest', date: 'March 10-12', desc: 'Three days of music, dance, and cultural celebrations' },
              { icon: Trophy, title: 'Sports Meet', date: 'January 25', desc: 'Inter-departmental sports competition' },
              { icon: Lightbulb, title: 'Hackathon 2026', date: 'February 5', desc: '24-hour coding challenge with exciting prizes' },
              { icon: Heart, title: 'Social Service', date: 'Every Saturday', desc: 'NSS activities and community outreach programs' },
              { icon: Calendar, title: 'Alumni Meet', date: 'April 20', desc: 'Connect with alumni and industry professionals' }
            ].map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="water-glass !bg-white/10 p-8 border-white/20 hover:bg-white/20 transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#ff6b35] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <event.icon size={28} />
                  </div>
                  <span className="text-white/60 text-xs font-black uppercase tracking-wider">{event.date}</span>
                </div>
                <h4 className="text-xl font-black text-white mb-3">{event.title}</h4>
                <p className="text-white/60 text-sm font-medium">{event.desc}</p>
              </motion.div>
            ))}
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
              Get <span className="text-[#004a99]">Involved</span>
            </h3>
            <p className="text-slate-600 text-lg font-medium mb-10 max-w-2xl mx-auto">
              Join clubs, participate in events, and make the most of your college experience at ESCET.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-[#004a99] text-white rounded-2xl text-sm font-black uppercase tracking-[0.2em] hover:bg-[#003d7a] transition-all shadow-lg"
              onClick={() => window.dispatchEvent(new Event('openEnquiryModal'))}
            >
              Join Us Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
