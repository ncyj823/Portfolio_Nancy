import { useEffect, useRef } from 'react';
import SectionReveal from '../components/SectionReveal';

const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', pct: 92 },
      { name: 'C++', pct: 80 },
      { name: 'Java', pct: 75 },
      { name: 'JavaScript', pct: 88 },
      { name: 'TypeScript', pct: 85 },
      { name: 'SQL', pct: 78 },
    ],
  },
  {
    title: 'Agentic AI',
    skills: [
      { name: 'LangGraph', pct: 90 },
      { name: 'FastMCP', pct: 88 },
      { name: 'MCP', pct: 88 },
      { name: 'Multi-Agent Systems', pct: 85 },
      { name: 'RAG', pct: 87 },
      { name: 'LLMs', pct: 90 },
      { name: 'Tool Calling', pct: 88 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'FastAPI', pct: 90 },
      { name: 'Node.js', pct: 85 },
      { name: 'REST APIs', pct: 90 },
      { name: 'Redis', pct: 82 },
      { name: 'Docker', pct: 80 },
      { name: 'JWT', pct: 85 },
      { name: 'Supabase', pct: 82 },
      { name: 'Firebase', pct: 78 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', pct: 88 },
      { name: 'Next.js', pct: 82 },
      { name: 'TypeScript', pct: 85 },
      { name: 'HTML', pct: 90 },
      { name: 'CSS', pct: 88 },
    ],
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'PyTorch', pct: 82 },
      { name: 'scikit-learn', pct: 88 },
      { name: 'NumPy', pct: 88 },
      { name: 'Pandas', pct: 88 },
      { name: 'Qdrant', pct: 78 },
      { name: 'LangSmith', pct: 80 },
      { name: 'Stable Diffusion XL', pct: 80 },
      { name: 'Gemini API', pct: 85 },
      { name: 'Groq API', pct: 82 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', pct: 90 },
      { name: 'GitHub', pct: 90 },
      { name: 'Linux', pct: 82 },
      { name: 'Modal', pct: 78 },
      { name: 'Vercel', pct: 85 },
      { name: 'Render', pct: 82 },
      { name: 'Jupyter', pct: 88 },
    ],
  },
];

function SkillBar({ skill, groupIdx, skillIdx }) {
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && barRef.current) {
          barRef.current.style.width = `${skill.pct}%`;
          barRef.current.style.transition = `width 1.4s cubic-bezier(0.23, 1.23, 0.68, 1) ${(groupIdx + skillIdx) * 0.08}s`;
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current.parentElement);
    return () => observer.disconnect();
  }, [skill.pct, groupIdx, skillIdx]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-[rgba(232,234,246,0.8)] font-dm">{skill.name}</span>
        <span className="text-xs text-[rgba(232,234,246,0.3)] font-dm">{skill.pct}%</span>
      </div>
      <div className="h-0.5 bg-[rgba(255,255,255,0.06)] rounded overflow-hidden" role="progressbar" aria-valuenow={skill.pct} aria-valuemin={0} aria-valuemax={100} aria-label={`${skill.name}: ${skill.pct}%`}>
        <div
          ref={barRef}
          className="h-full rounded bg-gradient-to-r from-[#7c3aed] to-cyan"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24" aria-labelledby="skills-title">
      <SectionReveal>
        <div className="text-[10px] tracking-[3px] uppercase text-purple mb-3 flex items-center gap-3">
          <span className="inline-block w-5 h-px bg-purple" />
          My toolbox
        </div>
        <h2 id="skills-title" className="font-syne font-black tracking-tight text-white mb-10" style={{ fontSize: 'clamp(2rem,4vw,2.8rem)' }}>
          Skills
        </h2>
      </SectionReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, gi) => (
          <SectionReveal key={group.title} delay={gi * 0.1}>
            <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(167,139,250,0.1)] rounded-2xl p-6 h-full">
              <div className="font-syne font-bold text-xs tracking-[1.5px] uppercase text-purple mb-5">{group.title}</div>
              {group.skills.map((s, si) => (
                <SkillBar key={s.name} skill={s} groupIdx={gi} skillIdx={si} />
              ))}
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
