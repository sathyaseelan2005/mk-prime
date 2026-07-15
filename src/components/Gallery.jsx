import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'EXTERIOR PAINTING',
    image: '/exterior-painting.png',
  },
  {
    id: 2,
    title: 'WATERPROOFING',
    image: '/waterproofing.png',
  },
  {
    id: 3,
    title: 'INTERIOR PAINTING',
    image: '/interior-painting.png',
  },
  {
    id: 4,
    title: 'TEXTURE PAINTING',
    image: '/texture-painting.png',
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-full h-[300px] sm:h-[400px] lg:h-[450px] xl:h-[500px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </div>



        </div>
      </div>
    </section>
  );
}
