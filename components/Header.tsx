
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, GraduationCap, ChevronRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { 
    name: 'About Us', 
    path: '/about',
    subLinks: [
      { name: 'Profile', path: '/about/profile' },
      { name: 'Vision', path: '/about/vision' },
      { name: 'Mission', path: '/about/mission' },
      { name: 'Chairman\'s Message', path: '/about/chairman-message' },
      { name: 'Principal\'s Message', path: '/about/principal-message' },
      { name: 'Mandatory Disclosure', path: '/about/mandatory-disclosure' },
      { name: 'AiCTE EOA', path: '/about/aicte-eoa' },
      { name: 'Organizational Chart', path: '/about/org-chart' },
      { name: 'Campus Life', path: '/about/campus-life' },
    ]
  },
  { 
    name: 'Departments', 
    path: '/departments',
    subLinks: [
      { name: 'B.E - CSE', path: '/departments/cse' },
      { name: 'B.E - ECE', path: '/departments/ece' },
      { name: 'B.E - EEE', path: '/departments/eee' },
      { name: 'B.E - Mechanical', path: '/departments/mech' },
      { name: 'B.E - Civil', path: '/departments/civil' },
      { name: 'B.Tech - IT', path: '/departments/it' },
      { name: 'B.Tech - AI & DS', path: '/departments/aids' },
    ]
  },
  { name: 'Facilities', path: '/facilities' },
  { 
    name: 'Admission', 
    path: '/admissions',
    subLinks: [
      { name: 'Courses Offered', path: '/admissions/courses' },
      { name: 'Eligibility', path: '/admissions/eligibility' },
      { name: 'Admission Procedure', path: '/admissions/procedure' },
      { name: 'Scholarship', path: '/admissions/scholarship' },
    ]
  },
  { name: 'Activities', path: '/activities' },
  { 
    name: 'Gallery', 
    path: '/gallery',
    subLinks: [
      { name: 'Image Gallery', path: '/gallery/images' },
      { name: 'Video Gallery', path: '/gallery/videos' },
    ]
  },
  { name: 'News & Events', path: '/news' },
  { name: 'Contact Us', path: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [subHoveredPath, setSubHoveredPath] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openEnquiry = () => {
    window.dispatchEvent(new CustomEvent('openEnquiryModal'));
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      {/* Top Tier: Branding & Utilities */}
      <div className="w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 pointer-events-auto shadow-sm">
        <div className="container mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-4 group">
            {/* College Logo */}
            <div className="relative">
              <img 
                src="/images/college-logo.png" 
                alt="ES College Logo" 
                className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>
            
            {/* College Name & Address */}
            <div>
              <h1 className="text-xl md:text-2xl font-black text-[#2c3e7e] leading-tight tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <span className="text-[#2c3e7e] font-black" style={{ letterSpacing: '0.05em' }}>E.S. COLLEGE</span>
                <br />
                <span className="text-[#2c3e7e] font-semibold text-base md:text-lg" style={{ letterSpacing: '0.02em' }}>of Engineering and Technology</span>
              </h1>
              <p className="text-[9px] md:text-[10px] text-slate-600 font-bold uppercase tracking-tight mt-0.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                NO.249/C, E.S.Nagar, NH-45, Chennai Trunk Road, Villupuram-605601
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-4 bg-white border-2 border-slate-900 rounded-xl px-5 py-2 hover:bg-slate-50 cursor-pointer transition-all shadow-sm group">
              <div className="flex flex-col items-center">
                <span className="text-[10px] text-red-600 font-black leading-none mb-1">-ESCET-</span>
                <span className="text-lg font-black text-slate-900 leading-none">e-Learning</span>
              </div>
              <div className="bg-slate-900 rounded-full p-1 text-white group-hover:translate-x-1 transition-transform">
                <ChevronRight size={14} />
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 shadow-md">
                  <Phone size={18} fill="currentColor" fillOpacity={0.1} />
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">Call Now !</p>
                  <p className="text-sm font-black text-[#004a99]">+91 94867 22474</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 shadow-md">
                  <Mail size={18} fill="currentColor" fillOpacity={0.1} />
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">Email Now</p>
                  <p className="text-sm font-black text-[#004a99]">admin@escet.in</p>
                </div>
              </div>
            </div>
          </div>

          <button 
            className="lg:hidden p-2 text-[#004a99] hover:bg-slate-100 rounded-xl transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Navigation Tier: Water Glass Bar */}
      <div className="w-full mt-0 pointer-events-none">
        <div className="container mx-auto px-4 md:px-0 flex justify-center">
          <motion.nav 
            animate={{
              width: scrolled ? '95%' : '100%',
              y: scrolled ? 8 : 0,
              borderRadius: scrolled ? '1.5rem' : '0'
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="blue-water-glass pointer-events-auto flex items-center justify-between h-14 overflow-visible relative"
            onMouseLeave={() => {
              setHoveredPath(null);
              setActiveDropdown(null);
            }}
          >
            <div className="hidden lg:flex h-full items-center justify-center flex-grow relative px-6">
              {NAV_LINKS.map((link) => (
                <div 
                  key={link.name}
                  className="h-full relative flex items-center"
                  onMouseEnter={() => {
                    setHoveredPath(link.path);
                    if (link.subLinks) setActiveDropdown(link.name);
                    else setActiveDropdown(null);
                  }}
                >
                  <Link
                    to={link.path}
                    className={`px-6 h-full flex items-center text-[11px] font-black uppercase tracking-widest transition-all relative z-10 ${
                      location.pathname.startsWith(link.path) || hoveredPath === link.path ? 'text-white' : 'text-slate-100/80'
                    }`}
                  >
                    <span className="relative z-20 transition-colors duration-300 flex items-center gap-1.5">
                      {link.name}
                      {link.subLinks && <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                    </span>

                    <AnimatePresence>
                      {(hoveredPath === link.path || location.pathname.startsWith(link.path)) && (
                        <motion.div
                          layoutId="navCapsule"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="absolute inset-x-1.5 inset-y-2.5 z-10 rounded-full border border-white/40 bg-white/20 backdrop-blur-[60px] saturate-[250%] shadow-[inset_0_2px_8px_rgba(255,255,255,0.5),0_10px_30px_-5px_rgba(0,0,0,0.2)]"
                        >
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[0.5px]" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Link>

                  <AnimatePresence>
                    {activeDropdown === link.name && link.subLinks && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95, rotateX: -10 }}
                        animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95, rotateX: -10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-white/40 backdrop-blur-[40px] saturate-[250%] rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.8)] border border-white/60 overflow-hidden p-3 flex flex-col gap-1.5 perspective-1000"
                        onMouseLeave={() => setSubHoveredPath(null)}
                      >
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-60" />

                        {link.subLinks.map((sub, idx) => {
                          // Insert headers for Department dropdown
                          const showHeaderBE = link.name === 'Departments' && idx === 0;
                          const showHeaderBTech = link.name === 'Departments' && idx === 5;
                          
                          return (
                            <React.Fragment key={sub.path}>
                              {showHeaderBE && (
                                <div className="px-6 py-2">
                                  <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.2em] opacity-80">B.E Programs</span>
                                  <div className="h-[1px] w-8 bg-orange-200 mt-1" />
                                </div>
                              )}
                              {showHeaderBTech && (
                                <div className="px-6 py-2 mt-2">
                                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] opacity-80">B.Tech Programs</span>
                                  <div className="h-[1px] w-8 bg-blue-200 mt-1" />
                                </div>
                              )}
                              <Link
                                to={sub.path}
                                onMouseEnter={() => setSubHoveredPath(sub.path)}
                                onClick={() => setActiveDropdown(null)}
                                className={`relative px-6 py-3.5 rounded-[1.3rem] text-[12px] font-black uppercase tracking-wider transition-all duration-300 z-10 ${
                                  subHoveredPath === sub.path ? 'text-[#004a99]' : 'text-slate-700'
                                }`}
                              >
                                <span className="relative z-20 flex justify-between items-center group/item">
                                  {sub.name}
                                  <ChevronRight size={14} className={`transition-all duration-300 ${subHoveredPath === sub.path ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                                </span>
                                <AnimatePresence>
                                  {subHoveredPath === sub.path && (
                                    <motion.div
                                      layoutId="subCapsule"
                                      initial={{ opacity: 0, scale: 0.95 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.95 }}
                                      className="absolute inset-0 z-10 bg-white/70 rounded-[1.3rem] shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,1)] border border-white/80"
                                    />
                                  )}
                                </AnimatePresence>
                              </Link>
                            </React.Fragment>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <button 
              onClick={openEnquiry}
              className="h-full px-12 bg-gradient-to-r from-orange-600 to-red-600 text-white font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center hover:brightness-110 active:scale-95 transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] relative overflow-hidden group"
            >
              <span className="relative z-10">Admission Open</span>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </button>
          </motion.nav>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mx-4 mt-2 water-glass !bg-[#004a99]/95 pointer-events-auto p-6 shadow-3xl overflow-y-auto max-h-[80vh]"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => !link.subLinks && setIsOpen(false)}
                    className={`flex justify-between items-center px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-tighter transition-all ${
                      location.pathname.startsWith(link.path) ? 'bg-white text-[#004a99]' : 'text-white border border-white/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <div className="ml-4 mt-2 flex flex-col gap-1 border-l border-white/10 pl-4">
                      {link.subLinks.map(sub => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          onClick={() => setIsOpen(false)}
                          className="py-2 text-[9px] font-bold text-slate-300 uppercase hover:text-white"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button 
                onClick={() => { openEnquiry(); setIsOpen(false); }}
                className="w-full mt-4 py-4 bg-orange-600 text-white font-black text-[10px] uppercase tracking-widest rounded-xl"
              >
                Apply Online
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
