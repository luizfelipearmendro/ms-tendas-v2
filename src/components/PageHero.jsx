import React from 'react';
import { motion } from 'framer-motion';
import TentDraw from './motion/TentDraw';
import { TentMark } from './Logo';

const ease = [0.22, 1, 0.36, 1];

// Cabeçalho das páginas internas: título grande + contorno da tenda se desenhando ao lado
const PageHero = ({ eyebrow, title, subtitle, children }) => (
  <section className="mx-auto grid max-w-7xl items-end gap-10 px-5 pb-14 pt-32 sm:px-8 lg:grid-cols-12 lg:pb-20 lg:pt-40">
    <div className="lg:col-span-8">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-lona"
      >
        <TentMark className="h-5 w-5" />
        {eyebrow}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease }}
        className="font-display text-[clamp(2.75rem,7vw,6rem)] font-extrabold leading-[0.95] tracking-tight"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft"
        >
          {subtitle}
        </motion.p>
      )}
      {children}
    </div>
    <TentDraw delay={0.2} className="hidden max-w-[14rem] justify-self-end text-lona lg:col-span-4 lg:block" />
  </section>
);

export default PageHero;
