import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'EXTERIOR PAINTING',
    beforeImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80',
  },
  {
    id: 2,
    title: 'WATERPROOFING',
    beforeImage: 'https://images.unsplash.com/photo-1574360773981-5d9eb32223c6?w=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80',
  },
  {
    id: 3,
    title: 'INTERIOR PAINTING',
    beforeImage: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80',
  },
  {
    id: 4,
    title: 'TEXTURE PAINTING',
    beforeImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80',
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-10 md:py-16 bg-white">
      <div className="section-padding">
        <div className="max-w-[1400px] mx-auto text-center">

          <h2 className="text-secondary text-4xl md:text-5xl font-black tracking-tighter uppercase mb-3"></h2>
          <h2 className="text-sm font-bold text-text mb-16 uppercase tracking-widest">
            Recently Completed Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="flex w-full h-[280px] rounded-lg overflow-hidden mb-5 shadow-lg hover:shadow-xl transition-shadow relative">
                  {/* Before */}
                  <div className="w-1/2 relative h-full">
                    <img src={project.beforeImage} alt={`${project.title} Before`} className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-500" />
                    <div className="absolute bottom-3 left-3 bg-black/90 text-white text-[10px] px-3 py-1 font-bold tracking-wider rounded border border-white/20">BEFORE</div>
                  </div>

                  {/* Divider line */}
                  <div className="w-[3px] bg-white h-full z-10 shadow-sm relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md flex items-center justify-center">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                    </div>
                  </div>

                  {/* After */}
                  <div className="w-1/2 relative h-full">
                    <img src={project.afterImage} alt={`${project.title} After`} className="w-full h-full object-cover filter brightness-105 group-hover:brightness-110 transition-all duration-500" />
                    <div className="absolute bottom-3 right-3 bg-black/90 text-white text-[10px] px-3 py-1 font-bold tracking-wider rounded border border-white/20">AFTER</div>
                  </div>
                </div>

                <h4 className="text-text font-bold text-sm tracking-wide uppercase">{project.title}</h4>
              </motion.div>
            ))}
          </div>



        </div>
      </div>
    </section>
  );
}
