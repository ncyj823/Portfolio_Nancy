import SectionReveal from '../components/SectionReveal';

const bullets = [
  <>Developed an <strong className="text-white font-medium">end-to-end AI-powered automated video generation system</strong> that converts text prompts into fully narrated videos using large language models and diffusion-based image generation.</>,
  <>Designed a modular pipeline for <strong className="text-white font-medium">script generation, visual creation, audio narration, subtitle integration, and final video assembly</strong> using Python, PyTorch, Stable Diffusion XL, and MoviePy.</>,
  <>Implemented <strong className="text-white font-medium">cloud-based GPU acceleration with Modal</strong> and retrieval-augmented generation (RAG) for context-aware content creation.</>,
  <>System supports style customization, multi-modal consistency, and flexible video formats for <strong className="text-white font-medium">scalable content generation</strong>.</>,
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

      <SectionReveal delay={0.15}>
        <div
          className="relative bg-[rgba(255,255,255,0.025)] border border-[rgba(167,139,250,0.12)] rounded-2xl p-8 overflow-hidden hover:border-[rgba(167,139,250,0.3)] transition-colors duration-300"
          role="article"
          aria-label="Forgetube experience"
        >
          {/* Left accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple to-cyan rounded-l-2xl" aria-hidden="true" />

          {/* Glow top */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(167,139,250,0.3)] to-transparent" aria-hidden="true" />

          <div className="font-syne font-bold text-lg text-white mb-1">
            Forgetube · MLSA Student Society, KIIT DU
          </div>
          <div className="text-[11px] text-purple tracking-wider mb-6 font-dm">
            AI / ML Engineering · Project Wing '25
          </div>

          <ul className="flex flex-col gap-4 list-none" aria-label="Experience highlights">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-4 text-sm text-[rgba(232,234,246,0.6)] font-dm font-light leading-7">
                <span className="text-purple text-xs mt-1 flex-shrink-0 font-medium">→</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionReveal>
    </section>
  );
}
