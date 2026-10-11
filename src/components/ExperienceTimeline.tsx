import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, Building2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#292D34]">
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[#B8FF65]">05</span>
        <span className="text-xs font-mono text-[#969BA5] uppercase tracking-wider">
          Career Trajectory
        </span>
      </div>

      {/* Section Header */}
      <div className="max-w-2xl mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-tight">
          Experience & <span className="block text-[#969BA5]">the journey so far.</span>
        </h2>
        <p className="mt-4 text-base text-[#969BA5]">
          A progressive career path advancing from foundational frontend and WordPress engineering to production Next.js and React architecture at modern agencies.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative border-l border-[#292D34] ml-4 sm:ml-6 md:ml-8 space-y-12 pl-6 sm:pl-10">
        {EXPERIENCES.map((exp, idx) => (
          <div key={`${exp.company}-${exp.period}`} className="relative group">
            {/* Timeline Node Marker */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center">
              <div
                className={`w-3.5 h-3.5 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                  idx === 0
                    ? 'bg-[#B8FF65] border-[#08090B] ring-4 ring-[#B8FF65]/20'
                    : 'bg-[#191C22] border-[#969BA5] group-hover:border-[#B8FF65]'
                }`}
              />
            </div>

            {/* Experience Card */}
            <div className="bg-[#111318] border border-[#292D34] group-hover:border-[#292D34]/90 rounded-2xl p-6 sm:p-8 transition-all duration-300">
              {/* Header: Role, Period, Company */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] tracking-tight group-hover:text-[#B8FF65] transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-sm text-[#969BA5]">
                    <Building2 className="w-4 h-4 text-[#B8FF65]" />
                    <span className="font-medium text-[#F5F5F5]">{exp.company}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 self-start sm:self-auto px-3 py-1 rounded-md bg-[#191C22] border border-[#292D34] text-xs font-mono text-[#969BA5]">
                  <Calendar className="w-3.5 h-3.5 text-[#B8FF65]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <ul className="space-y-2.5 mt-4 text-sm text-[#969BA5] leading-relaxed">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3">
                    <span className="text-[#B8FF65] font-mono text-sm leading-none mt-1" aria-hidden="true">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
