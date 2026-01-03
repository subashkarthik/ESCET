
import React from 'react';
import { motion } from 'framer-motion';
import { Department } from '../types';
import { User, FlaskConical, ArrowRight } from 'lucide-react';

interface Props {
  dept: Department;
}

const DepartmentCard: React.FC<Props> = ({ dept }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col bg-white rounded-[1.5rem] overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-10px_rgba(0,74,153,0.3)] transition-all duration-500 h-full border border-slate-100"
    >
      {/* Dynamic Glow Layer */}
      <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/[0.03] transition-colors duration-500 pointer-events-none" />

      {/* Visual Section - Compact Height */}
      <div className="relative h-44 overflow-hidden">
        <img 
          src={dept.image} 
          alt={dept.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/5" />
        
        {/* Department Tag - Refined */}
        <div className="absolute top-3 left-3 water-glass !bg-white/95 px-2.5 py-1 rounded-full border-white shadow-sm backdrop-blur-md">
          <span className="text-[8px] font-black text-[#004a99] uppercase tracking-[0.15em]">{dept.shortName}</span>
        </div>
      </div>

      {/* Content Section - Compact Padding */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-base font-black text-slate-900 mb-2 leading-tight group-hover:text-[#004a99] transition-colors">
          {dept.name}
        </h3>
        
        <p className="text-slate-500 text-[12px] font-medium leading-relaxed mb-5 line-clamp-3">
          {dept.description}
        </p>

        {/* Info Grid - Minimalist */}
        <div className="mt-auto space-y-4 pt-4 border-t border-slate-50">
          {/* Infrastructure Chips */}
          <div className="flex flex-wrap gap-1">
            {dept.labs.slice(0, 2).map((lab, i) => (
              <span key={i} className="text-[8px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                {lab}
              </span>
            ))}
            {dept.labs.length > 2 && (
              <span className="text-[8px] font-bold text-[#004a99] bg-[#004a99]/5 px-2 py-0.5 rounded-md border border-[#004a99]/10">
                +{dept.labs.length - 2} more
              </span>
            )}
          </div>

          {/* Compact Button */}
          <button className="w-full mt-1 flex items-center justify-center gap-2 py-3 bg-[#004a99] text-white font-black rounded-xl text-[8px] uppercase tracking-widest hover:brightness-110 shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 transition-all active:scale-95 group/btn">
            Curriculum <ArrowRight size={10} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DepartmentCard;
