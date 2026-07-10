import { motion } from 'framer-motion';
import { Phone, Calendar, ShieldCheck, Users, Clock } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="hero" className="w-full overflow-hidden pt-24 bg-primary">
      <img
        src="/hero-bg-2.png"
        alt="Hero Image"
        className="w-full h-auto object-cover"
      />
    </section>
  );
}
