import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const quickLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About Us', to: 'about' },
  { name: 'Services', to: 'services' },
  { name: 'Gallery', to: 'gallery' },
  { name: 'Reviews', to: 'reviews' },
  { name: 'Contact', to: 'contact' },
];

const services = [
  'Interior Painting',
  'Exterior Painting',
  'Waterproofing',
  'Texture Painting',
  'Industrial Painting',
  'Government Contracts',
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="section-padding py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="mb-4">
                <img src={logo} alt="MK Prime" className="h-16 object-contain bg-white rounded p-1" />
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Professional painting and coating services for residential, commercial, and industrial spaces. 
                Quality you can trust, results you'll love.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-white/70 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">RR3W+5PR P.N.Patti, Tamil Nadu</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                  <a href="tel:9080922342" className="text-white/70 text-sm hover:text-secondary transition-colors">
                    +91 90809 22342
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                  <a href="mailto:kesavanmeiyappan@gmail.com" className="text-white/70 text-sm hover:text-secondary transition-colors">
                    kesavanmeiyappan@gmail.com
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="section-padding py-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} MK PRIME. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/50 hover:text-secondary text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/50 hover:text-secondary text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
