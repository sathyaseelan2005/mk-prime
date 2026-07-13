import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['RR3W+5PR P.N.Patti', 'Tamil Nadu'],
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+91 90809 22342'],
    color: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    details: ['+91 90809 22342'],
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['kesavanmeiyappan@gmail.com'],
    color: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },

];

export default function Contact() {
  return (
    <section id="contact" className="py-6 md:py-10 bg-white">
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
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">Contact Us</h2>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mt-3 mb-6">
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
                  src="https://www.google.com/maps?q=RR3W%2B5PR+P.N.Patti,+Tamil+Nadu&output=embed"
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
