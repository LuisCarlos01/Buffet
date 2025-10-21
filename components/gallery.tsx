'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Maximize2,
} from 'lucide-react';
import { useFadeInAnimation } from '@/hooks/use-fade-in';

export function Gallery() {
  const fadeInRef = useFadeInAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const images = [
    {
      url: '/buffet-images/elegant-buffet-table-with-gourmet-dishes.jpg',
      alt: 'Mesa de buffet elegante com pratos gourmet',
      width: 1200,
      height: 800,
    },
    {
      url: '/buffet-images/professional-chefs-preparing-food-at-event.jpg',
      alt: 'Chefs profissionais preparando comida no evento',
      width: 1200,
      height: 800,
    },
    {
      url: '/buffet-images/beautiful-event-decoration-with-buffet.jpg',
      alt: 'Decoração elegante de evento com buffet',
      width: 1200,
      height: 800,
    },
    {
      url: '/buffet-images/variety-of-gourmet-appetizers-on-display.jpg',
      alt: 'Variedade de aperitivos gourmet em exposição',
      width: 1200,
      height: 800,
    },
    {
      url: '/buffet-images/dessert-buffet-table-with-elegant-presentation.jpg',
      alt: 'Mesa de sobremesas com apresentação elegante',
      width: 1200,
      height: 800,
    },
    {
      url: '/buffet-images/outdoor-buffet-event-setup.jpg',
      alt: 'Configuração de buffet ao ar livre',
      width: 1200,
      height: 800,
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
      className='relative py-16 md:py-24 px-4 bg-gradient-to-b from-background via-muted/20 to-background fade-in-section overflow-hidden'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(198,54,54,0.1),transparent_50%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(165,42,42,0.1),transparent_50%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(245,224,169,0.1),transparent_50%)]' />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto'>
        {/* Header Section */}
        <div className='text-center mb-12 md:mb-16'>
          <div className='inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-4 md:mb-6'>
            <div className='w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-pulse' />
            Galeria Premium
          </div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight'>
            Nossos{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>
              Eventos
            </span>
          </h2>
          <p className='text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4'>
            Descubra a excelência culinária e a elegância dos nossos eventos
            através desta galeria exclusiva
          </p>
        </div>

        {/* Premium Gallery Container */}
        <div className='relative group premium-gallery'>
          {/* Main Image Display */}
          <div className='relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[21/9] overflow-hidden gallery-image-container bg-gradient-to-br from-muted/50 to-muted/20'>
            <div
              ref={sliderRef}
              className={`h-full flex transition-all duration-700 ease-out ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className='relative w-full h-full flex-shrink-0 overflow-hidden'
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className='w-full h-full object-cover transition-transform duration-1000'
                    placeholder='blur'
                    blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw'
                    priority={index === currentIndex}
                  />

                  {/* Image Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                  {/* Image Info */}
                  <div className='absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0'>
                    <div className='bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20'>
                      <h3 className='text-white text-lg font-semibold mb-2'>
                        {image.alt}
                      </h3>
                      <p className='text-white/80 text-sm'>
                        Evento Premium Pierroti
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className='absolute inset-y-0 left-0 right-0 flex items-center justify-between p-3 md:p-6 pointer-events-none'>
              <button
                onClick={prevImage}
                disabled={isTransitioning}
                className='w-12 h-12 md:w-16 md:h-16 rounded-full gallery-controls flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed pointer-events-auto group'
                aria-label='Imagem anterior'
              >
                <ChevronLeft className='w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-primary transition-colors' />
              </button>

              <button
                onClick={nextImage}
                disabled={isTransitioning}
                className='w-12 h-12 md:w-16 md:h-16 rounded-full gallery-controls flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed pointer-events-auto group'
                aria-label='Próxima imagem'
              >
                <ChevronRight className='w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-primary transition-colors' />
              </button>
            </div>

            {/* Control Panel */}
            <div className='absolute top-3 right-3 md:top-6 md:right-6 flex items-center gap-2 md:gap-3'>
              <button
                onClick={toggleAutoPlay}
                className='w-10 h-10 md:w-12 md:h-12 rounded-full gallery-controls flex items-center justify-center transition-all duration-300 hover:scale-110 group'
                aria-label={
                  isAutoPlaying ? 'Pausar slideshow' : 'Reproduzir slideshow'
                }
              >
                {isAutoPlaying ? (
                  <Pause className='w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-primary transition-colors' />
                ) : (
                  <Play className='w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-primary transition-colors' />
                )}
              </button>

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className='w-10 h-10 md:w-12 md:h-12 rounded-full gallery-controls flex items-center justify-center transition-all duration-300 hover:scale-110 group'
                aria-label='Visualizar em tela cheia'
              >
                <Maximize2 className='w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-primary transition-colors' />
              </button>
            </div>

            {/* Progress Indicator */}
            <div className='absolute bottom-3 left-1/2 transform -translate-x-1/2 md:bottom-6'>
              <div className='flex items-center gap-2 md:gap-4 bg-white/10 backdrop-blur-md rounded-full px-3 py-2 md:px-6 md:py-3 border border-white/20 shadow-xl'>
                <span className='text-white text-xs md:text-sm font-medium'>
                  {currentIndex + 1} / {images.length}
                </span>
                <div className='w-16 h-1.5 md:w-32 md:h-2 bg-white/20 rounded-full overflow-hidden'>
                  <div
                    className='h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500 ease-out'
                    style={{
                      width: `${((currentIndex + 1) / images.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className='mt-6 md:mt-8 flex justify-center gap-2 md:gap-3 overflow-x-auto pb-2 px-4 md:px-0'>
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`thumbnail-container flex-shrink-0 w-16 h-12 md:w-24 md:h-18 overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? 'ring-2 ring-primary shadow-lg scale-105 active'
                    : 'hover:scale-105 hover:shadow-md'
                }`}
                disabled={isTransitioning}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={96}
                  height={72}
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    index === currentIndex
                      ? 'brightness-100'
                      : 'brightness-75 hover:brightness-90'
                  }`}
                />
                {index === currentIndex && (
                  <div className='absolute inset-0 bg-primary/20 z-10' />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
