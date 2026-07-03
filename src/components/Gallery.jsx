import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'EXTERIOR PAINTING',
    beforeImage: 'https://picsum.photos/seed/ext-before/400/400',
    afterImage: 'https://picsum.photos/seed/ext-after/400/400',
  },
  {
    id: 2,
    title: 'WATERPROOFING',
    beforeImage: 'https://picsum.photos/seed/water-before/400/400',
    afterImage: 'https://picsum.photos/seed/water-after/400/400',
  },
  {
    id: 3,
    title: 'INTERIOR PAINTING',
    beforeImage: 'https://picsum.photos/seed/int-before/400/400',
    afterImage: 'https://picsum.photos/seed/int-after/400/400',
  },
  {
    id: 4,
    title: 'TEXTURE PAINTING',
    beforeImage: 'https://picsum.photos/seed/tex-before/400/400',
    afterImage: 'https://picsum.photos/seed/tex-after/400/400',
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-6 md:py-10 bg-white">
      <div className="section-padding">
        <div className="max-w-[1400px] mx-auto text-center">

          <h2 className="text-secondary text-4xl md:text-5xl font-black tracking-tighter uppercase mb-3"></h2>
          <h2 className="text-2xl md:text-3xl font-black text-primary mb-16 uppercase tracking-tight">
            Recently <span className="text-secondary">Completed</span> Projects
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
