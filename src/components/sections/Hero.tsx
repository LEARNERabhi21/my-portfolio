import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Sparkles, Code2, ExternalLink, ChevronRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/content/portfolioData';
import { TerminalVisual } from '@/components/ui/TerminalVisual';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { slideUp, fadeIn, staggerContainer } from '@/animations';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Positioning & CTAs (7 cols) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Developer Pill Indicator */}
            <motion.div variants={slideUp} className="inline-flex items-center gap-2">
              <Badge variant="glow" className="py-1 px-3">
                <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
                <span>Software Developer & Automation Specialist</span>
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={slideUp} className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.1]">
                Hello, I&apos;m{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
                  Abhishek Thakur
                </span>
              </h1>
              <p className="font-mono text-sm sm:text-base text-accent-cyan font-medium tracking-wide">
                Web Development • Business Process Automation • AI/LLM Applications
              </p>
            </motion.div>

            {/* Subtitle / Positioning Statement */}
            <motion.p
              variants={slideUp}
              className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed"
            >
              Hands-on developer engineering production web applications in{' '}
              <strong className="text-text-primary font-medium">React & TypeScript</strong>, high-throughput enterprise automations across{' '}
              <strong className="text-text-primary font-medium">Zoho CRM & Books (Deluge)</strong>, and intelligent AI tools with{' '}
              <strong className="text-text-primary font-medium">Python & LangChain</strong>.
            </motion.p>

            {/* Verified Credentials Pills */}
            <motion.div variants={slideUp} className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted bg-bg-surface1 px-2.5 py-1 rounded border border-border-subtle">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald" />
                Deluge & Zoho Creator
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted bg-bg-surface1 px-2.5 py-1 rounded border border-border-subtle">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald" />
                Google Apps Script
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted bg-bg-surface1 px-2.5 py-1 rounded border border-border-subtle">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald" />
                Supabase & REST APIs
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted bg-bg-surface1 px-2.5 py-1 rounded border border-border-subtle">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald" />
                BCA (2025)
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={slideUp}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3"
            >
              <a href="#projects">
                <Button variant="glow" size="lg" icon={<Code2 className="w-4 h-4" />}>
                  Explore Projects
                </Button>
              </a>

              <a href="#contact">
                <Button variant="secondary" size="lg" icon={<ChevronRight className="w-4 h-4" />}>
                  Get In Touch
                </Button>
              </a>

              <a
                href={siteConfig.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg text-sm font-mono text-text-secondary hover:text-text-primary hover:bg-bg-surface1 transition-colors"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>

            {/* Micro Stats Grid */}
            <motion.div
              variants={slideUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/[0.06]"
            >
              {siteConfig.stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-text-primary tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-text-secondary leading-snug">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-text-muted truncate">
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Terminal (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative">
              {/* Subtle background ambient blur glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-2xl blur-xl opacity-50 pointer-events-none" />
              <TerminalVisual />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-text-muted text-xs font-mono"
      >
        <span className="text-[11px] uppercase tracking-widest text-text-muted">Scroll to explore</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-accent-blue" />
      </motion.div>
    </section>
  );
};
