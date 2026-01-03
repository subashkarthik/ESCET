
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight, MapPin, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="pt-[180px] pb-32 bg-slate-50/50 min-h-screen relative overflow-hidden">{/* Fixed navbar padding */}
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#004a99]/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Dynamic Image & Stats Layout */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6 items-start">
            {/* Knowledge Center Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-1.5 bg-gradient-to-br from-orange-500 to-red-600 rounded-[2.5rem] shadow-2xl"
            >
              <div className="overflow-hidden rounded-[2.3rem] aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop" 
                  alt="Knowledge Center" 
                  className="w-full h-full object-cover brightness-90 group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
            </motion.div>

            {/* Experience Pulse Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="blue-water-glass !bg-[#004a99] aspect-square flex flex-col items-center justify-center text-center p-8 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,74,153,0.4)] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="text-5xl md:text-6xl font-black text-white mb-2 relative z-10 tracking-tighter">25+</span>
              <p className="text-blue-100 font-bold uppercase text-[10px] tracking-[0.2em] leading-tight relative z-10">
                Years of <br /> Excellence
              </p>
            </motion.div>

            {/* Main Campus Image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-2 relative p-1.5 bg-gradient-to-br from-orange-500 to-red-600 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)]"
            >
              <div className="overflow-hidden rounded-[2.8rem] h-[350px]">
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop" 
                  alt="ESCET Main Campus" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Award Badge */}
              <div className="absolute -bottom-6 -right-6 water-glass p-6 bg-white flex items-center gap-4 shadow-3xl">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Accredited</p>
                  <p className="text-sm font-black text-slate-900">Grade 'A' Institution</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Narrative Content */}
          <div className="lg:col-span-7 space-y-10 lg:pl-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 text-[#004a99] mb-6">
                <GraduationCap size={28} />
                <span className="font-black uppercase tracking-[0.2em] text-xs">
                  E.S. College of Engineering & Technology
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-12 tracking-tighter leading-none">
                About Us
              </h1>
              
              <div className="space-y-8 text-slate-600 text-lg leading-relaxed font-medium">
                <p className="relative pl-8 border-l-4 border-[#004a99]">
                  E.S. College of Engineering and Technology is a leading educational institution dedicated to nurturing future engineers and empowering them with cutting-edge knowledge and skills. The College stands at the forefront of technological advancements, continuously striving to provide an exceptional learning experience that prepares students for the challenges and opportunities of the modern world.
                </p>
                
                <p>
                  At E.S. College of Engineering and Technology, we are committed to providing a transformative educational experience that equips students with the skills and knowledge needed to excel in an era of rapid technological advancements. By embracing the latest technologies, aligning our curriculum with industry trends, promoting research and innovation, and fostering industry collaborations, we prepare our students to become future-ready engineers and leaders who will drive positive change in the world. Join us at E.S. College of Engineering and Technology and embark on a journey of academic excellence and technological innovation.
                </p>

                <div className="water-glass !bg-white/90 p-10 border-[#004a99]/10 mt-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-[#004a99] rounded-lg flex items-center justify-center text-white">
                      <MapPin size={20} />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">Prime Location</h3>
                  </div>
                  <p className="text-slate-500 mb-6">
                    The College is located on National Highway (NH) 45 in Villupuram. Villupuram is the headquarters of Villupuram district and is 160 kms from the Tamil Nadu state capital of Chennai. Villupuram is just 40 kms from Puducherry, the capital of UT of Puducherry.
                  </p>
                  <p className="text-slate-500 italic">
                    The institution is a pride of E.S group of educational institutions, which is the think tank of the educationalists in and around the city of Villupuram.
                  </p>
                </div>
              </div>

              <div className="pt-12">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-4 px-10 py-5 bg-[#004a99] text-white font-black rounded-2xl text-xs uppercase tracking-[0.2em] hover:brightness-125 transition-all shadow-xl shadow-[#004a99]/20 group"
                >
                  Visit Our Campus <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
