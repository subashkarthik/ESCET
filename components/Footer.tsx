
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#012b39] text-white pt-20 pb-10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* About Us Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b-2 border-white/10 pb-2 inline-block">About Us</h3>
            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              E.S. College of Engineering and Technology is a leading educational institution dedicated to nurturing future engineers and empowering them with cutting-edge knowledge and skills. Join us at E.S. College of Engineering and Technology and embark on a journey of academic excellence and technological innovation.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, color: 'bg-white/10 hover:bg-[#3b5998]' },
                { Icon: Instagram, color: 'bg-white/10 hover:bg-[#e1306c]' },
                { Icon: Twitter, color: 'bg-white/10 hover:bg-[#1da1f2]' }
              ].map(({ Icon, color }, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${color}`}
                >
                  <Icon size={18} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* B.E Section */}
          <div className="space-y-6">
            <div className="relative inline-block">
              <h3 className="text-xl font-bold uppercase tracking-wider">B.E</h3>
              <div className="absolute -bottom-1 left-0 w-8 h-[2px] bg-blue-400" />
            </div>
            <ul className="space-y-3">
              {[
                'Computer Science & Engineering',
                'Electrical & Electronics Engineering',
                'Electronics & Communication Engineering',
                'Mechanical Engineering',
                'Civil Engineering'
              ].map((item) => (
                <li key={item}>
                  <Link to="/departments" className="text-slate-300 hover:text-white text-sm transition-colors block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* B.Tech Section */}
          <div className="space-y-6">
            <div className="relative inline-block">
              <h3 className="text-xl font-bold uppercase tracking-wider">B.Tech</h3>
              <div className="absolute -bottom-1 left-0 w-8 h-[2px] bg-blue-400" />
            </div>
            <ul className="space-y-3">
              {[
                'Information Technology',
                'Artificial Intelligence & Data Science'
              ].map((item) => (
                <li key={item}>
                  <Link to="/departments" className="text-slate-300 hover:text-white text-sm transition-colors block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold border-b-2 border-white/10 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#004a99] flex items-center justify-center shrink-0 shadow-lg">
                  <Phone size={18} className="text-white" />
                </div>
                <div className="text-sm font-medium text-slate-300">
                  <p>+91 94867 22474</p>
                  <p>+91 4146 294674</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#004a99] flex items-center justify-center shrink-0 shadow-lg">
                  <Mail size={18} className="text-white" />
                </div>
                <p className="text-sm font-medium text-slate-300">admin@escet.in</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#004a99] flex items-center justify-center shrink-0 shadow-lg mt-1">
                  <MapPin size={18} className="text-white" />
                </div>
                <div className="text-sm font-medium text-slate-300 leading-relaxed">
                  <p className="text-white font-bold mb-1">E.S. College of Engineering and Technology</p>
                  <p className="text-[11px] opacity-70 mb-2">(Approved by AICTE and Affiliated to Anna University)</p>
                  <p>E.S. Nagar, NH-45, Chennai Trunk Road Villupuram - 605 601, Tamil Nadu, India.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
              © 2025 ES COLLEGE OF ENGINEERING AND TECHNOLOGY. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[#004a99] text-[9px] font-black uppercase tracking-[0.2em]">
              (created by SUBASHKARTHIK)
            </p>
          </div>
          <div className="flex gap-8 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
