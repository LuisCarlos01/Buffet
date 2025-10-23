import { useFadeInAnimation } from '@/hooks/use-fade-in';
import Image from 'next/image';

export function ProcessSteps() {
  const fadeInRef = useFadeInAnimation();
  const steps = [
    {
      title: 'Ingredientes Premium',
      description:
        'Ingredientes selecionados e de alta qualidade para o melhor sabor.',
      image:
        '/buffet-images/fresh-premium-ingredients-vegetables-meats-gourmet.jpg',
    },
    {
      title: 'Equipe Profissional',
      description: 'Equipe treinada e experiente para um serviço impecável.',
      image:
        '/buffet-images/professional-catering-staff-in-uniform-serving-ele.jpg',
    },
    {
      title: 'Cardápio Personalizado',
      description: 'Cardápios sob medida respeitando suas preferências.',
      image: '/buffet-images/elegant-buffet-menu-variety-of-gourmet-dishes.jpg',
    },
  ];

  return (
    <section
      ref={fadeInRef}
      className='relative py-20 md:py-24 bg-gradient-to-b from-background via-muted/10 to-background fade-in-section overflow-hidden'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(198,54,54,0.1),transparent_50%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(165,42,42,0.1),transparent_50%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,224,169,0.1),transparent_50%)]' />
      </div>

      <div className='relative z-10 container mx-auto px-4'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto'>
          {steps.map((step, index) => (
            <div
              key={index}
              className='group process-step-card text-center relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500'
            >
              {/* Card Background */}
              <div className='absolute inset-0 bg-gradient-to-br from-card/50 via-card/30 to-card/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm' />

              {/* Image */}
              <div className='relative h-48 md:h-56 overflow-hidden'>
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-500'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
              </div>

              {/* Content */}
              <div className='relative z-10 p-6 md:p-8'>
                <h3 className='text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6 group-hover:text-primary transition-colors duration-300'>
                  {step.title}
                </h3>

                <div className='relative'>
                  <p className='text-base md:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300'>
                    {step.description}
                  </p>

                  {/* Decorative Line */}
                  <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-16 transition-all duration-500' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
