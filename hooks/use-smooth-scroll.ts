'use client';

import { useEffect } from 'react';

export function useSmoothScroll() {
  useEffect(() => {
    // Função para scroll suave com easing personalizado
    const smoothScrollTo = (targetId: string) => {
      const target = document.querySelector(targetId);
      if (!target) return;

      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = Math.min(Math.abs(distance) / 2, 1000); // Duração baseada na distância
      let startTime: number | null = null;

      // Easing function mais sofisticada (ease-out-cubic)
      const easeOutCubic = (t: number): number => {
        return 1 - Math.pow(1 - t, 3);
      };

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        const easedProgress = easeOutCubic(progress);
        window.scrollTo(0, startPosition + distance * easedProgress);

        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    // Adicionar listeners para todos os links de navegação
    const navigationLinks = document.querySelectorAll('a[href^="#"]');
    
    navigationLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href) {
          smoothScrollTo(href);
        }
      });
    });

    // Cleanup
    return () => {
      navigationLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);
}
