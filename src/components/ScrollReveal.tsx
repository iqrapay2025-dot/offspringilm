import { useEffect, useRef, ReactNode } from 'react';

type Direction = 'up' | 'left' | 'right' | 'scale';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  threshold?: number;
}

const dirMap: Record<Direction, string> = {
  up: 'sr-hidden',
  left: 'sr-left',
  right: 'sr-right',
  scale: 'sr-scale',
};

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.12,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t = setTimeout(() => el.classList.add('sr-visible'), delay);
          obs.unobserve(el);
          return () => clearTimeout(t);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, threshold]);

  return (
    <div ref={ref} className={`${dirMap[direction]} ${className}`}>
      {children}
    </div>
  );
}
