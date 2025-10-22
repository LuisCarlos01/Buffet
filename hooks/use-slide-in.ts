'use client';

import { useEffect, useRef, useState } from 'react';

export function useSlideInAnimation(direction: 'left' | 'right' = 'right') {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Função para detectar se é mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Verificar inicialmente
    checkIsMobile();

    // Adicionar listener para mudanças de tamanho
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Configurar estado inicial baseado no dispositivo
    const initialTransform = isMobile
      ? 'translateY(50px)' // No mobile, usar translateY para evitar problemas de overflow
      : direction === 'right'
        ? 'translateX(100px)'
        : 'translateX(-100px)'; // No desktop, usar valores fixos em pixels

    element.style.transform = initialTransform;
    element.style.opacity = '0';
    element.style.transition =
      'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)';

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animar para a posição final
            element.style.transform = 'translateX(0) translateY(0)';
            element.style.opacity = '1';
          }
        });
      },
      {
        threshold: isMobile ? 0.1 : 0.2, // Threshold menor no mobile para ativar mais cedo
        rootMargin: isMobile ? '0px 0px -20px 0px' : '0px 0px -50px 0px', // Root margin menor no mobile
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [direction, isMobile]);

  return ref;
}
