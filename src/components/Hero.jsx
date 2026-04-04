import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ChevronDown, Sparkles } from 'lucide-react';

/* ─── Particle canvas with HackerRank colors ─── */
const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    const W = () => canvas.width;
    const H = () => canvas.height;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W();
        this.y = Math.random() * H();
        this.r = Math.random() * 1.5 + 0.3;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.alpha = Math.random() * 0.5 + 0.1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(46,200,102,${this.alpha})`;
        ctx.fill();
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > W() || this.y < 0 || this.y > H()) this.reset();
      }
    }

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(46,200,102,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    for (let i = 0; i < 90; i++) particles.push(new Particle());

    const loop = () => {
      ctx.clearRect(0, 0, W(), H());
      particles.forEach(p => p.draw());
      drawLines();
      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />;
};

/* ─── Typewriter ─── */
const useTypewriter = (words, speed = 100, pause = 2000) => {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDel] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const current = words[index];
    let timer;
    if (!deleting) {
      if (sub < current.length) {
        timer = setTimeout(() => { setText(current.slice(0, sub + 1)); setSub(s => s + 1); }, speed);
      } else {
        timer = setTimeout(() => setDel(true), pause);
      }
    } else {
      if (sub > 0) {
        timer = setTimeout(() => { setText(current.slice(0, sub - 1)); setSub(s => s - 1); }, speed / 2);
      } else {
        setDel(false);
        setIndex(i => (i + 1) % words.length);
      }
    }
    return () => clearTimeout(timer);
  }, [sub, deleting, index, words, speed, pause]);

  return text;
};

/* ─── Hero with Modern Split Text Animation ─── */
const TAGLINES = [
  'Experience Real Placement Process',
  'Code. Debug. Conquer.',
  'Where Champions are Made.',
  'Test Your Industry Readiness.',
];

const Hero = () => {
  const typed = useTypewriter(TAGLINES, 85, 2200);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-dark-bg scanlines">
      <ParticleCanvas />

      {/* Radial blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#2EC866]/6 rounded-full blur-[130px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00B5B8]/6 rounded-full blur-[130px] -z-10" />

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10 py-16">

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          whileHover={{ scale: 1.05, translateY: -2 }}
          className="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#2EC866]/20 bg-[#2EC866]/5 backdrop-blur-md mb-8 group cursor-default overflow-hidden"
        >
          {/* Internal Shimmer Effect */}
          <motion.div
            className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-[#2EC866]/10 to-transparent -z-10"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          />



          <span className="text-[#2EC866] text-[9px] sm:text-xs font-bold font-mono uppercase tracking-[0.15em] sm:tracking-[0.25em] relative z-10 text-center px-2">
            DY Patil College of Engineering and Technology, Kolhapur
          </span>

          <div className="absolute inset-0 rounded-full border border-[#2EC866]/0 group-hover:border-[#2EC866]/40 transition-colors duration-300 -z-10" />
        </motion.div>

        {/* Presenter Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-gray-400 text-[9px] sm:text-xs font-bold font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] bg-white/5 px-4 py-2 rounded-full border border-white/10 whitespace-nowrap">
            HackerRank Campus Crew DYPCET Presents
          </span>
        </motion.div>

        {/* Modern Split Text Animation */}
        <div className="overflow-visible">
          <motion.h1
            className="relative"
            initial="hidden"
            animate="visible"
          >
            {/* Glow background effect */}
            <motion.div
              className="absolute inset-0 blur-3xl bg-gradient-to-r from-[#2EC866]/20 via-[#00B5B8]/20 to-[#2EC866]/20 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />

            <div className="relative flex flex-col items-center justify-center">
              {/* "PlaceX" with modern stacking effect */}
              <div className="flex flex-row items-center justify-center gap-2 sm:gap-4">
                {/* "PLACE" with slide-up animation */}
                <motion.div
                  className="relative"
                  variants={{
                    hidden: { y: 100, opacity: 0, filter: "blur(20px)" },
                    visible: {
                      y: 0,
                      opacity: 1,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                      }
                    }
                  }}
                >
                  <span className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent tracking-tighter">
                    PLACE
                  </span>
                </motion.div>

                {/* "X" with morphing animation */}
                <motion.div
                  className="relative"
                  variants={{
                    hidden: { scale: 0, rotate: -180, opacity: 0 },
                    visible: {
                      scale: 1,
                      rotate: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.3,
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        duration: 0.8
                      }
                    }
                  }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <motion.span
                    className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-[#2EC866] to-[#00B5B8] bg-clip-text text-transparent tracking-tighter"
                    animate={{
                      textShadow: isHovered
                        ? "0 0 30px rgba(46,200,102,0.8), 0 0 60px rgba(46,200,102,0.4)"
                        : "0 0 0px rgba(46,200,102,0)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    X
                  </motion.span>

                  {/* Orbiting particles around X */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#2EC866] rounded-full"
                        style={{
                          top: "50%",
                          left: "50%",
                          x: -2,
                          y: -2,
                        }}
                        animate={{
                          x: [0, Math.cos(i * 120 * Math.PI / 180) * 40, 0],
                          y: [0, Math.sin(i * 120 * Math.PI / 180) * 40, 0],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                          delay: i * 1,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              </div>

              {/* Animated underline with gradient sweep */}
              <motion.div
                className="h-[3px] bg-gradient-to-r from-transparent via-[#2EC866] to-transparent mt-4 sm:mt-6"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "80%", opacity: 1 }}
                transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
              />
            </div>
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-base sm:text-lg md:text-xl font-mono text-[#2EC866] uppercase tracking-[0.15em] sm:tracking-[0.4em] mt-8 text-glow-sm relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1/3 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-[#2EC866]/50 after:to-transparent"
        >
          TECHNOTSAV 2026
        </motion.p>


        {/* Typewriter subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-8 h-16 flex items-center justify-center"
        >
          <p className="text-lg sm:text-2xl text-gray-300 font-light px-4">
            {typed}<span className="cursor text-[#2EC866]">|</span>
          </p>
        </motion.div>

        {/* Tagline with scale animation */}
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-gray-500 text-base mt-2 font-mono tracking-wide"
        >
          National Hiring Simulation Challenge — April 16, 2026 | Registration Fee: ₹100
        </motion.p>

        {/* CTA Buttons - Simplified for robustness */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            href="https://bit.ly/PlaceX2026"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 bg-[#2EC866] text-black font-black text-base rounded-2xl pulse-glow uppercase tracking-widest overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Zap className="w-4 h-4" fill="currentColor" />
              Register Now
            </span>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            href="#details"
            className="px-10 py-4 glass text-white font-bold text-base rounded-2xl border border-white/10 hover:border-[#2EC866]/40 hover:text-[#2EC866] transition-all duration-300 uppercase tracking-widest"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Event
          </motion.a>
        </div>

        {/* Scroll hint with pulse animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-14 flex flex-col items-center gap-2"
        >
          <motion.span
            className="text-gray-600 text-xs font-mono uppercase tracking-widest"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Scroll to explore
          </motion.span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-[#2EC866]/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;