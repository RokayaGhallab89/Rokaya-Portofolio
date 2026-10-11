import React, { useState } from 'react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';
import { Mail, Phone, MapPin, Github, ArrowUpRight, Copy, Check, MessageSquare, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_PROFILE.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Rokaya,\n\nName: ${formData.name || 'Website Visitor'}\nEmail: ${formData.email || 'Not specified'}\n\nProject Scope / Message:\n${formData.message}`;
    const whatsappUrl = `https://wa.me/201032907055?text=${encodeURIComponent(text)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#292D34]">
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[#B8FF65]">07</span>
        <span className="text-xs font-mono text-[#969BA5] uppercase tracking-wider">
          Get in Touch
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Big Headline & Direct Contact Channels */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-10">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F5] leading-tight">
              Have something in mind?{' '}
              <span className="block text-[#B8FF65]">Let's build it.</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#969BA5] leading-relaxed max-w-lg">
              I'm always open to discussing interesting projects, creative ideas, and new opportunities.
            </p>
          </div>

          {/* Contact Details Cards */}
          <div className="space-y-4">
            {/* Email Card with Copy & Direct Mailto */}
            <div className="bg-[#111318] border border-[#292D34] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#191C22] text-[#B8FF65]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#969BA5] block">Direct Email</span>
                  <a
                    href={`mailto:${DEVELOPER_PROFILE.contact.email}`}
                    className="text-base font-semibold text-[#F5F5F5] hover:text-[#B8FF65] transition-colors"
                  >
                    {DEVELOPER_PROFILE.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-md bg-[#191C22] hover:bg-[#292D34] text-xs font-medium text-[#F5F5F5] border border-[#292D34] flex items-center gap-1.5 transition-colors"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#B8FF65]" />
                      <span className="text-[#B8FF65]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#969BA5]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${DEVELOPER_PROFILE.contact.email}`}
                  className="px-3.5 py-1.5 rounded-md bg-[#B8FF65] text-[#08090B] text-xs font-semibold hover:bg-[#a6ec50] transition-colors flex items-center gap-1"
                >
                  <span>Send</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Mobile & Location Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone / WhatsApp */}
              <div className="bg-[#111318] border border-[#292D34] rounded-xl p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#191C22] text-[#B8FF65]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#969BA5] block">WhatsApp / Mobile</span>
                    <a
                      href={DEVELOPER_PROFILE.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-[#F5F5F5] hover:text-[#B8FF65] transition-colors font-mono"
                    >
                      {DEVELOPER_PROFILE.contact.whatsapp}
                    </a>
                  </div>
                </div>
                <a
                  href={DEVELOPER_PROFILE.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 text-[11px] font-semibold text-[#08090B] bg-[#B8FF65] hover:bg-[#a6ec50] rounded transition-colors flex items-center gap-1"
                >
                  <span>Chat</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              {/* Location */}
              <div className="bg-[#111318] border border-[#292D34] rounded-xl p-4 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#191C22] text-[#B8FF65]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#969BA5] block">Location</span>
                  <span className="text-xs sm:text-sm font-medium text-[#F5F5F5]">
                    {DEVELOPER_PROFILE.contact.location}
                  </span>
                </div>
              </div>
            </div>

            {/* GitHub & Availability info */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs font-mono text-[#969BA5]">
              <a
                href={DEVELOPER_PROFILE.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#B8FF65] transition-colors bg-[#111318] border border-[#292D34] px-3.5 py-2 rounded-lg"
              >
                <Github className="w-4 h-4 text-[#F5F5F5]" />
                <span className="text-[#F5F5F5]">github.com/RokayaGhallab89</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B8FF65]" />
              </a>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#B8FF65]" />
                <span>Notice: {DEVELOPER_PROFILE.contact.noticePeriod}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Direct WhatsApp Message Composer */}
        <div className="lg:col-span-6 bg-[#111318] border border-[#292D34] rounded-2xl p-8 sm:p-10 shadow-2xl">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-[#F5F5F5] tracking-tight">
              Send a Direct Message
            </h3>
            <span className="px-2.5 py-0.5 rounded-full bg-[#B8FF65]/10 text-[#B8FF65] border border-[#B8FF65]/30 text-[11px] font-mono">
              WhatsApp 01032907055
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#969BA5] mb-6">
            Fill in the details below to start a direct WhatsApp conversation with Rokaya with your message pre-filled.
          </p>

          <form onSubmit={handleFormSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-[#969BA5] uppercase mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder=""
                className="w-full bg-[#191C22] border border-[#292D34] rounded-lg px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#969BA5]/50 focus:outline-none focus:border-[#B8FF65] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono text-[#969BA5] uppercase mb-1.5">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder=""
                className="w-full bg-[#191C22] border border-[#292D34] rounded-lg px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#969BA5]/50 focus:outline-none focus:border-[#B8FF65] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-[#969BA5] uppercase mb-1.5">
                Project Scope or Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="We would love to discuss a front-end project involving React / Next.js..."
                className="w-full bg-[#191C22] border border-[#292D34] rounded-lg px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#969BA5]/50 focus:outline-none focus:border-[#B8FF65] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-[#B8FF65] hover:bg-[#a6ec50] text-[#08090B] text-sm font-semibold uppercase tracking-wider transition-all duration-200 active:scale-[0.99] shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send via WhatsApp (01032907055)</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
