
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, FileText, PieChart, Users, ArrowRight } from 'lucide-react';

const POLICY_DATA = [
  {
    quota: 'Government Quota',
    percentage: '65 %',
    description: 'Admission done by Government of Tamil Nadu through, Anna University, Chennai. The admission is based on the marks scored in Mathematics, Physics & Chemistry in +2 examinations.'
  },
  {
    quota: 'Management Quota',
    percentage: '35 %',
    description: 'Admission based on Merit list prepared by Consortium of Self Financing Engineering Colleges. (as per Government & Supreme court guidelines)'
  },
  {
    quota: 'AICTE fee waiver scheme',
    percentage: '5 %',
    description: 'Merit-cum-means based'
  },
  {
    quota: 'Lateral Entry (Admission to Direct Second Year)',
    percentage: '20 %',
    description: '65% of 20% Government Quota, and 35% of 20% Management Quota'
  }
];

const AdmissionProcedure: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-32 pt-[180px]">{/* Fixed navbar padding */}
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]">
          <img 
            src="https://images.unsplash.com/photo-1454165833767-1316b0440b21?q=80&w=2070&auto=format&fit=crop" 
            alt="Admission Background" 
            className="w-full h-full object-cover opacity-20 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f172a]/80" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase">
            Admission Procedure
          </h1>
          <div className="w-24 h-1.5 bg-orange-600 mx-auto mt-6 rounded-full" />
        </motion.div>
      </section>

      {/* Admission Norms Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-[#004a99] rounded-2xl flex items-center justify-center text-white shadow-xl">
              <ShieldCheck size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              Admission Norms
            </h2>
          </div>

          <div className="space-y-6">
            {[
              "Admission is done as per State Government norms.",
              "Admission to various courses is based strictly on merit.",
              "The fee structure and assistance schemes ensure that the economic status of the students does not become an inhibiting factor to pursue the programme of study."
            ].map((norm, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-5 p-8 water-glass !bg-slate-50 border-white shadow-lg group hover:!bg-white transition-all"
              >
                <div className="w-8 h-8 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-300 group-hover:border-[#004a99] group-hover:text-[#004a99] transition-all shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <p className="text-slate-600 font-bold text-lg leading-relaxed">
                  {norm}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Policy - UG Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
                  <FileText size={24} />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                  Admission Policy - UG
                </h2>
              </div>
              <p className="text-slate-500 font-black text-xs uppercase tracking-[0.2em] ml-16">
                (As per State Government Norms)
              </p>
            </div>

            {/* Glassmorphic Table */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="water-glass overflow-hidden border-white shadow-2xl !bg-white/70"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#004a99] text-white">
                      <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] border-r border-white/10">Quota / Category</th>
                      <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-center border-r border-white/10">Percentage</th>
                      <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em]">Criteria / Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {POLICY_DATA.map((item, idx) => (
                      <motion.tr 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="group hover:bg-white transition-colors"
                      >
                        <td className="px-8 py-6 text-sm font-black text-slate-900 border-r border-slate-50 group-hover:text-[#004a99]">
                          {item.quota}
                        </td>
                        <td className="px-8 py-6 text-center border-r border-slate-50">
                          <span className="inline-block bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full text-sm font-black border border-orange-100">
                            {item.percentage}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-sm font-medium text-slate-500 leading-relaxed max-w-md">
                          {item.description}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Quick Contact Footer */}
            <div className="mt-16 p-12 water-glass !bg-[#004a99] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-3xl overflow-hidden relative">
              <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12">
                <Users size={120} />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-2 tracking-tight">Need more information?</h3>
                <p className="text-blue-100 font-medium opacity-80">Our admissions office is here to guide you through every step of the process.</p>
              </div>
              <button className="relative z-10 px-10 py-4 bg-white text-[#004a99] font-black rounded-xl text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl group">
                Contact Admissions <ArrowRight size={14} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionProcedure;
