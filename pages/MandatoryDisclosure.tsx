
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText, Award, Building2, Users, DollarSign, Download, CheckCircle, Sparkles, Shield } from 'lucide-react';

const MandatoryDisclosure: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="bg-white min-h-screen selection:bg-[#ff6b35]/20 selection:text-[#ff6b35] pt-[180px]">{/* Fixed navbar padding */}
      {/* Immersive Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            style={{ scale: 1.1, y: y1 }}
            src="/images/mandatory_disclosure_hero.jpg" 
            alt="Mandatory Disclosure" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#004a99]/40 via-transparent to-white" />
          
          {/* Floating Glass Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 5 + i, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute w-24 h-24 border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl"
                style={{ 
                  top: `${20 + i * 15}%`, 
                  left: `${10 + i * 20}%`,
                  opacity: 0.3
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              <Sparkles size={14} className="text-[#ff6b35]" />
              AICTE Compliance
            </span>
            <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter drop-shadow-2xl">
              Mandatory <span className="text-[#ff6b35]">Disclosure</span>
            </h1>
            <p className="text-white/80 text-xl md:text-2xl font-medium mt-6 max-w-3xl mx-auto">
              Transparency and compliance as per AICTE regulations
            </p>
          </motion.div>
        </div>
      </section>

      {/* AICTE Approval Section */}
      <section className="py-32 relative -mt-32 z-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Image */}
            <motion.div 
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ y: y2 }}
            >
              <div className="relative p-1 bg-gradient-to-br from-[#004a99] to-[#0066cc] rounded-[3rem] shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <img 
                  src="/images/aicte_approval.jpg" 
                  alt="AICTE Approval" 
                  className="w-full h-[500px] object-cover rounded-[2.8rem] transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Floating Glass Data Card */}
                <div className="absolute bottom-10 -right-10 water-glass p-8 bg-white/95 backdrop-blur-2xl border-white shadow-3xl max-w-[280px]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#004a99] rounded-xl flex items-center justify-center text-white">
                      <Award size={24} />
                    </div>
                    <h4 className="text-lg font-black text-[#004a99] tracking-tight">AICTE Approved</h4>
                  </div>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    All programs approved with Extension of Approval (EOA)
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="water-glass !bg-slate-50/50 p-12 md:p-20 border-white/80 shadow-[0_40px_100px_-20px_rgba(0,74,153,0.1)] relative overflow-hidden">
                {/* Refractive Watermark */}
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                  <Award size={300} strokeWidth={1} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-[#004a99] mb-8">
                    <div className="w-12 h-1 bg-[#ff6b35] rounded-full" />
                    <span className="font-black uppercase tracking-[0.2em] text-xs">AICTE Approval</span>
                  </div>

                  <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                    Approved By <br />
                    <span className="text-[#004a99]">AICTE</span>
                  </h2>

                  <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed max-w-2xl">
                    <p className="relative pl-8 border-l-4 border-[#ff6b35]">
                      ESCET is approved by AICTE with Extension of Approval (EOA) for all programs. Our institution meets all regulatory requirements for quality technical education.
                    </p>
                    <p>
                      We maintain strict compliance with AICTE norms regarding infrastructure, faculty qualifications, student intake, and academic standards to ensure the highest quality of education.
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-slate-200/50">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        <CheckCircle size={20} />
                      </div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">EOA Granted</h5>
                      <p className="text-xs text-slate-500 font-medium">Extension of Approval for all courses</p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                        <Shield size={20} />
                      </div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">Quality Standards</h5>
                      <p className="text-xs text-slate-500 font-medium">Meets all AICTE quality norms</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Affiliation & Recognition Section - Reversed Layout */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="water-glass !bg-white/50 p-12 md:p-20 border-white/80 shadow-[0_40px_100px_-20px_rgba(0,74,153,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 p-10 opacity-[0.03] pointer-events-none">
                  <Building2 size={300} strokeWidth={1} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-[#004a99] mb-8">
                    <div className="w-12 h-1 bg-[#ff6b35] rounded-full" />
                    <span className="font-black uppercase tracking-[0.2em] text-xs">Affiliation & Recognition</span>
                  </div>

                  <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                    Affiliated To <br />
                    <span className="text-[#004a99]">Anna University</span>
                  </h2>

                  <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed max-w-2xl">
                    <p className="relative pl-8 border-l-4 border-[#ff6b35]">
                      Affiliated to Anna University, Chennai. Recognized by the Government of Tamil Nadu and approved by AICTE, New Delhi.
                    </p>
                    <p>
                      Our affiliation with Anna University ensures that our curriculum, examination system, and degree programs meet the highest academic standards recognized nationally and internationally.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-slate-200/50">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                        <Building2 size={20} />
                      </div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">Anna University</h5>
                      <p className="text-xs text-slate-500 font-medium">Affiliated for all programs</p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        <Award size={20} />
                      </div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">Govt. Recognized</h5>
                      <p className="text-xs text-slate-500 font-medium">Tamil Nadu Government approval</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Image */}
            <motion.div 
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative p-1 bg-gradient-to-br from-[#ff6b35] to-[#ff9e7d] rounded-[3rem] shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <img 
                  src="/images/affiliation_recognition.jpg" 
                  alt="Affiliation" 
                  className="w-full h-[500px] object-cover rounded-[2.8rem] transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Infrastructure & Facilities Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Image */}
            <motion.div 
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative p-1 bg-gradient-to-br from-[#004a99] to-[#0066cc] rounded-[3rem] shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <img 
                  src="/images/infrastructure_lab.jpg" 
                  alt="Infrastructure" 
                  className="w-full h-[500px] object-cover rounded-[2.8rem] transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Floating Glass Data Card */}
                <div className="absolute bottom-10 -right-10 water-glass p-8 bg-white/95 backdrop-blur-2xl border-white shadow-3xl max-w-[280px]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#004a99] rounded-xl flex items-center justify-center text-white">
                      <Building2 size={24} />
                    </div>
                    <h4 className="text-lg font-black text-[#004a99] tracking-tight">AICTE Norms</h4>
                  </div>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    Infrastructure as per AICTE standards
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="water-glass !bg-slate-50/50 p-12 md:p-20 border-white/80 shadow-[0_40px_100px_-20px_rgba(0,74,153,0.1)] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                  <Building2 size={300} strokeWidth={1} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-[#004a99] mb-8">
                    <div className="w-12 h-1 bg-[#ff6b35] rounded-full" />
                    <span className="font-black uppercase tracking-[0.2em] text-xs">Infrastructure</span>
                  </div>

                  <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                    State-of-the-Art <br />
                    <span className="text-[#004a99]">Facilities</span>
                  </h2>

                  <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed max-w-2xl">
                    <p className="relative pl-8 border-l-4 border-[#ff6b35]">
                      State-of-the-art infrastructure with well-equipped laboratories, modern classrooms, digital library, and sports facilities as per AICTE norms.
                    </p>
                    <p>
                      Our campus is designed to provide an optimal learning environment with advanced technology, comfortable spaces, and all necessary amenities for comprehensive education.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-slate-200/50">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        <Building2 size={20} />
                      </div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">Modern Labs</h5>
                      <p className="text-xs text-slate-500 font-medium">Well-equipped with latest technology</p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                        <CheckCircle size={20} />
                      </div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider">AICTE Compliant</h5>
                      <p className="text-xs text-slate-500 font-medium">Meets all infrastructure norms</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Key Information Grid */}
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
            <motion.h3 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6"
            >
              Key <span className="text-[#ff6b35]">Information</span>
            </motion.h3>
            <p className="text-white/70 text-xl font-medium max-w-2xl mx-auto">
              Essential details as per AICTE mandatory disclosure requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Faculty Details', desc: 'Highly qualified faculty with Ph.D. and M.E./M.Tech degrees' },
              { icon: DollarSign, title: 'Fee Structure', desc: 'Transparent fees approved by Fee Regulatory Committee' },
              { icon: Award, title: 'Scholarships', desc: 'Multiple scholarship opportunities for deserving students' },
              { icon: FileText, title: 'Academic Calendar', desc: 'Detailed academic schedule and examination dates' },
              { icon: Building2, title: 'Facilities', desc: 'Library, Labs, Sports, Hostel as per AICTE norms' },
              { icon: CheckCircle, title: 'Accreditation', desc: 'Quality assurance and accreditation status' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="water-glass !bg-white/10 p-8 border-white/20 hover:bg-white/20 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#ff6b35] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={28} />
                </div>
                <h4 className="text-xl font-black text-white mb-3">{item.title}</h4>
                <p className="text-white/60 text-sm font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Documents Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                Download <span className="text-[#004a99]">Official Documents</span>
              </h3>
              <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto">
                Access all mandatory disclosure documents and certificates
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'AICTE Approval Letter', size: 'PDF - 2.4 MB' },
                { title: 'Extension of Approval (EOA)', size: 'PDF - 1.8 MB' },
                { title: 'Affiliation Certificate', size: 'PDF - 1.2 MB' },
                { title: 'Fee Structure Details', size: 'PDF - 856 KB' },
                { title: 'Faculty Details', size: 'PDF - 3.1 MB' },
                { title: 'Infrastructure Details', size: 'PDF - 2.7 MB' }
              ].map((doc, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="water-glass !bg-slate-50/50 p-6 border-slate-200 hover:border-[#004a99] transition-all text-left group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#004a99] flex items-center justify-center text-white group-hover:bg-[#ff6b35] transition-colors">
                        <FileText size={24} />
                      </div>
                      <div>
                        <h5 className="font-black text-slate-900 text-sm mb-1">{doc.title}</h5>
                        <p className="text-xs text-slate-500 font-medium">{doc.size}</p>
                      </div>
                    </div>
                    <Download size={20} className="text-[#004a99] group-hover:text-[#ff6b35] transition-colors" />
                  </div>
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-slate-500 text-sm font-medium">
                For any queries regarding mandatory disclosure, please contact the administration office
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MandatoryDisclosure;
