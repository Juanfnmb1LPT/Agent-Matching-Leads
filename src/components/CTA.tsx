import React from 'react';
import { Button } from './shared/Button';

interface CTAProps {
  onFindSpecialist: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onFindSpecialist }) => {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-8">
      <div className="max-w-[1200px] mx-auto bg-primary py-12 sm:py-16 md:py-24 px-6 sm:px-8 md:px-12 text-center rounded-sm relative overflow-hidden">
        <div className="relative z-10 space-y-8 md:space-y-12">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-on-primary tracking-tight max-w-3xl mx-auto">
            Find the right specialist for your situation
          </h2>
          <Button variant="secondary" size="lg" onClick={onFindSpecialist} className="w-full sm:w-auto">
            Find My Specialist
          </Button>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
};
