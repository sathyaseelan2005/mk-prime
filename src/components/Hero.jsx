import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Phone, ArrowRight, Award, Users, Building2 } from 'lucide-react';
import { useCounter } from '../hooks/useCounter';

function StatCard({ icon: Icon, end, suffix, label, delay }) {
  const { count, ref } = useCounter(end, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="glass-effect rounded-2xl p-6 text-center"
    >
      <Icon className="w-8 h-8 text-secondary mx-auto mb-3" />
      <div className="text-3xl md:text-4xl font-bold text-white mb-1">
        {count}{suffix}
      </div>
      <div className="text-white/70 text-sm">{label}</div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920&q=80"
          alt="Professional painting work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full pt-24 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2 mb-6"
              >
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span className="text-secondary text-sm font-medium">Trusted Painting Experts</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="heading-xl text-white mb-6"
              >
                Professional Painting &{' '}
                <span className="text-secondary">Coating Services</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed"
              >
                We bring color, quality, and long-lasting protection to your residential, 
                commercial, and industrial spaces. Transform your property with our expert team.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="quote"
                  smooth={true}
                  duration={500}
                  className="group bg-secondary text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2 hover:bg-secondary/90 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-1"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+1234567890"
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </motion.div>
            </div>

            {/* Right - Floating Stats */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4 mt-8">
                    <StatCard
                      icon={Award}
                      end={15}
                      suffix="+"
                      label="Years Experience"
                      delay={0.8}
                    />
                    <StatCard
                      icon={Building2}
                      end={2500}
                      suffix="+"
                      label="Projects Completed"
                      delay={1.0}
                    />
                  </div>
                  <div className="space-y-4">
                    <StatCard
                      icon={Users}
                      end={1800}
                      suffix="+"
                      label="Happy Clients"
                      delay={0.9}
                    />
                    <div className="glass-effect rounded-2xl p-6 text-center">
                      <div className="text-3xl font-bold text-secondary mb-1">98%</div>
                      <div className="text-white/70 text-sm">Satisfaction Rate</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
