import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, MessageCircle } from 'lucide-react';
import TriangleReveal from './motion/TriangleReveal';
import Button from './Button';
import { tendas } from '../data/tendas';
import { tentShape } from './motion/tentGeometry';
import { getWhatsAppUrl } from '../config/site';
import { cn } from '../lib/utils';

// Escala do desenho: 40px por metro, tendas lado a lado sobre a mesma linha de chão.
// Os pés têm a mesma altura nas três: o que muda é a largura (e o telhado acompanha).
const PX_PER_M = 40;
const BASE = 210;
const GAP = 44;
const LEG_HEIGHT = 84;

const layout = tendas.reduce((acc, t, i) => {
  const w = t.metros * PX_PER_M;
  const x = i === 0 ? 24 : acc[i - 1].x + acc[i - 1].w + GAP;
  acc.push({ ...t, w, x, shape: tentShape({ x, w, base: BASE, legHeight: LEG_HEIGHT }) });
  return acc;
}, []);
const VIEW_W = layout[layout.length - 1].x + layout[layout.length - 1].w + 24;
const VIEW_TOP = Math.min(...layout.map((t) => t.shape.top)) - 12;

const TentSizes = () => {
  const [selectedId, setSelectedId] = useState('4x4');
  const selected = tendas.find((t) => t.id === selectedId);

  return (
    <div>
      {/* Desenho em escala: clicar numa tenda também seleciona */}
      <div className="rounded-[2rem] bg-white p-6 sm:p-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div role="tablist" aria-label="Escolha a medida da tenda" className="flex gap-2 rounded-full bg-paper p-1.5">
            {tendas.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={t.id === selectedId}
                onClick={() => setSelectedId(t.id)}
                className={cn(
                  'relative rounded-full px-5 py-2.5 font-display text-lg font-bold transition-colors',
                  t.id === selectedId ? 'text-white' : 'text-ink/60 hover:text-ink'
                )}
              >
                {t.id === selectedId && (
                  <motion.span
                    layoutId="size-pill"
                    className="absolute inset-0 rounded-full bg-lona"
                    transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                  />
                )}
                <span className="relative">{t.id.replace('x', '×')}</span>
              </button>
            ))}
          </div>
          <p className="text-sm text-ink/50">Desenho em escala entre as três medidas</p>
        </div>

        <svg
          viewBox={`0 ${VIEW_TOP} ${VIEW_W} ${BASE + 40 - VIEW_TOP}`}
          className="mx-auto h-auto w-full max-w-3xl"
          role="img"
          aria-label="Comparação de tamanho entre as tendas 3x3, 4x4 e 5x5"
        >
          <line x1="0" y1={BASE} x2={VIEW_W} y2={BASE} className="stroke-ink/15" strokeWidth="2" />
          {layout.map((t) => {
            const active = t.id === selectedId;
            const color = active ? '#1D4ED8' : 'rgba(17,24,39,0.28)';
            const transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] };
            return (
              <g key={t.id} onClick={() => setSelectedId(t.id)} className="cursor-pointer">
                <motion.g initial={false} animate={{ y: active ? -4 : 0 }} transition={transition} strokeLinejoin="round" strokeLinecap="round">
                  <motion.path
                    d={t.shape.roof}
                    initial={false}
                    animate={{ fill: active ? '#1D4ED8' : 'rgba(29,78,216,0)', stroke: color }}
                    transition={transition}
                    strokeWidth="3"
                  />
                  <motion.path
                    d={t.shape.valance}
                    initial={false}
                    animate={{ fill: active ? '#DCE7FF' : 'rgba(220,231,255,0)', stroke: color }}
                    transition={transition}
                    strokeWidth="3"
                  />
                  <motion.path d={t.shape.legs} initial={false} animate={{ stroke: color }} transition={transition} strokeWidth="4" fill="none" />
                </motion.g>
                <text
                  x={t.x + t.w / 2}
                  y={BASE + 30}
                  textAnchor="middle"
                  className={cn('font-display text-[18px] font-bold transition-colors', active ? 'fill-lona' : 'fill-ink/40')}
                >
                  {t.metros} m
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Detalhes da medida selecionada */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 grid gap-6 lg:grid-cols-2"
          role="tabpanel"
        >
          <TriangleReveal className="h-72 overflow-hidden rounded-[2rem] sm:h-96" duration={0.9}>
            <img src={selected.image} alt={selected.title} loading="lazy" className="h-full w-full object-cover" />
          </TriangleReveal>
          <div className="flex flex-col justify-center rounded-[2rem] bg-white p-8 sm:p-10">
            <p className="font-display text-6xl font-extrabold tracking-tight text-lona sm:text-7xl">
              {selected.id.replace('x', '×')}
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.15em] text-ink/50">
              {selected.metros * selected.metros} m² de área coberta
            </p>
            <p className="mt-5 text-lg text-ink-soft">{selected.desc}</p>
            <ul className="mb-8 mt-6 space-y-3">
              {selected.features.map((f) => (
                <li key={f} className="flex items-center gap-3 font-medium">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lona-sky text-lona">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <div>
              <Button
                href={getWhatsAppUrl(`Olá! Vim pelo site e gostaria de um orçamento da ${selected.title}.`)}
                variant="whatsapp"
                icon={<MessageCircle size={18} />}
              >
                Orçar a {selected.id} no WhatsApp
              </Button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TentSizes;
