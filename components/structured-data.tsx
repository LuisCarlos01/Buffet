export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Buffet Pierroti Eventos',
    description:
      'Buffet completo para eventos em Varginha-MG. Qualidade, sabor e atendimento impecável para casamentos, aniversários, formaturas e eventos corporativos.',
    url: 'https://buffet-pierroti-eventos.vercel.app',
    telephone: '+55-35-99140-4039',
    email: 'pierrotibuffet@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'R. Resende Silva, 22',
      addressLocality: 'Varginha',
      addressRegion: 'MG',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-21.5558',
      longitude: '-45.4303',
    },
    openingHours: ['Mo-Fr 09:00-18:00', 'Sa 09:00-14:00'],
    priceRange: '$$',
    paymentAccepted: [
      'PIX',
      'Cartão de Crédito',
      'Transferência Bancária',
      'Boleto',
    ],
    currenciesAccepted: 'BRL',
    areaServed: {
      '@type': 'City',
      name: 'Varginha',
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '-21.5558',
        longitude: '-45.4303',
      },
      geoRadius: '50000',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Buffet',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Buffet para Casamentos',
            description: 'Serviço completo de buffet para casamentos',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Buffet para Eventos Corporativos',
            description: 'Serviço de buffet para eventos empresariais',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Buffet para Aniversários',
            description: 'Serviço de buffet para festas de aniversário',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Buffet para Formaturas',
            description: 'Serviço de buffet para formaturas',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '3',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Maria Silva',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        reviewBody:
          'O buffet foi simplesmente perfeito! A variedade de pratos, a apresentação impecável e o sabor excepcional fizeram do nosso casamento um evento inesquecível.',
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'João Santos',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        reviewBody:
          'Contratamos para um evento da empresa e superou todas as expectativas. Profissionalismo, pontualidade e comida de altíssima qualidade.',
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Ana Paula Costa',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        reviewBody:
          'Experiência maravilhosa do início ao fim! A equipe foi super atenciosa, ajudou no planejamento e executou tudo perfeitamente.',
      },
    ],
    sameAs: ['https://www.instagram.com/pierrotibuffeteeventos'],
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
