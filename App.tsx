

import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import About from './pages/About';
import CollegeProfile from './pages/CollegeProfile';
import Vision from './pages/Vision';
import Mission from './pages/Mission';
import ChairmanMessage from './pages/ChairmanMessage';
import PrincipalMessage from './pages/PrincipalMessage';
import OrgChart from './pages/OrgChart';
import CampusLife from './pages/CampusLife';
import MandatoryDisclosure from './pages/MandatoryDisclosure';
import AicteEoa from './pages/AicteEoa';
import Departments from './pages/Departments';
import DepartmentDetail from './pages/DepartmentDetail';
import Facilities from './pages/Facilities';
import CoursesOffered from './pages/CoursesOffered';
import AdmissionProcedure from './pages/AdmissionProcedure';
import AdmissionOverview from './pages/AdmissionOverview';
import Scholarship from './pages/Scholarship';
import EligibilityCriteria from './pages/EligibilityCriteria';
import Activities from './pages/Activities';
import ImageGallery from './pages/ImageGallery';
import VideoGallery from './pages/VideoGallery';
import Contact from './pages/Contact';
import AdmissionEnquiryModal from './components/AdmissionEnquiryModal';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Placeholder for remaining non-primary pages
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="pt-[180px] pb-32 bg-white min-h-screen text-center">{/* Fixed navbar padding */}
    <div className="container mx-auto px-6">
      <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-none">{title}</h1>
      <p className="text-slate-400 text-xl font-medium max-w-xl mx-auto">This portal is currently being upgraded to our new high-end glass framework. Please check back soon.</p>
      <div className="mt-12 glass p-10 max-w-lg mx-auto bg-slate-50/30 border border-slate-100 shadow-xl rounded-[2rem]">
        <div className="w-16 h-1 bg-[#004a99] mx-auto rounded-full mb-4"></div>
        <p className="text-slate-500 font-bold text-sm tracking-widest uppercase">Academic Portal Update</p>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  // Global listener for opening enquiry modal
  useEffect(() => {
    const handleOpenEnquiry = () => setIsEnquiryModalOpen(true);
    window.addEventListener('openEnquiryModal', handleOpenEnquiry);
    return () => window.removeEventListener('openEnquiryModal', handleOpenEnquiry);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen selection:bg-[#004a99]/10 selection:text-[#004a99]">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* About Sub-routes */}
            <Route path="/about/profile" element={<CollegeProfile />} />
            <Route path="/about/vision" element={<Vision />} />
            <Route path="/about/mission" element={<Mission />} />
            <Route path="/about/chairman-message" element={<ChairmanMessage />} />
            <Route path="/about/principal-message" element={<PrincipalMessage />} />
            <Route path="/about/mandatory-disclosure" element={<MandatoryDisclosure />} />
            <Route path="/about/aicte-eoa" element={<AicteEoa />} />
            <Route path="/about/org-chart" element={<OrgChart />} />
            <Route path="/about/campus-life" element={<CampusLife />} />

            <Route path="/departments" element={<Departments />} />
            <Route path="/departments/:id" element={<DepartmentDetail />} />
            
            <Route path="/facilities" element={<Facilities />} />
            
            {/* Admission Sub-routes */}
            <Route path="/admissions" element={<AdmissionOverview />} />
            <Route path="/admissions/courses" element={<CoursesOffered />} />
            <Route path="/admissions/eligibility" element={<EligibilityCriteria />} />
            <Route path="/admissions/procedure" element={<AdmissionProcedure />} />
            <Route path="/admissions/scholarship" element={<Scholarship />} />

            <Route path="/activities" element={<Activities />} />
            
            {/* Gallery Routes */}
            <Route path="/gallery" element={<Navigate to="/gallery/images" replace />} />
            <Route path="/gallery/images" element={<ImageGallery />} />
            <Route path="/gallery/videos" element={<VideoGallery />} />

            <Route path="/news" element={<PlaceholderPage title="News & Events" />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>
        <Footer />
        
        {/* Global Admission Modal */}
        <AdmissionEnquiryModal 
          isOpen={isEnquiryModalOpen} 
          onClose={() => setIsEnquiryModalOpen(false)} 
        />
      </div>
    </Router>
  );
};

export default App;
