'use client';

import { useEffect, useRef } from 'react';

export function useSlideInAnimation(direction: 'left' | 'right' = 'right') {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Configurar estado inicial
    const initialTransform = direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)';
    element.style.transform = initialTransform;
    element.style.opacity = '0';
    element.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animar para a posição final
            element.style.transform = 'translateX(0)';
            element.style.opacity = '1';
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [direction]);

  return ref;
}
