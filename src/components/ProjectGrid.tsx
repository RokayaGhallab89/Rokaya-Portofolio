import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ExternalLink, X, Globe, Layers, ArrowUpRight } from 'lucide-react';

export const ProjectGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'react' | 'next' | 'wordpress'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'react') return p.technologies.some((t) => t.toLowerCase().includes('react'));
    if (activeFilter === 'next') return p.technologies.some((t) => t.toLowerCase().includes('next'));
    if (activeFilter === 'wordpress')
      return p.technologies.some((t) => t.toLowerCase().includes('word') || t.toLowerCase().includes('woo'));
    return true;
  });

  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#292D34]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#B8FF65]">03</span>
            <span className="text-xs font-mono text-[#969BA5] uppercase tracking-wider">
              Selected Work · 15 Live Deployments
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-[#F5F5F5]">
            Selected Work.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#969BA5] max-w-xl">
            A collection of digital experiences I've helped bring to life.
          </p>
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex items-center p-1 bg-[#111318] border border-[#292D34] rounded-lg self-start md:self-auto overflow-x-auto max-w-full">
          {[
            { id: 'all', label: 'All (15)' },
            { id: 'next', label: 'Next.js' },
            { id: 'react', label: 'React.js' },
            { id: 'wordpress', label: 'WordPress / Woo' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-all ${
                activeFilter === tab.id
                  ? 'bg-[#B8FF65] text-[#08090B] font-semibold shadow-sm'
                  : 'text-[#969BA5] hover:text-[#F5F5F5]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Asymmetric Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            featured={activeFilter === 'all' && index === 0}
            onPreview={(p) => setSelectedProject(p)}
          />
        ))}
      </div>

      {/* Verified Data Note */}
      <div className="mt-16 p-6 rounded-xl bg-[#111318]/60 border border-[#292D34] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Globe className="w-5 h-5 text-[#B8FF65] shrink-0" />
          <p className="text-xs sm:text-sm text-[#969BA5]">
            <strong className="text-[#F5F5F5] font-semibold">100% Authentic Production Deployments:</strong> Every card showcases real live desktop homepage screenshots captured directly from production client domains.
          </p>
        </div>
        <a
          href="#contact"
          className="text-xs font-mono uppercase tracking-wider text-[#B8FF65] hover:underline flex items-center gap-1 shrink-0"
        >
          <span>Discuss a Project</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Fullscreen Lightbox Modal for Inspection */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#08090B]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#111318] border border-[#292D34] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 glass-nav border-b border-[#292D34] p-5 sm:p-6 flex items-center justify-between">
              <div>
                <span className="font-mono text-xs text-[#B8FF65]">{selectedProject.number}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5]">
                  {selectedProject.title}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#B8FF65] text-[#08090B] rounded-lg text-xs font-semibold hover:bg-[#a6ec50] transition-colors"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg bg-[#191C22] text-[#969BA5] hover:text-[#F5F5F5] hover:bg-[#292D34] transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Full Screenshot View */}
              <div className="rounded-xl overflow-hidden border border-[#292D34] bg-[#08090B]">
                <img
                  src={selectedProject.screenshot}
                  alt={`${selectedProject.title} high resolution capture`}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="md:col-span-2 space-y-3">
                  <h4 className="text-sm font-mono text-[#969BA5] uppercase">Project Overview</h4>
                  <p className="text-sm sm:text-base text-[#F5F5F5] leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-mono text-[#969BA5] uppercase">Technical Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono bg-[#191C22] border border-[#292D34] text-[#F5F5F5] px-2.5 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
