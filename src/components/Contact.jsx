import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['123 Main Street', 'New York, NY 10001'],
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+1 (234) 567-890', '+1 (234) 567-891'],
    color: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    details: ['+1 (234) 567-892'],
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@mkprime.com', 'quotes@mkprime.com'],
    color: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM'],
    color: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
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
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Contact Us</h2>
              <h2 className="text-xl md:text-2xl font-semibold text-primary mt-2 mt-2 mb-4">
              Get In <span className="text-secondary">Touch</span>
            </h2>
            <p className="text-text/70 text-lg max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Reach out through any of these channels
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className={`flex items-start gap-4 p-5 rounded-2xl ${info.color} transition-all duration-300 hover:shadow-md`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white shadow-sm`}>
                    <info.icon className={`w-6 h-6 ${info.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-text/70 text-sm">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right - Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px] bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                  title="MK PRIME Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
