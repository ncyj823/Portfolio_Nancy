import SectionReveal from '../components/SectionReveal';

const experiences = [
  {
    title: 'AI Product Engineering Apprentice · ActTrident',
    subtitle: 'Remote, UK · Sept 2026 – Present',
    bullets: [
      <>Built <strong className="text-white font-medium">stateful AI agent workflows and LLM orchestration pipelines</strong> for cybersecurity solutions using FastAPI REST APIs.</>,
      <>Developed <strong className="text-white font-medium">backend microservices and async pipelines</strong> powering real-time threat detection and response.</>,
      <>Implemented <strong className="text-white font-medium">threat modeling, CI/CD, and least-privilege controls</strong> across the engineering stack.</>,
    ],
  },
  {
    title: 'AI/ML Project Contributor · MLSA KIIT',
    subtitle: '2025',
    bullets: [
      <>Built <strong className="text-white font-medium">Forgetube</strong>, a 5-stage distributed LLM text-to-video pipeline with <strong className="text-white font-medium">RAG grounding</strong> for context-aware content creation.</>,
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-24" aria-labelledby="exp-title">
      <SectionReveal>
        <div className="text-[10px] tracking-[3px] uppercase text-purple mb-3 flex items-center gap-3">
          <span className="inline-block w-5 h-px bg-purple" />
          What I've done
        </div>
        <h2 id="exp-title" className="font-syne font-black tracking-tight text-white mb-10" style={{ fontSize: 'clamp(2rem,4vw,2.8rem)' }}>
          Experience
        </h2>
      </SectionReveal>

      <div className="flex flex-col gap-6">
        {experiences.map((exp, idx) => (
          <SectionReveal key={idx} delay={0.15 * idx}>
            <div
              className="relative bg-[rgba(255,255,255,0.025)] border border-[rgba(167,139,250,0.12)] rounded-2xl p-8 overflow-hidden hover:border-[rgba(167,139,250,0.3)] transition-colors duration-300"
              role="article"
              aria-label={`${exp.title} experience`}
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple to-cyan rounded-l-2xl" aria-hidden="true" />

              {/* Glow top */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(167,139,250,0.3)] to-transparent" aria-hidden="true" />

              <div className="font-syne font-bold text-lg text-white mb-1">
                {exp.title}
              </div>
              <div className="text-[11px] text-purple tracking-wider mb-6 font-dm">
                {exp.subtitle}
              </div>

              <ul className="flex flex-col gap-4 list-none" aria-label="Experience highlights">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex gap-4 text-sm text-[rgba(232,234,246,0.6)] font-dm font-light leading-7">
                    <span className="text-purple text-xs mt-1 flex-shrink-0 font-medium">→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
