import React from 'react';
import { motion } from 'framer-motion';
import { User, Workflow, Code, Sparkles, Terminal, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { slideUp, staggerContainer } from '@/animations';

export const About: React.FC = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 lg:py-28 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-left">
          <Badge variant="cyan" className="uppercase tracking-widest text-[11px]">
            // 01. Professional Profile
          </Badge>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight"
          >
            Engineering Pragmatic Software & Scalable Automation
          </h2>
          <p className="text-text-secondary max-w-2xl text-base">
            Bridging operational business logic with modern full-stack web technologies and intelligent AI workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative (7 cols) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <motion.div variants={slideUp} className="prose prose-invert max-w-none text-text-secondary leading-relaxed space-y-4 text-sm sm:text-base">
              <p>
                I am a Software Developer with enterprise hands-on experience across the entire{' '}
                <strong className="text-text-primary">Zoho Ecosystem (CRM, Books, Creator, Flow, Deluge)</strong>, complemented by full-stack engineering in{' '}
                <strong className="text-text-primary">React, TypeScript, Google Apps Script, and Python</strong>.
              </p>

              <p>
                During my tenure at <strong className="text-text-primary">Ratusaria Industries Private Limited</strong>, I served as a primary automation developer, translating intricate operational constraints into reliable Deluge scripts, custom CRM widgets, and automated multi-module business workflows using REST APIs (<code className="text-accent-code font-mono text-xs">invokeurl</code>).
              </p>

              <p>
                Beyond SaaS customization, I engineer robust web systems that solve real concurrency and data integrity challenges — such as building the <strong className="text-text-primary">Avinash Roadways</strong> trip management platform with LockService-protected Trip ID sequencing, accompanied by a 54-test automated QA suite to prevent data duplication.
              </p>

              <p>
                Today, I am actively channeling my engineering foundation into <strong className="text-text-primary">AI/LLM application development</strong> (building agentic tools like Lexis with LangChain and Python) and scalable cloud-native architectures with Supabase.
              </p>
            </motion.div>

            {/* Core Competencies Checklist */}
            <motion.div variants={slideUp} className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-mono text-text-secondary">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0" />
                <span>Deterministic Concurrency Control</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0" />
                <span>Enterprise Deluge & REST Integrations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0" />
                <span>Automated Test-Driven Reliability</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-purple shrink-0" />
                <span>Agentic LLM Tool Calling (LangChain)</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Highlights Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Card className="p-5 border-border-subtle bg-bg-surface1/70 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center">
                  <Workflow className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-semibold text-text-primary">
                    Enterprise Automation
                  </h3>
                  <span className="text-xs text-text-muted">Zoho Suite & Google Workspace</span>
                </div>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Expertise in eliminating manual data entry through custom subform logic, cross-suite webhook pipelines, and automated inventory sync.
              </p>
            </Card>

            <Card className="p-5 border-border-subtle bg-bg-surface1/70 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center">
                  <Code className="w-5 h-5 text-accent-cyan" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-semibold text-text-primary">
                    Full-Stack Web Engineering
                  </h3>
                  <span className="text-xs text-text-muted">React 18 • TypeScript • Supabase</span>
                </div>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Shipping typed, responsive, accessible web interfaces backed by edge services, automated test runners, and continuous deployment.
              </p>
            </Card>

            <Card className="p-5 border-border-subtle bg-bg-surface1/70 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-accent-purple/10 border border-accent-purple/30 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent-purple" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-semibold text-text-primary">
                    AI & Modern Systems
                  </h3>
                  <span className="text-xs text-text-muted">LangChain • Python • NLP</span>
                </div>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Bridging prompt engineering and local system orchestration to construct assistive tools with deterministic guardrails.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
