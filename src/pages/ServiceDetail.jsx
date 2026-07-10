import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { services } from '../data/services';
import Gallery from '../components/Gallery';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.id === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section for Service */}
      <div className="relative h-[40vh] md:h-[50vh] bg-primary overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="section-padding w-full">
            <div className="max-w-4xl mx-auto">
              <Link to="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-secondary transition-colors mb-6">
                <ArrowLeft size={20} />
                <span>Back to Services</span>
              </Link>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 mb-4"
              >
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white">{service.title}</h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-white/90 max-w-2xl"
              >
                {service.description}
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Content */}
      <div className="section-padding py-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-primary mb-6">About this Service</h2>
            <div className="prose prose-lg text-text/80">
              <p className="leading-relaxed whitespace-pre-wrap">{service.longDescription}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-6">Key Features</h3>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                    <span className="text-text/80 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>
      
      {/* Gallery Section */}
      <Gallery />

      {/* Bottom CTA */}
      <div className="section-padding pb-16">
        <div className="max-w-xl mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-primary mb-6">Ready to get started?</h3>
          <Link
            to="/contact"
            className="inline-block w-full sm:w-auto bg-secondary text-white text-center px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/30"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
