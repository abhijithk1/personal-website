'use client';

import { useEffect, useRef, ReactNode, CSSProperties } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn';
  delay?: number;
  threshold?: number;
  className?: string;
  style?: CSSProperties;
}

const animationClassMap = {
  fadeUp: 'sr-hidden',
  fadeIn: 'sr-hidden',
  slideLeft: 'sr-hidden-left',
  slideRight: 'sr-hidden-right',
  scaleIn: 'sr-hidden-scale',
};

export default function ScrollReveal({
  children,
  animation = 'fadeUp',
  delay = 0,
  threshold = 0.15,
  className = '',
  style = {},
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('sr-visible');
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      className={`${animationClassMap[animation]} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}
