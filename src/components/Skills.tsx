import React from 'react';
import { CORE_SPECIALIZATIONS, SKILL_CATEGORIES } from '../data/portfolioData';
import { Atom, Code, Cpu, Database, Layout, Server, Sparkles, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#292D34]">
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[#B8FF65]">04</span>
        <span className="text-xs font-mono text-[#969BA5] uppercase tracking-wider">
          Technical Expertise & Tooling
        </span>
      </div>

      {/* Main Section Header */}
      <div className="max-w-2xl mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-tight">
          Tools I use to <span className="block text-[#B8FF65]">bring ideas to life.</span>
        </h2>
        <p className="mt-4 text-base text-[#969BA5]">
          A focused stack centered on modern JavaScript frameworks, component architecture, and high-performance CMS solutions. Verified directly from production delivery experience.
        </p>
      </div>

      {/* Three Core Specializations (Elevated Showcase) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {CORE_SPECIALIZATIONS.map((spec, idx) => (
          <div
            key={spec.id}
            className="relative bg-[#111318] border border-[#292D34] rounded-2xl p-8 flex flex-col justify-between group hover:border-[#B8FF65]/70 transition-all duration-300"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-[#191C22] text-[#F5F5F5] group-hover:text-[#B8FF65] transition-colors border border-[#292D34]">
                  {spec.id === 'react' && <Atom className="w-6 h-6" />}
                  {spec.id === 'next' && <Cpu className="w-6 h-6" />}
                  {spec.id === 'wordpress' && <Layout className="w-6 h-6" />}
                </div>
                <span className="font-mono text-xs text-[#969BA5]">CORE 0{idx + 1}</span>
              </div>

              {/* Title & Short Role */}
              <h3 className="text-2xl font-bold text-[#F5F5F5] tracking-tight mb-1">
                {spec.title}
              </h3>
              <p className="text-xs font-mono text-[#B8FF65] mb-4">{spec.shortRole}</p>

              {/* Description */}
              <p className="text-sm text-[#969BA5] leading-relaxed mb-6">
                {spec.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="pt-4 border-t border-[#292D34] space-y-2">
              {spec.highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 text-xs text-[#F5F5F5] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF65]" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Categorized Digital Skills from CV */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="bg-[#111318] border border-[#292D34] rounded-xl p-7 space-y-5"
          >
            <div>
              <h4 className="text-lg font-bold text-[#F5F5F5] tracking-tight">{category.title}</h4>
              <p className="text-xs text-[#969BA5] mt-0.5">{category.description}</p>
            </div>

            {/* Unboxed Skill List - Strict Zero-Pill Discipline */}
            <ul className="space-y-2.5 text-sm">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-start gap-2.5 text-[#969BA5]">
                  <span className="text-[#B8FF65] font-mono text-xs mt-0.5" aria-hidden="true">→</span>
                  <span className="text-[#F5F5F5] text-xs sm:text-sm font-medium">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
