
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { NEWS } from '../constants';

const NewsTimeline: React.FC = () => {
  return (
    <div className="relative py-12">
      {/* Vertical Timeline Track */}
      <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-slate-100" />

      <div className="space-y-32">
        {NEWS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Pulsing Central Indicator */}
            <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-[#004a99] z-20 border-[4px] border-white shadow-[0_0_20px_rgba(0,74,153,0.3)]" />

            {/* Horizontal Connector (Desktop Only) */}
            <div className={`hidden md:block absolute top-1/2 w-1/2 h-[1px] bg-slate-100 z-10 ${
              index % 2 === 0 ? 'right-1/2' : 'left-1/2'
            }`} />

            {/* Content Card */}
            <div className="w-full md:w-5/12 ml-16 md:ml-0 px-4 z-20">
              <div className="bg-white rounded-[2rem] p-10 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_-15px_rgba(0,74,153,0.12)] transition-all duration-500 border border-slate-50 group">
                <div className="flex flex-wrap items-center gap-5 mb-8">
                  <span className="px-5 py-2 bg-[#004a99] text-white text-[10px] font-black uppercase rounded-xl tracking-[0.1em] shadow-lg shadow-[#004a99]/20">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                    <Calendar size={14} className="text-[#004a99]" />
                    {item.date}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-5 leading-tight group-hover:text-[#004a99] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed font-medium mb-10">
                  {item.description}
                </p>
                <button className="flex items-center gap-3 text-[#004a99] text-[10px] font-black uppercase tracking-[0.2em] group/btn hover:gap-6 transition-all">
                  Read Full Update <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewsTimeline;
