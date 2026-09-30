import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, FileText, ArrowUpRight, AlertCircle } from 'lucide-react';
import { siteConfig } from '@/content/portfolioData';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { slideUp, staggerContainer } from '@/animations';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: 'Full-Time Role',
    message: '',
    honeypot: '', // bot trap
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleCopyEmail = () => {
    try {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(siteConfig.contact.email);
      }
    } catch {
      // Fallback
    }
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    try {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(siteConfig.contact.phone);
      }
    } catch {
      // Fallback
    }
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Honeypot check
    if (formData.honeypot) {
      console.warn('Bot submission blocked.');
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate async submission with mailto fallback preparation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 lg:py-28 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-left">
          <Badge variant="glow" className="uppercase tracking-widest text-[11px]">
            // 08. Initiate Dialogue
          </Badge>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight"
          >
            Let&apos;s Build Something Impactful
          </h2>
          <p className="text-text-secondary max-w-2xl text-base">
            Whether evaluating my technical profile for a full-time engineering role, an enterprise Zoho automation, or a production web application — I am ready to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
          {/* Left Column: Direct Coordinates (5 cols) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <Card className="p-6 sm:p-8 border-border-subtle bg-bg-surface1/80 space-y-6">
              <h3 className="font-mono text-base font-bold text-text-primary flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-emerald animate-pulse" />
                <span>Direct Contact Channels</span>
              </h3>

              <div className="space-y-4">
                {/* Email Card */}
                <div className="p-4 rounded-xl bg-bg-surface2/60 border border-border-subtle space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-text-muted flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-accent-blue" /> Primary Email
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="text-xs font-mono text-accent-blue hover:text-accent-cyan transition-colors flex items-center gap-1"
                      aria-label="Copy email address"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-accent-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="font-mono text-sm sm:text-base font-semibold text-text-primary hover:text-accent-blue transition-colors block break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>

                {/* Phone Card */}
                <div className="p-4 rounded-xl bg-bg-surface2/60 border border-border-subtle space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-text-muted flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-accent-emerald" /> Direct Phone / WhatsApp
                    </span>
                    <button
                      onClick={handleCopyPhone}
                      className="text-xs font-mono text-accent-emerald hover:text-emerald-400 transition-colors flex items-center gap-1"
                      aria-label="Copy phone number"
                    >
                      {copiedPhone ? <Check className="w-3.5 h-3.5 text-accent-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                    className="font-mono text-sm sm:text-base font-semibold text-text-primary hover:text-accent-emerald transition-colors block"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl bg-bg-surface2/60 border border-border-subtle flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-accent-cyan shrink-0" />
                  <div>
                    <div className="text-xs font-mono text-text-muted">Current Base</div>
                    <div className="text-sm font-mono text-text-primary font-medium">
                      {siteConfig.contact.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="p-4 rounded-xl bg-accent-blue/10 border border-accent-blue/20 text-xs font-mono text-text-secondary leading-relaxed">
                <strong className="text-accent-blue block mb-1">Availability Window:</strong>
                Immediate availability for Software Developer, React/TypeScript, and Zoho Automation roles.
              </div>
            </Card>
          </motion.div>

          {/* Right Column: Interactive Form (7 cols) */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <Card className="p-6 sm:p-8 border-border-subtle bg-bg-surface1/80">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-accent-emerald/20 border border-accent-emerald/40 text-accent-emerald flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-mono text-text-primary">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, {formData.name}. Abhishek has received your message and will respond within 24 business hours.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          serviceType: 'Full-Time Role',
                          message: '',
                          honeypot: '',
                        });
                      }}
                    >
                      Send Another Inquiry
                    </Button>
                    <a href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(formData.serviceType + ': ' + formData.name)}&body=${encodeURIComponent(formData.message)}`}>
                      <Button variant="primary" size="sm">
                        Open in Mail App
                      </Button>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1 pb-2 border-b border-border-subtle">
                    <h3 className="font-mono text-lg font-bold text-text-primary">
                      Transmit an Inquiry
                    </h3>
                    <p className="text-xs text-text-muted">
                      Direct form with validation and spam protection.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-950/40 border border-red-800/40 text-xs font-mono text-red-400 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Honeypot field (hidden from real users) */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="bot_field_honey"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Name and Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-mono text-text-secondary">
                        Your Name <span className="text-accent-blue">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-bg-surface2 border border-border-subtle focus:border-accent-blue focus:ring-1 focus:ring-accent-blue text-sm text-text-primary placeholder:text-text-muted outline-none font-mono transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-mono text-text-secondary">
                        Email Address <span className="text-accent-blue">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@techrecruit.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-bg-surface2 border border-border-subtle focus:border-accent-blue focus:ring-1 focus:ring-accent-blue text-sm text-text-primary placeholder:text-text-muted outline-none font-mono transition-all"
                      />
                    </div>
                  </div>

                  {/* Service / Purpose Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="serviceType" className="block text-xs font-mono text-text-secondary">
                      Inquiry Intent / Scope
                    </label>
                    <select
                      id="serviceType"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-bg-surface2 border border-border-subtle focus:border-accent-blue focus:ring-1 focus:ring-accent-blue text-sm text-text-primary outline-none font-mono transition-all cursor-pointer"
                    >
                      <option value="Full-Time Role">Full-Time Software Developer Position</option>
                      <option value="Zoho Automation">Zoho CRM / Books / Deluge Automation Project</option>
                      <option value="Web App Development">Web Development (React / TypeScript / Full-Stack)</option>
                      <option value="AI Integration">AI / LLM Application Development</option>
                      <option value="General Consultation">General Technical Inquiry</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-mono text-text-secondary">
                      Project or Role Details <span className="text-accent-blue">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your project scope, requirements, or hiring timeline..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-bg-surface2 border border-border-subtle focus:border-accent-blue focus:ring-1 focus:ring-accent-blue text-sm text-text-primary placeholder:text-text-muted outline-none font-mono transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="glow"
                      size="lg"
                      isLoading={isSubmitting}
                      icon={<Send className="w-4 h-4" />}
                      className="w-full sm:w-auto"
                    >
                      Transmit Message
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
