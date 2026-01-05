

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Sparkles, User, Bot, Loader2 } from 'lucide-react';
import { DEPARTMENTS } from '../constants';


const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Welcome to ESCET! I am your AI Campus Navigator. How can I help you today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      // Simple keyword-based response system (fallback until proper API is configured)
      const lowerMsg = userMsg.toLowerCase();
      let responseText = '';
      
      // Department queries
      if (lowerMsg.includes('department') || lowerMsg.includes('course') || lowerMsg.includes('program')) {
        responseText = `ESCET offers the following programs:\n\n**B.E Programs:**\n- Computer Science and Engineering (CSE)\n- Electronics and Communication Engineering (ECE)\n- Electrical and Electronics Engineering (EEE)\n- Mechanical Engineering\n- Civil Engineering\n\n**B.Tech Programs:**\n- Information Technology (IT)\n- Artificial Intelligence and Data Science (AI & DS)\n\nWould you like to know more about any specific department?`;
      }
      // Admission queries
      else if (lowerMsg.includes('admission') || lowerMsg.includes('apply') || lowerMsg.includes('join')) {
        responseText = `**Admissions are OPEN for Academic Year 2026-2027!**\n\nWe offer 660 total seats across 7 engineering programs. The college is approved by AICTE and affiliated to Anna University.\n\nFor admission details, please visit our Admissions page or contact:\n📞 +91 94867 22474\n📧 admin@escet.in`;
      }
      // Location queries
      else if (lowerMsg.includes('location') || lowerMsg.includes('address') || lowerMsg.includes('where')) {
        responseText = `📍 **ESCET Location:**\n\nNO.249/C, E.S.Nagar, NH-45\nChennai Trunk Road\nVillupuram - 605601\nTamil Nadu, India\n\nWe're located on National Highway 45, just 40 kms from Puducherry and 160 kms from Chennai.`;
      }
      // Contact queries
      else if (lowerMsg.includes('contact') || lowerMsg.includes('phone') || lowerMsg.includes('email')) {
        responseText = `**Contact ESCET:**\n\n📞 Phone: +91 94867 22474\n📧 Email: admin@escet.in\n🌐 Website: www.escet.in\n\nOur admissions team is here to help you!`;
      }
      // Leadership queries
      else if (lowerMsg.includes('principal') || lowerMsg.includes('chairman') || lowerMsg.includes('management')) {
        responseText = `**ESCET Leadership:**\n\n👤 **Founder:** E. Swamikkannu\n👤 **Chairman:** Er. S. Selvamani\n👤 **Principal:** Dr. K. Indira\n\nOur leadership is committed to providing world-class engineering education and fostering innovation.`;
      }
      // Facilities queries
      else if (lowerMsg.includes('facilities') || lowerMsg.includes('library') || lowerMsg.includes('lab')) {
        responseText = `**ESCET Facilities:**\n\n📚 Central Library with 100,000+ volumes\n🔬 Advanced Research Labs\n💻 State-of-the-art Computer Labs\n🏃 Sports Complex\n🏢 Modern Infrastructure\n\nWe provide world-class facilities for holistic student development.`;
      }
      // Default response
      else {
        responseText = `Hello! I'm the ESCET AI Navigator. I can help you with:\n\n✅ Department & Course Information\n✅ Admission Details\n✅ Campus Location & Contact\n✅ Facilities & Infrastructure\n✅ Leadership & Management\n\nWhat would you like to know about E.S. College of Engineering and Technology?`;
      }
      
      setMessages(prev => [...prev, { role: 'bot', text: responseText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[70]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-[90vw] md:w-[400px] h-[600px] max-h-[70vh] water-glass !bg-white/95 border-white shadow-[0_50px_100px_-20px_rgba(0,74,153,0.3)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-[#004a99] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md relative">
                  <Sparkles size={20} className="text-orange-400" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#004a99] animate-pulse" />
                </div>
                <div>
                  <h3 className="font-black text-sm uppercase tracking-widest">AI Navigator</h3>
                  <p className="text-[9px] font-bold text-blue-200">Online | ESCET Smart Support</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4 bg-slate-50/30">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-[#004a99] text-white' : 'bg-orange-500 text-white'}`}>
                      {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={`p-4 rounded-2xl text-xs font-medium leading-relaxed shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-[#004a99] text-white rounded-tr-none' 
                        : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center">
                      <Loader2 size={14} className="animate-spin" />
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" />
                        <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                        <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything about ESCET..."
                  className="w-full bg-slate-50 rounded-xl px-5 py-4 text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-[#004a99]/20 transition-all pr-14"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-2 p-2 bg-[#004a99] text-white rounded-lg hover:brightness-110 disabled:opacity-50 transition-all"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-[#004a99] to-blue-600 text-white shadow-[0_20px_50px_-10px_rgba(0,74,153,0.5)] flex items-center justify-center relative group"
      >
        <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500" />
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 bg-orange-500 text-white text-[8px] font-black px-2 py-1 rounded-full animate-bounce">
            AI LIVE
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default AIChatBot;
