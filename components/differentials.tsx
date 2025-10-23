'use client';

import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Utensils, Fish, Heart, Pizza, Coffee, Zap, Wine } from 'lucide-react';

export function Differentials() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [isMobile, setIsMobile] = useState(false);
  const touchStartRef = useRef<{ [key: number]: number }>({});
  const touchEndRef = useRef<{ [key: number]: number }>({});

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleCardFlip = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleTouchStart = (e: React.TouchEvent, index: number) => {
    touchStartRef.current[index] = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent, index: number) => {
    if (!touchStartRef.current[index]) return;

    touchEndRef.current[index] = e.changedTouches[0].clientX;
    const deltaX = Math.abs(
      touchEndRef.current[index] - touchStartRef.current[index]
    );

    // Se o movimento foi pequeno (tap), flip o card
    if (deltaX < 10) {
      toggleCardFlip(index);
    }

    // Limpar referências
    delete touchStartRef.current[index];
    delete touchEndRef.current[index];
  };

  const differentials = [
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
              {/* Card com Overlay de Menu */}
              <div className='bg-[#962339] border-2 border-[#A52A2A] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl'>
                {/* Container da Imagem com Overlay */}
                <div className='relative group'>
                  <div className='relative h-48 sm:h-56 md:h-64'>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className='object-cover'
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                  </div>
                  
                  {/* Overlay com Menu */}
                  <div className='absolute inset-0 bg-[#962339]/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-4'>
                    {/* Título do Cardápio */}
                    <h4 className='text-[#f5e0a9] font-bold text-xl mb-4 text-center'>
                      Cardápio Especial
                    </h4>
                    
                    {/* Lista de Especialidades */}
                    <ul className='space-y-2 text-center'>
                      {item.specialties.map((specialty, specialtyIndex) => (
                        <motion.li
                          key={specialtyIndex}
                          className='text-[#f5e0a9] text-base font-medium'
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: specialtyIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                        >
                          • {specialty}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Título */}
                <div className='bg-[#962339] px-4 py-3'>
                  <h3 className='text-[#f5e0a9] font-bold text-lg md:text-xl text-center'>
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
