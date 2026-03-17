import SectionReveal from '../components/SectionReveal';

const contactLinks = [
  { icon: '✉️', label: 'Email', href: 'mailto:nancyjha24@gmail.com', text: 'nancyjha24@gmail.com' },
  { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/in/nancy-9b3688220', text: 'linkedin.com/in/nancy' },
  { icon: '🐙', label: 'GitHub', href: 'https://github.com/ncyj823', text: 'ncyj823' },
  { icon: '📱', label: 'Phone', href: 'tel:+916206670012', text: '+91 6206670012' },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24" aria-labelledby="contact-title">
      <SectionReveal>
        <div
          className="relative bg-[rgba(124,58,237,0.06)] border border-[rgba(167,139,250,0.18)] rounded-3xl px-6 py-16 text-center overflow-hidden"
          style={{ animation: 'floatY 7s ease-in-out infinite' }}
        >
          {/* Glow overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.14), transparent 70%)' }}
            aria-hidden="true"
          />
          {/* Top glow bar */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(167,139,250,0.4)] to-transparent" aria-hidden="true" />

          <div className="text-[10px] tracking-[3px] uppercase text-purple mb-4 flex items-center justify-center gap-3 relative z-10">
            <span className="inline-block w-5 h-px bg-purple" aria-hidden="true" />
            Let's connect
          </div>

          <h2
            id="contact-title"
            className="font-syne font-black tracking-tight text-white relative z-10 mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            Ready to build<br />something great?
          </h2>
          <p className="text-[rgba(232,234,246,0.45)] text-base font-dm font-light mb-10 max-w-md mx-auto relative z-10">
            Open to internships, collaborations, research, or just a great conversation about AI.
          </p>

          <div className="flex flex-wrap gap-3 justify-center relative z-10" role="list" aria-label="Contact options">
            {contactLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                role="listitem"
                aria-label={`Contact via ${l.label}: ${l.text}`}
                className="flex items-center gap-2 text-sm text-[rgba(232,234,246,0.6)] font-dm border border-[rgba(255,255,255,0.1)] px-5 py-2.5 rounded-full hover:text-purple hover:border-[rgba(167,139,250,0.4)] hover:-translate-y-1 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-purple-500"
              >
                <span aria-hidden="true">{l.icon}</span>
                {l.text}
              </a>
            ))}
          </div>
        </div>
      </SectionReveal>

      <footer className="text-center mt-16 text-[rgba(232,234,246,0.18)] text-xs tracking-wide border-t border-[rgba(167,139,250,0.07)] pt-8 font-dm">
        Nancy · KIIT University CSE · Built with gravity-defying code 🚀
      </footer>
    </section>
  );
}
