
import React from 'react';
import { motion } from 'framer-motion';
import DepartmentCard from '../components/DepartmentCard';
import { DEPARTMENTS } from '../constants';

const Departments: React.FC = () => {
  return (
    <div className="pt-[180px] pb-24 bg-white min-h-screen">{/* Fixed navbar padding */}
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block"
          >
            Academic Excellence
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight"
          >
            Engineering <br /><span className="text-blue-600">Disciplines</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-xl max-w-2xl leading-relaxed font-medium"
          >
            State-of-the-art departments focused on developing industry-ready expertise through 
            rigorous practical training and research innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {DEPARTMENTS.map((dept, index) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <DepartmentCard dept={dept} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departments;
