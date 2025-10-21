/**
 * Utilitários para integração com WhatsApp
 */

export interface WhatsAppMessage {
  name: string
  email: string
  phone: string
  eventDate?: string
  guests?: string
  message?: string
  source: 'hero' | 'contact'
}

export function generateWhatsAppMessage(data: WhatsAppMessage): string {
  const { name, email, phone, eventDate, guests, message, source } = data
  
  let messageText = `🍽️ *Nova solicitação de orçamento - Buffet Pierroti Eventos*\n\n`
  
  messageText += `👤 *Nome:* ${name}\n`
  messageText += `📧 *Email:* ${email}\n`
  messageText += `📱 *Telefone:* ${phone}\n`
  
  if (eventDate) {
    messageText += `📅 *Data do Evento:* ${eventDate}\n`
  }
  
  if (guests) {
    messageText += `👥 *Número de Convidados:* ${guests}\n`
  }
  
  if (message) {
    messageText += `💬 *Mensagem:* ${message}\n`
  }
  
  messageText += `\n📍 *Origem:* ${source === 'hero' ? 'Formulário Principal' : 'Formulário de Contato'}\n`
  messageText += `🕒 *Enviado em:* ${new Date().toLocaleString('pt-BR')}\n\n`
  messageText += `_Mensagem enviada automaticamente pelo site do Buffet Pierroti Eventos_`
  
  return messageText
}

export function generateWhatsAppURL(message: string, phoneNumber: string = '5535991404039'): string {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}

export function openWhatsApp(data: WhatsAppMessage): void {
  const message = generateWhatsAppMessage(data)
  const url = generateWhatsAppURL(message)
  
  // Abre o WhatsApp em uma nova aba
  window.open(url, '_blank')
}

export function validateFormData(data: Partial<WhatsAppMessage>): { isValid: boolean; errors: string[] } {
  const errors: string[] = []
  
  if (!data.name?.trim()) {
    errors.push('Nome é obrigatório')
  }
  
  if (!data.email?.trim()) {
    errors.push('Email é obrigatório')
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Email inválido')
  }
  
  if (!data.phone?.trim()) {
    errors.push('Telefone é obrigatório')
  } else if (!/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(data.phone)) {
    errors.push('Telefone deve estar no formato (DDD) XXXXX-XXXX')
  }
  
  if (data.eventDate && new Date(data.eventDate) < new Date()) {
    errors.push('Data do evento não pode ser no passado')
  }
  
  if (data.guests && (isNaN(Number(data.guests)) || Number(data.guests) < 50)) {
    errors.push('Número mínimo de convidados é 50')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}
