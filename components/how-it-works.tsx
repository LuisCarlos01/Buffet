"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HowItWorks() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">COMO FUNCIONA NOSSO BUFFET?</h2>

            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Levamos a experiência completa de um buffet de alta qualidade até você! Seja em casa, no salão de festas,
              na empresa ou até em um sítio, nossa equipe cuida de tudo para que você aproveite sem preocupações.
            </p>

            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
              SOLICITAR ORÇAMENTO
            </Button>
          </div>

          {/* Video Placeholder */}
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/buffet-images/professional-chefs-preparing-food-at-event.jpg"
              alt="Chefs profissionais preparando comida no evento"
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
