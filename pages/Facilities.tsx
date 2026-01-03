
import React from 'react';
import { motion } from 'framer-motion';
import { Book, Database, Layers, CheckCircle2, Microscope, Dumbbell, Wifi, Coffee } from 'lucide-react';

const LIBRARY_DATA = [
  { sno: 1, name: 'B.E. - Civil Engineering', titles: '-', volumes: '2819' },
  { sno: 2, name: 'B.E. - Computer Science and Engineering', titles: '-', volumes: '9636' },
  { sno: 3, name: 'B.E. - Electronics and Communication Engineering', titles: '-', volumes: '8581' },
  { sno: 4, name: 'B.E. - Electrical and Electronics Engineering', titles: '-', volumes: '7437' },
  { sno: 5, name: 'B.Tech. - Information Technology', titles: '-', volumes: '5366' },
  { sno: 6, name: 'B.E. - Mechanical Engineering', titles: '-', volumes: '5835' },
  { sno: 7, name: 'B.Tech - Artificial Intelligence and Data Science', titles: '-', volumes: '5772' },
];

const Facilities: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-32 pt-[180px]">{/* Fixed navbar padding */}
      {/* Hero Section - Matching User Image Backdrop Style */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
            alt="Technology Background" 
            className="w-full h-full object-cover opacity-20 scale-110 blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f172a]/80" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase">
            Facilities
          </h1>
          <div className="w-24 h-1.5 bg-orange-600 mx-auto mt-6 rounded-full" />
        </motion.div>
      </section>

      {/* Library Details Table Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-[#004a99] rounded-2xl flex items-center justify-center text-white shadow-xl">
              <Book size={24} />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
              Library Details
            </h2>
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
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#004a99]">Department Name</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#004a99] text-center">No. of Titles</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#004a99] text-center">No. of Volumes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {LIBRARY_DATA.map((item, idx) => (
                    <motion.tr 
                      key={item.sno}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="group hover:bg-white transition-colors cursor-default"
                    >
                      <td className="px-8 py-5 text-sm font-black text-slate-400 group-hover:text-[#004a99] transition-colors">{item.sno}</td>
                      <td className="px-8 py-5 text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{item.name}</td>
                      <td className="px-8 py-5 text-sm font-bold text-slate-400 text-center">{item.titles}</td>
                      <td className="px-8 py-5 text-sm font-black text-[#004a99] text-center">
                        <span className="bg-[#004a99]/5 px-4 py-1.5 rounded-full border border-[#004a99]/10">
                          {item.volumes}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
             <div className="water-glass p-8 !bg-white flex items-center gap-6 shadow-xl border-white group">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <Database size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Volumes</p>
                  <p className="text-3xl font-black text-slate-900">45,000+</p>
                </div>
             </div>
             <div className="water-glass p-8 !bg-white flex items-center gap-6 shadow-xl border-white group">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Layers size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Digital Journals</p>
                  <p className="text-3xl font-black text-slate-900">2,500+</p>
                </div>
             </div>
             <div className="water-glass p-8 !bg-white flex items-center gap-6 shadow-xl border-white group">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <CheckCircle2 size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">IEEE Access</p>
                  <p className="text-3xl font-black text-slate-900">Full Portal</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Additional Facilities Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Campus Infrastructure</h3>
            <p className="text-slate-500 font-medium mt-4">Discover the high-end environments crafted for modern engineering excellence.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Microscope, name: 'Advanced Labs', desc: 'Industry-standard labs for every department.' },
              { icon: Dumbbell, name: 'Sports Arena', desc: 'Indoor and outdoor Olympic-sized facilities.' },
              { icon: Wifi, name: 'Smart Campus', desc: 'High-speed 1Gbps fiber connectivity campus-wide.' },
              { icon: Coffee, name: 'Modern Cafeteria', desc: 'Nutritious dining with diverse cuisines.' }
            ].map((f, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="water-glass !bg-white p-10 shadow-lg border-white text-center"
              >
                <div className="w-16 h-16 bg-[#004a99]/5 rounded-3xl flex items-center justify-center text-[#004a99] mx-auto mb-6">
                  <f.icon size={32} />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-3">{f.name}</h4>
                <p className="text-sm text-slate-500 font-medium">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
