
import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const CONTACT_INFO = [
  { 
    icon: Phone, 
    title: 'Phone', 
    info: '+91 4146 294674', 
    bgColor: 'bg-[#f0f9ff]', 
    accent: 'border-blue-100'
  },
  { 
    icon: Mail, 
    title: 'Email Address', 
    info: 'admin@escet.in', 
    bgColor: 'bg-[#fffaf5]', 
    accent: 'border-orange-100'
  },
  { 
    icon: MapPin, 
    title: 'Location', 
    info: 'E.S. Nagar, NH-45, Chennai Trunk Road Villupuram - 605 601, Tamil Nadu, India.', 
    bgColor: 'bg-[#f0f9ff]',
    accent: 'border-blue-100'
  },
  { 
    icon: Clock, 
    title: 'Office Hours', 
    info: 'Mon - Fri: 9:00 AM - 5:00 PM', 
    bgColor: 'bg-slate-50',
    accent: 'border-slate-100'
  },
];

const Contact: React.FC = () => {
  return (
    <div className="pt-[180px] pb-24 bg-white min-h-screen">{/* Fixed navbar padding */}
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
          
          {/* Contact Header & Text */}
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#004a99] font-black uppercase tracking-[0.2em] text-xs mb-4 block"
            >
              Get in Touch
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-slate-900 mb-10 leading-tight"
            >
              Connect with <br /><span className="text-[#004a99]">Innovation</span>
            </motion.h1>
            <p className="text-slate-500 text-xl mb-16 leading-relaxed font-medium">
              We're here to assist you with admissions, partnerships, and technical inquiries. 
              Experience the future of engineering education at ES College.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {CONTACT_INFO.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`${item.bgColor} p-10 rounded-[2.5rem] border ${item.accent} flex flex-col items-center text-center group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
                >
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-slate-900 mb-6 shadow-xl shadow-slate-200/50 group-hover:scale-110 transition-transform">
                    <item.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-slate-900 font-black text-xl mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 text-sm font-bold leading-relaxed">{item.info}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form & Map */}
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="water-glass !bg-white p-10 md:p-12 relative overflow-hidden shadow-3xl border-slate-100"
            >
              <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] ml-1">Full Name</label>
                    <input type="text" className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:border-[#004a99]/30 outline-none transition-all placeholder:text-slate-300" placeholder="John Doe" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] ml-1">Email</label>
                    <input type="email" className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:border-[#004a99]/30 outline-none transition-all placeholder:text-slate-300" placeholder="john@escet.in" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] ml-1">Message</label>
                  <textarea rows={4} className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:border-[#004a99]/30 outline-none transition-all placeholder:text-slate-300" placeholder="Tell us how we can help..." />
                </div>
                <button className="w-full py-5 bg-[#004a99] text-white font-black rounded-2xl hover:brightness-110 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-[#004a99]/20 active:scale-95">
                  Send Message <Send size={20} />
                </button>
              </form>
            </motion.div>

            {/* Google Maps Refined */}
            <div className="water-glass h-[400px] p-2 overflow-hidden shadow-2xl border-white/60">
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31430.88868512494!2d79.489123!3d11.93386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53315a67676767%3A0x6767676767676767!2sES%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1714041234567!5m2!1sen!2sin" 
                  className="w-full h-full border-0 saturate-[0.8] brightness-[1.0]"
                  loading="lazy"
                  title="Campus Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
