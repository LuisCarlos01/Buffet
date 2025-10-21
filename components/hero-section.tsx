"use client"

import type React from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { openWhatsApp, validateFormData, type WhatsAppMessage } from "@/lib/whatsapp-utils"

export function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors([])

    // Validar dados do formulário
    const validation = validateFormData(formData)
    
    if (!validation.isValid) {
      setErrors(validation.errors)
      setIsSubmitting(false)
      return
    }

    try {
      // Preparar dados para WhatsApp
      const whatsappData: WhatsAppMessage = {
        ...formData,
        source: 'hero'
      }

      // Abrir WhatsApp
      openWhatsApp(whatsappData)
      
      // Limpar formulário após envio
      setFormData({ name: "", email: "", phone: "" })
      
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      setErrors(['Erro ao enviar mensagem. Tente novamente.'])
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="mb-8 md:mb-12 flex justify-center">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex items-center justify-center">
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
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 text-balance">
          LEVE O MELHOR BUFFET PARA SUA FESTA
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto text-pretty px-4">
          Qualidade, sabor e um atendimento impecável para transformar seu evento em uma experiência inesquecível!
        </p>

        {/* Form */}
        <div className="max-w-md mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">PREENCHA SEUS DADOS</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Exibir erros */}
            {errors.length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-600">
                <ul className="list-disc list-inside space-y-1">
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

            <Input
              type="text"
              placeholder="Nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-white/95 text-foreground placeholder:text-muted-foreground h-12"
              required
              disabled={isSubmitting}
            />

            <Input
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-white/95 text-foreground placeholder:text-muted-foreground h-12"
              required
              disabled={isSubmitting}
            />

            <Input
              type="tel"
              placeholder="(DDD) + WhatsApp"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-white/95 text-foreground placeholder:text-muted-foreground h-12"
              required
              disabled={isSubmitting}
            />

            <Button
              type="submit"
              className="w-full h-12 text-lg font-semibold bg-accent hover:bg-accent/90 text-accent-foreground"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "SOLICITAR ORÇAMENTO"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
