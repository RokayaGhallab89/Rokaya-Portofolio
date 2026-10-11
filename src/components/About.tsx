import React from 'react';
import { Check, Code2, Globe, Laptop, Layers, ShieldCheck } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#292D34]">
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs text-[#B8FF65]">02</span>
        <span className="text-xs font-mono text-[#969BA5] uppercase tracking-wider">About Me</span>
      </div>

      {/* Main Two-Column Editorial Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Big Editorial Heading & Quick Proof Points */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-tight">
              More than code.{' '}
              <span className="text-[#969BA5] block mt-1">It's about the experience.</span>
            </h2>

            <p className="mt-6 text-[#969BA5] text-base leading-relaxed">
              Based in Cairo, Egypt, I blend engineering precision with an acute eye for aesthetic
              refinement. With a Computer Science degree from South Valley University and 2 years of
              specialized production experience across Next.js, React.js, and WordPress, I transform
              complex requirements into smooth, intuitive user journeys.
            </p>
          </div>

          {/* Compact Highlights Strip */}
          <div className="bg-[#111318] border border-[#292D34] rounded-xl p-6 grid grid-cols-3 gap-4">
            <div className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl font-bold text-[#B8FF65] tabular-nums">
                02+
              </span>
              <span className="text-[11px] font-mono text-[#969BA5] uppercase mt-1">
                Years Experience
              </span>
            </div>
            <div className="flex flex-col border-l border-[#292D34] pl-4">
              <span className="font-display text-2xl sm:text-3xl font-bold text-[#F5F5F5] tabular-nums">
                09
              </span>
              <span className="text-[11px] font-mono text-[#969BA5] uppercase mt-1">
                Featured Projects
              </span>
            </div>
            <div className="flex flex-col border-l border-[#292D34] pl-4">
              <span className="font-display text-2xl sm:text-3xl font-bold text-[#F5F5F5] tabular-nums">
                03
              </span>
              <span className="text-[11px] font-mono text-[#969BA5] uppercase mt-1">
                Core Specializations
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Verified Narrative & Core Pillars */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          <div className="prose prose-invert max-w-none text-base text-[#969BA5] leading-relaxed space-y-4">
            <p>
              Throughout my work at digital agencies including <strong className="text-[#F5F5F5] font-semibold">Servix Agency</strong>,{' '}
              <strong className="text-[#F5F5F5] font-semibold">Roaa PDA</strong>, and enterprise projects at{' '}
              <strong className="text-[#F5F5F5] font-semibold">Namaa Foundation</strong> and{' '}
              <strong className="text-[#F5F5F5] font-semibold">CodeSoft</strong>, my focus has remained constant: building clean, scalable front-end interfaces that bridge user needs and business objectives.
            </p>
            <p>
              I take pride in translating UI/UX wireframes into modular, responsive component systems that perform flawlessly across desktop, tablet, and mobile devices. Whether engineering dynamic web applications with Next.js and REST APIs or customizing tailored WordPress and WooCommerce storefronts, I maintain rigorous standards for accessibility, speed, and cross-browser consistency.
            </p>
          </div>

          {/* Core Competencies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {[
              {
                icon: <Code2 className="w-4 h-4 text-[#B8FF65]" />,
                title: 'Clean & Modular Architecture',
                desc: 'Reusable component systems, maintainable codebases, and predictable state structures.',
              },
              {
                icon: <Laptop className="w-4 h-4 text-[#B8FF65]" />,
                title: 'Responsive & Mobile-First',
                desc: 'Flawless visual rendering and tactile touch targets across every screen resolution.',
              },
              {
                icon: <Globe className="w-4 h-4 text-[#B8FF65]" />,
                title: 'Performance & Web Vitals',
                desc: 'Optimized page speed, image delivery, technical SEO, and accessibility compliance.',
              },
              {
                icon: <Layers className="w-4 h-4 text-[#B8FF65]" />,
                title: 'CMS & Full-Flow Delivery',
                desc: 'Custom WordPress & WooCommerce solutions with streamlined client management.',
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="bg-[#111318] border border-[#292D34] hover:border-[#292D34]/80 p-5 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-md bg-[#191C22]">{pillar.icon}</div>
                  <h3 className="text-sm font-semibold text-[#F5F5F5]">{pillar.title}</h3>
                </div>
                <p className="text-xs text-[#969BA5] leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Personal Work Principles */}
          <div className="pt-4 border-t border-[#292D34]/60 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[#969BA5]">
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#B8FF65]" />
              <span>Pixel-Precise Implementation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#B8FF65]" />
              <span>Asynchronous Flow Handling</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#B8FF65]" />
              <span>Cross-Browser Compatibility</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
