import SectionReveal from '../components/SectionReveal';
import { motion } from 'framer-motion';

const stats = [
  { num: '8.05', label: 'CGPA / 10' },
  { num: '19th', label: 'of 526 teams · SIH 2025' },
  { num: '3+', label: 'AI / ML Projects' },
  { num: '4+', label: 'Clubs & Communities' },
];

const chips = [
  { icon: '✉️', text: 'nancyjha24@gmail.com', href: 'mailto:nancyjha24@gmail.com' },
  { icon: '📱', text: '+91 6206670012', href: 'tel:+916206670012' },
  { icon: '💼', text: 'linkedin.com/in/nancy-9b3688220', href: 'https://linkedin.com/in/nancy-9b3688220' },
  { icon: '🐙', text: 'github.com/ncyj823', href: 'https://github.com/ncyj823' },
  { icon: '📍', text: 'Bhubaneswar, Odisha', href: null },
];

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24" aria-labelledby="about-title">
      <SectionReveal>
        <div className="text-[10px] tracking-[3px] uppercase text-purple mb-3 flex items-center gap-3">
          <span className="inline-block w-5 h-px bg-purple" />
          Who I am
        </div>
        <h2 id="about-title" className="font-syne font-black tracking-tight text-white mb-12" style={{ fontSize: 'clamp(2rem,4vw,2.8rem)' }}>
          About Me
        </h2>
      </SectionReveal>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left — bio + chips */}
        <SectionReveal delay={0.1}>
          <p className="text-[rgba(232,234,246,0.6)] text-[0.97rem] font-dm font-light leading-8 mb-8">
            I'm a <strong className="text-[rgba(232,234,246,0.9)] font-medium">Computer Science &amp; Engineering undergraduate at KIIT University</strong> (CGPA: 8.05/10)
            with hands-on experience in <strong className="text-[rgba(232,234,246,0.9)] font-medium">AI, machine learning, and full-stack development</strong>.<br /><br />
            I've built an end-to-end AI video generation pipeline using <strong className="text-[rgba(232,234,246,0.9)] font-medium">LLMs, Stable Diffusion XL, RAG, and cloud GPU acceleration</strong>,
            developed a GPT-powered chatbot, and created a breast cancer classifier using scikit-learn.<br /><br />
            Active member of <strong className="text-[rgba(232,234,246,0.9)] font-medium">MLSA, AWS Cloud Club, and KIIT Robotics Society</strong> — I love solving real-world problems with practical AI.
          </p>

          <div className="flex flex-col gap-3" role="list" aria-label="Contact information">
            {chips.map((c) => (
              c.href ? (
                <a
                  key={c.text}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  role="listitem"
                  className="flex items-center gap-3 text-sm text-[rgba(232,234,246,0.55)] px-4 py-3 rounded-xl border border-[rgba(167,139,250,0.12)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(167,139,250,0.35)] hover:text-purple transition-all duration-200 group"
                >
                  <span className="text-base w-5 text-center">{c.icon}</span>
                  <span className="group-hover:text-purple transition-colors">{c.text}</span>
                </a>
              ) : (
                <div
                  key={c.text}
                  role="listitem"
                  className="flex items-center gap-3 text-sm text-[rgba(232,234,246,0.55)] px-4 py-3 rounded-xl border border-[rgba(167,139,250,0.12)] bg-[rgba(255,255,255,0.02)]"
                >
                  <span className="text-base w-5 text-center">{c.icon}</span>
                  {c.text}
                </div>
              )
            ))}
          </div>
        </SectionReveal>

        {/* Right — stat cards */}
        <SectionReveal delay={0.2}>
          <div className="grid grid-cols-2 gap-4" role="list" aria-label="Key statistics">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                role="listitem"
                className="bg-[rgba(167,139,250,0.05)] border border-[rgba(167,139,250,0.12)] rounded-2xl p-6 hover:border-[rgba(167,139,250,0.4)] hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 cursor-default"
                style={{ animation: `floatY ${6 + i * 1.5}s ease-in-out infinite`, animationDelay: `${-i * 1.5}s` }}
                aria-label={`${s.num} ${s.label}`}
              >
                <div className="font-syne font-black text-3xl grad-text mb-1">{s.num}</div>
                <div className="text-[11px] text-[rgba(232,234,246,0.35)] font-dm leading-snug">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
