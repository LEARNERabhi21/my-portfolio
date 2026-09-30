import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Github, Terminal, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/content/portfolioData';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Credentials', href: '#certifications' },
  { label: 'Learning', href: '#learning' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const activeSection = useScrollSpy(
    navItems.map((item) => item.href.substring(1)),
    120
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-bg-base/80 backdrop-blur-md shadow-card'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center space-x-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-lg"
          >
            <div className="w-9 h-9 rounded-lg bg-bg-surface2 border border-border-subtle flex items-center justify-center group-hover:border-accent-blue/50 transition-colors">
              <Terminal className="w-4 h-4 text-accent-blue group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold text-sm sm:text-base tracking-tight text-text-primary group-hover:text-accent-blue transition-colors">
                Abhishek Thakur
              </span>
              <span className="text-[11px] font-mono text-text-muted flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
                Available for dev roles
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-1 glass-panel px-3 py-1.5 rounded-full border border-border-subtle"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-accent-blue/20 border border-accent-blue/40 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={siteConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-bg-surface1 hover:bg-bg-surface2 border border-border-subtle text-text-secondary hover:text-text-primary transition-all hover:scale-105"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-accent-blue/15 hover:bg-accent-blue/25 text-accent-blue border border-accent-blue/30 text-xs font-mono font-medium transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume / Hire</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="lg:hidden p-2 rounded-lg bg-bg-surface2 border border-border-subtle text-text-secondary hover:text-text-primary focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-bg-surface1/95 backdrop-blur-xl border-b border-border-subtle px-4 py-6 shadow-2xl space-y-4"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-mono flex items-center justify-between ${
                    activeSection === item.href.substring(1)
                      ? 'bg-accent-blue/15 text-accent-blue font-semibold border border-accent-blue/30'
                      : 'text-text-secondary hover:bg-bg-surface2 hover:text-text-primary'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
              <a
                href={siteConfig.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-text-primary"
              >
                <Github className="w-4 h-4" />
                <span>github.com/LEARNERabhi21</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-1.5 rounded-lg bg-accent-blue text-white text-xs font-mono font-medium shadow-sm"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
