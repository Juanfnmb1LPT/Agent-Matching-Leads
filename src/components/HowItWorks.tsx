import React from 'react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: '1',
    title: 'Tell us your situation',
    description: 'Every detail matters. We listen to the unique complexities of your property or legal standing.',
  },
  {
    number: '2',
    title: 'We analyze your needs',
    description: 'Our proprietary algorithm cross-references experience data against your specific requirements.',
  },
  {
    number: '3',
    title: 'Get matched with the right specialist',
    description: 'We introduce you to the single most qualified professional for your exact scenario.',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 bg-on-background text-surface overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="mb-12 md:mb-24">
          <span className="font-label text-sm uppercase tracking-widest text-primary-fixed mb-4 block">
            The Process
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Our Curation Protocol</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {processSteps.map((step, index) => (
            <div key={index} className="space-y-4 md:space-y-6 relative">
              <span className="block font-headline text-6xl md:text-8xl text-surface-variant/10 absolute -top-8 md:-top-12 -left-2 md:-left-4">
                {step.number}
              </span>
              <h3 className="font-headline text-xl md:text-2xl font-bold pt-6 md:pt-8">{step.title}</h3>
              <p className="text-surface-variant/70 leading-relaxed text-base md:text-lg">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Abstract Decorative Element */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <path className="text-primary-container" d="M0,400 L400,0 L400,400 Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};
