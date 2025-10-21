"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    guests: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica de envio do formulário
    console.log("Form submitted:", formData)
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Solicite um Orçamento</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preencha o formulário e entraremos em contato para criar o buffet perfeito para seu evento
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-foreground mb-2">
                    Data do Evento *
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-foreground mb-2">
                    Número de Convidados *
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    required
                    min="50"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-nos mais sobre seu evento..."
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Solicitação
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Telefone</p>
                    <p className="text-muted-foreground">(35) 99140-4039</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">E-mail</p>
                    <p className="text-muted-foreground">pierrotbuffet@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Endereço</p>
                    <p className="text-muted-foreground">R. Resende Silva, 18 - Centro</p>
                    <p className="text-muted-foreground">Varginha - MG, 37006-050</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border">
              <h4 className="font-semibold text-foreground mb-3">Horário de Atendimento</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 14h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
