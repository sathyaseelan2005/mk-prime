import { motion } from 'framer-motion';
import { Phone, Calendar, ShieldCheck, Users, Clock } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="hero" className="relative bg-primary min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Right Background Image (Desktop) */}
      <div className="hidden lg:block absolute top-0 right-0 w-[65%] xl:w-[70%] h-full">
        <img
          src="/hero-house.png"
          alt="Modern House"
          className="w-full h-full object-cover object-center"
        />
        {/* Fade gradient from left to right */}
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
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
          
          {/* Mobile Image (Visible only on small screens) */}
          <div className="lg:hidden col-span-full px-6 pb-12">
            <div className="w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden relative">
              <img
                src="/hero-house.png"
                alt="Modern House"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
