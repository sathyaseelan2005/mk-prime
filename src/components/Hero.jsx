import { motion } from 'framer-motion';
import { Phone, Calendar, ShieldCheck, Users, Clock } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="hero" className="relative bg-primary min-h-[85vh] flex flex-col justify-center overflow-hidden pt-20">
      {/* Full Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/hero-house.png"
          alt="Modern House"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay: solid dark on left fading to transparent on right on desktop, solid semi-transparent on mobile */}
        <div className="absolute inset-0 bg-primary/60 lg:bg-gradient-to-r lg:from-primary/90 lg:via-transparent lg:to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex-grow flex items-center">
        <div className="grid lg:grid-cols-12 gap-8 w-full items-center">
          {/* Left Content */}
          <div className="px-6 py-12 lg:py-0 lg:col-span-6 xl:col-span-6">
            
            {/* Top Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block border border-secondary/40 px-3 py-1 mb-6 text-xs font-bold text-secondary tracking-widest uppercase"
            >
              We coat, we protect, we beautify
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight"
            >
              PROFESSIONAL<br />
              <span className="text-secondary">PAINTING &<br />WATERPROOFING</span><br />
              SOLUTIONS
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-gray-300 text-base sm:text-lg max-w-lg mb-10 leading-relaxed font-light"
            >
              Enhancing spaces with perfection.<br />
              Quality coating solutions for your home, office & industrial projects.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="tel:+919080922342"
                className="flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-3.5 rounded text-sm uppercase tracking-wider transition-colors"
              >
                <Phone size={18} className="text-primary" />
                Call Now
              </a>
              <Link
                to="quote"
                smooth={true}
                duration={500}
                className="cursor-pointer flex items-center gap-2 border border-secondary/50 hover:border-secondary text-white hover:bg-secondary/10 font-bold px-8 py-3.5 rounded text-sm uppercase tracking-wider transition-colors"
              >
                <Calendar size={18} className="text-secondary" />
                Get a Quote
              </Link>
            </motion.div>

            {/* Features Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {/* Feature 1 */}
              <div className="flex gap-4 items-start">
                <ShieldCheck className="w-8 h-8 text-secondary shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Quality Materials</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">We use only premium quality products</p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex gap-4 items-start">
                <Users className="w-8 h-8 text-secondary shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Expert Team</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">Skilled professionals with years of experience</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 items-start">
                <Clock className="w-8 h-8 text-secondary shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">On-Time Delivery</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">We value your time and deliver on schedule</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
