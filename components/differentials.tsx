import { Card } from '@/components/ui/card';
import Image from 'next/image';

export function Differentials() {
  const differentials = [
    {
      title: 'Ingredientes Premium',
      description:
        'Trabalhamos apenas com ingredientes selecionados e de alta qualidade para garantir o melhor sabor.',
      image:
        '/buffet-images/fresh-premium-ingredients-vegetables-meats-gourmet.jpg',
      width: 400,
      height: 256,
    },
    {
      title: 'Equipe Profissional',
      description:
        'Nossa equipe é treinada e experiente, garantindo um serviço impecável do início ao fim.',
      image:
        '/buffet-images/professional-catering-staff-in-uniform-serving-ele.jpg',
      width: 400,
      height: 256,
    },
    {
      title: 'Cardápio Personalizado',
      description:
        'Criamos cardápios sob medida para seu evento, respeitando preferências e restrições alimentares.',
      image: '/buffet-images/elegant-buffet-menu-variety-of-gourmet-dishes.jpg',
      width: 400,
      height: 256,
    },
  ];

  return (
    <section
      id='diferenciais'
      className='py-20 bg-primary text-primary-foreground'
    >
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 px-4'>
          CONHEÇA NOSSOS DIFERENCIAIS
        </h2>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto'>
          {differentials.map((item, index) => (
            <Card
              key={index}
              className='overflow-hidden bg-card border-2 border-accent/20 hover:border-accent transition-colors'
            >
              <div className='relative h-48 sm:h-56 md:h-64 bg-muted'>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  className='w-full h-full object-cover'
                  placeholder='blur'
                  blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
              </div>

              <div className='p-4 md:p-6'>
                <h3 className='text-xl md:text-2xl font-bold text-card-foreground mb-3 md:mb-4'>
                  {item.title}
                </h3>

                <p className='text-sm md:text-base text-card-foreground/80 leading-relaxed'>
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
