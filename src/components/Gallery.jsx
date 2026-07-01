import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const categories = ['All', 'Interior', 'Exterior', 'Texture'];

const galleryItems = [
  { id: 1, category: 'Interior', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', title: 'Modern Living Room' },
  { id: 2, category: 'Exterior', image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80', title: 'House Exterior Makeover' },
  { id: 3, category: 'Texture', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80', title: 'Venetian Plaster Wall' },
  { id: 4, category: 'Interior', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80', title: 'Bedroom Transformation' },
  { id: 5, category: 'Exterior', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', title: 'Commercial Building' },
  { id: 6, category: 'Texture', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', title: 'Custom Texture Design' },
  { id: 7, category: 'Interior', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80', title: 'Kitchen Cabinet Painting' },
  { id: 8, category: 'Exterior', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80', title: 'Deck & Fence Staining' },
  { id: 9, category: 'Texture', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80', title: 'Accent Wall Design' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-section-alt">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Portfolio</h2>
              <h2 className="text-xl md:text-2xl font-semibold text-primary mt-2 mt-2 mb-4">
              Our <span className="text-secondary">Project Gallery</span>
            </h2>
            <p className="text-text/70 text-lg max-w-2xl mx-auto">
              Browse through our completed projects and see the quality of our work
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-secondary text-white shadow-lg shadow-secondary/30'
                    : 'bg-white text-text hover:bg-secondary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Masonry Grid */}
          <motion.div 
            layout
            className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            <AnimatePresence mode='popLayout'>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => setLightboxImage(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-secondary text-sm font-medium mb-1">{item.category}</span>
                    <h3 className="text-white text-lg font-bold">{item.title}</h3>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <span className="text-secondary text-sm font-medium">{lightboxImage.category}</span>
                <h3 className="text-white text-xl font-bold">{lightboxImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
