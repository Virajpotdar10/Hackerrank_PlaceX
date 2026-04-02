import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

const ScrollButton = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show button after scrolling down a bit
      setIsVisible(scrollY > 300);
      
      // Determine if we are near the bottom (within 100px)
      setIsAtBottom(scrollY + windowHeight >= documentHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
          className="fixed bottom-8 right-6 z-50 p-4 rounded-full glass border border-neon-green/30 text-neon-green shadow-[0_0_20px_rgba(46,255,136,0.2)] hover:shadow-[0_0_30px_rgba(46,255,136,0.4)] transition-shadow duration-300 group"
          aria-label={isAtBottom ? 'Scroll to Top' : 'Scroll to Bottom'}
        >
          <div className="relative overflow-hidden">
             <AnimatePresence mode="wait">
                <motion.div
                  key={isAtBottom ? 'up' : 'down'}
                  initial={{ y: isAtBottom ? 20 : -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: isAtBottom ? -20 : 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isAtBottom ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </motion.div>
             </AnimatePresence>
          </div>
          
          {/* Subtle glow pulse */}
          <span className="absolute inset-0 rounded-full bg-neon-green/10 animate-pulse -z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollButton;
