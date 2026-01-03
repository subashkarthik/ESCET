
import React from 'react';
import { motion } from 'framer-motion';
import { Network, ChevronDown, Award, Users, Shield, Building, GraduationCap, Zap } from 'lucide-react';

const OrgCard = ({ title, subtitle, details, color = "#004a99", isMain = false }: { title: string, subtitle?: string, details?: string, color?: string, isMain?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className={`water-glass p-6 border-white/80 shadow-xl group transition-all duration-500 hover:-translate-y-2 max-w-sm w-full mx-auto relative ${isMain ? 'ring-2 ring-offset-4 ring-[#004a99]/20' : ''}`}
  >
    <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl" style={{ backgroundColor: color }} />
    <h4 className="text-lg font-black text-slate-900 leading-tight mb-2 tracking-tight group-hover:text-[#004a99] transition-colors">{title}</h4>
    {subtitle && (
      <p className="text-[10px] font-black uppercase tracking-widest text-[#004a99] mb-3 opacity-80">
        ({subtitle})
      </p>
    )}
    {details && (
      <p className="text-[11px] text-slate-500 font-medium leading-relaxed border-t border-slate-100 pt-3">
        {details}
      </p>
    )}
  </motion.div>
);

const Connector = () => (
  <div className="flex flex-col items-center py-4">
    <div className="w-[2px] h-8 bg-gradient-to-b from-[#004a99]/40 to-[#004a99]/10" />
    <ChevronDown size={14} className="text-[#004a99]/40" />
  </div>
);

const OrgChart: React.FC = () => {
  return (
    <div className="bg-white min-h-screen selection:bg-[#004a99]/10 pt-[180px]">{/* Fixed navbar padding */}
      {/* Header Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#012b39]">
          <img 
            src="https://images.unsplash.com/photo-1454165833767-1316b0440b21?q=80&w=2070&auto=format&fit=crop" 
            alt="Corporate Flow" 
            className="w-full h-full object-cover opacity-10 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#012b39]/40 to-white" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <Network size={14} className="text-orange-500" />
            Governance Model
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter drop-shadow-2xl">
            Organizational <br />
            <span className="text-[#004a99]">Chart</span>
          </h1>
        </motion.div>
      </section>

      {/* Hierarchy Section */}
      <section className="py-24 relative bg-slate-50 overflow-hidden">
        {/* Architectural Watermark */}
        <div className="absolute top-0 right-0 w-[800px] opacity-[0.03] pointer-events-none select-none translate-x-1/4">
          <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect x="100" y="400" width="600" height="200" stroke="currentColor" strokeWidth="2"/>
            <rect x="150" y="200" width="500" height="200" stroke="currentColor" strokeWidth="2"/>
            <rect x="200" y="100" width="400" height="100" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          
          {/* Top Level Management */}
          <div className="flex flex-col items-center mb-16">
            <OrgCard 
              title="Society" 
              subtitle="Supreme Planning & Controlling Authority" 
              isMain={true}
            />
            <Connector />
            <OrgCard 
              title="Governing Council" 
              subtitle="Monitoring Authority" 
            />
            <Connector />
            <OrgCard 
              title="Principal" 
              subtitle="Executive Head" 
              details="Overall Control of Administrative, Academic, Cultural, Sports and games"
              color="#ff6b35"
            />
          </div>

          {/* Departmental Grid - Horizontal Tier */}
          <div className="relative">
             {/* Desktop Connector Line */}
            <div className="hidden lg:block absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[#004a99]/20 to-transparent" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6 pt-12">
              
              {/* Professor & HOD Chain */}
              <div className="space-y-6">
                <OrgCard title="Professor & Heads of Department" subtitle="Planning and Activities" />
                <div className="pl-4 space-y-4 border-l-2 border-slate-200">
                  <OrgCard title="Teaching Faculty" details="Handling Lecture & Practical Classes, Testing and Evaluation, Student Counselling, purchase of equipment and lab development" />
                  <OrgCard title="Non-teaching Faculty" details="Assistance in lab work and maintenance" />
                </div>
              </div>

              {/* Physical Director */}
              <div className="space-y-6">
                <OrgCard title="Physical Director" />
                <div className="pl-4 border-l-2 border-slate-200">
                  <OrgCard title="Organizing sports and games activities" />
                </div>
              </div>

              {/* Office */}
              <div className="space-y-6">
                <OrgCard title="Office" />
                <div className="pl-4 border-l-2 border-slate-200">
                  <OrgCard title="All ministerial works & cash handling" />
                </div>
              </div>

              {/* Placement Cell */}
              <div className="space-y-6">
                <OrgCard title="Placement Cell" />
                <div className="pl-4 border-l-2 border-slate-200">
                  <OrgCard title="Organizing staff and student training activities – student counselling – placement assistance" />
                </div>
              </div>

              {/* Examination Cell */}
              <div className="space-y-6">
                <OrgCard title="Examination Cell" />
                <div className="pl-4 border-l-2 border-slate-200">
                  <OrgCard title="Conduct of periodical tests and university examinations. Review of student performance & feedback to the administration" />
                </div>
              </div>

              {/* Estate Officer */}
              <div className="space-y-6">
                <OrgCard title="Estate Officer" />
                <div className="pl-4 border-l-2 border-slate-200">
                  <OrgCard title="Campus Security and Maintenance" />
                </div>
              </div>

              {/* Hostel */}
              <div className="space-y-6">
                <OrgCard title="Hostel" />
                <div className="pl-4 border-l-2 border-slate-200">
                  <OrgCard title="Resident Dy. Warden report to the warden. The principal is the warden." />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer Insight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="water-glass p-12 !bg-[#004a99] text-white flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12">
               <Shield size={200} />
            </div>
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">Integrity in Governance</h3>
              <p className="text-blue-100 font-medium leading-relaxed">
                Our organizational structure is designed to ensure maximum transparency, accountability, and academic excellence. Every department works in synergy to foster a world-class learning environment.
              </p>
            </div>
            <div className="flex gap-6 relative z-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-2 mx-auto">
                   <Award size={32} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest">Efficiency</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-2 mx-auto">
                   <Users size={32} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest">Teamwork</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrgChart;
