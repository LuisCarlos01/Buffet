import { UtensilsCrossed, Flame, Sparkles } from "lucide-react"

export function ProcessSteps() {
  const steps = [
    {
      icon: UtensilsCrossed,
      title: "Entrada Especial",
      description: "A experiência começa com uma entrada especial de canapés e petiscos crocantes.",
    },
    {
      icon: Flame,
      title: "Pratos Principais",
      description:
        "Em seguida, servimos uma grande variedade de pratos quentes e frios, preparados na hora, até que todos estejam satisfeitos.",
    },
    {
      icon: Sparkles,
      title: "Sobremesas",
      description: "Para finalizar, nossas irresistíveis sobremesas encerram a noite com chave de ouro!",
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4 md:mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent flex items-center justify-center">
                  <step.icon className="w-8 h-8 md:w-10 md:h-10 text-accent-foreground" />
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">{step.title}</h3>

              <p className="text-sm md:text-base text-foreground/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
