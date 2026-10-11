import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Eye } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  onPreview?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  featured = false,
  onPreview,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article
      className={`group relative flex flex-col bg-[#111318] border border-[#292D34] rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#B8FF65]/60 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)] ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Top Media Showcase Container */}
      <div
        className={`relative w-full overflow-hidden bg-[#191C22] ${
          featured ? 'aspect-[16/9] sm:aspect-[21/9]' : 'aspect-[16/10]'
        }`}
      >
        {!imageError ? (
          <img
            src={project.screenshot}
            alt={`${project.title} - Authentic Homepage Screenshot`}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          /* Elegant Styled Fallback */
          <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#111318] text-[#969BA5]">
            <ExternalLink className="w-8 h-8 text-[#B8FF65] mb-2 opacity-80" />
            <span className="font-display font-semibold text-sm text-[#F5F5F5]">{project.title}</span>
            <span className="text-xs text-[#969BA5] mt-1 font-mono">Live Website Preview</span>
          </div>
        )}

        {/* Ambient Overlay & Grain */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-transparent to-transparent opacity-80 pointer-events-none" />

        {/* Top Badges / Floating Bar */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <div className="bg-[#08090B]/85 backdrop-blur-md border border-[#292D34] px-3 py-1 rounded-md">
            <span className="font-mono text-xs font-semibold text-[#B8FF65] tracking-wider">
              {project.number}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {featured && (
              <span className="bg-[#B8FF65] text-[#08090B] font-mono text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                Featured Case Study
              </span>
            )}
            <div className="bg-[#08090B]/85 backdrop-blur-md border border-[#292D34] px-2.5 py-1 rounded-md text-[11px] font-mono text-[#969BA5] hidden sm:block">
              Authentic Capture
            </div>
          </div>
        </div>

        {/* Interactive Quick Action Overlay on Desktop */}
        <div className="absolute inset-0 bg-[#08090B]/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#B8FF65] text-[#08090B] text-xs font-semibold uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
          >
            <span>Visit Live Website</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          {onPreview && (
            <button
              onClick={() => onPreview(project)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#191C22] text-[#F5F5F5] border border-[#292D34] text-xs font-medium hover:border-[#B8FF65] transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
            >
              <Eye className="w-3.5 h-3.5 text-[#B8FF65]" />
              <span>Full Preview</span>
            </button>
          )}
        </div>
      </div>

      {/* Card Content & Editorial Details */}
      <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-6">
        <div>
          {/* Category kicker */}
          <div className="text-xs font-mono text-[#969BA5] tracking-wide mb-2 flex items-center gap-2">
            <span>{project.category}</span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] tracking-tight group-hover:text-[#B8FF65] transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight className="w-5 h-5 text-[#969BA5] group-hover:text-[#B8FF65] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 ml-2" />
          </h3>

          {/* Verified Description */}
          <p className="mt-3 text-sm text-[#969BA5] leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Footer: Tech Stack & Live Action */}
        <div className="pt-4 border-t border-[#292D34]/70 flex flex-wrap items-center justify-between gap-4">
          {/* Zero-Pill Technology Labels */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#969BA5] font-mono">
            {project.technologies.map((tech, idx) => (
              <React.Fragment key={tech}>
                <span className="text-[#F5F5F5]/80">{tech}</span>
                {idx < project.technologies.length - 1 && (
                  <span className="text-[#292D34]" aria-hidden="true">·</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Visible Direct Live Link for Mobile / Keyboard */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B8FF65] hover:underline whitespace-nowrap ml-auto"
          >
            <span>Live Website</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </article>
  );
};
