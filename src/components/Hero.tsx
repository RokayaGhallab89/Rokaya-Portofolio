import React from 'react';
import { ArrowDown, ArrowUpRight, FileText, Sparkles } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';

interface HeroProps {
  onOpenCVModal?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Architectural Mesh & Glow Accent */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-1/4 -z-10 w-96 h-96 bg-[#B8FF65]/5 rounded-full blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-0 -z-10 w-80 h-80 bg-[#191C22]/80 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Main Asymmetric Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        {/* Left Column: Typographic Powerhouse (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 lg:pr-6">
          {/* Availability & Eyebrow */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111318] border border-[#292D34] text-xs text-[#F5F5F5]">
              <span className="w-2 h-2 rounded-full bg-[#B8FF65] animate-pulse" />
              <span className="tracking-wide uppercase text-[11px] font-mono text-[#969BA5]">Available for New Projects</span>
            </div>
            <span className="text-[#292D34]" aria-hidden="true">/</span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#969BA5]">
              FRONT-END DEVELOPER · 2 YEARS EXPERIENCE
            </span>
          </div>

          {/* Oversized Editorial Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#F5F5F5] leading-[1.08] max-w-2xl">
            Building digital{' '}
            <span className="block">experiences that</span>{' '}
            <span className="relative inline-block text-[#B8FF65]">
              feel different.
              <svg
                className="absolute -bottom-1 left-0 w-full h-2 text-[#B8FF65]/40"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg text-[#969BA5] leading-relaxed max-w-xl font-normal">
            {DEVELOPER_PROFILE.summary}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3 w-full sm:w-auto">
            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide uppercase text-[#08090B] bg-[#B8FF65] hover:bg-[#a5ec4d] active:scale-95 transition-all rounded-md shadow-[0_0_25px_rgba(184,255,101,0.25)]"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>

            <a
              href={DEVELOPER_PROFILE.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#F5F5F5] bg-[#111318] hover:bg-[#191C22] border border-[#292D34] hover:border-[#B8FF65]/50 transition-all rounded-md"
            >
              <FileText className="w-4 h-4 text-[#969BA5] group-hover:text-[#B8FF65] transition-colors" />
              <span>View My CV</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#969BA5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Verified Quick Stats Strip */}
          <div className="pt-8 border-t border-[#292D34]/70 w-full grid grid-cols-3 gap-6 max-w-lg">
            {DEVELOPER_PROFILE.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-bold text-[#F5F5F5] tracking-tight tabular-nums">
                  {stat.value}
                </span>
                <span className="text-xs text-[#969BA5] tracking-wide mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Editorial Portrait Frame (5 Cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
            {/* Outer Architectural Framing Elements */}
            <div
              aria-hidden="true"
              className="absolute -top-3 -right-3 w-full h-full border border-[#292D34] rounded-2xl pointer-events-none -z-10"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -left-3 w-full h-full border border-[#B8FF65]/20 rounded-2xl pointer-events-none -z-10"
            />

            {/* Main Portrait Container */}
            <div className="relative overflow-hidden rounded-2xl bg-[#111318] border border-[#292D34] shadow-2xl group">
              <div className="aspect-[4/4.6] relative overflow-hidden bg-[#111318]">
                <img
                  src={DEVELOPER_PROFILE.portraitUrl}
                  alt="Rokaya Ghallab - Front-End Developer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                  onError={(e) => {
                    // Graceful fallback if image path ever fails
                    const target = e.currentTarget;
                    target.src = '/src/assets/images/rokaya_portrait_1791728206925.jpg';
                  }}
                />

                {/* Subtle vignette gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Corner Accent Hairlines */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#B8FF65]/60" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#B8FF65]/60" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#B8FF65]/60" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#B8FF65]/60" />
              </div>

              {/* Minimal floating technology label */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#08090B]/90 backdrop-blur-md border border-[#292D34] py-2.5 px-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF65]" />
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-[#F5F5F5] uppercase">
                    REACT / NEXT.JS / WORDPRESS
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#969BA5]">PORTFOLIO</span>
              </div>
            </div>

            {/* Subtle decorative stamp */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-1.5 bg-[#191C22] border border-[#292D34] px-3.5 py-1.5 rounded-full shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-[#B8FF65]" />
              <span className="text-[11px] font-medium text-[#F5F5F5]">Cairo, Egypt</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Subtle Scroll Indicator */}
      <div className="pt-12 flex items-center justify-between border-t border-[#292D34]/40 mt-8">
        <div className="flex items-center gap-3 text-xs text-[#969BA5] font-mono">
          <span className="text-[#B8FF65]">01</span>
          <span>/</span>
          <span>DISCOVER</span>
        </div>

        <a
          href="#about"
          aria-label="Scroll to about section"
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#969BA5] hover:text-[#B8FF65] transition-colors group"
        >
          <span>Scroll to explore</span>
          <div className="w-5 h-8 rounded-full border border-[#292D34] group-hover:border-[#B8FF65] flex items-start justify-center p-1 transition-colors">
            <span className="w-1 h-1.5 rounded-full bg-[#B8FF65] animate-bounce" />
          </div>
        </a>

        <div className="text-xs text-[#969BA5] font-mono hidden sm:block">
          CAIRO · EG
        </div>
      </div>
    </section>
  );
};
