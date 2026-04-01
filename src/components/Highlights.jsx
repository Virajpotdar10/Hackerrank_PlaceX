import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Star, Cpu, Zap, ShieldCheck, Users, Code, TrendingUp, Briefcase, GitBranch } from 'lucide-react';

const prizes = [
  {
    rank: '1st',
    icon: Trophy,
    color: '#FFD700',
    rgb: '255, 215, 0',

    perks: [
      '🏆 Exclusive Winner Trophy',
      '🚀 HackerRank Infinity Plan (1 Year)',
      '🎯 Mock Interview Credits',
      '🤖 Access to 1500+ AI Tools',
      '📜 Certificate of Excellence'
    ],
  },
  {
    rank: '2nd',
    icon: Medal,
    color: '#C0C0C0',
    rgb: '192, 192, 192',
    perks: [
      '🏆 Exclusive Winner Trophy',
      '🚀 HackerRank Infinity Plan (1 Year)',
      '🎯 Mock Interview Credits',
      '🤖 Access to 1500+ AI Tools',
      '📜 Certificate of Excellence'
    ],
  },
  {
    rank: '3rd',
    icon: Award,
    color: '#CD7F32',
    rgb: '205, 127, 50',

    perks: [
      '🏆 Exclusive Winner Trophy',
      '🚀 HackerRank Infinity Plan (1 Year)',
      '🎯 Mock Interview Credits',
      '🤖 Access to 1500+ AI Tools',
      '📜 Certificate of Excellence'
    ],
  },
];



const Highlights = () => {
  return (
    <section id="highlights" className="py-28 relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#2EC866]/5 blur-[120px] rounded-full" />
      <div className="absolute -bottom-40 right-1/2 translate-x-1/2 w-[600px] h-[300px] bg-[#00B5B8]/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Header with HackerRank branding */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2EC866]/10 border border-[#2EC866]/20 mb-6">
            <Zap className="w-3.5 h-3.5 text-[#2EC866]" fill="currentColor" />
            <span className="text-[#2EC866] font-mono text-xs uppercase tracking-[0.2em]">Powered by HackerRank</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Event <span className="gradient-text">Highlights</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            PlaceX 2026 brings you the ultimate HackerRank-powered coding competition experience.
          </p>
        </motion.div>

        {/* Podium section with HackerRank perks-only */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {prizes.map((p, i) => {
            const Icon = p.icon;
            const order = [1, 0, 2][i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: order * 0.1 }}
                className="relative glass rounded-3xl p-8 border border-white/5 card-glow card-shine text-center"
                style={{
                  boxShadow: i === 0
                    ? `0 0 50px rgba(${p.rgb}, 0.15), 0 0 120px rgba(${p.rgb}, 0.04)`
                    : undefined,
                  borderColor: i === 0 ? `rgba(${p.rgb}, 0.3)` : undefined,
                }}
              >


                <div
                  className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 float-slow"
                  style={{ background: `rgba(${p.rgb}, 0.1)`, border: `2px solid rgba(${p.rgb}, 0.3)` }}
                >
                  <Icon className="w-10 h-10" style={{ color: p.color }} />
                </div>

                <div className="text-5xl font-black font-mono mb-2" style={{ color: p.color }}>{p.rank}</div>
                <h3 className="text-white text-xl font-bold mb-5">{p.title}</h3>

                <ul className="space-y-2.5 text-left">
                  {p.perks.map((perk, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: p.color }} />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>


              </motion.div>
            );
          })}
        </div>

        {/* Participation Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 mb-20"
        >
          <div className="inline-block glass px-8 py-4 rounded-2xl border border-[#2EC866]/20 bg-[#2EC866]/5 shadow-[0_0_30px_rgba(46,200,102,0.05)]">
            <p className="text-white font-medium flex items-center justify-center gap-3">
              <span className="text-2xl">✨</span>
              All participants will receive a <span className="text-[#2EC866] font-bold">Certificate of Participation</span>
              <span className="text-2xl">✨</span>
            </p>
          </div>
        </motion.div>




      </div>
    </section>
  );
};

export default Highlights;