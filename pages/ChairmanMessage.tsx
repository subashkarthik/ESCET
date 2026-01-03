
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, GraduationCap, Award, Shield, User } from 'lucide-react';

const ChairmanMessage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen selection:bg-[#004a99]/10 pt-[180px]">{/* Added padding for fixed navbar */}
      {/* Header Section */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#012b39]">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Corporate Tech" 
            className="w-full h-full object-cover opacity-10 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#012b39]/50 to-white" />
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-6xl md:text-9xl font-black text-white tracking-tighter text-center"
        >
          Leadership <br />
          <span className="text-orange-500">Perspective</span>
        </motion.h1>
      </section>

      {/* Main Content Section */}
      <section className="py-24 relative bg-white overflow-hidden">
        {/* Subtle Architectural Watermark (Mirroring the screenshot) */}
        <div className="absolute bottom-0 right-0 w-[800px] opacity-[0.03] pointer-events-none select-none translate-x-1/4">
          <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect x="100" y="400" width="600" height="200" stroke="currentColor" strokeWidth="2"/>
            <rect x="150" y="200" width="500" height="200" stroke="currentColor" strokeWidth="2"/>
            <rect x="200" y="100" width="400" height="100" stroke="currentColor" strokeWidth="2"/>
            {Array.from({length: 12}).map((_, i) => (
              <rect key={i} x={120 + (i * 45)} y={450} width="30" height="40" stroke="currentColor" strokeWidth="1"/>
            ))}
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Chairman Portrait */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              {/* Animated Container with 3D Perspective */}
              <motion.div 
                className="relative z-10 rounded-[3rem] border-[16px] border-[#004a99]/5 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group"
                style={{ perspective: "1000px" }}
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: -2,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated Glow Border */}
                <motion.div 
                  className="absolute -inset-[2px] bg-gradient-to-r from-orange-500 via-[#004a99] to-orange-500 rounded-[3rem] opacity-0 group-hover:opacity-100 blur-xl -z-10"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Refractive Overlay with Animation */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-[#004a99]/10 via-transparent to-white/20 pointer-events-none z-10"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                />

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 z-20 pointer-events-none"
                  initial={{ x: "-100%" }}
                  whileHover={{
                    x: "100%",
                    transition: { duration: 0.8, ease: "easeInOut" }
                  }}
                >
                  <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                </motion.div>

                {/* Main Image with Enhanced Animations */}
                <motion.img 
                  src="/images/chairman.jpg" 
                  alt="Er. S. Selvamani" 
                  className="w-full h-auto object-cover"
                  whileHover={{
                    scale: 1.08,
                    filter: "grayscale(0%) brightness(1.1)",
                  }}
                  transition={{ duration: 0.5 }}
                  style={{
                    filter: "grayscale(20%)",
                  }}
                />

                {/* Particle Effects */}
                <div className="absolute inset-0 pointer-events-none z-10">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-orange-500/40 rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
                
                {/* Floating Info Tag with Enhanced Animation */}
                <motion.div 
                  className="absolute bottom-8 left-8 right-8 water-glass !bg-white/95 p-6 backdrop-blur-3xl shadow-2xl border-white/60"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 30px 60px -15px rgba(0,0,0,0.3)"
                  }}
                  animate={{
                    boxShadow: [
                      "0 20px 40px -10px rgba(0,0,0,0.2)",
                      "0 25px 50px -12px rgba(255,107,53,0.3)",
                      "0 20px 40px -10px rgba(0,0,0,0.2)",
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                   <div className="flex items-center gap-4">
                      <motion.div 
                        className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg"
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <User size={24} />
                      </motion.div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Chairman</p>
                        <h4 className="text-xl font-black text-slate-900 leading-tight">Er. S. Selvamani</h4>
                      </div>
                   </div>
                </motion.div>
              </motion.div>

              {/* Enhanced Decorative Accents */}
              <motion.div 
                className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-[80px] -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#004a99]/10 rounded-full blur-[80px] -z-10"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.1, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
            </motion.div>

            {/* Right Column: The Message */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 text-orange-500 mb-4">
                  <div className="w-12 h-1 bg-orange-500 rounded-full" />
                  <span className="font-bold text-sm tracking-[0.2em] uppercase">Executive Address</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-10">
                  Chairman's <br />
                  <span className="text-[#004a99]">Message</span>
                </h2>
              </div>

              <div className="space-y-8 text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
                <p className="relative">
                  It is with great pleasure that I address you as the Chairman of this prestigious institution, dedicated to fostering excellence in engineering education. Today, I want to emphasize the profound impact of the latest advancements in technology on our college and the world around us. At E.S. College of Engineering and Technology, we recognize that technology is evolving at an unprecedented pace, shaping every aspect of our lives. 
                </p>

                <p>
                  We understand the importance of staying at the forefront of these advancements, as they present immense opportunities for innovation, growth, and a better future. Our commitment to embracing the latest technologies is reflected in our state-of-the-art campus infrastructure, equipped with cutting-edge laboratories, research facilities, and interactive classrooms. We continually invest in upgrading our resources to ensure that our students have access to the most advanced tools and equipment, creating an environment conducive to hands-on learning and exploration.
                </p>

                <div className="water-glass !bg-slate-50/50 p-10 border-white/80 my-10">
                  <p className="mb-6">
                    We offer a wide range of specialized programs and courses that cover emerging fields such as artificial intelligence, machine learning, data science, robotics, cybersecurity, and sustainable engineering. By incorporating these contemporary topics into our curriculum, we prepare our students to become tomorrow's technology leaders, capable of addressing real-world challenges and driving meaningful change.
                  </p>
                  <p>
                    Moreover, we understand that education extends beyond the boundaries of the classroom. To foster a holistic learning experience, we organize regular seminars, workshops, and guest lectures by industry experts who share their insights and experiences regarding the latest technological trends.
                  </p>
                </div>

                <p>
                  I invite you to explore our website further to learn more about our programs, facilities, faculty, and the achievements of our students. Whether you are a prospective student, parent, industry partner, or a curious visitor, I encourage you to join us in our journey of embracing the latest advancements in technology and shaping the future.
                </p>

                <p className="pt-6 font-bold text-slate-900">
                  Thank you for your interest in E.S. College of Engineering and Technology.
                </p>

                <div className="pt-8 border-t border-slate-100 flex flex-col gap-1">
                  <span className="text-slate-400 uppercase text-xs font-black tracking-widest">Warm regards,</span>
                  <span className="text-2xl font-black text-[#004a99]">Er. S. Selvamani</span>
                  <span className="text-sm font-bold text-slate-500 italic">Chairman, ESCET</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Values Quick Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, label: 'Excellence', text: 'Striving for the highest academic and research standards.' },
              { icon: Award, label: 'Recognition', text: 'Building a legacy of world-class engineering graduates.' },
              { icon: GraduationCap, label: 'Future-Ready', text: 'Curriculum aligned with the next decade of tech.' },
            ].map((v, i) => (
              <div key={i} className="water-glass p-10 !bg-white hover:-translate-y-2 transition-transform shadow-xl border-white">
                <div className="w-14 h-14 rounded-2xl bg-[#004a99]/5 flex items-center justify-center text-[#004a99] mb-6">
                  <v.icon size={28} />
                </div>
                <h5 className="text-xl font-black text-slate-900 mb-3">{v.label}</h5>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChairmanMessage;
