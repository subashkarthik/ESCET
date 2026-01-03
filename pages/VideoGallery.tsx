
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Video as VideoIcon, Clock } from 'lucide-react';
import { GALLERY_VIDEOS } from '../constants';

const VideoGallery: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<typeof GALLERY_VIDEOS[0] | null>(null);

  return (
    <div className="pt-[180px] pb-24 bg-white min-h-screen">{/* Fixed navbar padding */}
      <div className="container mx-auto px-6 text-center mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-orange-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block"
        >
          Multimedia Hub
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-slate-900 mb-8"
        >
          Video <span className="text-orange-600">Gallery</span>
        </motion.h1>
        <p className="text-slate-500 text-xl max-w-2xl mx-auto font-medium">
          Experience the campus energy through our curated collection of events, tours, and academic highlights.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {GALLERY_VIDEOS.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer water-glass p-3 bg-white/50 border-white/80 hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative rounded-[1.8rem] overflow-hidden aspect-video">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 water-glass !bg-white/95 rounded-full flex items-center justify-center text-[#004a99] shadow-2xl scale-90 group-hover:scale-110 transition-transform duration-500">
                    <Play size={28} fill="currentColor" />
                  </div>
                </div>

                {/* Duration Tag */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg flex items-center gap-1.5 text-white text-[10px] font-black uppercase tracking-widest">
                  <Clock size={12} />
                  {video.duration}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-orange-600 mb-2">
                  <VideoIcon size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Official Video</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 leading-tight group-hover:text-[#004a99] transition-colors">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedVideo(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-4 z-[110]">
              <X size={48} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="water-glass !bg-black p-2 max-w-6xl w-full aspect-video border-white/10 shadow-none overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`${selectedVideo.url}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-3xl"
              ></iframe>
            </motion.div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white/40 pointer-events-none">
              <p className="text-[10px] font-black uppercase tracking-[0.5em]">Now Playing: {selectedVideo.title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoGallery;
