import { Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className='bg-card border-t border-border'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid md:grid-cols-4 gap-8 mb-8'>
          <div>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-12 h-12 flex items-center justify-center'>
                <Image
                  src='/logos/Pierroti_Logo_Vermelha.svg'
                  alt='Pierroti Buffet e Eventos'
                  width={48}
                  height={48}
                  className='w-full h-full object-contain'
                />
              </div>
              <span className='text-xl font-bold text-foreground'>
                Pierroti Buffet e Eventos
              </span>
            </div>
            <p className='text-muted-foreground text-sm leading-relaxed'>
              Transformando eventos em experiências gastronômicas inesquecíveis!
            </p>
          </div>

          <div>
            <h3 className='font-semibold text-foreground mb-4'>
              Links Rápidos
            </h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#como-funciona'
                  className='text-muted-foreground hover:text-primary smooth-link text-sm'
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  href='#diferenciais'
                  className='text-muted-foreground hover:text-primary smooth-link text-sm'
                >
                  Diferenciais
                </a>
              </li>
              <li>
                <a
                  href='#galeria'
                  className='text-muted-foreground hover:text-primary smooth-link text-sm'
                >
                  Galeria
                </a>
              </li>
              <li>
                <a
                  href='#faq'
                  className='text-muted-foreground hover:text-primary smooth-link text-sm'
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href='#contato'
                  className='text-muted-foreground hover:text-primary smooth-link text-sm'
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold text-foreground mb-4'>Serviços</h3>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>Casamentos</li>
              <li>Eventos Corporativos</li>
              <li>Aniversários</li>
              <li>Formaturas</li>
              <li>Confraternizações</li>
              <li>Eventos Sociais</li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold text-foreground mb-4'>Contato</h3>
            <ul className='space-y-3'>
              <li className='flex items-center gap-2 text-sm text-muted-foreground'>
                <Phone className='w-4 h-4 text-primary' />
                (35) 99140-4039
              </li>
              <li className='flex items-center gap-2 text-sm text-muted-foreground'>
                <Mail className='w-4 h-4 text-primary' />
                pierrotbuffet@gmail.com
              </li>
              <li className='flex items-start gap-2 text-sm text-muted-foreground'>
                <MapPin className='w-4 h-4 text-primary mt-0.5 flex-shrink-0' />
                <span>
                  R. Resense Silva, 18
                  <br />
                  Varginha - MG
                </span>
              </li>
            </ul>

            <div className='flex gap-3 mt-6'>
              <a
                href='https://www.instagram.com/pierrotibuffeteeventos?igsh=ZnByY3VxdzFpeW43'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group'
                aria-label='Instagram @pierrotibuffeteeventos'
              >
                <Instagram className='w-5 h-5 text-primary group-hover:text-primary-foreground' />
              </a>
              <button
                className='w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group opacity-50 cursor-not-allowed'
                aria-label='YouTube (em breve)'
                title='YouTube em breve'
                disabled
              >
                <Youtube className='w-5 h-5 text-primary group-hover:text-primary-foreground' />
              </button>
            </div>
          </div>
        </div>

        <div className='border-t border-border pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground'>
            <p>
              © 2025 Pierroti Buffet e Eventos. Todos os direitos reservados.
            </p>
            <div className='flex gap-6'>
              <a
                href='#politica-privacidade'
                className='hover:text-primary transition-colors'
              >
                Política de Privacidade
              </a>
              <a
                href='#termos-uso'
                className='hover:text-primary transition-colors'
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
