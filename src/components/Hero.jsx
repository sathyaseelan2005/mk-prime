import { motion } from 'framer-motion';
import { Phone, Calendar, ShieldCheck, Users, Clock } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="hero" className="w-full overflow-hidden pt-16 bg-primary">
      <img
        src="/hero-bg-2.png"
        alt="Hero Image"
        className="w-full max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] object-contain object-center"
      />
    </section>
  );
}
