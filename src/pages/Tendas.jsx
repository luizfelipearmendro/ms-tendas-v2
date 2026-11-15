import React from 'react';
import { motion } from 'framer-motion';
import { Check, MessageCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import TentSizes from '../components/TentSizes';
import TriangleReveal from '../components/motion/TriangleReveal';
import Button from '../components/Button';
import { tendas } from '../data/tendas';
import { getWhatsAppUrl } from '../config/site';
import { cn } from '../lib/utils';

const Tendas = () => {
  return (
    <>
      <PageHero
        eyebrow="Catálogo"
        title="Nossas Tendas"
        subtitle="Estruturas modulares de alta qualidade, projetadas para oferecer segurança e conforto em qualquer tipo de evento."
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <TentSizes />
      </section>

      <section className="mx-auto max-w-7xl space-y-20 px-5 pb-32 sm:px-8 lg:space-y-28">
        {tendas.map((tenda, i) => (
          <article key={tenda.id} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <TriangleReveal className={cn('h-80 overflow-hidden rounded-[2rem] sm:h-[28rem] lg:col-span-7', i % 2 === 1 && 'lg:order-2')}>
              <img src={tenda.image} alt={tenda.title} loading="lazy" className="h-full w-full object-cover" />
            </TriangleReveal>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className={cn('lg:col-span-5', i % 2 === 1 && 'lg:order-1')}
            >
              <p className="font-display text-7xl font-extrabold tracking-tight text-lona">{tenda.id.replace('x', '×')}</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.15em] text-ink/50">
                {tenda.metros * tenda.metros} m² de área coberta
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold">{tenda.title}</h2>
              <p className="mt-3 text-lg text-ink-soft">{tenda.desc}</p>
              <ul className="my-8 space-y-3">
                {tenda.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 font-medium">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lona-sky text-lona">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  href={getWhatsAppUrl(`Olá! Vim pelo site e gostaria de um orçamento da ${tenda.title}.`)}
                  variant="whatsapp"
                  icon={<MessageCircle size={18} />}
                >
                  Orçar no WhatsApp
                </Button>
                <Button to="/contato" variant="ghost" className="text-ink">
                  Formulário
                </Button>
              </div>
            </motion.div>
          </article>
        ))}
      </section>
    </>
  );
};

export default Tendas;
