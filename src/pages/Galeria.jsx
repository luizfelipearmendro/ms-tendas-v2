import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
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
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedImage(image)}
              className="group relative rounded-3xl overflow-hidden shadow-xl border-4 border-white cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h3 className="text-white font-bold text-xl">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.title}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.25 }}
                className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-white text-5xl hover:text-gray-300 transition"
              >
                ×
              </button>

              {selectedImage.title && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/60 px-6 py-3 rounded-xl text-white text-lg">
                  {selectedImage.title}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Galeria;