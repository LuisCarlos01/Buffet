import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Maria Silva",
      event: "Casamento - 200 convidados",
      text: "O buffet foi simplesmente perfeito! A variedade de pratos, a apresentação impecável e o sabor excepcional fizeram do nosso casamento um evento inesquecível. Todos os convidados elogiaram!",
      rating: 5,
    },
    {
      name: "João Santos",
      event: "Evento Corporativo - 150 pessoas",
      text: "Contratamos para um evento da empresa e superou todas as expectativas. Profissionalismo, pontualidade e comida de altíssima qualidade. Com certeza voltaremos a contratar!",
      rating: 5,
    },
    {
      name: "Ana Paula Costa",
      event: "Aniversário - 80 convidados",
      text: "Experiência maravilhosa do início ao fim! A equipe foi super atenciosa, ajudou no planejamento e executou tudo perfeitamente. O buffet foi o destaque da festa!",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 px-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Depoimentos reais de quem já experimentou nosso buffet
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-6 md:p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-card-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
