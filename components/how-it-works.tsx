'use client';

import { useFadeInAnimation } from '@/hooks/use-fade-in';
import { useSlideInAnimation } from '@/hooks/use-slide-in';

export function HowItWorks() {
  const fadeInRef = useFadeInAnimation();
  const videoSlideRef = useSlideInAnimation('right');

  return (
    <section
      ref={fadeInRef}
      id='como-funciona'
      className='relative py-24 px-4 bg-gradient-to-b from-background via-muted/10 to-background fade-in-section overflow-hidden'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(198,54,54,0.1),transparent_50%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(165,42,42,0.1),transparent_50%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,224,169,0.1),transparent_50%)]' />
      </div>

      <div className='relative z-10 container mx-auto'>
        <div className='grid lg:grid-cols-2 gap-8 md:gap-12 items-center'>
          {/* Text Content */}
          <div>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-8 px-4 leading-tight'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x'>
                COMO FUNCIONA
              </span>
              <br />
              <span className='text-foreground'>NOSSO BUFFET?</span>
            </h2>

            <p className='text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 md:mb-10 px-4'>
              Levamos a experiência completa de um buffet de alta qualidade até
              você! Seja em casa, no salão de festas, na empresa ou até em um
              sítio, nossa equipe cuida de tudo para que você aproveite sem
              preocupações.
            </p>

            <div className='px-4'>
              <button
                className='premium-cta-button'
                onClick={() => {
                  document.getElementById('inicio')?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                SOLICITAR ORÇAMENTO
              </button>
            </div>
          </div>

          {/* Video Placeholder */}
          <div
            ref={videoSlideRef}
            className='relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-muted video-container'
          >
            <div className='w-full h-full flex items-center justify-center'>
              <div className='text-center text-muted-foreground'>
                <div className='w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4'>
                  <div className='w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1' />
                </div>
                <p className='text-lg font-semibold mb-2'>Vídeo Explicativo</p>
                <p className='text-sm'>
                  Aqui será inserido o vídeo de como funciona nosso buffet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
