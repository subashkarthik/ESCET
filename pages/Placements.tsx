
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, TrendingUp, Award, Users, Building2, Target, CheckCircle, Star } from 'lucide-react';

const Placements: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const placementStats = [
    { label: 'Placement Rate', value: '95%', icon: TrendingUp, color: 'from-green-500 to-emerald-600' },
    { label: 'Average Package', value: '6.5 LPA', icon: Briefcase, color: 'from-blue-500 to-indigo-600' },
    { label: 'Highest Package', value: '24 LPA', icon: Award, color: 'from-purple-500 to-pink-600' },
    { label: 'Companies Visited', value: '150+', icon: Building2, color: 'from-orange-500 to-red-600' }
  ];

  const topRecruiters = [
    'Google', 'Microsoft', 'Amazon', 'TCS', 'Infosys', 'Wipro',
    'Cognizant', 'Accenture', 'IBM', 'Oracle', 'Capgemini', 'Tech Mahindra'
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Software Engineer at Google',
      package: '22 LPA',
      quote: 'The placement cell provided excellent training and guidance. Mock interviews and aptitude sessions were instrumental in my success.',
      image: '👨‍💼'
    },
    {
      name: 'Priya Sharma',
      role: 'Data Analyst at Microsoft',
      package: '18 LPA',
      quote: 'ESCET\'s industry connections and dedicated placement team helped me land my dream job. Forever grateful!',
      image: '👩‍💼'
    },
    {
      name: 'Arun Patel',
      role: 'Full Stack Developer at Amazon',
      package: '20 LPA',
      quote: 'The technical training and soft skills development prepared me perfectly for the corporate world.',
      image: '👨‍💻'
    }
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-[#10b981]/20 selection:text-[#10b981] pt-[180px]">{/* Fixed navbar padding */}
      {/* Immersive Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            style={{ scale: 1.1, y: y1 }}
            src="/images/placements/hero.jpg" 
            alt="Placements" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#10b981]/40 via-transparent to-white" />
          
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
              <Target size={14} className="text-[#10b981]" />
              Career Success
            </span>
            <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter drop-shadow-2xl">
              Placements <span className="text-[#10b981]">2024</span>
            </h1>
            <p className="text-white/80 text-xl md:text-2xl font-medium mt-6 max-w-3xl mx-auto">
              Empowering students to achieve their career aspirations with industry-leading placement support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Placement Statistics */}
      <section className="py-32 relative -mt-32 z-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {placementStats.map((stat, i) => (
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

      {/* Placement Process Section */}
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
              <div className="water-glass !bg-white/50 p-12 md:p-20 border-white/80 shadow-[0_40px_100px_-20px_rgba(16,185,129,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 p-10 opacity-[0.03] pointer-events-none">
                  <Briefcase size={300} strokeWidth={1} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-[#10b981] mb-8">
                    <div className="w-12 h-1 bg-[#10b981] rounded-full" />
                    <span className="font-black uppercase tracking-[0.2em] text-xs">Our Process</span>
                  </div>

                  <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                    Structured <br />
                    <span className="text-[#10b981]">Placement Drive</span>
                  </h2>

                  <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed max-w-2xl">
                    <p className="relative pl-8 border-l-4 border-[#10b981]">
                      Our comprehensive placement process includes pre-placement training, aptitude tests, technical interviews, and HR rounds.
                    </p>
                    <p>
                      We provide dedicated training in communication skills, aptitude, technical subjects, and soft skills to ensure every student is industry-ready.
                    </p>
                  </div>

                  {/* Process Steps */}
                  <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-slate-200/50">
                    {[
                      { icon: Users, title: 'Pre-Placement Training', desc: 'Aptitude & Technical' },
                      { icon: CheckCircle, title: 'Mock Interviews', desc: 'Real-world scenarios' },
                      { icon: Building2, title: 'Campus Drives', desc: '150+ companies annually' },
                      { icon: Award, title: 'Offer Letters', desc: 'Multiple opportunities' }
                    ].map((step, i) => (
                      <div key={i} className="space-y-3">
                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                          <step.icon size={20} />
                        </div>
                        <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">{step.title}</h5>
                        <p className="text-xs text-slate-500 font-medium">{step.desc}</p>
                      </div>
                    ))}
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
              style={{ y: y2 }}
            >
              <div className="relative p-1 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-[3rem] shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <img 
                  src="/images/placements/recruitment.jpg" 
                  alt="Campus Recruitment" 
                  className="w-full h-[500px] object-cover rounded-[2.8rem] transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Floating Glass Data Card */}
                <div className="absolute bottom-10 -right-10 water-glass p-8 bg-white/95 backdrop-blur-2xl border-white shadow-3xl max-w-[280px]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#10b981] rounded-xl flex items-center justify-center text-white">
                      <TrendingUp size={24} />
                    </div>
                    <h4 className="text-lg font-black text-[#10b981] tracking-tight">95% Success</h4>
                  </div>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    Consistently high placement rate across all departments
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Top Recruiters Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h3 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6"
            >
              Our <span className="text-[#10b981]">Top Recruiters</span>
            </motion.h3>
            <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto">
              Leading companies trust ESCET graduates for their technical excellence and professional skills
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {topRecruiters.map((company, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="water-glass !bg-white/80 p-8 border-white/80 hover:bg-white transition-all group text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Building2 size={32} />
                </div>
                <h4 className="text-lg font-black text-slate-900">{company}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h3 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6"
            >
              Success <span className="text-[#10b981]">Stories</span>
            </motion.h3>
            <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto">
              Hear from our alumni who achieved their career dreams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="water-glass !bg-white/80 p-8 border-white/80 hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{testimonial.image}</div>
                  <div>
                    <h4 className="text-lg font-black text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600 font-medium">{testimonial.role}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Award size={14} className="text-[#10b981]" />
                      <span className="text-xs font-black text-[#10b981]">{testimonial.package}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} className="fill-[#10b981] text-[#10b981]" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm font-medium leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Image Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-1 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-[3rem] shadow-2xl overflow-hidden"
          >
            <img 
              src="/images/placements/statistics.jpg" 
              alt="Placement Statistics" 
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
              Ready to Launch Your <span className="text-[#10b981]">Career</span>?
            </h3>
            <p className="text-slate-600 text-lg font-medium mb-10 max-w-2xl mx-auto">
              Join ESCET and get access to industry-leading placement support and career guidance.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-[#10b981] text-white rounded-2xl text-sm font-black uppercase tracking-[0.2em] hover:bg-[#059669] transition-all shadow-lg"
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

export default Placements;
