import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, ExternalLink, GitCommit, Code2 } from 'lucide-react';
import { siteConfig } from '@/content/portfolioData';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { slideUp, staggerContainer } from '@/animations';

export const GithubActivity: React.FC = () => {
  const publicRepos = [
    {
      name: 'transport-company',
      description: 'Avinash Roadways transport platform. React, TypeScript, Google Apps Script backend with LockService and 54-test automated Jest suite.',
      language: 'TypeScript',
      languageColor: '#3178c6',
      stars: 3,
      forks: 1,
      url: 'https://github.com/LEARNERabhi21/transport-company',
    },
    {
      name: 'production-tracker-app-code-base',
      description: 'Factory floor operations and shift entry system in React + Google Apps Script with 12-hour edit gating and IST date sync.',
      language: 'JavaScript',
      languageColor: '#f7df1e',
      stars: 2,
      forks: 0,
      url: 'https://github.com/LEARNERabhi21/production-tracker-app-code-base',
    },
  ];

  return (
    <section id="github" aria-labelledby="github-heading" className="py-20 lg:py-28 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="space-y-3">
            <Badge variant="cyan" className="uppercase tracking-widest text-[11px]">
              // 07. Open Source & Repositories
            </Badge>
            <h2
              id="github-heading"
              className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight"
            >
              Development Activity on GitHub
            </h2>
            <p className="text-text-secondary max-w-2xl text-base">
              Explore public codebases, test suites, and automation scripts directly on GitHub.
            </p>
          </div>

          <a
            href={siteConfig.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <Button variant="secondary" size="md" icon={<Github className="w-4 h-4" />}>
              <span>View @LEARNERabhi21</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Button>
          </a>
        </div>

        {/* Repositories Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
        >
          {publicRepos.map((repo, idx) => (
            <motion.div key={idx} variants={slideUp}>
              <Card className="p-6 h-full flex flex-col justify-between border-border-subtle bg-bg-surface1/80 hover:border-border-highlight group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-text-primary group-hover:text-accent-blue transition-colors"
                    >
                      <Code2 className="w-4 h-4 text-accent-cyan" />
                      <h3 className="font-mono text-base font-bold">
                        {repo.name}
                      </h3>
                    </a>
                    <span className="text-[11px] font-mono text-text-muted px-2 py-0.5 rounded bg-bg-surface2 border border-border-subtle">
                      Public
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-3">
                    {repo.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border-subtle/50 flex items-center text-xs font-mono text-text-muted">
                  <div className="flex items-center space-x-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: repo.languageColor }}
                    />
                    <span className="text-text-secondary">{repo.language}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
