import { Suspense, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { OrbitalPlanet } from '../components/SpaceCanvas';

const badges = ['LLMs & RAG', 'Stable Diffusion XL', 'React.js', 'scikit-learn', 'MLSA · AWS Cloud Club'];

export default function Hero({ mouseNDC }) {
  const heroRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!heroRef.current) return;
      const el = document.getElementById('cursor-orb');
      if (el) { el.style.left = e.clientX + 'px'; el.style.top = e.clientY + 'px'; }
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <div
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Cursor glow orb */}
      <div
        id="cursor-orb"
        className="fixed w-72 h-72 rounded-full pointer-events-none z-10"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.07s, top 0.07s',
        }}
        aria-hidden="true"
      />

      {/* 3D Planet Canvas — hero centerpiece */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 1.5]}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <OrbitalPlanet />
          </Suspense>
        </Canvas>
      </div>

      {/* Radial glow behind hero text */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(124,58,237,0.12), transparent)' }}
        aria-hidden="true"
      />

      {/* Hero content */}
      <motion.div
        className="relative z-20 max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Float badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="inline-block mb-6"
        >
          <span
            className="inline-flex items-center gap-2 bg-[rgba(167,139,250,0.1)] border border-[rgba(167,139,250,0.3)] text-purple text-xs tracking-[2px] uppercase px-5 py-2 rounded-full"
            style={{ animation: 'floatY 3.5s ease-in-out infinite' }}
          >
            ⚡ Open to opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.23, 1.23, 0.68, 1] }}
          className="font-syne font-black leading-none tracking-[-4px] mb-2 text-white"
          style={{ fontSize: 'clamp(4rem, 11vw, 8rem)' }}
        >
          NANCY
        </motion.h1>

        {/* Role */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="block grad-text-tri font-syne font-semibold mb-5"
          style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)' }}
          aria-label="CSE Sophomore at KIIT! 🎓"
        >
          CSE Sophomore at KIIT! 🎓
        </motion.span>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          className="text-[rgba(232,234,246,0.5)] text-base font-dm font-light max-w-xl mx-auto mb-6 leading-relaxed"
        >
          CS undergraduate at KIIT University building AI pipelines, ML models, and full-stack applications.
          Ranked <strong className="text-[rgba(232,234,246,0.8)] font-medium">19th of 526 teams</strong> at Internal Smart India Hackathon 2025.
        </motion.p>

        {/* Skill badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap gap-2 justify-center mb-8"
          aria-label="Key skills"
        >
          {badges.map((b) => (
            <span
              key={b}
              className="text-xs px-3 py-1.5 rounded-full border border-[rgba(56,189,248,0.25)] text-cyan bg-[rgba(56,189,248,0.06)] tracking-wide font-dm"
            >
              {b}
            </span>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.8 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white font-dm font-medium px-8 py-3.5 rounded-full text-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-purple-500"
            aria-label="View my projects"
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent text-purple border border-[rgba(167,139,250,0.4)] font-dm font-medium px-8 py-3.5 rounded-full text-sm hover:bg-[rgba(167,139,250,0.1)] hover:-translate-y-1 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-purple-500"
            aria-label="Get in touch with me"
          >
            Get in touch
          </button>
          <a
            href="/cv.pdf"
            download="Nancy_CV.pdf"
            className="bg-transparent text-[rgba(232,234,246,0.6)] border border-[rgba(255,255,255,0.12)] font-dm font-medium px-8 py-3.5 rounded-full text-sm hover:text-white hover:border-[rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-purple-500 inline-flex items-center gap-2"
            aria-label="Download CV"
          >
            ⬇ CV
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-[3px] uppercase text-[rgba(232,234,246,0.25)]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-purple to-transparent opacity-40" style={{ animation: 'floatY 2s ease-in-out infinite' }} />
      </motion.div>
    </div>
  );
}
