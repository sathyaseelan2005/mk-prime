import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle2 } from 'lucide-react';

const features = [
  '15+ Years of Excellence',
  'Certified Professional Team',
  'Premium Quality Materials',
  '100% Satisfaction Guarantee',
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
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
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">About Us</h2>
            <h2 className="text-xl md:text-2xl font-semibold text-primary mb-6">
              We Bring Your Vision to{' '}
              <span className="text-secondary">Life</span>
            </h2>
            <p className="text-text/70 text-lg leading-relaxed max-w-3xl mx-auto">
              MK PRIME has been transforming spaces across residential, commercial, and industrial 
              sectors for over 15 years. Our commitment to excellence, use of premium materials, and 
              skilled craftsmanship has made us the trusted choice for painting and coating solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0d?w=800&q=80"
                  alt="Professional painting team"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              
              {/* Floating Experience Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
              >
                <div className="text-4xl font-bold text-secondary mb-1">15+</div>
                <div className="text-text font-medium">Years of Experience</div>
              </motion.div>

              {/* Decorative Element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-secondary/30 rounded-2xl -z-10" />
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >


              {/* Mission & Vision */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-section-alt rounded-2xl p-6 transition-all duration-300 hover:shadow-lg section-card-hover"
                >
                  <Target className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Our Mission</h3>
                  <p className="text-text/70 text-sm leading-relaxed">
                    To deliver exceptional painting and coating services that exceed expectations, 
                    using innovative techniques and eco-friendly materials.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-section-alt rounded-2xl p-6 transition-all duration-300 hover:shadow-lg section-card-hover"
                >
                  <Eye className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Our Vision</h3>
                  <p className="text-text/70 text-sm leading-relaxed">
                    To be the most trusted painting and coating partner, recognized for quality, 
                    reliability, and customer satisfaction across all sectors.
                  </p>
                </motion.div>
              </div>

              {/* Features List */}
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-text font-medium text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
