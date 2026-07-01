import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Building2, Droplets, Palette, Factory, Landmark, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Interior Painting',
    description: 'Transform your indoor spaces with our expert interior painting services. We handle walls, ceilings, trim, and specialty finishes.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    features: ['Wall & Ceiling Painting', 'Trim & Molding', 'Specialty Finishes', 'Color Consultation'],
  },
  {
    icon: Building2,
    title: 'Exterior Painting',
    description: 'Protect and beautify your property exterior with weather-resistant coatings that stand the test of time.',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80',
    features: ['House Exterior', 'Garage & Doors', 'Deck & Fence', 'Power Washing'],
  },
  {
    icon: Droplets,
    title: 'Waterproofing',
    description: 'Comprehensive waterproofing solutions to protect your property from moisture damage and leaks.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
    features: ['Basement Waterproofing', 'Roof Coating', 'Bathroom Sealing', 'Leak Repair'],
  },
  {
    icon: Palette,
    title: 'Texture Painting',
    description: 'Add depth and character to your walls with our creative texture painting techniques and designs.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
    features: ['Stucco Finish', 'Venetian Plaster', 'Metallic Effects', 'Custom Patterns'],
  },
  {
    icon: Factory,
    title: 'Industrial Painting',
    description: 'Specialized coating solutions for factories, warehouses, and industrial facilities with safety compliance.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    features: ['Floor Coatings', 'Machinery Painting', 'Safety Markings', 'Corrosion Protection'],
  },
  {
    icon: Landmark,
    title: 'Government & Private Contracts',
    description: 'Large-scale painting projects for government buildings, schools, hospitals, and commercial complexes.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    features: ['Public Buildings', 'Schools & Colleges', 'Hospitals', 'Commercial Complexes'],
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Our Services</h2>
              <h2 className="text-xl md:text-2xl font-semibold text-primary mt-2 mb-4">
              Premium <span className="text-secondary">Painting Solutions</span>
            </h2>
            <p className="text-text/70 text-lg max-w-2xl mx-auto">
              From residential touch-ups to large-scale industrial projects, we deliver excellence at every level
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:bg-[#1e3a5f] hover:text-white"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-text/70 text-sm leading-relaxed mb-4 group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-text/60 group-hover:text-white/80 transition-colors duration-300">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>


                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-secondary/30 transition-colors duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
