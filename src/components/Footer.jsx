import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import TentDraw from './motion/TentDraw';
import { getWhatsAppUrl } from '../config/site';

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=MS+Tendas+R.+Nova+Andradina+130+Cuiab%C3%A1';

const Footer = () => {
  return (
    <footer className="bg-lona text-white">
      {/* Chamada final */}
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-24 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.5rem)] font-extrabold leading-[0.98] tracking-tight">
            Diga a data. <span className="text-coral-soft">A gente monta.</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg text-white/75">
            Conte o tamanho do espaço e o tipo de evento: respondemos com a medida certa e o orçamento.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              href={getWhatsAppUrl('Olá! Vim pelo site e gostaria de um orçamento de tenda.')}
              variant="white"
              icon={<MessageCircle size={18} />}
            >
              Chamar no WhatsApp
            </Button>
            <Button to="/contato" variant="ghostLight">
              Formulário de orçamento
            </Button>
          </div>
        </div>
        <TentDraw inView className="mx-auto hidden max-w-[16rem] text-white/30 lg:col-span-4 lg:block" />
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-5 max-w-sm leading-relaxed text-white/70">
              Estruturas para eventos em Cuiabá e região. Tendas piramidais de alta qualidade para festas, feiras e eventos corporativos.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/50">Navegação</h4>
            <ul className="space-y-2.5">
              {[
                ['Início', '/'],
                ['Nossas Tendas', '/tendas'],
                ['Galeria de Fotos', '/galeria'],
                ['Solicitar Orçamento', '/contato'],
              ].map(([name, path]) => (
                <li key={path}>
                  <Link to={path} className="text-white/85 underline-offset-4 transition hover:text-white hover:underline">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/50">Contato</h4>
            <ul className="space-y-2.5 text-white/85">
              <li><a href="tel:+5565999047060" className="underline-offset-4 hover:text-white hover:underline">(65) 99904-7060</a></li>
              <li><a href="tel:+5565992087365" className="underline-offset-4 hover:text-white hover:underline">(65) 99208-7365</a></li>
              <li><a href="mailto:mstendas2016@gmail.com" className="underline-offset-4 hover:text-white hover:underline">mstendas2016@gmail.com</a></li>
              <li>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-white hover:underline">
                  R. Nova Andradina, 130 - Jd. Presidente I, Cuiabá - MT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-white/55 sm:px-8 md:flex-row">
          <p>© {new Date().getFullYear()} MS Tendas Ltda. Todos os direitos reservados.</p>
          <p>CNPJ: 28.100.559/0001-02</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
