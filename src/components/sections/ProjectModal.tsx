import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, AlertTriangle, Lightbulb, Cpu, ArrowRight } from 'lucide-react';
import { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-bg-surface1 border border-border-highlight rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col text-left"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between p-5 sm:p-6 border-b border-border-subtle bg-bg-surface2/60 shrink-0">
            <div className="space-y-1 pr-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-accent-blue/15 text-accent-blue border border-accent-blue/30">
                  {project.status}
                </span>
                <span className="text-xs font-mono text-text-muted">
                  ID: #{project.id}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-accent-cyan font-mono">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-lg bg-bg-surface1 hover:bg-bg-elevated border border-border-subtle text-text-secondary hover:text-text-primary transition-colors shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-text-secondary text-sm">
            {/* Tech Stack Tags & Action Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-bg-surface2/40 border border-border-subtle">
              <div className="flex flex-wrap gap-1.5 items-center">
                <span className="text-xs font-mono text-text-muted mr-1">Stack:</span>
                {project.techStack.map((tech, idx) => (
                  <Badge key={idx} variant="default" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-surface1 hover:bg-bg-surface2 border border-border-subtle text-xs font-mono text-text-primary transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-blue text-white text-xs font-mono font-medium hover:bg-accent-blue-hover transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Metrics Highlight */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-bg-surface2/60 border border-border-subtle text-left">
                    <div className="text-lg font-mono font-bold text-accent-blue">
                      {m.value}
                    </div>
                    <div className="text-xs text-text-muted font-mono">{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Case Study Body */}
            <div className="space-y-6">
              {/* Problem */}
              <div className="space-y-2">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-text-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  1. The Business & Technical Problem
                </h4>
                <p className="leading-relaxed bg-bg-surface2/30 p-4 rounded-lg border border-border-subtle">
                  {caseStudy.problem}
                </p>
              </div>

              {/* Requirements */}
              {caseStudy.requirements && caseStudy.requirements.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-text-primary flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    2. Engineering Requirements
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {caseStudy.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-bg-surface2/40 border border-border-subtle/60 text-xs">
                        <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Architecture & Approach */}
              <div className="space-y-2">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-text-primary flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-accent-blue" />
                  3. System Architecture & Approach
                </h4>
                <div className="p-4 rounded-lg bg-bg-surface2/40 border border-border-subtle space-y-2 font-mono text-xs text-text-primary">
                  <div className="text-accent-code font-semibold">Pipeline Architecture:</div>
                  <div className="p-2.5 rounded bg-bg-base/80 border border-border-subtle text-[11px] leading-relaxed">
                    {caseStudy.architecture}
                  </div>
                  <p className="text-text-secondary font-sans text-xs leading-relaxed pt-1">
                    {caseStudy.approach}
                  </p>
                </div>
              </div>

              {/* Implementation Highlights */}
              {caseStudy.implementation && caseStudy.implementation.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-text-primary">
                    4. Key Implementation Details
                  </h4>
                  <ul className="space-y-2">
                    {caseStudy.implementation.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs">
                        <ArrowRight className="w-3.5 h-3.5 text-accent-blue shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges & Solutions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-red-950/15 border border-red-900/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-400">
                    <AlertTriangle className="w-4 h-4" />
                    Technical Obstacle
                  </div>
                  <p className="text-xs leading-relaxed text-text-secondary">
                    {caseStudy.challenges}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/15 border border-emerald-900/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent-emerald">
                    <Lightbulb className="w-4 h-4" />
                    Engineered Solution
                  </div>
                  <p className="text-xs leading-relaxed text-text-secondary">
                    {caseStudy.solutions}
                  </p>
                </div>
              </div>

              {/* Results & Lessons */}
              <div className="p-4 rounded-xl bg-accent-blue/10 border border-accent-blue/20 space-y-3">
                <div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-accent-blue mb-1">
                    5. Verified Production Result
                  </h4>
                  <p className="text-xs sm:text-sm text-text-primary font-medium leading-relaxed">
                    {caseStudy.result}
                  </p>
                </div>

                <div className="pt-2 border-t border-accent-blue/20 text-xs text-text-secondary">
                  <strong className="text-text-primary">Key Takeaway: </strong>
                  {caseStudy.lessonsLearned}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-bg-surface2/60 border-t border-border-subtle flex items-center justify-between shrink-0">
            <span className="text-xs font-mono text-text-muted">
              Press <kbd className="px-1.5 py-0.5 rounded bg-bg-surface1 border border-border-subtle text-[10px]">ESC</kbd> to close
            </span>
            <Button variant="secondary" size="sm" onClick={onClose}>
              Close Case Study
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
