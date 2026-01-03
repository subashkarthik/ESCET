import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight, Grid3x3, Filter } from 'lucide-react';
import { GALLERY_IMAGES, GALLERY_CATEGORIES, GalleryImage } from '../constants';

const ImageGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'all' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + filteredImages.length) % filteredImages.length
      : (currentIndex + 1) % filteredImages.length;
    
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'ArrowRight') navigateImage('next');
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <div className="pt-[180px] pb-24 bg-white min-h-screen">{/* Fixed navbar padding */}
      {/* Header Section */}
      <div className="container mx-auto px-6 text-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[#004a99] font-black uppercase tracking-[0.2em] text-xs mb-4 block"
        >
          Visual Showcase
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-slate-900 mb-6"
        >
          Image <span className="text-[#004a99]">Gallery</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-500 text-xl max-w-2xl mx-auto font-medium"
        >
          A glimpse into the life, architecture, and achievements that define the ESCET legacy.
        </motion.p>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Filter size={20} className="text-[#004a99]" />
          <span className="text-sm font-black uppercase tracking-widest text-slate-400">Filter by Category</span>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-3">
          {GALLERY_CATEGORIES.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider transition-all ${
                selectedCategory === category.id
                  ? 'bg-[#004a99] text-white shadow-xl shadow-[#004a99]/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category.label}
              <span className={`ml-2 px-2 py-0.5 rounded-full text-[10px] ${
                selectedCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-white text-slate-600'
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-6">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="relative group cursor-pointer water-glass p-3 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                onClick={() => openLightbox(img)}
              >
                <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/3]">
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-black text-lg mb-1">{img.title}</h3>
                      {img.description && (
                        <p className="text-white/80 text-sm font-medium">{img.description}</p>
                      )}
                    </div>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 water-glass bg-white/90 flex items-center justify-center text-[#004a99] transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-2xl">
                      <ZoomIn size={32} />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full">
                    <span className="text-white text-[10px] font-black uppercase tracking-wider">
                      {img.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results Message */}
        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Grid3x3 size={64} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-2xl font-black text-slate-400 mb-2">No images found</h3>
            <p className="text-slate-500">Try selecting a different category</p>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-4 z-[110]"
              onClick={closeLightbox}
            >
              <X size={48} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
              className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 water-glass bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-[110] group"
            >
              <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
              className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 water-glass bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-[110] group"
            >
              <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Image Container */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="water-glass p-3 max-w-6xl w-full border-white/20 bg-white/5 shadow-none"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title} 
                className="w-full h-auto rounded-3xl shadow-3xl"
              />
              
              {/* Image Info */}
              <div className="mt-6 px-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-black text-white">{selectedImage.title}</h3>
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-black uppercase tracking-wider">
                    {selectedImage.category}
                  </span>
                </div>
                {selectedImage.description && (
                  <p className="text-white/70 font-medium">{selectedImage.description}</p>
                )}
                <div className="mt-4 flex items-center gap-2 text-white/40 text-sm">
                  <span className="font-black">{currentIndex + 1}</span>
                  <span>/</span>
                  <span>{filteredImages.length}</span>
                </div>
              </div>
            </motion.div>

            {/* Keyboard Hints */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 text-white/40 text-xs font-black uppercase tracking-widest pointer-events-none">
              <span>← Prev</span>
              <span>•</span>
              <span>Next →</span>
              <span>•</span>
              <span>ESC Close</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;
