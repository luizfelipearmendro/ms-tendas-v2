import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import PageHero from '../components/PageHero';
import TriangleReveal from '../components/motion/TriangleReveal';

const images = [
  { src: "/images/tenda22.jpeg", title: "" },
  { src: "/images/tenda23.jpeg", title: "" },
  { src: "/images/tenda24.jpeg", title: "" },
  { src: "/images/tenda25.jpeg", title: "" },
  { src: "/images/tenda26.jpeg", title: "" },
  { src: "/images/tenda27.jpeg", title: "" },
  { src: "/images/tenda28.jpeg", title: "" },
  { src: "/images/tenda29.jpeg", title: "" },
  { src: "/images/tenda30.jpeg", title: "" },
  { src: "/images/tenda31.jpeg", title: "" },
  { src: "/images/tenda32.jpeg", title: "" },
  { src: "/images/tenda33.jpeg", title: "" },
  { src: "/images/tenda34.jpeg", title: "" },
  { src: "/images/tenda35.jpeg", title: "" },
  { src: "/images/tenda36.jpeg", title: "" },
  { src: "/images/tenda37.jpeg", title: "" },
  { src: "/images/tenda38.jpeg", title: "" },
  { src: "/images/tenda39.jpeg", title: "" },
  { src: "/images/tenda40.jpeg", title: "" },
  { src: "/images/tenda1.jpg", title: "Evento Arena Pantanal" },
  { src: "/images/tenda2.jpg", title: "Evento Arena Pantanal" },
  { src: "/images/tenda3.jpg", title: "Evento Corporativo" },
  { src: "/images/tenda4.jpg", title: "Polícia Rodoviária Federal" },
  { src: "/images/tenda5.jpg", title: "Montagem em Área Aberta" },
  { src: "/images/tenda6.jpg", title: "Galpão Estruturado" },
  { src: "/images/tenda7.jpg", title: "Evento Particular" },
  { src: "/images/tenda8.jpg", title: "Festa em Condomínio" },
  { src: "/images/tenda9.jpg", title: "Evento Corporativo" },
  { src: "/images/tenda10.jpg", title: "Tenda Piramidal 5x5" },
  { src: "/images/tenda11.jpg", title: "Montagem em Área Aberta" },
  { src: "/images/tenda12.jpg", title: "Galpão Estruturado" },
  { src: "/images/tenda13.jpg", title: "Evento Particular" },
  { src: "/images/tenda14.jpeg", title: "Festa em Condomínio" },
  { src: "/images/tenda15.jpg", title: "Evento Corporativo" },
  { src: "/images/tenda16.jpg", title: "Tenda Piramidal 5x5" },
  { src: "/images/tenda17.jpg", title: "Montagem em Área Aberta" },
  { src: "/images/tenda18.jpeg", title: "Galpão Estruturado" },
  { src: "/images/tenda19.jpeg", title: "Evento Particular" },
  { src: "/images/tenda20.jpeg", title: "Festa em Condomínio" },
  { src: "/images/tenda21.jpeg", title: "" }
];

const fallbackAlt = 'Tenda montada pela MS Tendas';

const Galeria = () => {
  const [selected, setSelected] = useState(null);

  const showPrev = () => setSelected((i) => (i - 1 + images.length) % images.length);
  const showNext = () => setSelected((i) => (i + 1) % images.length);

  useEffect(() => {
    if (selected === null) return;

    const handleKey = (e) => {
      if (e.key === 'Escape') setSelected(null);
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [selected]);

  return (
    <>
      <PageHero
        eyebrow={`${images.length} fotos`}
        title="Galeria de Fotos"
        subtitle="Confira alguns de nossos projetos realizados em Cuiabá e região. Qualidade e agilidade em cada montagem."
      />

      <section className="mx-auto max-w-7xl px-5 pb-32 sm:px-8">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {images.map((image, i) => (
            <TriangleReveal key={image.src} delay={(i % 3) * 0.1} className="mb-5 break-inside-avoid">
              <button
                type="button"
                onClick={() => setSelected(i)}
                className="group relative block w-full cursor-zoom-in overflow-hidden rounded-[1.75rem] text-left"
                aria-label={`Ampliar foto: ${image.title || 'MS Tendas'}`}
              >
                <img
                  src={image.src}
                  alt={image.title || fallbackAlt}
                  loading="lazy"
                  className="h-auto w-full transition-transform duration-700 ease-out-expo group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/75 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="font-display text-lg font-bold text-white">{image.title}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lona">
                    <Expand size={18} />
                  </span>
                </span>
              </button>
            </TriangleReveal>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4"
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-ink"
              aria-label="Fechar"
            >
              <X size={24} />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              className="absolute left-2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-ink md:left-6"
              aria-label="Foto anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <figure className="flex w-full max-w-5xl flex-col items-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={images[selected].src}
                  src={images[selected].src}
                  alt={images[selected].title || fallbackAlt}
                  initial={{ opacity: 0, clipPath: 'polygon(50% 0%, 50% 0%, 100% 100%, 0% 100%)' }}
                  animate={{ opacity: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="h-auto max-h-[80vh] w-auto max-w-full rounded-[1.5rem]"
                  onClick={(e) => e.stopPropagation()}
                />
              </AnimatePresence>
              <figcaption className="mt-5 flex items-center gap-4 text-white">
                {images[selected].title && <span className="font-display text-lg font-bold">{images[selected].title}</span>}
                <span className="text-sm text-white/50">{selected + 1} / {images.length}</span>
              </figcaption>
            </figure>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              className="absolute right-2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-ink md:right-6"
              aria-label="Próxima foto"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Galeria;
