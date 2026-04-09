import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 sm:py-12 px-4 sm:px-8 bg-[#f3f3f6] dark:bg-[#121416]">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 max-w-[1440px] mx-auto">
        <div className="font-headline font-bold text-lg text-[#1a1c1e] dark:text-[#f9f9fc]">
          Find My Agent
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <a
            href="#privacy"
            className="font-body text-xs sm:text-sm tracking-wide uppercase text-[#1a1c1e]/40 dark:text-[#f9f9fc]/40 hover:underline decoration-[#004e36] underline-offset-4 transition-opacity"
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            className="font-body text-xs sm:text-sm tracking-wide uppercase text-[#1a1c1e]/40 dark:text-[#f9f9fc]/40 hover:underline decoration-[#004e36] underline-offset-4 transition-opacity"
          >
            Terms of Service
          </a>
          <a
            href="#contact"
            className="font-body text-xs sm:text-sm tracking-wide uppercase text-[#1a1c1e]/40 dark:text-[#f9f9fc]/40 hover:underline decoration-[#004e36] underline-offset-4 transition-opacity"
          >
            Contact
          </a>
        </div>
        <div className="text-[#1a1c1e]/40 dark:text-[#f9f9fc]/40 font-body text-xs sm:text-sm tracking-wide uppercase">
          © {currentYear} Find My Agent. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
