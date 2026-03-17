import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled
      ? 'backdrop-blur-xl bg-[rgba(4,8,15,0.75)] border-b border-[rgba(167,139,250,0.12)]'
      : 'bg-transparent'
  }`;

  return (
    <nav className={navClass} aria-label="Main navigation">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#hero" className="font-syne font-black text-lg grad-text focus-visible:outline-purple-500">
          Nancy.dev
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none" role="list">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[rgba(232,234,246,0.5)] text-sm font-dm hover:text-purple transition-colors duration-300 focus-visible:text-purple"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CV Download */}
        <a
          href="/cv.pdf"
          download="Nancy_CV.pdf"
          className="hidden md:flex items-center gap-2 text-sm font-dm font-medium text-white bg-gradient-to-r from-[#7c3aed] to-[#2563eb] px-4 py-2 rounded-full hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-purple-500"
          aria-label="Download CV"
        >
          <span>⬇</span> Download CV
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[rgba(232,234,246,0.7)] text-2xl focus-visible:outline-2 focus-visible:outline-purple-500"
          onClick={() => setMobileOpen(v => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden backdrop-blur-xl bg-[rgba(4,8,15,0.92)] border-t border-[rgba(167,139,250,0.12)] px-6 pb-6"
          >
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-[rgba(232,234,246,0.6)] text-base hover:text-purple transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/cv.pdf"
              download="Nancy_CV.pdf"
              className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-white bg-gradient-to-r from-[#7c3aed] to-[#2563eb] px-5 py-2.5 rounded-full"
            >
              ⬇ Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
