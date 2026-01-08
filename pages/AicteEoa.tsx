import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText, Award, CheckCircle, Download, Calendar, Sparkles, Building2, Users } from 'lucide-react';

const AicteEoa: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="bg-white min-h-screen selection:bg-[#ff6b35]/20 selection:text-[#ff6b35] pt-[180px]">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            style={{ scale: 1.1, y: y1 }}
            src="/images/aicte_eoa_hero.jpg" 
            alt="AICTE EOA" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#004a99]/40 via-transparent to-white" />
          
          {/* Floating Glass Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-24 h-24 border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl"
                style={{ top: `${20 + i * 15}%`, left: `${10 + i * 20}%`, opacity: 0.3 }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              <Sparkles size={14} className="text-[#ff6b35]" />
              Regulatory Compliance
            </span>
            <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter drop-shadow-2xl">
              AICTE <span className="text-[#ff6b35]">EOA</span>
            </h1>
            <p className="text-white/80 text-xl md:text-2xl font-medium mt-6 max-w-3xl mx-auto">
              Extension of Approval - Ensuring Quality Standards
            </p>
          </motion.div>
        </div>
      </section>

      {/* EOA Status Section */}
      <section className="py-32 relative -mt-32 z-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div className="lg:col-span-5 relative" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ y: y2 }}>
              <div className="relative p-1 bg-gradient-to-br from-[#004a99] to-[#0066cc] rounded-[3rem] shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <img src="/images/eoa_certificates.jpg" alt="EOA Certificates" className="w-full h-[500px] object-cover rounded-[2.8rem] transition-transform duration-1000 group-hover:scale-110"/>
                
                <div className="absolute bottom-10 -right-10 water-glass p-8 bg-white/95 backdrop-blur-2xl border-white shadow-3xl max-w-[280px]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#004a99] rounded-xl flex items-center justify-center text-white">
                      <Award size={24} />
                    </div>
                    <h4 className="text-lg font-black text-[#004a99] tracking-tight">Approved</h4>
                  </div>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">Valid through 2025-26</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7">
              <div className="water-glass !bg-slate-50/50 p-12 md:p-20 border-white/80 shadow-[0_40px_100px_-20px_rgba(0,74,153,0.1)] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                  <Award size={300} strokeWidth={1} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-[#004a99] mb-8">
                    <div className="w-12 h-1 bg-[#ff6b35] rounded-full" />
                    <span className="font-black uppercase tracking-[0.2em] text-xs">Approval Status</span>
                  </div>

                  <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                    Extension of <br /><span className="text-[#004a99]">Approval</span>
                  </h2>

                  <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed max-w-2xl">
                    <p className="relative pl-8 border-l-4 border-[#ff6b35]">
                      ESCET has received Extension of Approval (EOA) from AICTE for all undergraduate and postgraduate programs for the academic year 2025-26.
                    </p>
                    <p>
                      This approval confirms that our institution meets all regulatory requirements for infrastructure, faculty qualifications, and academic standards as mandated by AICTE.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-slate-200/50">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        <CheckCircle size={20} />
                      </div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">Valid EOA</h5>
                      <p className="text-xs text-slate-500 font-medium">Current academic year approved</p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                        <Calendar size={20} />
                      </div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">2025-26</h5>
                      <p className="text-xs text-slate-500 font-medium">Approval period</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approved Programs - Reversed */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7">
              <div className="water-glass !bg-white/50 p-12 md:p-20 border-white/80 shadow-[0_40px_100px_-20px_rgba(0,74,153,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 p-10 opacity-[0.03] pointer-events-none">
                  <FileText size={300} strokeWidth={1} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-[#004a99] mb-8">
                    <div className="w-12 h-1 bg-[#ff6b35] rounded-full" />
                    <span className="font-black uppercase tracking-[0.2em] text-xs">Approved Programs</span>
                  </div>

                  <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                    Academic <br /><span className="text-[#004a99]">Programs</span>
                  </h2>

                  <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed max-w-2xl">
                    <p className="relative pl-8 border-l-4 border-[#ff6b35]">
                      All B.E./B.Tech and M.E./M.Tech programs are approved by AICTE with specified intake capacity for each department.
                    </p>
                  </div>

                  {/* Programs List */}
                  <div className="mt-10 space-y-4">
                    {[
                      { name: 'Computer Science & Engineering', intake: '180' },
                      { name: 'Electronics & Communication Engineering', intake: '120' },
                      { name: 'Mechanical Engineering', intake: '120' },
                      { name: 'Civil Engineering', intake: '60' },
                      { name: 'Electrical & Electronics Engineering', intake: '60' }
                    ].map((program, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center justify-between p-4 bg-white/50 rounded-xl border border-slate-200/50"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#004a99]/10 flex items-center justify-center">
                            <CheckCircle size={16} className="text-[#004a99]" />
                          </div>
                          <span className="font-bold text-slate-900">{program.name}</span>
                        </div>
                        <span className="text-sm font-black text-[#ff6b35]">{program.intake} Seats</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="lg:col-span-5 relative" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative p-1 bg-gradient-to-br from-[#ff6b35] to-[#ff9e7d] rounded-[3rem] shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <img src="/images/approved_programs.jpg" alt="Approved Programs" className="w-full h-[500px] object-cover rounded-[2.8rem] transition-transform duration-1000 group-hover:scale-110"/>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Standards Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div className="lg:col-span-5 relative" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative p-1 bg-gradient-to-br from-[#004a99] to-[#0066cc] rounded-[3rem] shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <img src="/images/compliance_standards.jpg" alt="Compliance Standards" className="w-full h-[500px] object-cover rounded-[2.8rem] transition-transform duration-1000 group-hover:scale-110"/>
                
                <div className="absolute bottom-10 -right-10 water-glass p-8 bg-white/95 backdrop-blur-2xl border-white shadow-3xl max-w-[280px]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#004a99] rounded-xl flex items-center justify-center text-white">
                      <Building2 size={24} />
                    </div>
                    <h4 className="text-lg font-black text-[#004a99] tracking-tight">Compliant</h4>
                  </div>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">100% AICTE norms met</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7">
              <div className="water-glass !bg-slate-50/50 p-12 md:p-20 border-white/80 shadow-[0_40px_100px_-20px_rgba(0,74,153,0.1)] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                  <Building2 size={300} strokeWidth={1} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-[#004a99] mb-8">
                    <div className="w-12 h-1 bg-[#ff6b35] rounded-full" />
                    <span className="font-black uppercase tracking-[0.2em] text-xs">Compliance</span>
                  </div>

                  <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                    Quality <br /><span className="text-[#004a99]">Standards</span>
                  </h2>

                  <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed max-w-2xl">
                    <p className="relative pl-8 border-l-4 border-[#ff6b35]">
                      Our institution maintains full compliance with AICTE norms for infrastructure, faculty qualifications, and academic delivery.
                    </p>
                    <p>
                      Regular audits and quality assessments ensure we continue to meet and exceed regulatory standards for technical education.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-slate-200/50">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        <Building2 size={20} />
                      </div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">Infrastructure</h5>
                      <p className="text-xs text-slate-500 font-medium">AICTE approved facilities</p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                        <Users size={20} />
                      </div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">Faculty</h5>
                      <p className="text-xs text-slate-500 font-medium">Qualified teaching staff</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download Documents */}
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
          <div className="text-center mb-20">
            <motion.h3 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
              Download <span className="text-[#ff6b35]">Documents</span>
            </motion.h3>
            <p className="text-white/70 text-xl font-medium max-w-2xl mx-auto">
              Access official AICTE approval documents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'EOA Certificate 2025-26', size: 'PDF - 2.1 MB' },
              { title: 'AICTE Approval Letter', size: 'PDF - 1.8 MB' },
              { title: 'Program-wise Intake', size: 'PDF - 856 KB' },
              { title: 'Faculty Details', size: 'PDF - 3.2 MB' },
              { title: 'Infrastructure Report', size: 'PDF - 2.7 MB' },
              { title: 'Compliance Certificate', size: 'PDF - 1.2 MB' }
            ].map((doc, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="water-glass !bg-white/10 p-6 border-white/20 hover:bg-white/20 transition-all text-left group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ff6b35] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <FileText size={24} />
                  </div>
                  <Download size={20} className="text-white/60 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-black text-white mb-2">{doc.title}</h4>
                <p className="text-white/60 text-xs font-medium">{doc.size}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AicteEoa;
