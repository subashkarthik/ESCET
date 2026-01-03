
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DEPARTMENTS } from '../constants';
import { User, FlaskConical, ArrowLeft, CheckCircle2, BookOpen, Microscope } from 'lucide-react';

const DepartmentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dept = DEPARTMENTS.find(d => d.id === id);

  if (!dept) {
    return (
      <div className="pt-48 pb-32 text-center bg-white min-h-screen">
        <h1 className="text-4xl font-black mb-4">Department Not Found</h1>
        <Link to="/departments" className="text-[#004a99] font-bold underline">Back to Departments</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-32 pt-[180px]">{/* Fixed navbar padding */}
      {/* Hero Section */}
      <section className="relative h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            src={dept.image} 
            alt={dept.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-black/30" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/departments" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#004a99] mb-6 hover:-translate-x-1 transition-transform">
              <ArrowLeft size={14} /> Back to Schools
            </Link>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none">
              {dept.shortName} <br />
              <span className="text-[#004a99]">Engineering</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 -mt-10 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left: About & Infrastructure */}
          <div className="lg:col-span-8 space-y-12">
            <div className="water-glass !bg-white p-12 shadow-2xl border-white">
              <h2 className="text-3xl font-black text-slate-900 mb-6">About the Department</h2>
              <p className="text-slate-600 text-lg font-medium leading-relaxed">
                {dept.description}
              </p>
              
              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-blue-50 rounded-[2rem] border border-blue-100/50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                      <BookOpen size={20} />
                    </div>
                    <h3 className="font-black text-slate-900 uppercase tracking-tight">Curriculum Focus</h3>
                  </div>
                  <ul className="space-y-3">
                    {['Industry-Oriented Syllabus', 'Ethical Practice', 'Project-Based Learning', 'Advanced Certifications'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-500">
                        <CheckCircle2 size={16} className="text-blue-600" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 bg-orange-50 rounded-[2rem] border border-orange-100/50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white">
                      <Microscope size={20} />
                    </div>
                    <h3 className="font-black text-slate-900 uppercase tracking-tight">Facilities</h3>
                  </div>
                  <ul className="space-y-3">
                    {dept.labs.map((lab, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-500">
                        <CheckCircle2 size={16} className="text-orange-600" /> {lab}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Leadership & Quick Apply */}
          <div className="lg:col-span-4 space-y-8">
            <div className="water-glass !bg-[#004a99] p-10 text-white shadow-3xl overflow-hidden relative">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <User size={150} />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-200 mb-2">Department Head</p>
              <h3 className="text-3xl font-black mb-2 tracking-tight">{dept.hod}</h3>
              <p className="text-blue-100 font-medium mb-8">Head of Department, {dept.shortName}</p>
              <div className="h-1 w-12 bg-white rounded-full mb-8" />
              <p className="text-sm font-medium leading-relaxed italic opacity-80">
                "Our mission is to translate academic excellence into professional leadership, ensuring our students are the preferred choice for global industry leaders."
              </p>
            </div>

            <div className="water-glass !bg-white p-10 border-slate-100 shadow-xl">
               <h4 className="text-xl font-black text-slate-900 mb-4">Admissions 2025</h4>
               <p className="text-slate-500 text-sm mb-8">Join our {dept.shortName} community and shape the future of technology.</p>
               <Link to="/admissions" className="block text-center py-4 bg-orange-600 text-white font-black rounded-xl text-xs uppercase tracking-widest hover:brightness-110 shadow-lg shadow-orange-600/20">
                 Apply for {dept.shortName}
               </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default DepartmentDetail;
