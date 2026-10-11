import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#292D34]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Section Header */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#B8FF65]">06</span>
            <span className="text-xs font-mono text-[#969BA5] uppercase tracking-wider">
              Background
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F5]">
            Education & Certifications.
          </h2>
          <p className="mt-2 text-sm text-[#969BA5]">
            Strong academic foundations in Computer Science paired with rigorous hands-on technical training institutes.
          </p>
        </div>

        {/* Right: Education and Certifications Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Education Card */}
          <div className="bg-[#111318] border border-[#292D34] rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-[#B8FF65]">
                <GraduationCap className="w-5 h-5" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#969BA5]">Higher Education</span>
              </div>
              {EDUCATION.map((edu) => (
                <div key={edu.degree}>
                  <h3 className="text-lg font-bold text-[#F5F5F5]">{edu.degree}</h3>
                  <p className="text-sm text-[#969BA5] mt-1">{edu.institution}</p>
                </div>
              ))}
            </div>
            <div className="pt-4 mt-6 border-t border-[#292D34] flex items-center justify-between text-xs font-mono text-[#969BA5]">
              <span>Field: Computer Science</span>
              <span className="text-[#B8FF65]">Verified</span>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="bg-[#111318] border border-[#292D34] rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-[#B8FF65]">
                <Award className="w-5 h-5" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#969BA5]">Training & Certifications</span>
              </div>
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.title} className="flex flex-col">
                    <span className="text-sm font-semibold text-[#F5F5F5]">{cert.title}</span>
                    <span className="text-xs text-[#969BA5]">{cert.issuer}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4 mt-6 border-t border-[#292D34] flex items-center justify-between text-xs font-mono text-[#969BA5]">
              <span>Specialized Tracks</span>
              <span className="text-[#B8FF65]">Completed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
