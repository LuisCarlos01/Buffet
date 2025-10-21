"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Com quanto tempo de antecedência devo fazer a reserva?",
      answer:
        "Recomendamos fazer a reserva com pelo menos 30 dias de antecedência para garantir a disponibilidade na data desejada. Para eventos maiores ou em datas comemorativas, sugerimos 60 dias ou mais.",
    },
    {
      question: "Qual é o número mínimo e máximo de convidados?",
      answer:
        "Atendemos eventos a partir de 50 convidados. Não temos limite máximo - já realizamos eventos para mais de 1000 pessoas. Nossa estrutura se adapta ao tamanho do seu evento.",
    },
    {
      question: "Vocês fornecem toda a estrutura necessária?",
      answer:
        "Sim! Fornecemos mesas, cadeiras, toalhas, louças, talheres, copos, equipe de garçons, chefs e toda a estrutura necessária para o buffet. Também podemos indicar parceiros para decoração e outros serviços.",
    },
    {
      question: "É possível personalizar o cardápio?",
      answer:
        "Absolutamente! Trabalhamos com cardápios totalmente personalizáveis. Você pode escolher os pratos, adaptar receitas e criar um menu exclusivo que combine com o tema e estilo do seu evento.",
    },
    {
      question: "Vocês atendem restrições alimentares?",
      answer:
        "Sim, atendemos todas as restrições alimentares como vegetarianos, veganos, celíacos, intolerantes à lactose e outras necessidades especiais. Basta informar com antecedência.",
    },
    {
      question: "Como funciona o pagamento?",
      answer:
        "Trabalhamos com sinal de 50% na confirmação do evento e o restante até 7 dias antes da data. Aceitamos diversas formas de pagamento: PIX, transferência bancária, cartão de crédito e boleto.",
    },
    {
      question: "Vocês realizam degustação antes do evento?",
      answer:
        "Sim! Para eventos acima de 100 pessoas, oferecemos uma degustação gratuita para que você possa experimentar os pratos escolhidos e fazer ajustes se necessário.",
    },
    {
      question: "Qual a área de atendimento?",
      answer:
        "Atendemos toda a região metropolitana e cidades vizinhas. Para eventos fora dessa área, consulte-nos para verificar a viabilidade e possíveis custos adicionais de deslocamento.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-muted-foreground">Tire suas dúvidas sobre nossos serviços</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-muted-foreground leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
