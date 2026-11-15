import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

// Desktop: a seção fica presa na tela e as fotos correm de lado conforme a rolagem.
// Celular / movimento reduzido: carrossel nativo com rolagem horizontal e snap.
const HorizontalGallery = ({ images, header }) => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth + 48));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const card = (img, i) => (
    <figure key={img.src} className="relative shrink-0 snap-start overflow-hidden rounded-[1.75rem]">
      <img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        className={i % 2 === 0 ? 'h-[22rem] w-[17rem] object-cover lg:h-[30rem] lg:w-[24rem]' : 'h-[22rem] w-[22rem] object-cover lg:h-[26rem] lg:w-[34rem]'}
      />
    </figure>
  );

  return (
    <>
      {/* Desktop com movimento */}
      {!reduce && (
        <section ref={sectionRef} className="relative hidden h-[260vh] lg:block">
          <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
            <div className="mx-auto mb-12 w-full max-w-7xl px-8">{header}</div>
            <motion.div ref={trackRef} style={{ x }} className="flex items-center gap-6 pl-8 will-change-transform">
              {images.map(card)}
            </motion.div>
          </div>
        </section>
      )}

      {/* Celular (e desktop com movimento reduzido) */}
      <section className={reduce ? 'py-24' : 'py-24 lg:hidden'}>
        <div className="mx-auto mb-10 max-w-7xl px-5 sm:px-8">{header}</div>
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:px-8 [scrollbar-width:none]">
          {images.map(card)}
        </div>
      </section>
    </>
  );
};

export default HorizontalGallery;
