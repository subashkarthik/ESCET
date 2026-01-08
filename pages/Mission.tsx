import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Lightbulb, Users, Briefcase, Heart, Sparkles, CheckCircle, Star } from 'lucide-react';

const Mission: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="bg-white min-h-screen selection:bg-[#ff6b35]/20 selection:text-[#ff6b35] pt-[180px]">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            style={{ scale: 1.1, y: y1 }}
            src="/images/mission_hero.jpg" 
            alt="Our Mission" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#004a99]/40 via-transparent to-white" />
          
          {/* Floating Glass Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-24 h-24 border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl"
                style={{ top: `${20 + i * 15}%`, left: `${10 + i * 20}%`, opacity: 0.3 }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              <Sparkles size={14} className="text-[#ff6b35]" />
              Our Purpose
            </span>
            <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter drop-shadow-2xl">
              Our <span className="text-[#ff6b35]">Mission</span>
            </h1>
            <p className="text-white/80 text-xl md:text-2xl font-medium mt-6 max-w-3xl mx-auto">
              Empowering minds, shaping futures, building tomorrow's leaders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Educational Excellence Section */}
      <section className="py-32 relative -mt-32 z-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div className="lg:col-span-5 relative" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ y: y2 }}>
              <div className="relative p-1 bg-gradient-to-br from-[#004a99] to-[#0066cc] rounded-[3rem] shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <img src="/images/educational_excellence.jpg" alt="Educational Excellence" className="w-full h-[500px] object-cover rounded-[2.8rem] transition-transform duration-1000 group-hover:scale-110"/>
                
                <div className="absolute bottom-10 -right-10 water-glass p-8 bg-white/95 backdrop-blur-2xl border-white shadow-3xl max-w-[280px]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#004a99] rounded-xl flex items-center justify-center text-white">
                      <Target size={24} />
                    </div>
                    <h4 className="text-lg font-black text-[#004a99] tracking-tight">Excellence</h4>
                  </div>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">Quality education for all students</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7">
              <div className="water-glass !bg-slate-50/50 p-12 md:p-20 border-white/80 shadow-[0_40px_100px_-20px_rgba(0,74,153,0.1)] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                  <Target size={300} strokeWidth={1} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-[#004a99] mb-8">
                    <div className="w-12 h-1 bg-[#ff6b35] rounded-full" />
                    <span className="font-black uppercase tracking-[0.2em] text-xs">Educational Excellence</span>
                  </div>

                  <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                    Quality <br /><span className="text-[#004a99]">Education</span>
                  </h2>

                  <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed max-w-2xl">
                    <p className="relative pl-8 border-l-4 border-[#ff6b35]">
                      To provide world-class technical education that nurtures critical thinking, creativity, and problem-solving skills in every student.
                    </p>
                    <p>
                      We are committed to delivering comprehensive education that combines theoretical knowledge with practical application, preparing students for real-world challenges.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-slate-200/50">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        <CheckCircle size={20} />
                      </div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">Quality Focus</h5>
                      <p className="text-xs text-slate-500 font-medium">Excellence in teaching and learning</p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                        <Star size={20} />
                      </div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">Skill Development</h5>
                      <p className="text-xs text-slate-500 font-medium">Practical and technical expertise</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation & Research - Reversed */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7">
              <div className="water-glass !bg-white/50 p-12 md:p-20 border-white/80 shadow-[0_40px_100px_-20px_rgba(0,74,153,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 p-10 opacity-[0.03] pointer-events-none">
                  <Lightbulb size={300} strokeWidth={1} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-[#004a99] mb-8">
                    <div className="w-12 h-1 bg-[#ff6b35] rounded-full" />
                    <span className="font-black uppercase tracking-[0.2em] text-xs">Innovation & Research</span>
                  </div>

                  <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                    Foster <br /><span className="text-[#004a99]">Innovation</span>
                  </h2>

                  <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed max-w-2xl">
                    <p className="relative pl-8 border-l-4 border-[#ff6b35]">
                      To cultivate a culture of innovation and research that encourages students to explore, experiment, and create solutions for tomorrow's challenges.
                    </p>
                    <p>
                      Our research-driven approach empowers students to push boundaries, develop cutting-edge technologies, and contribute to scientific advancement.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-slate-200/50">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                        <Lightbulb size={20} />
                      </div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">Innovation Labs</h5>
                      <p className="text-xs text-slate-500 font-medium">State-of-the-art facilities</p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        <Star size={20} />
                      </div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">Research Projects</h5>
                      <p className="text-xs text-slate-500 font-medium">Student-led initiatives</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="lg:col-span-5 relative" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative p-1 bg-gradient-to-br from-[#ff6b35] to-[#ff9e7d] rounded-[3rem] shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <img src="/images/innovation_research.jpg" alt="Innovation & Research" className="w-full h-[500px] object-cover rounded-[2.8rem] transition-transform duration-1000 group-hover:scale-110"/>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Collaboration Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div className="lg:col-span-5 relative" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative p-1 bg-gradient-to-br from-[#004a99] to-[#0066cc] rounded-[3rem] shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <img src="/images/industry_collaboration.jpg" alt="Industry Collaboration" className="w-full h-[500px] object-cover rounded-[2.8rem] transition-transform duration-1000 group-hover:scale-110"/>
                
                <div className="absolute bottom-10 -right-10 water-glass p-8 bg-white/95 backdrop-blur-2xl border-white shadow-3xl max-w-[280px]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#004a99] rounded-xl flex items-center justify-center text-white">
                      <Briefcase size={24} />
                    </div>
                    <h4 className="text-lg font-black text-[#004a99] tracking-tight">Industry Ready</h4>
                  </div>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">100% placement assistance</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7">
              <div className="water-glass !bg-slate-50/50 p-12 md:p-20 border-white/80 shadow-[0_40px_100px_-20px_rgba(0,74,153,0.1)] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                  <Briefcase size={300} strokeWidth={1} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-[#004a99] mb-8">
                    <div className="w-12 h-1 bg-[#ff6b35] rounded-full" />
                    <span className="font-black uppercase tracking-[0.2em] text-xs">Industry Collaboration</span>
                  </div>

                  <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                    Career <br /><span className="text-[#004a99]">Success</span>
                  </h2>

                  <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed max-w-2xl">
                    <p className="relative pl-8 border-l-4 border-[#ff6b35]">
                      To bridge the gap between academia and industry through strategic partnerships, internships, and placement opportunities that ensure career success.
                    </p>
                    <p>
                      We collaborate with leading companies to provide students with real-world exposure, industry mentorship, and guaranteed placement assistance.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-slate-200/50">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        <Briefcase size={20} />
                      </div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">Placements</h5>
                      <p className="text-xs text-slate-500 font-medium">Top company partnerships</p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                        <Users size={20} />
                      </div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">Internships</h5>
                      <p className="text-xs text-slate-500 font-medium">Industry experience programs</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Pillars */}
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
            <motion.h3 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
              Mission <span className="text-[#ff6b35]">Pillars</span>
            </motion.h3>
            <p className="text-white/70 text-xl font-medium max-w-2xl mx-auto">
              Core principles guiding our educational journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Academic Excellence', desc: 'Deliver quality education with industry-relevant curriculum' },
              { icon: Lightbulb, title: 'Innovation Culture', desc: 'Foster creativity and entrepreneurial thinking' },
              { icon: Users, title: 'Holistic Development', desc: 'Nurture overall personality and leadership skills' },
              { icon: Briefcase, title: 'Industry Readiness', desc: 'Prepare students for successful careers' },
              { icon: Heart, title: 'Social Responsibility', desc: 'Instill values of ethics and community service' },
              { icon: Star, title: 'Global Perspective', desc: 'Develop international outlook and competencies' }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="water-glass !bg-white/10 p-8 border-white/20 hover:bg-white/20 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#ff6b35] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <pillar.icon size={28} />
                </div>
                <h4 className="text-xl font-black text-white mb-3">{pillar.title}</h4>
                <p className="text-white/60 text-sm font-medium">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Join Our <span className="text-[#004a99]">Mission</span>
            </h3>
            <p className="text-slate-600 text-lg font-medium mb-10 max-w-2xl mx-auto">
              Be part of an institution committed to excellence, innovation, and your success.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-[#004a99] text-white rounded-2xl text-sm font-black uppercase tracking-[0.2em] hover:bg-[#003d7a] transition-all shadow-lg"
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

export default Mission;
