import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

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
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Galeria de Fotos</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Confira alguns de nossos projetos realizados em Cuiabá e região. Qualidade e agilidade em cada montagem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, i) => (
            <motion.button
              key={image.src}
              type="button"
              onClick={() => setSelected(i)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="group relative rounded-3xl overflow-hidden shadow-xl border-4 border-white text-left cursor-zoom-in"
              aria-label={`Ampliar foto: ${image.title || "MS Tendas"}`}
            >
              <img
                src={image.src}
                alt={image.title || "Tenda montada pela MS Tendas"}
                loading="lazy"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h3 className="text-white font-bold text-xl">{image.title}</h3>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] bg-slate-950/95 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-3 text-white/80 hover:text-white"
              aria-label="Fechar"
            >
              <X size={32} />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              className="absolute left-2 md:left-6 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full"
              aria-label="Foto anterior"
            >
              <ChevronLeft size={32} />
            </button>
            <figure className="max-w-5xl w-full flex flex-col items-center">
              <img
                src={images[selected].src}
                alt={images[selected].title || "Tenda montada pela MS Tendas"}
                className="max-w-full max-h-[80vh] w-auto h-auto rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <figcaption className="text-white text-center mt-4 font-semibold">
                {images[selected].title}
                <span className="text-white/50 font-normal ml-3">{selected + 1} / {images.length}</span>
              </figcaption>
            </figure>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              className="absolute right-2 md:right-6 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full"
              aria-label="Próxima foto"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Galeria;
