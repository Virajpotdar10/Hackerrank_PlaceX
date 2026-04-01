import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const links = [
  { label: 'Home', href: '#' },
  { label: 'Details', href: '#details' },
  { label: 'Rounds', href: '#rounds' },
  { label: 'Highlights', href: '#highlights' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setProgress(pct);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <div
        id="scroll-progress"
        style={{ transform: `scaleX(${progress / 100})` }}
      />

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-neon-green/10 border border-neon-green/30 flex items-center justify-center group-hover:bg-neon-green/20 transition-all">
                <Zap className="w-4 h-4 text-neon-green" fill="currentColor" />
              </div>
              <span className="text-2xl font-black tracking-tighter">
                <span className="text-white">Place</span><span className="gradient-text text-glow-sm">X</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {links.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-400 hover:text-neon-green transition-colors duration-200 group"
                >
                  {l.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-[1px] bg-neon-green transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <a
                href="https://bit.ly/PlaceX2026"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-btn px-5 py-2 rounded-full bg-neon-green/10 border border-neon-green/50 text-neon-green hover:bg-neon-green hover:text-black font-bold text-sm transition-all duration-300 shadow-[0_0_12px_rgba(0,255,136,0.2)] uppercase tracking-wider"
              >
                Register Now
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-gray-400 hover:text-neon-green p-2 rounded-lg border border-white/10 glass transition-all"
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden glass border-t border-white/5 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {links.map(l => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-gray-400 hover:text-neon-green hover:bg-neon-green/5 rounded-xl transition-all font-medium"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="https://your-google-form-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block mt-4 px-4 py-3 text-center bg-neon-green text-black font-black rounded-xl uppercase tracking-widest text-sm"
                >
                  Register Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
