import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, Edit3, ArrowRight, ChevronDown } from 'lucide-react';
import api from '../services/api';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AdmissionEnquiryModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [departments, setDepartments] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    first_name: '',
    email: '',
    phone: '',
    department: '',
    comments: '',
  });

  // Fetch departments from API
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await api.departments.getAll();
        setDepartments(response.results || response);
      } catch (err) {
        console.error('Failed to fetch departments:', err);
      }
    };
    
    if (isOpen) {
      fetchDepartments();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await api.enquiries.submit(formData);
      setSuccess(true);
      
      // Reset form after 2 seconds and close
      setTimeout(() => {
        setFormData({
          first_name: '',
          email: '',
          phone: '',
          department: '',
          comments: '',
        });
        setSuccess(false);
        onClose();
      }, 2000);
    } catch (err: any) {
      setError(err.message || 'Failed to submit enquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-[500px] bg-[#f0f7ff] rounded-[1.5rem] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-8 py-6 bg-white">
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Admission Enquiry</h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-900"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              {/* Success Message */}
              {success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl">
                  ✓ Enquiry submitted successfully!
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl">
                  {error}
                </div>
              )}

              {/* First Name */}
              <div className="relative group">
                <input 
                  type="text" 
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="First Name" 
                  required
                  className="w-full bg-white px-6 py-4 rounded-xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004a99]/20 shadow-sm border border-transparent focus:border-[#004a99]/10 transition-all"
                />
                <User size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#004a99] transition-colors" />
              </div>

              {/* Email */}
              <div className="relative group">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email" 
                  required
                  className="w-full bg-white px-6 py-4 rounded-xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004a99]/20 shadow-sm border border-transparent focus:border-[#004a99]/10 transition-all"
                />
                <Mail size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#004a99] transition-colors" />
              </div>

              {/* Phone No. */}
              <div className="relative group">
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone No." 
                  required
                  className="w-full bg-white px-6 py-4 rounded-xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004a99]/20 shadow-sm border border-transparent focus:border-[#004a99]/10 transition-all"
                />
                <Phone size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#004a99] transition-colors" />
              </div>

              {/* Department Select */}
              <div className="relative group">
                <select 
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  className="w-full bg-white px-6 py-4 rounded-xl text-slate-700 appearance-none focus:outline-none focus:ring-2 focus:ring-[#004a99]/20 shadow-sm border border-transparent focus:border-[#004a99]/10 transition-all cursor-pointer"
                >
                  <option value="" disabled>Select Department</option>
                  {departments.map(dept => (
                    <option key={dept.id} value={dept.short_name}>{dept.name}</option>
                  ))}
                </select>
                <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#004a99] transition-colors pointer-events-none" />
              </div>

              {/* Comments */}
              <div className="relative group">
                <textarea 
                  rows={4}
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Write comments" 
                  required
                  className="w-full bg-white px-6 py-4 rounded-xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004a99]/20 shadow-sm border border-transparent focus:border-[#004a99]/10 transition-all resize-none"
                />
                <Edit3 size={18} className="absolute right-5 top-5 text-slate-300 group-focus-within:text-[#004a99] transition-colors" />
              </div>

              {/* Action Button */}
              <div className="flex justify-center pt-4">
                <button 
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-3 px-10 py-4 bg-[#004a99] text-white font-black rounded-xl text-sm tracking-tight hover:bg-[#003d7e] active:scale-95 transition-all shadow-xl shadow-[#004a99]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Submitting...' : 'Make An Request'} <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AdmissionEnquiryModal;
