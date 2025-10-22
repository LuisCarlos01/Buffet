'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useFadeInAnimation } from '@/hooks/use-fade-in';

export function FAQ() {
  const fadeInRef = useFadeInAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Com quanto tempo de antecedência devo fazer a reserva?',
      answer:
        'Recomendamos fazer a reserva com pelo menos 30 dias de antecedência para garantir a disponibilidade na data desejada. Para eventos maiores ou em datas comemorativas, sugerimos 60 dias ou mais.',
    },
    {
      question: 'Qual é o número mínimo e máximo de convidados?',
      answer:
        'Atendemos eventos a partir de 50 convidados. Não temos limite máximo - já realizamos eventos para mais de 1000 pessoas. Nossa estrutura se adapta ao tamanho do seu evento.',
    },
    {
      question: 'Vocês fornecem toda a estrutura necessária?',
      answer:
        'Sim! Fornecemos mesas, cadeiras, toalhas, louças, talheres, copos, equipe de garçons, chefs e toda a estrutura necessária para o buffet. Também podemos indicar parceiros para decoração e outros serviços.',
    },
    {
      question: 'É possível personalizar o cardápio?',
      answer:
        'Absolutamente! Trabalhamos com cardápios totalmente personalizáveis. Você pode escolher os pratos, adaptar receitas e criar um menu exclusivo que combine com o tema e estilo do seu evento.',
    },
    {
      question: 'Vocês atendem restrições alimentares?',
      answer:
        'Sim, atendemos todas as restrições alimentares como vegetarianos, veganos, celíacos, intolerantes à lactose e outras necessidades especiais. Basta informar com antecedência.',
    },
    {
      question: 'Como funciona o pagamento?',
      answer:
        'Trabalhamos com sinal de 50% na confirmação do evento e o restante até 7 dias antes da data. Aceitamos diversas formas de pagamento: PIX, transferência bancária, cartão de crédito e boleto.',
    },
    {
      question: 'Vocês realizam degustação antes do evento?',
      answer:
        'Sim! Para eventos acima de 100 pessoas, oferecemos uma degustação gratuita para que você possa experimentar os pratos escolhidos e fazer ajustes se necessário.',
    },
    {
      question: 'Qual a área de atendimento?',
      answer:
        'Atendemos Varginha-MG e toda a região sul de Minas Gerais, incluindo cidades como Três Corações, Elói Mendes, Três Pontas, Paraguaçu, Coqueiral e municípios vizinhos. Para eventos fora dessa região, consulte-nos para verificar a viabilidade e possíveis custos adicionais de deslocamento.',
    },
  ];

  return (
    <section
      ref={fadeInRef}
      id='faq'
      className='relative py-24 px-4 bg-gradient-to-b from-background via-muted/10 to-background fade-in-section overflow-hidden'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(198,54,54,0.1),transparent_50%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(165,42,42,0.1),transparent_50%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,224,169,0.1),transparent_50%)]' />
      </div>

      <div className='relative z-10 container mx-auto max-w-5xl'>
        <div className='text-center mb-16 md:mb-20'>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight'>
            Perguntas{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>
              Frequentes
            </span>
          </h2>
          <p className='text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4'>
            Encontre respostas para as principais dúvidas sobre nossos serviços
            e eventos
          </p>
        </div>

        <div className='space-y-6'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='group faq-card bg-gradient-to-r from-card via-card/95 to-card border border-border/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:border-primary/30 hover:-translate-y-1'
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className='w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary/5 group-hover:to-accent/5'
              >
                <div className='flex items-start gap-4 flex-1'>
                  <div className='flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center mt-1 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300'>
                    <span className='text-primary font-bold text-sm'>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <span className='font-semibold text-foreground pr-4 text-lg leading-relaxed group-hover:text-primary transition-colors duration-300'>
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-all duration-500 group-hover:text-accent ${
                    openIndex === index ? 'rotate-180 text-accent' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className='px-8 pb-6'>
                  <div className='pl-12 border-l-2 border-primary/30 bg-gradient-to-r from-primary/5 to-transparent rounded-r-lg p-6'>
                    <p className='text-muted-foreground leading-relaxed text-base'>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
