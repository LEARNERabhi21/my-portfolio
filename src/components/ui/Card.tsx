import React, { useRef, useState } from 'react';
import { cn } from '@/utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlight?: boolean;
  glowColor?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  spotlight = true,
  glowColor = 'rgba(59, 130, 246, 0.15)',
  children,
  className,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!spotlight || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: -1000, y: -1000 });
      }}
      className={cn(
        'relative rounded-xl overflow-hidden glass-card transition-all duration-300',
        className
      )}
      {...props}
    >
      {/* Dynamic mouse spotlight effect */}
      {spotlight && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Card Content Wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
