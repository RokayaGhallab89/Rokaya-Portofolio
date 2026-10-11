import React from 'react';
import { ArrowUp } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#292D34] bg-[#08090B] py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-base tracking-tight text-[#F5F5F5]">
            ROKAYA.
          </span>
          <span className="text-[#969BA5] text-xs font-mono">— Front-End Developer</span>
        </div>

        {/* Center: Notice */}
        <div className="text-xs text-[#969BA5] font-mono">
          <span>{DEVELOPER_PROFILE.contact.location}</span>
          <span className="mx-2" aria-hidden="true">·</span>
          <span>Next.js · React.js · WordPress</span>
        </div>

        {/* Right: Credits & Back to Top */}
        <div className="flex items-center gap-6">
          <p className="text-xs text-[#969BA5]">
            Designed & Developed by <span className="text-[#F5F5F5] font-medium">Rokaya Ghallab</span>
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-[#111318] hover:bg-[#191C22] text-[#969BA5] hover:text-[#B8FF65] border border-[#292D34] transition-all flex items-center justify-center group"
            aria-label="Back to top of page"
          >
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
