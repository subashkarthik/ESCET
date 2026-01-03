
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-40 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block"
          >
            Campus Life
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-8"
          >
            Our <span className="text-blue-600">Environment</span>
          </motion.h1>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto font-medium">
            Explore the cutting-edge facilities and vibrant student community that define the ES College experience.
          </p>
        </div>

        {/* Masonry Grid with Glass borders */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer glass p-2 hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedImage(img)}
            >
              <div className="rounded-[1.5rem] overflow-hidden">
                <img 
                  src={img} 
                  alt={`Gallery ${i}`} 
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
              </div>
              <div className="absolute inset-2 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-[1.5rem] flex items-center justify-center backdrop-blur-[2px]">
                <div className="w-14 h-14 glass bg-white flex items-center justify-center text-blue-600 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                  <ZoomIn size={28} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/90 backdrop-blur-3xl flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-slate-400 hover:text-blue-600 transition-colors p-2">
              <X size={40} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass p-3 max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Full view" 
                className="w-full h-auto rounded-2xl shadow-3xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
