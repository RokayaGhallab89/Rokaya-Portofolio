import React from 'react';
import { Download, ExternalLink, X, FileText, CheckCircle2 } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';

interface CVViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVViewerModal: React.FC<CVViewerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#08090B]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#111318] border border-[#292D34] rounded-2xl max-w-4xl w-full h-[88vh] flex flex-col shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="glass-nav border-b border-[#292D34] p-4 sm:p-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#191C22] text-[#B8FF65]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#F5F5F5]">
                Rokaya Ghallab — Official CV
              </h3>
              <p className="text-xs font-mono text-[#969BA5]">
                Rokaya-Ghallab-CV.pdf · Verified Document
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={DEVELOPER_PROFILE.cvUrl}
              download="Rokaya-Ghallab-CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#B8FF65] text-[#08090B] rounded-lg text-xs font-semibold hover:bg-[#a6ec50] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <a
              href={DEVELOPER_PROFILE.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#191C22] text-[#F5F5F5] border border-[#292D34] rounded-lg text-xs font-medium hover:border-[#B8FF65] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#B8FF65]" />
              <span className="hidden sm:inline">Open in Tab</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#191C22] text-[#969BA5] hover:text-[#F5F5F5] hover:bg-[#292D34] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: PDF Viewer */}
        <div className="flex-1 bg-[#08090B] relative overflow-hidden">
          <object
            data={`${DEVELOPER_PROFILE.cvUrl}#toolbar=1&navpanes=0`}
            type="application/pdf"
            className="w-full h-full"
          >
            <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
              <FileText className="w-12 h-12 text-[#B8FF65] opacity-80" />
              <p className="text-[#F5F5F5] font-semibold text-lg">
                Verified Curriculum Vitae Ready for Viewing
              </p>
              <p className="text-sm text-[#969BA5] max-w-md">
                Your browser may not support inline PDF rendering. You can open or download the complete PDF directly.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={DEVELOPER_PROFILE.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#B8FF65] text-[#08090B] rounded-lg text-xs font-semibold uppercase tracking-wider"
                >
                  Open CV in New Window
                </a>
                <a
                  href={DEVELOPER_PROFILE.cvUrl}
                  download="Rokaya-Ghallab-CV.pdf"
                  className="px-5 py-2.5 bg-[#191C22] border border-[#292D34] text-[#F5F5F5] rounded-lg text-xs font-medium"
                >
                  Download PDF File
                </a>
              </div>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
};
