
import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, GraduationCap, ExternalLink, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

const SCHOLARSHIPS = [
  { 
    title: 'Tamil Nadu Government Welfare SC/ST Scholarship', 
    description: 'Financial assistance for students belonging to Scheduled Castes and Scheduled Tribes.',
    link: null 
  },
  { 
    title: 'Tamil Nadu Government Welfare BC/MBC Scholarship', 
    description: 'Support for students from Backward Classes and Most Backward Classes.',
    link: null 
  },
  { 
    title: 'Tamil Nadu Government Welfare Minority Scholarship', 
    description: 'Empowering minority communities through dedicated educational support.',
    link: 'www.momascholarship.gov.in' 
  },
  { 
    title: 'AICTE Fee Waiver Scheme', 
    description: 'Merit-based tuition fee waiver for eligible students under AICTE norms.',
    link: null 
  },
  { 
    title: 'First Graduate Scheme (Government of Tamilnadu)', 
    description: 'A landmark initiative supporting students who are the first in their family to pursue graduation.',
    link: null 
  },
  { 
    title: 'Central Sector Scholarship', 
    description: 'National level recognition and financial aid for high-achieving students.',
    link: 'www.tndcescholarship.org' 
  },
  { 
    title: '7.5% Government School Student Scholarship', 
    description: 'Special reservation and support for students who graduated from Tamil Nadu Government Schools.',
    link: null 
  },
  { 
    title: 'Pudhumai Penn Scheme Scholarships', 
    description: 'Supporting female students in their journey toward higher technical education.',
    link: null 
  },
];

const Scholarship: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-32 pt-[180px]">{/* Fixed navbar padding */}
      {/* Hero Section */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]">
          <img 
            src="https://images.unsplash.com/photo-1523287562758-66c7fc58967f?q=80&w=2070&auto=format&fit=crop" 
            alt="Scholarship Background" 
            className="w-full h-full object-cover opacity-20 scale-110 blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#004a99]/30 via-transparent to-white" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <Sparkles size={14} className="text-orange-500" />
            Empowering Talent
          </span>
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase drop-shadow-2xl">
            Scholarships
          </h1>
          <div className="w-24 h-1.5 bg-orange-600 mx-auto mt-8 rounded-full shadow-[0_0_20px_rgba(234,88,12,0.5)]" />
        </motion.div>
      </section>

      {/* Main List Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-14 h-14 bg-[#004a99] rounded-2xl flex items-center justify-center text-white shadow-2xl">
              <Award size={32} />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                Scholarship to Students
              </h2>
              <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-1 ml-1">Academic Support Schemes</p>
            </div>
          </div>

          <div className="grid gap-6">
            {SCHOLARSHIPS.map((scheme, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group relative p-8 water-glass !bg-slate-50 border-white shadow-lg hover:!bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-[#004a99] group-hover:border-[#004a99]/20 transition-all shrink-0 mt-1 shadow-sm">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 mb-2 leading-tight group-hover:text-[#004a99] transition-colors">
                        {scheme.title}
                      </h3>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-2xl">
                        {scheme.description}
                      </p>
                    </div>
                  </div>
                  
                  {scheme.link && (
                    <a 
                      href={`https://${scheme.link}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#004a99] font-black text-[10px] uppercase tracking-widest rounded-xl border border-slate-100 hover:bg-[#004a99] hover:text-white transition-all shadow-sm"
                    >
                      Apply Now <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                
                {/* Visual Accent */}
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#004a99] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500 rounded-r-2xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto water-glass !bg-[#012b39] p-12 text-white relative overflow-hidden shadow-3xl">
            <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12">
               <GraduationCap size={200} />
            </div>
            <div className="relative z-10 md:flex items-center justify-between gap-12">
              <div className="max-w-xl">
                <div className="flex items-center gap-3 text-orange-500 mb-6">
                  <ShieldCheck size={24} />
                  <span className="font-black uppercase tracking-[0.2em] text-xs">Verified Support</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">Financial Aid for Future Leaders.</h3>
                <p className="text-blue-100/70 font-medium leading-relaxed text-lg mb-8">
                  We are committed to ensuring that financial barriers do not hinder your academic aspirations. Our team provides end-to-end guidance for all scholarship applications.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <button className="px-10 py-5 bg-orange-600 text-white font-black rounded-2xl text-[10px] uppercase tracking-[0.2em] shadow-2xl shadow-orange-950/20 hover:scale-105 transition-all flex items-center justify-center gap-3">
                  Visit Admin Office <ArrowRight size={16} />
                </button>
                <div className="text-center">
                  <span className="text-[10px] font-black text-blue-200/50 uppercase tracking-widest">Available Mon-Fri 9:00 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scholarship;
