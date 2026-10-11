import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProjectGrid } from './components/ProjectGrid';
import { Skills } from './components/Skills';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVViewerModal } from './components/CVViewerModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [cvModalOpen, setCvModalOpen] = useState(false);

  useEffect(() => {
    const sections = ['hero', 'about', 'work', 'skills', 'experience', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F5F5] font-sans antialiased selection:bg-[#B8FF65] selection:text-[#08090B]">
      {/* Fixed Luxury Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Page Flow */}
      <main>
        <Hero onOpenCVModal={() => setCvModalOpen(true)} />
        <About />
        <ProjectGrid />
        <Skills />
        <ExperienceTimeline />
        <Education />
        <Contact />
      </main>

      {/* Editorial Minimal Footer */}
      <Footer />

      {/* Dedicated CV Modal */}
      <CVViewerModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
}
