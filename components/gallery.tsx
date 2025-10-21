'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { useFadeInAnimation } from '@/hooks/use-fade-in';

export function Gallery() {
  const fadeInRef = useFadeInAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

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
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex(prev => (prev + 1) % images.length);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const prevImage = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const goToImage = (index: number) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex(index);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Drag functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
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
    
    // Determine direction and move accordingly
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) {
        prevImage();
      } else {
        nextImage();
      }
    }
    
    setDragOffset(0);
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
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
    
    // Determine direction and move accordingly
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) {
        prevImage();
      } else {
        nextImage();
      }
    }
    
    setDragOffset(0);
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

        {/* Enhanced Horizontal Carousel Slider */}
        <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
          <div className='horizontal-slider-container'>
            <div
              ref={sliderRef}
              className={`horizontal-slider-track ${isDragging ? 'dragging' : ''}`}
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
              {/* Create infinite loop with duplicated images */}
              {[...images, ...images, ...images].map((image, index) => (
                <div key={index} className='horizontal-slider-item'>
                  <div className='relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg'>
                    <Image
                      src={image.url}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className='w-full h-full object-cover transition-transform duration-700 hover:scale-105'
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

          {/* Enhanced Navigation Controls */}
          <div className='absolute inset-y-0 left-0 right-0 flex items-center justify-between p-6 pointer-events-none'>
            <button
              onClick={prevImage}
              disabled={isTransitioning}
              className='w-14 h-14 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed pointer-events-auto shadow-lg'
              aria-label='Imagem anterior'
            >
              <ChevronLeft className='w-7 h-7 text-white' />
            </button>

            <button
              onClick={nextImage}
              disabled={isTransitioning}
              className='w-14 h-14 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed pointer-events-auto shadow-lg'
              aria-label='Próxima imagem'
            >
              <ChevronRight className='w-7 h-7 text-white' />
            </button>
          </div>

          {/* Auto-play Control */}
          <div className='absolute top-6 right-6'>
            <button
              onClick={toggleAutoPlay}
              className='w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg'
              aria-label={isAutoPlaying ? 'Pausar' : 'Reproduzir'}
            >
              {isAutoPlaying ? (
                <Pause className='w-6 h-6 text-white' />
              ) : (
                <Play className='w-6 h-6 text-white' />
              )}
            </button>
          </div>

          {/* Progress Indicator */}
          <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
            <div className='flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2'>
              <span className='text-white text-sm font-medium'>
                {currentIndex + 1} / {images.length}
              </span>
              <div className='w-24 h-1 bg-white/20 rounded-full overflow-hidden'>
                <div 
                  className='h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300'
                  style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
