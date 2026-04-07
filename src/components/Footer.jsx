import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Code2, MessageCircle, Briefcase, Zap, ExternalLink } from 'lucide-react';
import heroLogo from '../assets/hero.png';

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'Event Details', href: '#details' },
  { label: 'Rounds', href: '#rounds' },
  { label: 'Highlights', href: '#highlights' },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black border-t border-white/5">
      {/* Top beam */}
      <div className="absolute top-0 inset-x-0 h-px border-beam opacity-40" />
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-neon-green/4 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8 relative z-10">

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 border border-neon-green/15 mb-16 text-center relative overflow-hidden"
          style={{ boxShadow: '0 0 60px rgba(0,255,136,0.06)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 via-transparent to-blue-500/5" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-neon-green/10 border border-neon-green/30 flex items-center justify-center mx-auto mb-6">
              <img src={heroLogo} alt="Logo" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
              Are You <span className="gradient-text">Ready?</span>
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
              Seats are limited. Register now and secure your spot in PlaceX 2026 before it's too late.
            </p>
            <a
              href="https://bit.ly/PlaceX2026"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn inline-flex items-center gap-2 px-10 py-4 bg-neon-green text-black font-black rounded-2xl text-base uppercase tracking-widest pulse-glow"
            >
              <Zap className="w-5 h-5" fill="currentColor" />
              Register Now
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="inline-flex items-center gap-3 mb-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-neon-green/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={heroLogo}
                  alt="PlaceX Logo"
                  className="w-10 h-10 object-contain relative z-10 transition-transform duration-500"
                />
              </div>
              <span className="text-2xl sm:text-3xl font-bold tracking-tighter font-sans">
                <span className="text-white">Hacker</span><span className="gradient-text">Rank</span>
                <span className="text-gray-600 text-lg sm:text-xl font-light ml-2">2026</span>
              </span>
            </a>
            <p className="text-gray-500 leading-relaxed max-w-xs text-sm mb-6">
              National Hiring Simulation Challenge — where raw talent meets real-world readiness. Part of Technotsav 2026.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {[Code2, MessageCircle, Briefcase].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-500 hover:text-neon-green hover:border-neon-green/40 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 font-mono">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-gray-500 hover:text-neon-green text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-neon-green transition-all duration-300 inline-block" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 font-mono">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-neon-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">DY Patil College of Engineering</p>
                  <p className="text-gray-600 text-xs mt-0.5">(Kasaba Bawada, Kolhapur)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-neon-green flex-shrink-0" />
                <a href="mailto:contact@placex.com" className="text-gray-500 hover:text-neon-green text-sm transition-colors">
                  hackerrank.dypcet@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-neon-green flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-500 hover:text-neon-green text-sm transition-colors">
                  Saniya Mane   8799879400<br></br>
                  Viraj Potdar  9764482435

                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs font-mono text-center">
            © 2026 <span className="text-gray-500">Technotsav</span>. All Rights Reserved. Made with ❤️ by HCC-DYPCET
          </p>
          <div className="flex items-center gap-1 text-gray-700 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <span>Registration Open</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
