import { motion } from 'framer-motion';
import { Shield, Clock, Gem, Users, Wallet, Heart } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Quality Work',
    description: 'We use premium-grade materials and proven techniques to ensure flawless, long-lasting finishes on every project.',
  },
  {
    icon: Clock,
    title: 'On Time Delivery',
    description: 'We respect your time. Our projects are completed within agreed timelines without compromising on quality.',
  },
  {
    icon: Gem,
    title: 'Premium Materials',
    description: 'Only the best paints, coatings, and materials from trusted brands are used for superior durability and finish.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Our skilled professionals bring years of expertise and attention to detail to every painting project.',
  },
  {
    icon: Wallet,
    title: 'Affordable Pricing',
    description: 'Competitive rates without hidden costs. Get premium services that fit your budget perfectly.',
  },
  {
    icon: Heart,
    title: 'Customer Satisfaction',
    description: 'Your satisfaction is our priority. We work closely with you until the result exceeds your expectations.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-section-alt">
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
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Why Choose Us</h2>
              <h2 className="text-xl md:text-2xl font-semibold text-primary mt-2 mb-4">
              The <span className="text-secondary">MK PRIME</span> Difference
            </h2>
            <p className="text-text/70 text-lg max-w-2xl mx-auto">
              Discover why thousands of clients trust us for their painting and coating needs
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 section-card-hover"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                  <reason.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-text/70 leading-relaxed text-sm">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
