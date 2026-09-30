import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Workflow, Code2, Cpu, Sparkles, Terminal, CheckCircle2, ChevronRight } from 'lucide-react';
import { skillCategoriesData } from '@/content/portfolioData';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-accent-cyan" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-accent-blue" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-accent-emerald" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-accent-purple" />;
      case 'Terminal':
      default:
        return <Terminal className="w-5 h-5 text-accent-amber" />;
    }
  };

  const getTabLabel = (catId: string, defaultTitle: string) => {
    switch (catId) {
      case 'zoho-ecosystem':
        return 'Zoho';
      case 'web-development':
        return 'Web & Frontend';
      case 'backend-automation':
        return 'Automation & APIs';
      case 'ai-llm':
        return 'AI & LLMs';
      case 'tools-devops':
        return 'DevOps & Tools';
      default:
        return defaultTitle.split(' ')[0].replace(/,/g, '');
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillCategoriesData
    : skillCategoriesData.filter(c => c.id === selectedCategory);

  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-20 lg:py-28 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="space-y-3">
            <Badge variant="glow" className="uppercase tracking-widest text-[11px]">
              // 02. Technical Architecture & Stack
            </Badge>
            <h2
              id="skills-heading"
              className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight"
            >
              Categorized Technical Stack & Tools
            </h2>
            <p className="text-text-secondary max-w-2xl text-base">
              Organized by demonstrable production experience, backend reliability, and specialized enterprise tooling.
            </p>
          </div>

          {/* Quick Filter Bar */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-bg-surface1 rounded-xl border border-border-subtle">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === 'all'
                  ? 'bg-accent-blue text-white font-semibold shadow-sm'
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-surface2'
              }`}
            >
              All Domains
            </button>
            {skillCategoriesData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-accent-blue text-white font-semibold shadow-sm'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-surface2'
                }`}
              >
                {getTabLabel(cat.id, cat.title)}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, y: 16, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.97 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card className="p-6 h-full flex flex-col justify-between border-border-subtle bg-bg-surface1/80 hover:border-border-highlight">
                  <div className="space-y-4">
                    {/* Category Header */}
                    <div className="flex items-center space-x-3 pb-3 border-b border-border-subtle">
                      <div className="w-10 h-10 rounded-lg bg-bg-surface2 border border-border-subtle flex items-center justify-center shrink-0">
                        {getCategoryIcon(category.iconName)}
                      </div>
                      <div>
                        <h3 className="font-mono text-sm sm:text-base font-bold text-text-primary">
                          {category.title}
                        </h3>
                        <span className="text-[11px] text-text-muted font-mono">
                          {category.skills.length} verified technologies
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-text-secondary leading-relaxed">
                      {category.description}
                    </p>

                    {/* Skills List */}
                    <div className="space-y-2 pt-2">
                      {category.skills.map((skill, idx) => (
                        <div
                          key={idx}
                          className="group flex flex-col p-2.5 rounded-lg bg-bg-surface2/60 hover:bg-bg-surface2 border border-border-subtle/70 hover:border-border-highlight transition-all"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs sm:text-sm font-mono font-medium text-text-primary flex items-center gap-1.5">
                              {skill.highlight && (
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                              )}
                              {skill.name}
                            </span>
                            {skill.highlight && (
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-accent-blue/15 text-accent-blue border border-accent-blue/30">
                                Core
                              </span>
                            )}
                          </div>
                          {skill.description && (
                            <span className="text-[11px] text-text-muted mt-1 leading-snug">
                              {skill.description}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border-subtle/50 flex items-center justify-between text-[11px] font-mono text-text-muted">
                    <span>Production Tested</span>
                    <span className="text-accent-blue flex items-center gap-1">
                      Verified <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
