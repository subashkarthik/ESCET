import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import NewsTimeline from '../components/NewsTimeline';
import api from '../services/api';

const Home: React.FC = () => {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await api.news.getAll();
        setNews((response.results || response).slice(0, 3)); // Get latest 3 news items
      } catch (err) {
        console.error('Error fetching news:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              E.S. College of Engineering<br />and Technology
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Empowering Future Engineers with Excellence in Education and Innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admissions/overview"
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
              >
                Apply Now
              </a>
              <a
                href="/about/college-profile"
                className="px-8 py-4 bg-blue-600/20 backdrop-blur-sm text-white rounded-xl font-bold hover:bg-blue-600/30 transition-all border-2 border-white/20"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '7', label: 'Departments' },
              { value: '150+', label: 'Faculty' },
              { value: '3000+', label: 'Students' },
              { value: '20+', label: 'Years' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Latest News & Events
            </h2>
            <p className="text-xl text-slate-600">
              Stay updated with our latest announcements and achievements
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <NewsTimeline news={news} />
          )}

          <div className="text-center mt-12">
            <a
              href="/news"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl"
            >
              View All News <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Why Choose ESCET?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Academic Excellence',
                description: 'NBA accredited programs with industry-aligned curriculum',
                icon: '🎓',
              },
              {
                title: 'Expert Faculty',
                description: 'Experienced professors dedicated to student success',
                icon: '👨‍🏫',
              },
              {
                title: 'Modern Infrastructure',
                description: 'State-of-the-art labs and learning facilities',
                icon: '🏛️',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
