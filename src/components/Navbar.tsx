import React, { useState, useEffect } from 'react';
import { Download, ExternalLink, Menu, X, ArrowUpRight } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav border-b border-[#292D34]/70 py-3.5 shadow-2xl'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
        {/* Left: Typographic Wordmark */}
        <a
          href="#hero"
          className="text-xl md:text-2xl font-bold tracking-tight text-[#F5F5F5] hover:text-[#B8FF65] transition-colors whitespace-nowrap shrink-0 group flex items-baseline gap-1"
        >
          <span>ROKAYA</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF65] inline-block transition-transform duration-300 group-hover:scale-125" />
        </a>

        {/* Center: Clean Typography Nav Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#969BA5]"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                  isActive ? 'text-[#F5F5F5] font-semibold' : 'hover:text-[#F5F5F5]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B8FF65] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: CV Action & Availability */}
        <div className="hidden lg:flex items-center gap-6 shrink-0">
          <div className="flex items-center gap-2 text-xs text-[#969BA5] bg-[#111318] border border-[#292D34] px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#B8FF65] animate-pulse" />
            <span className="font-mono text-[11px] text-[#F5F5F5]">Available for work</span>
          </div>

          <a
            href={DEVELOPER_PROFILE.cvUrl}
            download="Rokaya-Ghallab-CV.pdf"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-[#08090B] bg-[#B8FF65] hover:bg-[#a6ec50] active:scale-95 transition-all rounded-md shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={DEVELOPER_PROFILE.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-xs font-medium text-[#08090B] bg-[#B8FF65] rounded-md"
            aria-label="View CV"
          >
            <Download className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F5F5F5] hover:text-[#B8FF65] transition-colors focus:outline-none focus:ring-1 focus:ring-[#B8FF65]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-[#292D34] px-6 py-6 animate-fadeIn">
          <div className="flex flex-col gap-4 text-base font-medium">
            <div className="flex items-center gap-2 pb-3 mb-2 border-b border-[#292D34] text-xs text-[#969BA5]">
              <span className="w-2 h-2 rounded-full bg-[#B8FF65]" />
              <span>Available for Front-End Roles & Projects</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 transition-colors flex items-center justify-between ${
                  activeSection === link.href.substring(1)
                    ? 'text-[#B8FF65] font-semibold'
                    : 'text-[#969BA5] hover:text-[#F5F5F5]'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-[#292D34] flex flex-col gap-3">
              <a
                href={DEVELOPER_PROFILE.cvUrl}
                download="Rokaya-Ghallab-CV.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold tracking-wide uppercase text-[#08090B] bg-[#B8FF65] rounded-md"
              >
                <Download className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>
              <a
                href={DEVELOPER_PROFILE.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-[#F5F5F5] bg-[#191C22] border border-[#292D34] rounded-md hover:border-[#B8FF65]"
              >
                <ExternalLink className="w-4 h-4 text-[#969BA5]" />
                <span>View CV in Browser</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
