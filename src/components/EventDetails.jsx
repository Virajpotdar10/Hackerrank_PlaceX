import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Globe, User, Clock, Target, Layers, Wallet } from 'lucide-react';

/* ─── Animated counter ─── */
const Counter = ({ end, suffix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const steps = 60;
    const inc = end / steps;
    const id = setInterval(() => {
      start += inc;
      if (start >= end) { setCount(end); clearInterval(id); }
      else setCount(Math.floor(start));
    }, 18);
    return () => clearInterval(id);
  }, [inView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const details = [
  { icon: Calendar, title: 'Date', value: '16 April 2026' },
  { icon: Globe, title: 'Level', value: 'National', sub: 'Open to all colleges' },
  { icon: User, title: 'Format', value: 'Individual', sub: 'Solo competition' },
  { icon: Clock, title: 'Starts', value: '9:00 AM' },
  { icon: Target, title: 'Rounds', value: '3 Rounds', sub: 'Aptitude → Code → Debug' },
  { icon: Layers, title: 'Platform', value: 'HackerRank', sub: 'Coding round' },
  { icon: Wallet, title: 'Registration Fee', value: '₹100', sub: 'Per Participant (Includes Refreshments)' },
];



const EventDetails = () => {
  const secRef = useRef(null);
  const inView = useInView(secRef, { once: true, margin: '-100px' });

  return (
    <section id="details" ref={secRef} className="py-28 relative overflow-hidden grid-bg">
      {/* Ambient blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-neon-green/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-neon-green font-mono text-xs uppercase tracking-[0.3em] mb-4 block">About The Event</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            The <span className="gradient-text">Event</span> Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            PlaceX is a comprehensive simulation of the actual placement process — sharpening your skills for the real corporate world. (Registration includes refreshments)
          </p>
        </motion.div>



        {/* Detail cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {details.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 border border-white/5 card-glow card-shine group"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-neon-green/10 border border-neon-green/20 flex items-center justify-center flex-shrink-0 group-hover:border-neon-green/60 transition-all">
                  <item.icon className="text-neon-green w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-mono uppercase tracking-wider">{item.title}</p>
                  <p className="text-white text-lg font-bold mt-0.5">{item.value}</p>
                  <p className="text-gray-600 text-xs mt-1">{item.sub}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
