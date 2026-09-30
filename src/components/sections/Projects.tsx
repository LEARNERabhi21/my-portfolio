import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, ExternalLink, Github, ArrowUpRight, Sparkles, Filter, Layers } from 'lucide-react';
import { projectsData } from '@/content/portfolioData';
import { Project, ProjectCategory } from '@/types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ProjectModal } from './ProjectModal';
import { slideUp, staggerContainer } from '@/animations';

const categories: ProjectCategory[] = ['All', 'Web', 'Automation', 'React', 'Zoho'];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category.includes(activeCategory as any);
  });

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-20 lg:py-28 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="space-y-3">
            <Badge variant="cyan" className="uppercase tracking-widest text-[11px]">
              // 03. Verified Production Work
            </Badge>
            <h2
              id="projects-heading"
              className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight"
            >
              Featured Applications & Systems
            </h2>
            <p className="text-text-secondary max-w-2xl text-base">
              Real-world systems, concurrency-safe dispatch platforms, enterprise Zoho widgets, and agentic AI tools.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-bg-surface1 rounded-xl border border-border-subtle shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-accent-blue text-white shadow-sm'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-surface2'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid: 2 columns pair layout */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col justify-between p-6 border-border-subtle bg-bg-surface1/80 hover:border-border-highlight group cursor-pointer">
                  <div className="space-y-4">
                    {/* Top Meta: Status & Category */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-accent-blue/10 text-accent-blue border border-accent-blue/30 font-medium">
                        {project.status}
                      </span>
                      <div className="flex gap-1.5">
                        {project.category.map((cat, i) => (
                          <span key={i} className="text-[10px] font-mono text-text-muted">
                            #{cat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold font-mono text-text-primary group-hover:text-accent-blue transition-colors flex items-center justify-between">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-accent-blue shrink-0" />
                      </h3>
                      <p className="text-xs text-accent-cyan font-mono">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Metrics Pills (if any) */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        {project.metrics.slice(0, 2).map((m, idx) => (
                          <div key={idx} className="p-2 rounded bg-bg-surface2/60 border border-border-subtle/50 text-[11px] font-mono">
                            <span className="text-accent-blue font-bold block">{m.value}</span>
                            <span className="text-text-muted text-[10px] truncate block">{m.label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.slice(0, 4).map((tech, idx) => (
                        <Badge key={idx} variant="default" className="text-[10px] py-0.5 px-2">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="text-[10px] font-mono text-text-muted self-center">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="mt-6 pt-4 border-t border-border-subtle/60 flex items-center justify-between">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedProject(project)}
                      className="text-xs px-2 text-text-primary hover:text-accent-blue"
                    >
                      <span>Deep Dive Case Study</span>
                    </Button>

                    <div className="flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-bg-surface2 hover:bg-bg-elevated border border-border-subtle text-text-secondary hover:text-text-primary transition-colors"
                          aria-label={`${project.title} GitHub repository`}
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-accent-blue/15 hover:bg-accent-blue/30 border border-accent-blue/30 text-accent-blue transition-colors"
                          aria-label={`${project.title} Live URL`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Filter State */}
        {filteredProjects.length === 0 && (
          <div className="py-16 text-center space-y-4">
            <Layers className="w-12 h-12 text-text-muted mx-auto opacity-50" />
            <h3 className="font-mono text-base font-semibold text-text-primary">
              No projects matching &quot;{activeCategory}&quot;
            </h3>
            <p className="text-xs text-text-secondary max-w-sm mx-auto">
              Try switching back to &apos;All&apos; or another category to view Abhishek&apos;s verified work.
            </p>
            <Button variant="secondary" size="sm" onClick={() => setActiveCategory('All')}>
              Show All Projects
            </Button>
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
