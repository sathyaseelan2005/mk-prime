import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { useScrollPosition } from '../hooks/useCounter';

export default function FloatingButtons() {
  const scrollPosition = useScrollPosition();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    setShowBackToTop(scrollPosition > 500);
  }, [scrollPosition]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919080922342"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
        
        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 bg-white text-text text-sm font-medium px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
          Chat with us
        </span>
      </motion.a>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: 'spring' }}
            onClick={scrollToTop}
            className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-40 w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg shadow-secondary/30 hover:shadow-xl hover:shadow-secondary/40 transition-all duration-300 hover:scale-110 group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
