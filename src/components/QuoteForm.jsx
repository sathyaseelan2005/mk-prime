import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Upload, CheckCircle2 } from 'lucide-react';

const services = [
  'Interior Painting',
  'Exterior Painting',
  'Waterproofing',
  'Texture Painting',
  'Industrial Painting',
  'Government/Private Contract',
];

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    email: '',
    service: '',
    area: '',
    date: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses = "w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-text placeholder:text-gray-400 focus:outline-none focus:border-secondary transition-colors duration-300";

  return (
    <section id="quote" className="py-10 md:py-16 bg-section-alt">
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
            <h2 className="text-5xl md:text-6xl font-black text-primary tracking-tight">Get In Touch</h2>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mt-3 mb-6">
              Request A <span className="text-secondary">Quote</span>
            </h2>
            <p className="text-text/70 text-lg max-w-2xl mx-auto">
              Tell us about your project and we'll get back to you with a detailed estimate
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative hidden lg:block"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Professional painter at work"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <div className="font-bold text-primary">Free Consultation</div>
                    <div className="text-text/70 text-sm">No obligation, expert advice for your project</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl p-12 text-center shadow-lg"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Quote Request Submitted!</h3>
                  <p className="text-text/70">We'll get back to you within 24 hours with a detailed estimate.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="+1 234 567 890"
                      />
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">WhatsApp</label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="Same as phone"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Service Required *</label>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className={inputClasses}
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    {/* Area */}
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Project Area (sq ft)</label>
                      <input
                        type="text"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="e.g., 2000 sq ft"
                      />
                    </div>

                    {/* Preferred Date */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-text mb-2">Preferred Start Date</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-text mb-2">Project Details</label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="Tell us more about your project..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-6 bg-secondary text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:bg-secondary/90 transition-colors shadow-lg shadow-secondary/30"
                  >
                    <Send className="w-5 h-5" />
                    Submit Quote Request
                  </motion.button>

                  <p className="text-center text-text/50 text-sm mt-4">
                    We respect your privacy. Your information is safe with us.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
