
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Eye, Target, Compass, Sparkles } from 'lucide-react';

const Vision: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <div className="bg-white min-h-screen selection:bg-[#ff6b35]/20 selection:text-[#ff6b35] pt-[180px]">{/* Fixed navbar padding */}
      {/* Immersive Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            style={{ scale: 1.1, y: y1 }}
            src="public/images/hero(1).jpg" 
            alt="Vision Background" 
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
              Our Future Horizon
            </span>
            <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter drop-shadow-2xl">
              Vision <span className="text-[#ff6b35]">&</span> Values
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Narrative - Refractive Glass Layout */}
      <section className="py-32 relative -mt-32 z-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column: Visual Metaphor */}
            <motion.div 
              className="lg:col-span-5 relative"
              style={{ y: y2, rotate }}
            >
              <div className="sticky top-40">
                <div className="relative p-1 bg-gradient-to-br from-[#ff6b35] to-[#ff9e7d] rounded-[3rem] shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <img 
                    src="public/images/campus-hero.jpg" 
                    alt="Campus" 
                    className="w-full h-[500px] object-cover rounded-[2.8rem] transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Floating Glass Data Card */}
                  <div className="absolute bottom-10 -right-10 water-glass p-8 bg-white/95 backdrop-blur-2xl border-white shadow-3xl max-w-[280px]">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#004a99] rounded-xl flex items-center justify-center text-white">
                        <Target size={24} />
                      </div>
                      <h4 className="text-lg font-black text-[#004a99] tracking-tight">Core Goal</h4>
                    </div>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">
                      Transforming Villupuram into a premier resource factory for the global IT landscape.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: The Vision Slab */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="water-glass !bg-slate-50/50 p-12 md:p-20 border-white/80 shadow-[0_40px_100px_-20px_rgba(0,74,153,0.1)] relative overflow-hidden h-full flex flex-col justify-center">
                {/* Refractive Watermark */}
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                  <Eye size={300} strokeWidth={1} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-[#004a99] mb-8">
                    <div className="w-12 h-1 bg-[#ff6b35] rounded-full" />
                    <span className="font-black uppercase tracking-[0.2em] text-xs">Aspiration</span>
                  </div>

                  <h2 className="text-5xl md:text-8xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                    Empowering <br />
                    <span className="text-[#004a99]">Mindsets.</span>
                  </h2>

                  <div className="space-y-10 text-slate-600 text-xl font-medium leading-relaxed max-w-2xl">
                    <p className="relative pl-8 border-l-4 border-[#ff6b35]">
                      "Impart an inclusive engineering education that goes beyond being a facilitator for a career and rudimentary skills."
                    </p>
                    <p>
                      We equip our students to offer ethically and environmentally conscious solutions to societal issues. ESCET aims in making the City of Villupuram a potential source and resource factory for the global IT Hubs.
                    </p>
                  </div>

                  {/* Icon Grid for Values */}
                  <div className="grid grid-cols-2 gap-8 mt-20 pt-12 border-t border-slate-200/50">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                        <Compass size={20} />
                      </div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">Ethical Leadership</h5>
                      <p className="text-xs text-slate-500 font-medium">Fostering integrity in every solution we build.</p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        <GraduationCap size={20} />
                      </div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">Inclusive Growth</h5>
                      <p className="text-xs text-slate-500 font-medium">Education accessible to every aspiring engineer.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Philosophy Section - Dark Contrast */}
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
          <div className="max-w-4xl mx-auto text-center">
            <motion.h3 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-12"
            >
              "Innovation is the bridge between <span className="text-[#ff6b35]">dreaming</span> and <span className="text-orange-300">delivering</span>."
            </motion.h3>
            <div className="w-24 h-1.5 bg-[#ff6b35] mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-10">
            {['Mission', 'Core Values', 'Infrastructure', 'Success Stories'].map((item, i) => (
              <motion.button
                key={i}
                whileHover={{ y: -5 }}
                className="px-12 py-5 bg-white border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] text-[#004a99] hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all shadow-sm"
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
