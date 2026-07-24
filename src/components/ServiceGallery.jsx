import { motion } from 'framer-motion';

export default function ServiceGallery({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="section-padding py-16 bg-white">
      <div className="max-w-[1400px] mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-12 uppercase tracking-tight">
          Service <span className="text-secondary">Gallery</span>
        </h2>

        <div className={`grid grid-cols-1 ${projects.length > 1 ? 'md:grid-cols-2' : 'max-w-4xl mx-auto'} gap-8 lg:gap-10`}>
          {projects.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative">
                <img 
                  src={image} 
                  alt={`Project ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                {/* Labels */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-bold pointer-events-none z-10 shadow-lg tracking-wider uppercase">
                  Before
                </div>
                <div className="absolute top-4 right-4 bg-secondary/90 backdrop-blur-sm text-white px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-bold pointer-events-none z-10 shadow-lg tracking-wider uppercase">
                  After
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
