import { UtensilsCrossed, Flame, Sparkles } from 'lucide-react';
import { useFadeInAnimation } from '@/hooks/use-fade-in';

export function ProcessSteps() {
  const fadeInRef = useFadeInAnimation();
  const steps = [
    {
      icon: UtensilsCrossed,
      title: 'Entrada Especial',
      description:
        'A experiência começa com uma entrada especial de canapés e petiscos crocantes.',
    },
    {
      icon: Flame,
      title: 'Pratos Principais',
      description:
        'Em seguida, servimos uma grande variedade de pratos quentes e frios, preparados na hora, até que todos estejam satisfeitos.',
    },
    {
      icon: Sparkles,
      title: 'Sobremesas',
      description:
        'Para finalizar, nossas irresistíveis sobremesas encerram a noite com chave de ouro!',
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
              className='group process-step-card text-center relative'
            >
              {/* Card Background */}
              <div className='absolute inset-0 bg-gradient-to-br from-card/50 via-card/30 to-card/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm' />

              {/* Content */}
              <div className='relative z-10 p-6 md:p-8'>
                <div className='flex justify-center mb-6 md:mb-8'>
                  <div className='relative'>
                    {/* Icon Background Glow */}
                    <div className='absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500' />

                    {/* Icon Container */}
                    <div className='relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary via-primary/90 to-accent flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110'>
                      <step.icon className='w-10 h-10 md:w-12 md:h-12 text-white group-hover:text-accent-foreground transition-colors duration-300' />
                    </div>

                    {/* Step Number */}
                    <div className='absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center shadow-md'>
                      <span className='text-white text-sm font-bold'>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>

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
