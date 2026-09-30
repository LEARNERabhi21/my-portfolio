import React from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'glow' | 'outline' | 'accent' | 'cyan' | 'purple' | 'emerald';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  children,
  className,
  ...props
}) => {
  const variantStyles = {
    default: 'bg-bg-surface2 text-text-secondary border-border-subtle hover:text-text-primary hover:border-border-highlight',
    glow: 'bg-accent-blue/10 text-accent-blue border-accent-blue/30 shadow-[0_0_12px_rgba(59,130,246,0.15)]',
    outline: 'bg-transparent text-text-secondary border-border-subtle hover:border-text-muted',
    accent: 'bg-accent-blue/15 text-accent-blue border-accent-blue/40 font-medium',
    cyan: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/30',
    purple: 'bg-accent-purple/10 text-accent-purple border-accent-purple/30',
    emerald: 'bg-accent-emerald/10 text-accent-emerald border-accent-emerald/30',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono border transition-all duration-200',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
