"use client"

import { Button } from "@/components/ui/button"

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 md:mb-6 px-4">COMO FUNCIONA NOSSO BUFFET?</h2>

            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6 md:mb-8 px-4">
              Levamos a experiência completa de um buffet de alta qualidade até você! Seja em casa, no salão de festas,
              na empresa ou até em um sítio, nossa equipe cuida de tudo para que você aproveite sem preocupações.
            </p>

            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
              SOLICITAR ORÇAMENTO
            </Button>
          </div>

          {/* Video Placeholder */}
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-muted">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1" />
                </div>
                <p className="text-lg font-semibold mb-2">Vídeo Explicativo</p>
                <p className="text-sm">Aqui será inserido o vídeo de como funciona nosso buffet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
