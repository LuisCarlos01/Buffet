import { Card } from "@/components/ui/card"

export function Differentials() {
  const differentials = [
    {
      title: "Ingredientes Premium",
      description: "Trabalhamos apenas com ingredientes selecionados e de alta qualidade para garantir o melhor sabor.",
      image: "/fresh-premium-ingredients-vegetables-meats-gourmet.jpg",
    },
    {
      title: "Equipe Profissional",
      description: "Nossa equipe é treinada e experiente, garantindo um serviço impecável do início ao fim.",
      image: "/professional-catering-staff-in-uniform-serving-ele.jpg",
    },
    {
      title: "Cardápio Personalizado",
      description: "Criamos cardápios sob medida para seu evento, respeitando preferências e restrições alimentares.",
      image: "/elegant-buffet-menu-variety-of-gourmet-dishes.jpg",
    },
  ]

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">CONHEÇA NOSSOS DIFERENCIAIS</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentials.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-2 border-accent/20 hover:border-accent transition-colors"
            >
              <div
                className="h-64 bg-muted"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">{item.title}</h3>

                <p className="text-card-foreground/80 leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
