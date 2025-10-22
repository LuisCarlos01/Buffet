/**
 * Utilitários para integração com WhatsApp
 */

/**
 * Formatação de telefone brasileiro
 */
export function formatPhoneNumber(value: string): string {
  // Remove todos os caracteres não numéricos
  const numbers = value.replace(/\D/g, '');

  // Limita a 11 dígitos (DDD + 9 dígitos)
  const limitedNumbers = numbers.slice(0, 11);

  // Aplica a máscara baseada no tamanho
  if (limitedNumbers.length <= 2) {
    return limitedNumbers;
  } else if (limitedNumbers.length <= 6) {
    return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2)}`;
  } else if (limitedNumbers.length <= 10) {
    return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2, 6)}-${limitedNumbers.slice(6)}`;
  } else {
    return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2, 7)}-${limitedNumbers.slice(7)}`;
  }
}

/**
 * Valida se o telefone está no formato brasileiro correto
 */
export function isValidBrazilianPhone(phone: string): boolean {
  const numbers = phone.replace(/\D/g, '');
  return numbers.length >= 10 && numbers.length <= 11;
}

/**
 * Remove formatação do telefone para envio
 */
export function cleanPhoneNumber(phone: string): string {
  return phone.replace(/\D/g, '');
}

export interface WhatsAppMessage {
  name: string;
  email: string;
  phone: string;
  eventDate?: string;
  guests?: string;
  eventType?: string;
  cuisines?: string[];
  message?: string;
  source: 'hero' | 'contact';
}

export function generateWhatsAppMessage(data: WhatsAppMessage): string {
  const { name, email, phone, eventDate, guests, eventType, cuisines, message, source } = data;

  let messageText = `🍽️ *Nova solicitação de orçamento - Buffet Pierroti Eventos*\n\n`;

  messageText += `👤 *Nome:* ${name}\n`;
  messageText += `📧 *Email:* ${email}\n`;
  messageText += `📱 *Telefone:* ${phone}\n`;

  if (eventDate) {
    messageText += `📅 *Data do Evento:* ${eventDate}\n`;
  }

  if (guests) {
    messageText += `👥 *Número de Convidados:* ${guests}\n`;
  }

  if (eventType) {
    messageText += `🎉 *Tipo de Evento:* ${eventType}\n`;
  }

  if (cuisines && cuisines.length > 0) {
    messageText += `🍽️ *Iguarias Desejadas:* ${cuisines.join(', ')}\n`;
  }

  if (message) {
    messageText += `💬 *Mensagem:* ${message}\n`;
  }

  messageText += `\n📍 *Origem:* ${source === 'hero' ? 'Formulário Principal' : 'Formulário de Contato'}\n`;
  messageText += `🕒 *Enviado em:* ${new Date().toLocaleString('pt-BR')}\n\n`;
  messageText += `_Mensagem enviada automaticamente pelo site do Buffet Pierroti Eventos_`;

  return messageText;
}

export function generateWhatsAppURL(
  message: string,
  phoneNumber: string = '5535991404039'
): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

export function openWhatsApp(data: WhatsAppMessage): void {
  const message = generateWhatsAppMessage(data);
  const url = generateWhatsAppURL(message);

  // Abre o WhatsApp em uma nova aba
  window.open(url, '_blank');
}

export function validateFormData(data: Partial<WhatsAppMessage>): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!data.name?.trim()) {
    errors.push('Nome é obrigatório');
  }

  if (!data.email?.trim()) {
    errors.push('Email é obrigatório');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Email inválido');
  }

  if (!data.phone?.trim()) {
    errors.push('Telefone é obrigatório');
  } else if (!isValidBrazilianPhone(data.phone)) {
    errors.push('Telefone deve ter 10 ou 11 dígitos no formato brasileiro');
  }

  if (data.eventDate && new Date(data.eventDate) < new Date()) {
    errors.push('Data do evento não pode ser no passado');
  }

  if (data.guests && (isNaN(Number(data.guests)) || Number(data.guests) < 50)) {
    errors.push('Número mínimo de convidados é 50');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
