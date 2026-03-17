import { useRef } from 'react';
import SpaceCanvas from './components/SpaceCanvas';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

export default function App() {
  // Shared mouse NDC reference — updated by SpaceCanvas & Hero
  const mouseNDC = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    mouseNDC.current = {
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: -(e.clientY / window.innerHeight) * 2 + 1,
    };
  };

  return (
    <div onMouseMove={handleMouseMove} style={{ background: '#04080f', minHeight: '100vh' }}>
      {/* Fixed 3D star + particle background */}
      <SpaceCanvas mouseNDC={mouseNDC} />

      {/* All page content above the canvas */}
      <div className="page-content">
        <Nav />

        <main id="main-content">
          <Hero mouseNDC={mouseNDC} />

          {/* Divider */}
          <div className="max-w-5xl mx-auto px-6" aria-hidden="true">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(167,139,250,0.15)] to-transparent" />
          </div>

          <About />

          <div className="max-w-5xl mx-auto px-6" aria-hidden="true">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(167,139,250,0.15)] to-transparent" />
          </div>

          <Experience />

          <div className="max-w-5xl mx-auto px-6" aria-hidden="true">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(167,139,250,0.15)] to-transparent" />
          </div>

          <Projects />

          <div className="max-w-5xl mx-auto px-6" aria-hidden="true">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(167,139,250,0.15)] to-transparent" />
          </div>

          <Skills />

          <div className="max-w-5xl mx-auto px-6" aria-hidden="true">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(167,139,250,0.15)] to-transparent" />
          </div>

          <Achievements />

          <div className="max-w-5xl mx-auto px-6" aria-hidden="true">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(167,139,250,0.15)] to-transparent" />
          </div>

          <Contact />
        </main>
      </div>
    </div>
  );
}
