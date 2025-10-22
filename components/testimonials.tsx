'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Quote,
} from 'lucide-react';
import { useFadeInAnimation } from '@/hooks/use-fade-in';

export function Testimonials() {
  const fadeInRef = useFadeInAnimation();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const testimonials = [
    {
      name: 'Maria Silva',
      event: 'Casamento - 200 convidados',
      text: 'O buffet foi simplesmente perfeito! A variedade de pratos, a apresentação impecável e o sabor excepcional fizeram do nosso casamento um evento inesquecível. Todos os convidados elogiaram!',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face&auto=format&q=80',
    },
    {
      name: 'João Santos',
      event: 'Evento Corporativo - 150 pessoas',
      text: 'Contratamos para um evento da empresa e superou todas as expectativas. Profissionalismo, pontualidade e comida de altíssima qualidade. Com certeza voltaremos a contratar!',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80',
    },
    {
      name: 'Ana Paula Costa',
      event: 'Aniversário - 80 convidados',
      text: 'Experiência maravilhosa do início ao fim! A equipe foi super atenciosa, ajudou no planejamento e executou tudo perfeitamente. O buffet foi o destaque da festa!',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80',
    },
    {
      name: 'Carlos Mendes',
      event: 'Festa de 15 anos - 120 convidados',
      text: 'Serviço excepcional! A organização foi perfeita e a comida estava deliciosa. Nossa filha ficou encantada e todos os convidados elogiaram muito o buffet.',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80',
    },
    {
      name: 'Fernanda Lima',
      event: 'Evento de Lançamento - 100 pessoas',
      text: 'Profissionalismo exemplar! Desde o planejamento até a execução, tudo foi perfeito. O buffet foi o ponto alto do nosso evento corporativo.',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format&q=80',
    },
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex(
      prev => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, [testimonials.length]);

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex, nextTestimonial]);

  // Drag functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragOffset(0);
    setIsAutoPlaying(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStart;
    setDragOffset(deltaX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 50;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        prevTestimonial();
      } else {
        nextTestimonial();
      }
    }
    setDragOffset(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
    setDragOffset(0);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - dragStart;
    setDragOffset(deltaX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 50;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        prevTestimonial();
      } else {
        nextTestimonial();
      }
    }
    setDragOffset(0);
  };

  return (
    <section
      ref={fadeInRef}
      id='depoimentos'
      className='relative py-24 px-4 bg-gradient-to-b from-background via-muted/5 to-background fade-in-section overflow-hidden'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(198,54,54,0.1),transparent_50%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(165,42,42,0.1),transparent_50%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,224,169,0.1),transparent_50%)]' />
      </div>

      <div className='relative z-10 container mx-auto max-w-6xl'>
        <div className='text-center mb-16 md:mb-20'>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight'>
            O Que Nossos{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>
              Clientes Dizem
            </span>
          </h2>
          <p className='text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4'>
            Depoimentos reais de quem já experimentou nosso buffet
          </p>
        </div>

        {/* Professional Testimonials Carousel */}
        <div className='relative'>
          {/* Main Carousel Container */}
          <div className='testimonials-carousel-container'>
            <div
              ref={sliderRef}
              className={`testimonials-carousel-track ${isDragging ? 'dragging' : ''}`}
              style={{
                transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className='testimonials-carousel-item'>
                  <div className='bg-card/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border border-border/50 hover:shadow-3xl transition-all duration-500 hover:scale-105 relative overflow-hidden'>
                    {/* Quote Icon */}
                    <div className='absolute top-6 right-6 opacity-10'>
                      <Quote className='w-16 h-16 text-primary' />
                    </div>

                    {/* Rating Stars */}
                    <div className='flex gap-1 mb-6 justify-center'>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className='w-6 h-6 fill-primary text-primary drop-shadow-sm'
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className='text-lg md:text-xl text-card-foreground mb-8 leading-relaxed text-center italic relative z-10'>
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author Info */}
                    <div className='flex items-center justify-center gap-4 border-t border-border/50 pt-6'>
                      {/* Avatar */}
                      <div className='relative w-16 h-16 rounded-full overflow-hidden shadow-lg ring-2 ring-primary/20'>
                        <Image
                          src={testimonial.avatar}
                          alt={`Foto de ${testimonial.name}`}
                          width={64}
                          height={64}
                          className='w-full h-full object-cover'
                          priority={index === 0}
                        />
                      </div>

                      <div className='text-center'>
                        <p className='font-bold text-foreground text-lg'>
                          {testimonial.name}
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          {testimonial.event}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className='absolute inset-y-0 left-0 right-0 pointer-events-none'>
            <div className='flex justify-between items-center h-full px-4'>
              {/* Previous Button */}
              <button
                onClick={prevTestimonial}
                className='pointer-events-auto w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-foreground hover:text-primary group'
                aria-label='Depoimento anterior'
              >
                <ChevronLeft className='w-6 h-6 group-hover:scale-110 transition-transform' />
              </button>

              {/* Next Button */}
              <button
                onClick={nextTestimonial}
                className='pointer-events-auto w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-foreground hover:text-primary group'
                aria-label='Próximo depoimento'
              >
                <ChevronRight className='w-6 h-6 group-hover:scale-110 transition-transform' />
              </button>
            </div>
          </div>

          {/* Auto-play Control */}
          <div className='absolute top-4 right-4'>
            <button
              onClick={toggleAutoPlay}
              className='w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-foreground hover:text-primary'
              aria-label={
                isAutoPlaying ? 'Pausar auto-play' : 'Iniciar auto-play'
              }
            >
              {isAutoPlaying ? (
                <Pause className='w-4 h-4' />
              ) : (
                <Play className='w-4 h-4' />
              )}
            </button>
          </div>

          {/* Dots Indicator */}
          <div className='flex justify-center gap-2 mt-8'>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-primary to-accent shadow-lg scale-125'
                    : 'bg-border hover:bg-muted-foreground/50'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
