'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import {
  openWhatsApp,
  validateFormData,
  formatPhoneNumber,
  type WhatsAppMessage,
} from '@/lib/whatsapp-utils';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guests: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors([]);

    // Validar dados do formulário
    const validation = validateFormData(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Preparar dados para WhatsApp
      const whatsappData: WhatsAppMessage = {
        ...formData,
        source: 'contact',
      };

      // Abrir WhatsApp
      openWhatsApp(whatsappData);

      // Limpar formulário após envio
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        guests: '',
        message: '',
      });
    } catch (_error) {
      // console.error('Erro ao enviar formulário:', error);
      setErrors(['Erro ao enviar mensagem. Tente novamente.']);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const formatted = formatPhoneNumber(value);
      setFormData({
        ...formData,
        [name]: formatted,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <section
      id='contato'
      className='py-20 px-4 bg-gradient-to-br from-primary/5 to-primary/10'
    >
      <div className='container mx-auto max-w-6xl'>
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 px-4'>
            Solicite um Orçamento
          </h2>
          <p className='text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4'>
            Preencha o formulário e entraremos em contato para criar o buffet
            perfeito para seu evento
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8 md:gap-12'>
          <div>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Exibir erros */}
              {errors.length > 0 && (
                <div className='bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-600'>
                  <h4 className='font-semibold mb-2'>
                    Por favor, corrija os seguintes erros:
                  </h4>
                  <ul className='list-disc list-inside space-y-1'>
                    {errors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-foreground mb-2'
                >
                  Nome Completo *
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed'
                  disabled={isSubmitting}
                />
              </div>

              <div className='grid sm:grid-cols-2 gap-4'>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-foreground mb-2'
                  >
                    E-mail *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed'
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-foreground mb-2'
                  >
                    Telefone *
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder='(35) 99999-9999'
                    className='w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed'
                    disabled={isSubmitting}
                    maxLength={15}
                  />
                </div>
              </div>

              <div className='grid sm:grid-cols-2 gap-4'>
                <div>
                  <label
                    htmlFor='eventDate'
                    className='block text-sm font-medium text-foreground mb-2'
                  >
                    Data do Evento *
                  </label>
                  <input
                    type='date'
                    id='eventDate'
                    name='eventDate'
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className='w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed'
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label
                    htmlFor='guests'
                    className='block text-sm font-medium text-foreground mb-2'
                  >
                    Número de Convidados *
                  </label>
                  <input
                    type='number'
                    id='guests'
                    name='guests'
                    required
                    min='50'
                    value={formData.guests}
                    onChange={handleChange}
                    className='w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed'
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-foreground mb-2'
                >
                  Mensagem
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Conte-nos mais sobre seu evento...'
                  className='w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none'
                />
              </div>

              <Button
                type='submit'
                size='lg'
                className='w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold'
                disabled={isSubmitting}
              >
                <Send className='w-5 h-5 mr-2' />
                {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
              </Button>
            </form>
          </div>

          <div className='space-y-8'>
            <div>
              <h3 className='text-2xl font-bold text-foreground mb-6'>
                Informações de Contato
              </h3>
              <div className='space-y-6'>
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0'>
                    <Phone className='w-6 h-6 text-primary' />
                  </div>
                  <div>
                    <p className='font-semibold text-foreground mb-1'>
                      Telefone
                    </p>
                    <p className='text-muted-foreground'>(35) 99140-4039</p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0'>
                    <Mail className='w-6 h-6 text-primary' />
                  </div>
                  <div>
                    <p className='font-semibold text-foreground mb-1'>E-mail</p>
                    <p className='text-muted-foreground'>
                      pierrotbuffet@gmail.com
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0'>
                    <MapPin className='w-6 h-6 text-primary' />
                  </div>
                  <div>
                    <p className='font-semibold text-foreground mb-1'>
                      Endereço
                    </p>
                    <p className='text-muted-foreground'>
                      R. Resende Silva, 18 - Centro
                    </p>
                    <p className='text-muted-foreground'>
                      Varginha - MG, 37006-050
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-card p-6 rounded-2xl border border-border'>
              <h4 className='font-semibold text-foreground mb-3'>
                Horário de Atendimento
              </h4>
              <div className='space-y-2 text-muted-foreground'>
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 14h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
