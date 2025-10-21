'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { useFadeInAnimation } from '@/hooks/use-fade-in';

export function Gallery() {
  const fadeInRef = useFadeInAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    {
      url: '/buffet-images/elegant-buffet-table-with-gourmet-dishes.jpg',
      alt: 'Mesa de buffet elegante',
      width: 800,
      height: 600,
    },
    {
      url: '/buffet-images/professional-chefs-preparing-food-at-event.jpg',
      alt: 'Chefs preparando comida',
      width: 800,
      height: 600,
    },
    {
      url: '/buffet-images/beautiful-event-decoration-with-buffet.jpg',
      alt: 'Decoração de evento',
      width: 800,
      height: 600,
    },
    {
      url: '/buffet-images/variety-of-gourmet-appetizers-on-display.jpg',
      alt: 'Variedade de aperitivos',
      width: 800,
      height: 600,
    },
    {
      url: '/buffet-images/dessert-buffet-table-with-elegant-presentation.jpg',
      alt: 'Mesa de sobremesas',
      width: 800,
      height: 600,
    },
    {
      url: '/buffet-images/outdoor-buffet-event-setup.jpg',
      alt: 'Buffet ao ar livre',
      width: 800,
      height: 600,
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const nextImage = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section
      ref={fadeInRef}
      id='galeria'
      className='py-20 px-4 bg-muted/30 fade-in-section'
    >
      <div className='container mx-auto max-w-6xl'>
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 px-4'>
            Galeria de Eventos
          </h2>
          <p className='text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4'>
            Veja alguns dos nossos eventos realizados
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div className='relative'>
          <div className='carousel-3d-container'>
            <div
              className='carousel-3d-track'
              style={{
                transform: `translateZ(-300px) rotateY(${currentIndex * -60}deg)`,
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className='carousel-3d-item'
                  style={{
                    transform: `rotateY(${index * 60}deg) translateZ(300px)`,
                  }}
                >
                  <div className='relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl'>
                    <Image
                      src={image.url}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
                      placeholder='blur'
                      blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      priority={index < 3}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className='flex justify-center items-center gap-4 mt-8'>
            <button
              onClick={prevImage}
              className='w-12 h-12 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110'
              aria-label='Imagem anterior'
            >
              <ChevronLeft className='w-6 h-6 text-primary hover:text-primary-foreground' />
            </button>

            <button
              onClick={toggleAutoPlay}
              className='w-12 h-12 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110'
              aria-label={isAutoPlaying ? 'Pausar' : 'Reproduzir'}
            >
              {isAutoPlaying ? (
                <Pause className='w-6 h-6 text-primary hover:text-primary-foreground' />
              ) : (
                <Play className='w-6 h-6 text-primary hover:text-primary-foreground' />
              )}
            </button>

            <button
              onClick={nextImage}
              className='w-12 h-12 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110'
              aria-label='Próxima imagem'
            >
              <ChevronRight className='w-6 h-6 text-primary hover:text-primary-foreground' />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className='flex justify-center gap-2 mt-6'>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
