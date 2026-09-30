import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Building, Award } from 'lucide-react';
import { experienceData } from '@/content/portfolioData';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { slideUp, staggerContainer } from '@/animations';

export const Experience: React.FC = () => {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-20 lg:py-28 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-left">
          <Badge variant="cyan" className="uppercase tracking-widest text-[11px]">
            // 04. Career & Industry Impact
          </Badge>
          <h2
            id="experience-heading"
            className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight"
          >
            Professional Experience & Milestones
          </h2>
          <p className="text-text-secondary max-w-2xl text-base">
            Verified production track record designing enterprise automations, repairing critical data pipelines, and building custom software.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-border-highlight/60 ml-4 sm:ml-8 space-y-12 text-left">
          {experienceData.map((item) => (
            <motion.div
              key={item.id}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-bg-surface1 border-2 border-accent-blue shadow-[0_0_10px_rgba(59,130,246,0.6)] group-hover:scale-125 transition-transform" />

              <Card className="p-6 sm:p-8 border-border-subtle bg-bg-surface1/80 space-y-6">
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border-subtle">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-accent-blue/15 text-accent-blue border border-accent-blue/30 font-semibold">
                        {item.type}
                      </span>
                      <span className="text-xs font-mono text-text-muted flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period} ({item.duration})
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-mono text-text-primary">
                      {item.role}
                    </h3>

                    <div className="text-sm font-semibold text-accent-cyan flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      <span>{item.company}</span>
                      <span className="text-text-muted text-xs flex items-center gap-1">
                        • <MapPin className="w-3.5 h-3.5" /> {item.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.summary}
                </p>

                {/* Detailed Deliverables List */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-text-primary">
                    Core Technical Deliverables & Solved Defects:
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-text-secondary">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Verified Impact Badges */}
                {item.verifiedImpact && (
                  <div className="p-4 rounded-xl bg-bg-surface2/60 border border-border-subtle space-y-2">
                    <div className="text-xs font-mono font-semibold text-text-primary flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-accent-amber" />
                      <span>Key Verified Production Outcomes:</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.verifiedImpact.map((impact, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-mono px-2.5 py-1 rounded bg-bg-surface1 text-text-secondary border border-border-subtle"
                        >
                          ✓ {impact}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies Used */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="text-xs font-mono text-text-muted mr-1 self-center">Stack:</span>
                  {item.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="default" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
