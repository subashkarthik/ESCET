
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  FileText, 
  Users, 
  GraduationCap, 
  Award,
  AlertCircle,
  ArrowRight,
  Download,
  ExternalLink,
  BookOpen,
  IndianRupee,
  MapPin,
  Phone,
  Mail,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Real-time admission status
const ADMISSION_STATUS = {
  isOpen: true,
  academicYear: '2026-2027',
  lastDate: '2026-07-15',
  counselingDate: '2026-07-20'
};

// Important Dates
const IMPORTANT_DATES = [
  {
    event: 'Application Start Date',
    date: 'May 1, 2026',
    status: 'completed',
    icon: Calendar
  },
  {
    event: 'Application Deadline',
    date: 'July 15, 2026',
    status: 'ongoing',
    icon: Clock
  },
  {
    event: 'Counseling Process',
    date: 'July 20 - Aug 5, 2026',
    status: 'upcoming',
    icon: Users
  },
  {
    event: 'Classes Commence',
    date: 'August 15, 2026',
    status: 'upcoming',
    icon: BookOpen
  }
];

// Eligibility Criteria
const ELIGIBILITY_CRITERIA = [
  {
    program: 'B.E / B.Tech Programs',
    criteria: [
      'Passed 10+2 or equivalent with Physics, Chemistry, and Mathematics',
      'Minimum 45% aggregate marks (40% for reserved categories)',
      'Valid TNEA rank or JEE Main score',
      'Age: Candidates should have been born on or after October 1, 2001'
    ]
  },
  {
    program: 'Lateral Entry (Direct 2nd Year)',
    criteria: [
      'Diploma in Engineering from recognized institution',
      'Minimum 45% aggregate marks in diploma',
      'Relevant stream for the chosen B.E/B.Tech program',
      'Valid TNEA lateral entry rank'
    ]
  }
];

// Programs Offered
const PROGRAMS_OFFERED = [
  { name: 'Computer Science and Engineering', seats: 180, duration: '4 Years' },
  { name: 'Information Technology', seats: 60, duration: '4 Years' },
  { name: 'Artificial Intelligence and Data Science', seats: 60, duration: '4 Years' },
  { name: 'Electronics and Communication Engineering', seats: 120, duration: '4 Years' },
  { name: 'Electrical and Electronics Engineering', seats: 60, duration: '4 Years' },
  { name: 'Mechanical Engineering', seats: 120, duration: '4 Years' },
  { name: 'Civil Engineering', seats: 60, duration: '4 Years' }
];

// Application Process Steps
const APPLICATION_STEPS = [
  {
    step: 1,
    title: 'Online Registration',
    description: 'Visit TNEA official portal and complete registration with valid email and mobile number',
    icon: FileText
  },
  {
    step: 2,
    title: 'Fill Application Form',
    description: 'Enter personal, academic, and contact details accurately',
    icon: Users
  },
  {
    step: 3,
    title: 'Upload Documents',
    description: 'Upload scanned copies of mark sheets, certificates, and photographs',
    icon: Download
  },
  {
    step: 4,
    title: 'Pay Application Fee',
    description: 'Complete payment through online mode (Net Banking/UPI/Card)',
    icon: IndianRupee
  },
  {
    step: 5,
    title: 'Submit & Print',
    description: 'Submit application and download acknowledgment for future reference',
    icon: CheckCircle2
  }
];

// Fee Structure
const FEE_STRUCTURE = [
  { category: 'Tuition Fee (Per Year)', amount: '₹75,000' },
  { category: 'Special Fee (Per Year)', amount: '₹15,000' },
  { category: 'Caution Deposit (One-time, Refundable)', amount: '₹5,000' },
  { category: 'Total First Year Fee', amount: '₹95,000', highlight: true }
];

const AdmissionOverview: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(ADMISSION_STATUS.lastDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const openEnquiry = () => {
    window.dispatchEvent(new CustomEvent('openEnquiryModal'));
  };

  return (
    <div className="bg-white min-h-screen selection:bg-[#ff6b35]/20 selection:text-[#ff6b35] pt-[180px]">
      
      {/* Hero Section with Admission Status */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/campus-hero.jpg" 
            alt="Admissions Background" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#004a99]/60 via-transparent to-black/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Admission Status Badge */}
            {ADMISSION_STATUS.isOpen && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/20 backdrop-blur-md border-2 border-green-400/50 text-green-300 text-sm font-black uppercase tracking-[0.2em] mb-8"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Admissions Open
              </motion.div>
            )}

            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter drop-shadow-2xl mb-6">
              ADMISSIONS
              <br />
              <span className="text-[#ff6b35]">OVERVIEW</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 font-medium mb-12 max-w-3xl mx-auto">
              Academic Year {ADMISSION_STATUS.academicYear} • Join the Future of Engineering Excellence
            </p>

            {/* Countdown Timer */}
            {ADMISSION_STATUS.isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center gap-4 md:gap-8 mb-12"
              >
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="water-glass !bg-white/10 backdrop-blur-xl border-white/20 p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
                    <div className="text-3xl md:text-5xl font-black text-white mb-2">{value}</div>
                    <div className="text-xs md:text-sm font-bold text-blue-200 uppercase tracking-wider">{unit}</div>
                  </div>
                ))}
              </motion.div>
            )}

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={openEnquiry}
                className="group relative flex items-center justify-center gap-4 px-12 py-5 text-white font-black rounded-full text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#ff6b35] rounded-full shadow-[0_20px_40px_-10px_rgba(255,107,53,0.6)]" />
                <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-orange-600/60 via-orange-500/40 to-white/20 pointer-events-none" />
                <span className="relative z-10">Apply Now</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <Link 
                to="/admissions/procedure"
                className="px-12 py-5 border-2 border-white/40 text-white font-black rounded-full hover:bg-white/10 transition-all text-sm uppercase tracking-widest backdrop-blur-md"
              >
                View Procedure
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Dates Timeline */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#004a99] font-black uppercase tracking-[0.3em] text-xs mb-4 block">
              <Calendar className="inline mr-2" size={16} />
              Timeline
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
              Important Dates
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {IMPORTANT_DATES.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12 pb-16 last:pb-0"
              >
                {/* Timeline Line */}
                {index !== IMPORTANT_DATES.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-[2px] bg-gradient-to-b from-[#004a99] to-slate-200" />
                )}

                {/* Timeline Dot */}
                <div className={`absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center ${
                  item.status === 'completed' ? 'bg-green-500' :
                  item.status === 'ongoing' ? 'bg-orange-500 animate-pulse' :
                  'bg-slate-300'
                } shadow-xl`}>
                  <item.icon size={24} className="text-white" />
                </div>

                {/* Content Card */}
                <div className="water-glass !bg-white p-8 ml-8 border-white shadow-lg hover:shadow-xl transition-all group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-[#004a99] transition-colors">
                        {item.event}
                      </h3>
                      <p className="text-slate-500 font-medium">{item.date}</p>
                    </div>
                    <div className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider ${
                      item.status === 'completed' ? 'bg-green-100 text-green-700' :
                      item.status === 'ongoing' ? 'bg-orange-100 text-orange-700' :
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {item.status}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#004a99] font-black uppercase tracking-[0.3em] text-xs mb-4 block">
              <GraduationCap className="inline mr-2" size={16} />
              Academic Programs
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">
              Programs Offered
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Choose from our industry-aligned engineering programs designed for the future
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {PROGRAMS_OFFERED.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="water-glass !bg-white p-8 border-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-[#004a99] transition-colors">
                      {program.name}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold">
                        <Users size={14} />
                        {program.seats} Seats
                      </span>
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-bold">
                        <Clock size={14} />
                        {program.duration}
                      </span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-[#004a99]/5 rounded-xl flex items-center justify-center group-hover:bg-[#004a99] transition-all">
                    <GraduationCap size={24} className="text-[#004a99] group-hover:text-white transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-500 font-medium mb-6">
              Total Intake: <span className="text-2xl font-black text-[#004a99]">660 Seats</span>
            </p>
            <Link 
              to="/departments"
              className="inline-flex items-center gap-2 text-[#004a99] font-black uppercase tracking-wider text-sm hover:gap-4 transition-all"
            >
              Explore All Departments <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#004a99] font-black uppercase tracking-[0.3em] text-xs mb-4 block">
              <CheckCircle2 className="inline mr-2" size={16} />
              Requirements
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
              Eligibility Criteria
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {ELIGIBILITY_CRITERIA.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="water-glass !bg-white p-10 border-white shadow-xl"
              >
                <h3 className="text-2xl font-black text-[#004a99] mb-6 flex items-center gap-3">
                  <Award size={28} />
                  {item.program}
                </h3>
                <ul className="space-y-4">
                  {item.criteria.map((criterion, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-1" />
                      <span className="text-slate-600 font-medium text-lg leading-relaxed">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#004a99] font-black uppercase tracking-[0.3em] text-xs mb-4 block">
              <FileText className="inline mr-2" size={16} />
              Step by Step
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
              Application Process
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {APPLICATION_STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex items-start gap-6">
                  {/* Step Number */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#004a99] to-[#0066cc] rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-xl">
                      {step.step}
                    </div>
                    {index !== APPLICATION_STEPS.length - 1 && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-20 bottom-0 w-[2px] bg-gradient-to-b from-[#004a99] to-slate-200 h-12" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 water-glass !bg-white p-8 border-white shadow-lg hover:shadow-xl transition-all group">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#004a99] transition-colors">
                        {step.title}
                      </h3>
                      <div className="w-12 h-12 bg-[#004a99]/5 rounded-xl flex items-center justify-center group-hover:bg-[#004a99] transition-all">
                        <step.icon size={24} className="text-[#004a99] group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <p className="text-slate-600 font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button 
              onClick={openEnquiry}
              className="px-12 py-5 bg-[#004a99] text-white font-black rounded-xl text-sm uppercase tracking-widest hover:brightness-110 shadow-xl shadow-[#004a99]/20 group inline-flex items-center gap-3"
            >
              Start Your Application
              <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#004a99] font-black uppercase tracking-[0.3em] text-xs mb-4 block">
              <IndianRupee className="inline mr-2" size={16} />
              Investment
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
              Fee Structure
            </h2>
            <p className="text-slate-600 text-lg mt-4">
              Transparent and affordable education for all
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="water-glass !bg-white overflow-hidden border-white shadow-2xl"
            >
              <div className="bg-[#004a99] text-white p-6">
                <h3 className="text-2xl font-black tracking-tight">B.E / B.Tech Programs</h3>
                <p className="text-blue-200 font-medium mt-2">Academic Year 2026-2027</p>
              </div>

              <div className="divide-y divide-slate-100">
                {FEE_STRUCTURE.map((item, index) => (
                  <div 
                    key={index}
                    className={`flex justify-between items-center p-6 ${
                      item.highlight ? 'bg-orange-50' : 'hover:bg-slate-50'
                    } transition-colors`}
                  >
                    <span className={`font-bold ${item.highlight ? 'text-lg text-slate-900' : 'text-slate-600'}`}>
                      {item.category}
                    </span>
                    <span className={`font-black ${item.highlight ? 'text-3xl text-[#004a99]' : 'text-xl text-slate-900'}`}>
                      {item.amount}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 p-6 border-t-2 border-blue-200">
                <div className="flex items-start gap-3">
                  <AlertCircle size={20} className="text-blue-600 shrink-0 mt-1" />
                  <div className="text-sm text-blue-900 font-medium leading-relaxed">
                    <strong>Note:</strong> Fee structure is subject to change as per university norms. 
                    Scholarships and financial assistance available for eligible students.
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mt-8 text-center">
              <Link 
                to="/scholarship"
                className="inline-flex items-center gap-2 text-[#004a99] font-black uppercase tracking-wider text-sm hover:gap-4 transition-all"
              >
                Explore Scholarship Options <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Admissions Office */}
      <section className="py-32 bg-[#004a99] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
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
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-black uppercase tracking-[0.2em] mb-8">
                <Sparkles size={14} className="text-orange-400" />
                Get in Touch
              </span>

              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
                Need Assistance?
              </h2>
              
              <p className="text-blue-100 text-xl font-medium mb-16 max-w-2xl mx-auto">
                Our admissions team is here to guide you through every step of your journey
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {[
                  { icon: Phone, label: 'Call Us', value: '+91 9488722474', link: 'tel:+919488722474' },
                  { icon: Mail, label: 'Email Us', value: 'admin@escet.in', link: 'mailto:admin@escet.in' },
                  { icon: MapPin, label: 'Visit Us', value: 'Villupuram, Tamil Nadu', link: '/contact' }
                ].map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    className="water-glass !bg-white/10 backdrop-blur-xl border-white/20 p-8 hover:!bg-white/20 transition-all group"
                  >
                    <contact.icon size={32} className="text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-2">{contact.label}</div>
                    <div className="text-white font-black">{contact.value}</div>
                  </a>
                ))}
              </div>

              <button 
                onClick={openEnquiry}
                className="px-16 py-6 bg-white text-[#004a99] font-black rounded-full hover:scale-105 transition-all shadow-3xl text-sm uppercase tracking-widest"
              >
                Submit Enquiry
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionOverview;
