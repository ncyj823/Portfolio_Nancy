import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import SectionReveal from '../components/SectionReveal';

const projects = [
  {
    icon: '🔍',
    title: 'Reviewly',
    desc: 'Multi-agent PR reviewer — custom FastMCP server with 4 GitHub tools, parallel async Security/Code Quality/Test Coverage agents, Redis dedup + RQ webhooks.',
    tags: [
      { label: 'FastMCP', color: 'pu' },
      { label: 'LangGraph', color: 'pu' },
      { label: 'FastAPI', color: 'bl' },
      { label: 'Redis', color: 'gr' },
      { label: 'Docker', color: 'gr' },
    ],
    github: 'https://github.com/ncyj823/Reviewly',
  },
  {
    icon: '🎬',
    title: 'HRFilms',
    desc: 'Full-stack cinema booking platform with real-time seat locking, Row-Level Security, JWT auth, and 12+ edge cases resolved.',
    tags: [
      { label: 'React', color: 'bl' },
      { label: 'TypeScript', color: 'bl' },
      { label: 'Supabase', color: 'pu' },
      { label: 'Node.js', color: 'gr' },
    ],
  },
  {
    icon: '💰',
    title: 'RecoverAI',
    desc: 'Multi-agent Razorpay payment recovery system powered by LangGraph, MCP tool-calling, Redis caching, and Docker deployment.',
    tags: [
      { label: 'LangGraph', color: 'pu' },
      { label: 'MCP', color: 'pu' },
      { label: 'Redis', color: 'gr' },
      { label: 'Docker', color: 'gr' },
    ],
    live: 'https://recover-ai-svnk.onrender.com',
    github: 'https://github.com/ncyj823/Recover-AI',
  },
  {
    icon: '🎞️',
    title: 'Forgetube',
    desc: 'Text-to-video pipeline converting prompts into fully narrated videos using LLMs, Stable Diffusion XL, TTS, RAG grounding, and Modal GPU acceleration.',
    tags: [
      { label: 'LLMs', color: 'pu' },
      { label: 'SDXL', color: 'pu' },
      { label: 'TTS', color: 'bl' },
      { label: 'RAG', color: 'bl' },
      { label: 'Modal', color: 'gr' },
    ],
  },
  {
    icon: '🩺',
    title: 'Breast Cancer Classification',
    desc: 'ML model classifying tumors as malignant or benign using the Wisconsin Breast Cancer Diagnostic dataset.',
    tags: [
      { label: 'Python', color: 'bl' },
      { label: 'scikit-learn', color: 'gr' },
      { label: 'NumPy', color: 'bl' },
      { label: 'Pandas', color: 'bl' },
    ],
  },
];

const tagStyles = {
  pu: 'bg-[rgba(167,139,250,0.08)] border-[rgba(167,139,250,0.2)] text-purple',
  bl: 'bg-[rgba(56,189,248,0.08)] border-[rgba(56,189,248,0.2)] text-cyan',
  gr: 'bg-[rgba(52,211,153,0.08)] border-[rgba(52,211,153,0.2)] text-mint',
};

function TiltCard({ project }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouse = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const resetTilt = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseLeave={resetTilt}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.23, 1.23, 0.68, 1] }}
      whileHover={{ scale: 1.02 }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
      className="relative bg-[rgba(255,255,255,0.025)] border border-[rgba(167,139,250,0.1)] rounded-2xl p-7 cursor-pointer overflow-hidden hover:border-[rgba(167,139,250,0.35)] hover:shadow-[0_24px_60px_rgba(124,58,237,0.2)] transition-[border-color,box-shadow] duration-300 group flex flex-col"
      role="article"
      aria-label={`Project: ${project.title}`}
      tabIndex={0}
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7c3aed] via-cyan to-mint opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />

      {/* Inner glow */}
      <div className="absolute inset-0 rounded-2xl bg-[rgba(124,58,237,0.04)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />

      <span
        className="block text-3xl mb-4 relative z-10"
        style={{ animation: 'floatY 5s ease-in-out infinite' }}
        aria-hidden="true"
      >
        {project.icon}
      </span>
      <h3 className="font-syne font-bold text-lg text-white mb-3 relative z-10">{project.title}</h3>
      <p className="text-[rgba(232,234,246,0.45)] text-sm font-dm font-light leading-7 mb-5 relative z-10 flex-grow">{project.desc}</p>
      <div className="flex flex-wrap gap-2 relative z-10 mb-4" aria-label="Technologies used">
        {project.tags.map(t => (
          <span key={t.label} className={`text-[11px] px-2.5 py-1 rounded-full border font-medium font-dm ${tagStyles[t.color]}`}>
            {t.label}
          </span>
        ))}
      </div>

      {/* Link buttons */}
      {(project.live || project.github) && (
        <div className="flex flex-wrap gap-2 relative z-10">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] px-3 py-1.5 rounded-full border border-[rgba(167,139,250,0.3)] text-purple font-dm font-medium hover:bg-[rgba(167,139,250,0.1)] transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              ↗ Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] px-3 py-1.5 rounded-full border border-[rgba(255,255,255,0.12)] text-[rgba(232,234,246,0.6)] font-dm font-medium hover:text-white hover:border-[rgba(255,255,255,0.3)] transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              ↗ GitHub
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24" aria-labelledby="projects-title">
      <SectionReveal>
        <div className="text-[10px] tracking-[3px] uppercase text-purple mb-3 flex items-center gap-3">
          <span className="inline-block w-5 h-px bg-purple" />
          What I've built
        </div>
        <h2 id="projects-title" className="font-syne font-black tracking-tight text-white mb-10" style={{ fontSize: 'clamp(2rem,4vw,2.8rem)' }}>
          Projects
        </h2>
      </SectionReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
        {projects.map((p) => (
          <TiltCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
