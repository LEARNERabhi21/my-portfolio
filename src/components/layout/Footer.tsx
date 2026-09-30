import React from 'react';
import { Github, Mail, Phone, MapPin, Terminal, Heart, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/content/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border-subtle bg-bg-surface1/60 backdrop-blur-md pt-16 pb-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-border-subtle/60">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-bg-surface2 border border-border-subtle flex items-center justify-center">
                <Terminal className="w-4 h-4 text-accent-blue" />
              </div>
              <span className="font-mono font-bold text-lg text-text-primary tracking-tight">
                Abhishek Thakur
              </span>
            </div>
            <p className="text-sm text-text-secondary max-w-md leading-relaxed">
              Software Developer specializing in modern web applications, Deluge & Zoho enterprise automation, and AI/LLM integrations. Building production-grade software with deterministic business value.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={siteConfig.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-bg-surface2 border border-border-subtle flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent-blue/40 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="w-9 h-9 rounded-lg bg-bg-surface2 border border-border-subtle flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-accent-blue/40 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                className="w-9 h-9 rounded-lg bg-bg-surface2 border border-border-subtle flex items-center justify-center text-text-secondary hover:text-accent-emerald hover:border-accent-emerald/40 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-mono text-xs font-semibold text-text-primary uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-mono text-text-secondary">
              <li>
                <a href="#about" className="hover:text-accent-blue transition-colors">
                  // 01. About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-accent-blue transition-colors">
                  // 02. Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent-blue transition-colors">
                  // 03. Featured Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-accent-blue transition-colors">
                  // 04. Experience
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-accent-blue transition-colors">
                  // 05. Credentials
                </a>
              </li>
              <li>
                <a href="#learning" className="hover:text-accent-blue transition-colors">
                  // 06. Learning Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <h4 className="font-mono text-xs font-semibold text-text-primary uppercase tracking-wider mb-4">
              Coordinates
            </h4>
            <div className="space-y-3 text-xs sm:text-sm font-mono text-text-secondary">
              <div className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-text-primary break-all">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent-emerald shrink-0" />
                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="hover:text-text-primary">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-accent-cyan shrink-0" />
                <span>{siteConfig.contact.location}</span>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-accent-emerald/10 border border-accent-emerald/30 text-[11px] text-accent-emerald">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
                  Open to Full-Time & High-Impact Contracts
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-text-muted gap-4">
          <p className="flex items-center gap-1 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Abhishek Thakur. Engineered with React, TypeScript & Tailwind CSS.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-surface2 hover:bg-bg-elevated border border-border-subtle text-text-secondary hover:text-text-primary transition-all text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
