import React from 'react';

interface SpecializationCard {
  title: string;
  description: string;
  image: string;
}

const specializationCards: SpecializationCard[] = [
  {
    title: 'VA Loan Specialists',
    description: 'Navigating military benefits with precision.',
    image: 'https://images.pexels.com/photos/8469984/pexels-photo-8469984.jpeg',
  },
  {
    title: 'Probate & Inherited Property Experts',
    description: 'Sensitive handling of complex estate assets.',
    image: 'https://images.pexels.com/photos/9969057/pexels-photo-9969057.jpeg',
  },
  {
    title: 'Divorce Transaction Specialists',
    description: 'Discreet, objective guidance through transition.',
    image: 'https://images.pexels.com/photos/7937209/pexels-photo-7937209.jpeg',
  },
  {
    title: 'Investment Property Agents',
    description: 'ROI-focused matching for portfolio growth.',
    image: 'https://images.pexels.com/photos/30004350/pexels-photo-30004350.jpeg',
  },
];

export const Specialization: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12 md:mb-24">
          <span className="font-label text-sm uppercase tracking-widest text-primary mb-4 block">
            Our Domain Expertise
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Your situation requires the right expertise
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
          {specializationCards.map((card, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-surface-container-high rounded-sm"
            >
              <img
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={card.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-background via-on-background/20 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-3 sm:p-5 md:p-8 w-full">
                <h4 className="font-headline text-sm sm:text-base md:text-xl text-surface font-bold leading-tight">{card.title}</h4>
                <p className="text-surface/70 text-xs sm:text-sm mt-1 sm:mt-2 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
