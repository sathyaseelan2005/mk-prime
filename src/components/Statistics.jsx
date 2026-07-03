import { motion } from 'framer-motion';
import { useCounter } from '../hooks/useCounter';
import { Calendar, Building2, ThumbsUp, Users } from 'lucide-react';

const stats = [
  {
    icon: Calendar,
    end: 15,
    suffix: '+',
    label: 'Years Experience',
  },
  {
    icon: Building2,
    end: 2500,
    suffix: '+',
    label: 'Projects Completed',
  },
  {
    icon: ThumbsUp,
    end: 98,
    suffix: '%',
    label: 'Customer Satisfaction',
  },
  {
    icon: Users,
    end: 45,
    suffix: '+',
    label: 'Professional Team',
  },
];

function StatCard({ icon: Icon, end, suffix, label }) {
  const { count, ref } = useCounter(end, 2500);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-secondary" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-white/70 text-sm md:text-base">{label}</div>
    </motion.div>
  );
}

export default function Statistics() {
  return (
    <section className="py-10 md:py-16 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-secondary/20 rounded-full px-4 py-2 mb-6">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Our Track Record</span>
            </div>
            <h2 className="heading-lg text-white mb-4">
              Numbers That <span className="text-secondary">Speak</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Our achievements reflect our commitment to excellence and customer satisfaction
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <StatCard {...stat} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
