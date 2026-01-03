
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Clock, Users, BookOpen, CheckCircle2 } from 'lucide-react';

const COURSE_DATA = [
  { sno: 1, name: 'B.Tech. - Artificial Intelligence and Data Science', seats: 60, duration: '4 Years' },
  { sno: 2, name: 'B.E. - Civil Engineering', seats: 30, duration: '4 Years' },
  { sno: 3, name: 'B.E. - Computer Science and Engineering', seats: 60, duration: '4 Years' },
  { sno: 4, name: 'B.E. - Electronics and Communication Engineering', seats: 60, duration: '4 Years' },
  { sno: 5, name: 'B.E. - Electrical and Electronics Engineering', seats: 30, duration: '4 Years' },
  { sno: 6, name: 'B.Tech. - Information Technology', seats: 60, duration: '4 Years' },
  { sno: 7, name: 'B.E. - Mechanical Engineering', seats: 60, duration: '4 Years' },
];

const CoursesOffered: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-32 pt-[180px]">{/* Fixed navbar padding */}
      {/* Hero Section */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
            alt="Students Collaboration" 
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#004a99]/20 via-transparent to-[#0f172a]/80" />
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <GraduationCap size={14} className="text-orange-500" />
            Academic Programs
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase drop-shadow-2xl">
            Courses Offered
          </h1>
        </motion.div>
      </section>

      {/* Main Table Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4"
            >
              Courses Offered
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-500 font-bold text-lg"
            >
              All Courses are run under semester system of the <span className="text-[#004a99]">Anna University - Chennai</span>
            </motion.p>
          </div>

          {/* Glassmorphic Data Table */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="water-glass overflow-hidden border-white/60 shadow-2xl"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#004a99]/5 border-b border-slate-200">
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#004a99]">S. No.</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#004a99]">Name of the course</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#004a99] text-center">No. of seats</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#004a99] text-center">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {COURSE_DATA.map((item, idx) => (
                    <motion.tr 
                      key={item.sno}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="group hover:bg-white transition-colors cursor-default"
                    >
                      <td className="px-8 py-6 text-sm font-black text-slate-400 group-hover:text-[#004a99] transition-colors">{item.sno}</td>
                      <td className="px-8 py-6 text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#004a99]/20 group-hover:bg-orange-500 transition-colors" />
                          {item.name}
                        </div>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <span className="bg-[#004a99]/5 px-5 py-2 rounded-full border border-[#004a99]/10 text-sm font-black text-[#004a99]">
                          {item.seats}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-center text-sm font-black text-slate-500">
                        <div className="flex items-center justify-center gap-2">
                          <Clock size={14} className="text-orange-500" />
                          {item.duration}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Admission Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
            <div className="water-glass !bg-slate-50 p-10 border-white shadow-xl">
              <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <BookOpen className="text-[#004a99]" /> Why Choose ESCET?
              </h3>
              <ul className="space-y-4">
                {[
                  'Anna University Affiliated Curriculum',
                  'State-of-the-art Research Laboratories',
                  'Industry-Aligned Skill Development',
                  'Excellent Placement Track Record'
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                    <CheckCircle2 size={18} className="text-green-500 mt-1 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="water-glass !bg-[#004a99] p-10 text-white shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12">
                <Users size={120} />
              </div>
              <h3 className="text-2xl font-black mb-4 relative z-10">Admissions Open 2025</h3>
              <p className="text-blue-100 font-medium mb-8 relative z-10 leading-relaxed">
                Be a part of a vibrant community of innovators and engineers. Secure your seat today for the upcoming academic session.
              </p>
              <button className="relative z-10 w-full py-4 bg-orange-600 text-white font-black rounded-xl text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-orange-900/20">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesOffered;
