import React from 'react';
import { Button } from './shared/Button';

interface HeroProps {
  onFindSpecialist: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onFindSpecialist }) => {
  const heroImage = 'https://images.pexels.com/photos/7642030/pexels-photo-7642030.jpeg';

  return (
    <section id="home" className="relative min-h-[60vh] md:min-h-[921px] flex items-center px-4 sm:px-8 overflow-hidden pt-12 md:pt-24">
      <div className="max-w-[1440px] mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="z-10 space-y-6 md:space-y-8">
          <div className="space-y-3 md:space-y-4">
            <span className="font-label text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-bold">
              Curated Real Estate Excellence
            </span>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-on-surface">
              Don't Hire <br />
              an Agent <br />
              Who Guesses
            </h1>
          </div>
          <div className="max-w-md space-y-4 md:space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-on-surface-variant font-medium leading-relaxed">
              Get matched with a specialist who understands your exact situation.
            </p>
            <p className="text-sm md:text-base text-on-surface-variant/80 border-l-2 border-primary pl-4 md:pl-6 py-1 italic">
              VA loans, probate, divorce, investment — we match you with someone who's done it before.
            </p>
          </div>
          <div className="pt-2 md:pt-4">
            <Button variant="primary" size="lg" onClick={onFindSpecialist} className="w-full sm:w-auto">
              Find My Specialist
            </Button>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="aspect-[4/5] bg-surface-container-high rounded-sm overflow-hidden shadow-2xl">
            <img
              alt="Modern architectural house"
              className="w-full h-full object-cover grayscale-[20%] contrast-[1.1]"
              src={heroImage}
            />
          </div>
          <div className="absolute -bottom-12 -left-12 p-6 lg:p-8 bg-surface-container-lowest shadow-2xl max-w-xs">
            <span className="material-symbols-outlined text-primary mb-4 filled">verified</span>
            <p className="text-sm font-semibold text-on-surface">
              "The match was pinpoint accurate. Our sale was handled with surgical precision."
            </p>
            <p className="mt-4 font-label text-[10px] uppercase tracking-tighter text-on-surface-variant">
              — Julian V., Estate Executor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
