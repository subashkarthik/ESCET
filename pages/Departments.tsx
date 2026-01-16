import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, GraduationCap, Award } from 'lucide-react';
import DepartmentCard from '../components/DepartmentCard';
import api from '../services/api';

const Departments: React.FC = () => {
  const [departments, setDepartments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        setLoading(true);
        const response = await api.departments.getAll();
        setDepartments(response.results || response);
      } catch (err: any) {
        setError('Failed to load departments. Please try again later.');
        console.error('Error fetching departments:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  const stats = [
    { icon: Building2, label: 'Departments', value: departments.length.toString() },
    { icon: Users, label: 'Faculty Members', value: '150+' },
    { icon: GraduationCap, label: 'Students', value: '3000+' },
    { icon: Award, label: 'Accreditations', value: 'NBA' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">Our Departments</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Explore our world-class academic departments offering cutting-edge programs
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-xl"
            >
              <stat.icon className="w-8 h-8 text-blue-600 mb-3" />
              <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Departments Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-slate-600">Loading departments...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-xl inline-block">
              {error}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <DepartmentCard key={dept.id} department={dept} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Departments;
