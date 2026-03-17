import SectionReveal from '../components/SectionReveal';
import { motion } from 'framer-motion';

const positions = [
  'Anchor — Kalliope, KIIT Anchoring Society',
  'Member — KIIT Robotics Society',
  'Member — AWS Cloud Club KIIT',
  'MLSA Project Wing \'25',
];

const certs = [
  'Building Interactive Chatbot — Hack2skill Techcamp 2025',
  'MLSA Project Wing \'25',
  'AWS Cloud Club KIIT',
];

export default function Achievements() {
  return (
    <section id="achievements" className="max-w-5xl mx-auto px-6 py-24" aria-labelledby="achievements-title">
      <SectionReveal>
        <div className="text-[10px] tracking-[3px] uppercase text-purple mb-3 flex items-center gap-3">
          <span className="inline-block w-5 h-px bg-purple" />
          Beyond the code
        </div>
        <h2 id="achievements-title" className="font-syne font-black tracking-tight text-white mb-10" style={{ fontSize: 'clamp(2rem,4vw,2.8rem)' }}>
          Activities &amp; Achievements
        </h2>
      </SectionReveal>

      {/* Hero achievement badge */}
      <SectionReveal delay={0.05}>
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mb-10 bg-gradient-to-r from-[rgba(124,58,237,0.15)] to-[rgba(37,99,235,0.15)] border border-[rgba(167,139,250,0.3)] rounded-2xl px-8 py-6 relative overflow-hidden"
          style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}
          role="region"
          aria-label="Top achievement"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.12),transparent_60%)]" aria-hidden="true" />
          <span className="text-4xl relative z-10" aria-hidden="true">🏆</span>
          <div className="relative z-10 text-center sm:text-left">
            <div className="font-syne font-black text-2xl text-white leading-tight">
              19<sup>th</sup> <span className="text-[rgba(232,234,246,0.5)] text-lg font-dm font-light">out of</span> 526 teams
            </div>
            <div className="text-purple text-sm font-dm tracking-wide mt-0.5">Internal Smart India Hackathon 2025</div>
          </div>
        </motion.div>
      </SectionReveal>

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Positions of responsibility */}
        <SectionReveal delay={0.12}>
          <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(167,139,250,0.1)] rounded-2xl p-6 h-full">
            <div className="font-syne font-bold text-xs tracking-[1.5px] uppercase text-purple mb-5">
              Positions of Responsibility
            </div>
            <ul className="flex flex-col gap-3 list-none" role="list">
              {positions.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-[rgba(232,234,246,0.55)] font-dm leading-snug">
                  <span className="text-purple text-[10px] mt-1 flex-shrink-0" aria-hidden="true">✦</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </SectionReveal>

        {/* Certificates */}
        <SectionReveal delay={0.2}>
          <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(167,139,250,0.1)] rounded-2xl p-6 h-full">
            <div className="font-syne font-bold text-xs tracking-[1.5px] uppercase text-purple mb-5">
              Certificates &amp; Achievements
            </div>
            <ul className="flex flex-col gap-3 list-none" role="list">
              {certs.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-[rgba(232,234,246,0.55)] font-dm leading-snug">
                  <span className="text-purple text-[10px] mt-1 flex-shrink-0" aria-hidden="true">✦</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
