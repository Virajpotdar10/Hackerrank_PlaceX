import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, Code2, Bug, ChevronRight, Terminal } from 'lucide-react';

const rounds = [
  {
    num: '01',
    icon: BrainCircuit,
    accentColor: 'rgb(96, 165, 250)',       // blue
    accentRGB:   '96, 165, 250',
    tag:  'Elimination Round',
    title: 'Aptitude Test',
    subtitle: 'Logic meets speed.',
    description: 'Multi-domain MCQ assessment covering Quantitative Aptitude, Logical Reasoning, and Technical fundamentals. Think fast, think right.',
    bullets: ['Quant & Reasoning', 'Verbal & CS Basics', 'Timed MCQ Format'],
    detail: 'Duration: 60 minutes • 40 Questions • No negative marking',
  },
  {
    num: '02',
    icon: Code2,
    accentColor: '#00FF88',
    accentRGB:   '0, 255, 136',
    tag:  'Core Challenge',
    title: 'Coding Round',
    subtitle: 'Your IDE. Their rules.',
    description: 'Live algorithms and data structure problems on HackerRank. From medium to hard — time pressure, zero mercy.',
    bullets: ['DSA Problems', 'HackerRank Platform', 'Any Language'],
    detail: 'Duration: 90 minutes • 3–4 Problems • Partial scoring enabled',
  },
  {
    num: '03',
    icon: Bug,
    accentColor: 'rgb(251, 191, 36)',       // amber
    accentRGB:   '251, 191, 36',
    tag:  'Grand Finale',
    title: 'Debugging Round',
    subtitle: 'Find it. Fix it. Win it.',
    description: 'Navigate complex, intentionally broken codebases. Spot the bugs, understand the logic, and produce clean output.',
    bullets: ['Multiple Language Support', 'Hidden Edge Cases', 'Code Comprehension'],
    detail: 'Duration: 60 minutes • 5+ Challenges • Pure debugging',
  },
];

const Rounds = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="rounds" className="py-28 relative overflow-hidden bg-black/50">
      {/* Top border beam */}
      <div className="absolute top-0 inset-x-0 h-px border-beam opacity-60" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-neon-green font-mono text-xs uppercase tracking-[0.3em] mb-4 block">The Arena</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Competition <span className="gradient-text">Rounds</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Three intense elimination stages designed to mirror an actual corporate hiring pipeline.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {rounds.map((round, i) => {
            const Icon = round.icon;
            const isActive = active === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                layout
                onClick={() => setActive(isActive ? null : i)}
                className="glass rounded-3xl border border-white/5 relative group cursor-pointer overflow-hidden card-shine"
                style={{
                  boxShadow: isActive
                    ? `0 0 40px rgba(${round.accentRGB}, 0.2), 0 0 80px rgba(${round.accentRGB}, 0.05)`
                    : undefined,
                  borderColor: isActive ? `rgba(${round.accentRGB}, 0.4)` : undefined,
                  transition: 'all 0.35s ease',
                }}
                whileHover={{
                  y: -8,
                  boxShadow: `0 20px 60px rgba(${round.accentRGB}, 0.15)`,
                  borderColor: `rgba(${round.accentRGB}, 0.35)`,
                }}
              >
                {/* Corner number */}
                <div className="absolute top-5 right-6 font-black font-mono text-5xl opacity-5 select-none" style={{ color: round.accentColor }}>
                  {round.num}
                </div>

                {/* Glow blob */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full"
                  style={{ background: round.accentColor }}
                />

                <div className="p-8">
                  {/* Tag */}
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold mb-6 uppercase tracking-wider"
                    style={{
                      background: `rgba(${round.accentRGB}, 0.1)`,
                      color: round.accentColor,
                      border: `1px solid rgba(${round.accentRGB}, 0.25)`,
                    }}
                  >
                    <Terminal className="w-3 h-3" />
                    {round.tag}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `rgba(${round.accentRGB}, 0.08)`, border: `1px solid rgba(${round.accentRGB}, 0.2)` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: round.accentColor }} />
                  </div>

                  <h3 className="text-2xl font-black text-white mb-1">Round {round.num}:</h3>
                  <h3 className="text-2xl font-black mb-2" style={{ color: round.accentColor }}>{round.title}</h3>
                  <p className="text-gray-500 text-sm italic mb-4">"{round.subtitle}"</p>
                  <p className="text-gray-400 leading-relaxed text-sm mb-6">{round.description}</p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-6">
                    {round.bullets.map((b, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-400">
                        <ChevronRight className="w-4 h-4 flex-shrink-0" style={{ color: round.accentColor }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Progress bar */}
                  <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${[70, 100, 85][i]}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, delay: i * 0.2, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ background: round.accentColor }}
                    />
                  </div>

                  {/* Expanded detail */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-5"
                      >
                        <div
                          className="text-xs font-mono p-3 rounded-xl"
                          style={{
                            background: `rgba(${round.accentRGB}, 0.06)`,
                            border: `1px solid rgba(${round.accentRGB}, 0.2)`,
                            color: round.accentColor,
                          }}
                        >
                          {round.detail}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tap hint */}
                  <p className="text-center text-xs text-gray-600 font-mono mt-4">
                    {isActive ? '▲ tap to close' : '▼ tap for details'}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Rounds;
