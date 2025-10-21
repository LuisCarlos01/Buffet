"use client"

import type React from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-muted flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <p className="text-lg font-semibold mb-2">Vídeo de Fundo</p>
            <p className="text-sm">Aqui será inserido o vídeo principal do buffet</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <div className="w-48 h-48 flex items-center justify-center">
            <Image
              src="/logos/Pierroti_Logo_Vermelha.svg"
              alt="Buffet Pierroti Eventos"
              width={192}
              height={192}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
          LEVE O MELHOR BUFFET PARA SUA FESTA
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto text-pretty">
          Qualidade, sabor e um atendimento impecável para transformar seu evento em uma experiência inesquecível!
        </p>

        {/* Form */}
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">PREENCHA SEUS DADOS</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-white/95 text-foreground placeholder:text-muted-foreground h-12"
              required
            />

            <Input
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-white/95 text-foreground placeholder:text-muted-foreground h-12"
              required
            />

            <Input
              type="tel"
              placeholder="(DDD) + WhatsApp"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-white/95 text-foreground placeholder:text-muted-foreground h-12"
              required
            />

            <Button
              type="submit"
              className="w-full h-12 text-lg font-semibold bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              SOLICITAR ORÇAMENTO
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
