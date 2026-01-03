
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Lightbulb, User, Sparkles } from 'lucide-react';

const PrincipalMessage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen selection:bg-[#004a99]/10 pt-[180px]">{/* Fixed navbar padding */}
      {/* Header Section with techy backdrop */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#012b39]">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
            alt="Digital Tech Background" 
            className="w-full h-full object-cover opacity-10 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#012b39]/40 to-white" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <Sparkles size={14} className="text-orange-500" />
            Academic Leadership
          </span>
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter drop-shadow-2xl">
            Principal's <br />
            <span className="text-[#004a99] outline-text-white">Message</span>
          </h1>
        </motion.div>
      </section>

      {/* Main Narrative Section */}
      <section className="py-24 relative bg-white overflow-hidden">
        {/* Subtle Architectural Watermark (as seen in the requested visual) */}
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
            
            {/* Left Column: Principal Portrait */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="relative group">
                <div className="relative z-10 rounded-[3rem] border-[16px] border-[#f0f8ff] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] transition-transform duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                    alt="Dr. K. Indira" 
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Water Glass Overlay on image base */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/90 to-transparent backdrop-blur-[2px]" />
                </div>
                
                {/* ID Card Style Floating Tag */}
                <div className="absolute -bottom-10 -right-6 water-glass !bg-white/95 p-8 backdrop-blur-3xl shadow-3xl border-white/60 min-w-[300px]">
                   <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-[#004a99] rounded-2xl flex items-center justify-center text-white shadow-xl rotate-3 group-hover:rotate-0 transition-transform">
                        <User size={28} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-1">Head of Institution</p>
                        <h4 className="text-2xl font-black text-slate-900 leading-tight">Dr. K. Indira</h4>
                        <p className="text-xs font-bold text-[#004a99]">Principal, ESCET</p>
                      </div>
                   </div>
                </div>

                {/* Decorative blob */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100/50 rounded-full blur-[100px] -z-10" />
              </div>
            </motion.div>

            {/* Right Column: Message Content */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 lg:pl-10"
            >
              <div className="mb-12">
                <div className="flex items-center gap-3 text-[#004a99] mb-4">
                  <GraduationCap size={24} strokeWidth={2.5} />
                  <span className="font-bold text-lg tracking-tight">E.S. College of Engineering</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-4">
                  Principals <span className="text-blue-600">Message</span>
                </h2>
                <div className="w-24 h-2 bg-orange-500 rounded-full" />
              </div>

              <div className="space-y-10 text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
                <p>
                  Education is a multi-stage process of building character, acquiring knowledge and improving skills for life-long learning to lead a happy and peaceful life. Engineering education is discipline-specific and outcome based, which involves the application of basic principles of Mathematics and Science to solve practical engineering problems, to innovate newer technologies for providing feasible solutions to the futuristic challenges.
                </p>

                <div className="water-glass !bg-[#f0f8ff]/60 p-10 border-white/80 relative">
                  <div className="absolute top-0 right-0 p-6 opacity-10">
                    <Lightbulb size={60} />
                  </div>
                  <p className="relative z-10">
                    It has always been our belief that every student has an unending pool of talent that needs to be fostered. A proper care and guidance will help the students to develop right attitude, values and practices that enable each individual to excel in future. The main focus of our Institution is to empower students with sound knowledge, wisdom, passion for innovation and latest know-how in cutting-edge technologies to experience and face the challenges of Industry 5.0 in a highly networked global perspective. The wonderful infrastructure and good learning environment prevailing in our College help to provide an enjoyable and easy learning experience to all our students.
                  </p>
                </div>

                <p>
                  The inspiration and commitment of our Management to continuous improvement and the hard work of the faculty members towards the overall growth of our students ensures that every student passing out of our College will taste the success in any sphere of life they choose to work. I hope that their desire to contribute for the benefit of the society grows with their happiness and prosperity in life.
                </p>

                <p className="bg-slate-900 text-white p-10 rounded-[2rem] shadow-2xl">
                  I welcome the students from various parts of the state and country to join the E.S educational family, devote 4-years of time to learn the latest and get transformed into knowledgeable Engineers for futuristic needs. I wish all our students and graduates a great success and expect them to be proud ESCET-ians.
                </p>

                <div className="pt-12 border-t border-slate-100 flex flex-col gap-1">
                  <span className="text-slate-400 uppercase text-xs font-black tracking-widest">Regards</span>
                  <span className="text-4xl font-black text-slate-900 tracking-tighter">Dr. K.Indira</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Philosophy Icons Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: BookOpen, title: 'Foundational Knowledge', desc: 'Applying core mathematical and scientific principles to solve global problems.' },
              { icon: Lightbulb, title: 'Innovation First', desc: 'Preparing students for the high-tech demands of Industry 5.0.' },
              { icon: GraduationCap, title: 'Holistic Growth', desc: 'Fostering character and ethical values alongside technical expertise.' }
            ].map((item, idx) => (
              <div key={idx} className="water-glass p-10 !bg-white hover:-translate-y-3 transition-all border-white shadow-xl text-center">
                <div className="w-16 h-16 bg-[#004a99]/5 rounded-2xl flex items-center justify-center text-[#004a99] mx-auto mb-6">
                  <item.icon size={32} />
                </div>
                <h5 className="text-xl font-black text-slate-900 mb-4">{item.title}</h5>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrincipalMessage;
