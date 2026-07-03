import { motion } from 'framer-motion';
import { Search, FileText, Paintbrush, CheckCircle, PartyPopper } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Site Inspection',
    description: 'Our experts visit your location to assess the project scope, surface conditions, and understand your requirements.',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Quotation',
    description: 'We provide a detailed, transparent quote with material specifications, timeline, and cost breakdown.',
  },
  {
    icon: Paintbrush,
    number: '03',
    title: 'Painting',
    description: 'Our skilled team executes the project using premium materials and proven techniques for flawless results.',
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Quality Check',
    description: 'Rigorous inspection ensures every detail meets our high standards and your expectations.',
  },
  {
    icon: PartyPopper,
    number: '05',
    title: 'Project Delivery',
    description: 'We hand over your transformed space with care instructions and satisfaction guarantee.',
  },
];

export default function Process() {
  return (
    <section className="py-10 md:py-16 bg-white">
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
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">How We Work</h2>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mt-3 mb-6">
              Our <span className="text-secondary">Process</span>
            </h2>
            <p className="text-text/70 text-lg max-w-2xl mx-auto">
              A streamlined approach to deliver exceptional results every time
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line - Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-secondary/50 to-secondary/20 transform -translate-x-1/2" />

            <div className="space-y-12 lg:space-y-0">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center ${
                    index !== steps.length - 1 ? 'lg:pb-16' : ''
                  }`}
                >
                  {/* Content - Left or Right based on index */}
                  <div className={`${index % 2 === 0 ? 'lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}>
                    <div className={`bg-section-alt rounded-2xl p-8 relative section-card-hover ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    }`}>
                      {/* Step Number */}
                      <div className={`flex items-center gap-4 mb-4 ${
                        index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                      }`}>
                        <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                          <step.icon className="w-7 h-7 text-secondary" />
                        </div>
                        <span className="text-4xl font-bold text-secondary/30">{step.number}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-primary mb-3">{step.title}</h3>
                      <p className="text-text/70 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Center Dot - Desktop */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: 'spring' }}
                      className="w-6 h-6 bg-secondary rounded-full border-4 border-white shadow-lg"
                    />
                  </div>

                  {/* Mobile Timeline Dot */}
                  <div className="lg:hidden flex items-center gap-4 mb-4">
                    <div className="w-4 h-4 bg-secondary rounded-full border-2 border-white shadow" />
                    <div className="flex-1 h-0.5 bg-secondary/20" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
