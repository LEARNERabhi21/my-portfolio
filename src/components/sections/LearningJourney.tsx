import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';
import { learningJourneyData } from '@/content/portfolioData';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { slideUp, staggerContainer } from '@/animations';

export const LearningJourney: React.FC = () => {
  return (
    <section id="learning" aria-labelledby="learning-heading" className="py-20 lg:py-28 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-left">
          <Badge variant="glow" className="uppercase tracking-widest text-[11px]">
            // 06. Technical Growth & Trajectory
          </Badge>
          <h2
            id="learning-heading"
            className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight"
          >
            Engineering & Learning Roadmap
          </h2>
          <p className="text-text-secondary max-w-2xl text-base">
            Transparently sharing my current technical deep dives into agentic AI tooling, numerical computing, and edge-native web architectures.
          </p>
        </div>

        {/* Learning Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
        >
          {learningJourneyData.map((item) => (
            <motion.div key={item.id} variants={slideUp}>
              <Card className="h-full flex flex-col justify-between p-6 border-border-subtle bg-bg-surface1/80 hover:border-border-highlight">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-accent-purple/15 text-accent-purple border border-accent-purple/30 font-medium">
                      {item.status}
                    </span>
                    <span className="text-xs font-mono text-text-muted">
                      {item.category.split('&')[0]}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-mono text-base font-bold text-text-primary">
                      {item.title}
                    </h3>
                    <p className="text-xs text-accent-cyan font-mono font-medium">
                      Focus: {item.focus}
                    </p>
                  </div>

                  <p className="text-xs text-text-secondary leading-relaxed">
                    {item.description}
                  </p>

                  {/* Milestones */}
                  <div className="space-y-2 pt-2 border-t border-border-subtle/50">
                    <div className="text-[11px] font-mono text-text-muted">Key Milestones:</div>
                    <ul className="space-y-1.5 text-xs text-text-secondary">
                      {item.milestones.map((ms, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald shrink-0 mt-0.5" />
                          <span className="leading-snug">{ms}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-border-subtle/50 flex flex-wrap gap-1.5">
                  {item.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg-surface2 text-text-muted border border-border-subtle"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
