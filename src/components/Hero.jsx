import { motion } from 'framer-motion';
import { Phone, Calendar, ShieldCheck, Users, Clock } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="hero" className="w-full overflow-hidden pt-16 bg-primary">
      <img
        src="/hero-bg-2.png"
        alt="Hero Image"
        className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover object-center"
      />
    </section>
  );
}
