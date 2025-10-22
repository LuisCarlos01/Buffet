'use client';

import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Star,
  Users,
  Palette,
  Utensils,
  Fish,
  Heart,
  Pizza,
  Coffee,
  Zap,
  Wine,
} from 'lucide-react';

export function Differentials() {
  const differentials = [
    {
      title: 'Ingredientes Premium',
      description:
        'Trabalhamos apenas com ingredientes selecionados e de alta qualidade para garantir o melhor sabor.',
      image:
        '/buffet-images/fresh-premium-ingredients-vegetables-meats-gourmet.jpg',
      icon: Star,
      specialties: [
        'Carnes Nobres',
        'Vegetais Orgânicos',
        'Temperos Artesanais',
        'Azeites Premium',
        'Queijos Especiais',
      ],
    },
    {
      title: 'Equipe Profissional',
      description:
        'Nossa equipe é treinada e experiente, garantindo um serviço impecável do início ao fim.',
      image:
        '/buffet-images/professional-catering-staff-in-uniform-serving-ele.jpg',
      icon: Users,
      specialties: [
        'Chefs Especializados',
        'Garçons Treinados',
        'Sommeliers',
        'Confeiteiros',
        'Bartenders',
      ],
    },
    {
      title: 'Cardápio Personalizado',
      description:
        'Criamos cardápios sob medida para seu evento, respeitando preferências e restrições alimentares.',
      image: '/buffet-images/elegant-buffet-menu-variety-of-gourmet-dishes.jpg',
      icon: Palette,
      specialties: [
        'Menu Vegetariano',
        'Opções Veganas',
        'Sem Glúten',
        'Sem Lactose',
        'Crianças',
      ],
    },
    {
      title: 'Fast Food Premium',
      description:
        'Hambúrgueres artesanais, batatas fritas crocantes e lanches gourmet que agradam todos os paladares.',
      image: '/buffet-images/variety-of-gourmet-appetizers-on-display.jpg',
      icon: Utensils,
      specialties: [
        'Hambúrguer Artesanal',
        'Batata Frita Crocante',
        'Nuggets Premium',
        'Hot Dog Gourmet',
        'Sanduíches Especiais',
      ],
    },
    {
      title: 'Comida Japonesa',
      description:
        'Sushi fresco, sashimi de qualidade e pratos orientais preparados com técnicas tradicionais.',
      image: '/buffet-images/elegant-buffet-table-with-gourmet-dishes.jpg',
      icon: Fish,
      specialties: [
        'Sushi Variado',
        'Sashimi Fresco',
        'Temaki',
        'Yakissoba',
        'Gyoza',
      ],
    },
    {
      title: 'Brigadeiro de Colher',
      description:
        'Doces brasileiros tradicionais com sabores únicos e apresentação sofisticada para adoçar seu evento.',
      image:
        '/buffet-images/dessert-buffet-table-with-elegant-presentation.jpg',
      icon: Heart,
      specialties: [
        'Brigadeiro Tradicional',
        'Beijinho',
        'Cajuzinho',
        'Olho de Sogra',
        'Pudim de Leite',
      ],
    },
    {
      title: 'Comida Italiana',
      description:
        'Massas frescas, risotos cremosos e pratos autênticos da culinária italiana preparados com amor.',
      image: '/buffet-images/professional-chefs-preparing-food-at-event.jpg',
      icon: Pizza,
      specialties: [
        'Pizza Artesanal',
        'Espaguete Carbonara',
        'Risotto Cremoso',
        'Lasanha',
        'Ravioli',
      ],
    },
    {
      title: 'Comida de Buteco',
      description:
        'Petiscos tradicionais, coxinhas, bolinhos e quitutes que fazem sucesso em qualquer festa.',
      image: '/buffet-images/variety-of-gourmet-appetizers-on-display.jpg',
      icon: Coffee,
      specialties: [
        'Coxinha',
        'Bolinho de Bacalhau',
        'Pastel',
        'Empada',
        'Kibe',
      ],
    },
    {
      title: 'Espetinhos Gourmet',
      description:
        'Carnes grelhadas, legumes frescos e espetinhos variados preparados na hora para máxima qualidade.',
      image: '/buffet-images/outdoor-buffet-event-setup.jpg',
      icon: Zap,
      specialties: [
        'Espetinho de Carne',
        'Espetinho de Frango',
        'Espetinho de Peixe',
        'Espetinho Vegetariano',
        'Espetinho de Camarão',
      ],
    },
    {
      title: 'Drinks Especiais',
      description:
        'Coquetéis exclusivos, drinks personalizados e bebidas refrescantes para acompanhar sua festa.',
      image:
        'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      icon: Wine,
      specialties: [
        'Caipirinha Premium',
        'Coquetéis Exclusivos',
        'Sucos Naturais',
        'Refrigerantes',
        'Água e Isotônicos',
      ],
    },
  ];

  return (
    <section id='diferenciais' className='py-20 premium-differentials'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight'>
            CONHEÇA NOSSOS{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>
              DIFERENCIAIS
            </span>
        </h2>
          <p className='text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4'>
            Descubra o que nos torna únicos e especiais no mercado de buffet
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 max-w-8xl mx-auto'>
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{
                y: -12,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              className='group'
            >
              <Card className='differential-card overflow-hidden'>
                <div className='flip-card'>
                  <div className='flip-card-inner'>
                    {/* Frente do Card */}
                    <div className='flip-card-front'>
                      {/* Número do card */}
                      <div className='differential-number'>
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      {/* Badge de categoria */}
                      <div className='absolute top-4 left-4 z-10'>
                        <div className='bg-[#A52A2A] backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl border border-white/20'>
                          {item.title}
                        </div>
                      </div>

                      <div className='differential-image-container relative h-48 sm:h-56 md:h-64 bg-muted mt-0'>
                        <motion.div
                          initial={{ opacity: 0, scale: 1.2 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.8,
                            ease: [0.4, 0, 0.2, 1],
                            delay: index * 0.1 + 0.2,
                          }}
                          viewport={{ once: true }}
                          className='w-full h-full'
                          whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.4, ease: 'easeOut' },
                          }}
                        >
                <Image
                  src={item.image}
                  alt={item.title}
                            fill
                            className='object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
                        </motion.div>
                      </div>

                      {/* Seta curva elegante */}
                      <div className='absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0'>
                        <div className='bg-white/30 backdrop-blur-sm rounded-full p-2 border border-white/40 shadow-lg'>
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 24 24'
                            fill='none'
                            className='text-white group-hover:animate-bounce'
                          >
                            <path
                              d='M7 17L17 7M17 7H7M17 7V17'
                              stroke='currentColor'
                              strokeWidth='2.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </div>
                      </div>
              </div>

                    {/* Verso do Card - Mini Cardápio */}
                    <div className='flip-card-back'>
                      <motion.div
                        className='menu-icon'
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <item.icon className='w-4 h-4' />
                      </motion.div>

                      <motion.div
                        className='text-center mb-4'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <h3 className='menu-title'>{item.title}</h3>
                        <p className='text-sm opacity-80 mt-1'>
                          Cardápio Especial
                        </p>
                      </motion.div>

                      <ul className='menu-items'>
                        {item.specialties.map((specialty, specialtyIndex) => (
                          <motion.li
                            key={specialtyIndex}
                            className='menu-item'
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: 0.4 + specialtyIndex * 0.1,
                            }}
                          >
                            {specialty}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
              </div>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
