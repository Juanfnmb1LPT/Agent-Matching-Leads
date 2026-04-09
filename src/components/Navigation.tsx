import React, { useState, useEffect } from 'react';
import { Button } from './shared/Button';

interface NavigationProps {
  onFindSpecialist: () => void;
}

const NAV_SECTIONS = ['home', 'how-it-works'] as const;
type Section = (typeof NAV_SECTIONS)[number];

const labels: Record<Section, string> = {
  home: 'Home',
  'how-it-works': 'How It Works',
};

export const Navigation: React.FC<NavigationProps> = ({ onFindSpecialist }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>('home');

  useEffect(() => {
    const els = NAV_SECTIONS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as Section);
          }
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: Section) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const linkClass = (id: Section) => {
    const base = 'font-headline text-lg tracking-tight pb-1 transition-colors duration-300 cursor-pointer';
    return id === activeSection
      ? `${base} text-[#004e36] dark:text-[#9ff4cd] border-b-2 border-[#004e36]`
      : `${base} text-[#1a1c1e]/60 dark:text-[#f9f9fc]/60 hover:text-[#004e36] dark:hover:text-[#9ff4cd] border-b-2 border-transparent`;
  };

  const mobileLinkClass = (id: Section) => {
    const base = 'font-headline text-base tracking-tight py-2 cursor-pointer';
    return id === activeSection
      ? `${base} text-[#004e36] dark:text-[#9ff4cd]`
      : `${base} text-[#1a1c1e]/60 dark:text-[#f9f9fc]/60`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f9f9fc]/80 dark:bg-[#1a1c1e]/80 backdrop-blur-md">
      <div className="flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6 max-w-[1440px] mx-auto">
        <div className="font-headline font-bold text-lg sm:text-xl tracking-tighter text-[#1a1c1e] dark:text-[#f9f9fc]">
          Find My Agent
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          {NAV_SECTIONS.map((id) => (
            <button key={id} onClick={() => scrollTo(id)} className={linkClass(id)}>
              {labels[id]}
            </button>
          ))}
        </div>
        <div className="hidden md:block">
          <Button variant="primary" size="sm" onClick={onFindSpecialist}>
            Find My Specialist
          </Button>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#1a1c1e] dark:text-[#f9f9fc] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>
      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#f9f9fc]/95 dark:bg-[#1a1c1e]/95 backdrop-blur-md border-t border-outline-variant/20 px-4 pb-6">
          <div className="flex flex-col gap-4 pt-4">
            {NAV_SECTIONS.map((id) => (
              <button key={id} onClick={() => scrollTo(id)} className={mobileLinkClass(id) + ' text-left'}>
                {labels[id]}
              </button>
            ))}
            <div className="pt-2">
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  setMenuOpen(false);
                  onFindSpecialist();
                }}
                className="w-full"
              >
                Find My Specialist
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
