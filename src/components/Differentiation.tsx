import React from 'react';

export const Differentiation: React.FC = () => {
  const chessImage = 'https://images.pexels.com/photos/5439443/pexels-photo-5439443.jpeg';

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 bg-surface">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
        <div className="relative">
          <div className="aspect-square bg-surface-container-high rounded-sm overflow-hidden">
            <img alt="The Choice" className="w-full h-full object-cover" src={chessImage} />
          </div>
          <div className="absolute top-1/2 -right-4 lg:-right-12 -translate-y-1/2 hidden md:block">
            <div className="p-6 lg:p-12 bg-primary text-on-primary max-w-sm rounded-sm">
              <h4 className="font-headline text-xl lg:text-3xl font-bold mb-2 lg:mb-4">"The One"</h4>
              <p className="font-label text-xs lg:text-sm uppercase tracking-widest opacity-80">Our Philosophy</p>
            </div>
          </div>
        </div>
        <div className="space-y-6 md:space-y-8">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            We don't give you a list — we find the one
          </h2>
          <p className="text-base md:text-xl text-on-surface-variant leading-relaxed">
            Instead of browsing dozens of agents, we match you with a specialist based on real experience.
          </p>
          <div className="space-y-4 pt-2 md:pt-4">
            <div className="flex items-start space-x-3 md:space-x-4">
              <span className="material-symbols-outlined text-primary mt-1 filled">check_circle</span>
              <p className="font-medium text-sm md:text-base">Vetted for transaction volume in your specific niche.</p>
            </div>
            <div className="flex items-start space-x-3 md:space-x-4">
              <span className="material-symbols-outlined text-primary mt-1 filled">check_circle</span>
              <p className="font-medium text-sm md:text-base">Objective data-driven performance metrics.</p>
            </div>
            <div className="flex items-start space-x-3 md:space-x-4">
              <span className="material-symbols-outlined text-primary mt-1 filled">check_circle</span>
              <p className="font-medium text-sm md:text-base">No generic profiles or marketplace noise.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
