import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { MessageCircle, Star, Zap, ShieldCheck, BadgeDollarSign } from 'lucide-react';
import TentDraw from '../components/motion/TentDraw';
import TentBuild from '../components/motion/TentBuild';
import TriangleReveal from '../components/motion/TriangleReveal';
import TentSizes from '../components/TentSizes';
import HorizontalGallery from '../components/HorizontalGallery';
import Button from '../components/Button';
import { TentMark } from '../components/Logo';
import { getWhatsAppUrl, GOOGLE_RATING, GOOGLE_REVIEWS_COUNT } from '../config/site';
import { cn } from '../lib/utils';

const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

const inViewUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-10% 0px' },
  transition: { duration: 0.8, delay, ease },
});

const Eyebrow = ({ children, className }) => (
  <p className={cn('mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-lona', className)}>
    <TentMark className="h-5 w-5" />
    {children}
  </p>
);

const Stars = ({ size = 16 }) => (
  <span className="flex" aria-hidden="true">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={size} className="fill-amber-400 text-amber-400" />
    ))}
  </span>
);

const sectionTitle = 'font-display text-[clamp(2.2rem,4.8vw,4rem)] font-extrabold leading-[1] tracking-tight';

const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 pb-16 pt-28 sm:px-8 lg:min-h-[100svh] lg:grid-cols-12 lg:gap-10 lg:pb-12 lg:pt-24">
      <div className="lg:col-span-6">
        <motion.div {...fadeUp(0)}>
          <Eyebrow>Aluguel de tendas · Cuiabá e região</Eyebrow>
        </motion.div>
        <motion.h1
          {...fadeUp(0.1)}
          className="font-display text-[clamp(2.9rem,6vw,5.4rem)] font-extrabold leading-[0.95] tracking-tight"
        >
          A gente monta.
          <br />
          <span className="text-lona">Você comemora.</span>
        </motion.h1>
        <motion.p {...fadeUp(0.25)} className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
          Tendas piramidais 3x3, 4x4 e 5x5 para festas e eventos corporativos, com montagem no mesmo dia.
        </motion.p>
        <motion.div {...fadeUp(0.4)} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            href={getWhatsAppUrl('Olá! Vim pelo site e gostaria de um orçamento de tenda.')}
            icon={<MessageCircle size={18} />}
          >
            Pedir orçamento
          </Button>
          <Button href="#medidas" variant="ghost" className="text-ink">
            Ver as medidas
          </Button>
        </motion.div>
        <motion.a
          {...fadeUp(0.55)}
          href="#avaliacoes"
          className="mt-8 inline-flex items-center gap-3 rounded-full py-1 pr-3 text-sm transition-colors hover:text-lona"
        >
          <Stars />
          <span>
            <strong className="font-display text-base">{GOOGLE_RATING}</strong> no Google · {GOOGLE_REVIEWS_COUNT} avaliações
          </span>
        </motion.a>
      </div>

      <div className="relative lg:col-span-6">
        <div className="absolute inset-x-[8%] bottom-[4%] top-[18%] -z-10 rounded-full bg-lona-sky blur-3xl" />
        <TentDraw
          image="/images/tenda11.jpg"
          imageBox={{ x: -40, y: 50, width: 480, height: 340 }}
          alt="Tenda piramidal branca montada em praça com piso quadriculado e prédios ao fundo"
          delay={0.3}
          className="mx-auto max-w-[34rem] text-ink"
        />
      </div>
    </div>
  </section>
);

const facts = [
  'Montagem no mesmo dia',
  'Tendas 3x3, 4x4 e 5x5',
  `${GOOGLE_RATING} no Google · ${GOOGLE_REVIEWS_COUNT} avaliações`,
  'Cuiabá e região',
];

const FactsStrip = () => (
  <section className="bg-lona text-white">
    <ul className="mx-auto flex max-w-7xl flex-col items-start gap-3 px-5 py-6 sm:px-8 md:flex-row md:items-center md:justify-between">
      {facts.map((fact, i) => (
        <motion.li key={fact} {...inViewUp(i * 0.08)} className="flex items-center gap-3 font-display text-lg font-bold">
          <TentMark className="h-5 w-5 text-coral" />
          {fact}
        </motion.li>
      ))}
    </ul>
  </section>
);

const Medidas = () => (
  <section id="medidas" className="scroll-mt-20 py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <motion.div {...inViewUp()} className="mb-12 max-w-3xl">
        <Eyebrow>Medidas</Eyebrow>
        <h2 className={sectionTitle}>Qual tenda cabe no seu evento?</h2>
        <p className="mt-5 text-lg text-ink-soft">
          Compare as três medidas lado a lado, na mesma escala, e escolha a que ocupa melhor o seu espaço.
        </p>
      </motion.div>
      <TentSizes />
    </div>
  </section>
);

const steps = [
  {
    title: 'Peça seu orçamento',
    desc: 'Fale com a gente pelo WhatsApp ou pelo formulário e conte como será o seu evento.',
  },
  {
    title: 'Combine data e local',
    desc: 'Definimos juntos a medida ideal da tenda, o dia e o endereço da montagem.',
  },
  {
    title: 'Nós montamos tudo',
    desc: 'Nossa equipe chega no horário combinado e deixa a estrutura pronta para o seu evento.',
  },
];

const ComoMontamos = () => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const done = useMotionValue(1);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const progress = reduce ? done : scrollYProgress;
  const [active, setActive] = useState(reduce ? 2 : 0);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (!reduce) setActive(Math.min(2, Math.floor(v * 3)));
  });

  return (
    <section ref={ref} className={cn('relative bg-white', !reduce && 'h-[300vh]')}>
      <div className={cn('flex flex-col justify-center', !reduce && 'sticky top-0 h-[100svh]')}>
        <div className="mx-auto grid w-full max-w-7xl items-center gap-4 px-5 pb-6 pt-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <div className="order-2 lg:order-1">
            <Eyebrow>Como montamos</Eyebrow>
            <h2 className={cn(sectionTitle, 'mb-5 lg:mb-12')}>Do orçamento à tenda de pé.</h2>
            <ol className="space-y-2 lg:space-y-3">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className={cn(
                    'rounded-3xl border-2 px-5 py-3 transition-all duration-500 sm:p-6',
                    i === active ? 'border-lona bg-lona-sky/50' : 'border-transparent opacity-45'
                  )}
                  aria-current={i === active ? 'step' : undefined}
                >
                  <p className="flex items-baseline gap-3 font-display text-xl font-extrabold sm:text-2xl">
                    <span className="text-lona">0{i + 1}</span>
                    {step.title}
                  </p>
                  <p className={cn('mt-1.5 text-ink-soft', i !== active && 'hidden lg:block')}>{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="order-1 lg:order-2">
            <TentBuild progress={progress} className="mx-auto h-[24vh] w-auto max-w-full text-ink sm:h-[34vh] lg:h-auto lg:w-full lg:max-w-[30rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};

const diferenciais = [
  {
    icon: Zap,
    title: 'Montagem no mesmo dia',
    desc: 'Equipe treinada para montagens rápidas e seguras: sua estrutura pronta no mesmo dia.',
    image: '/images/tenda1.jpg',
    alt: 'Tenda montada na Arena Pantanal',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança para os convidados',
    desc: 'Estruturas galvanizadas e lonas anti-chamas, montadas com cuidado em cada detalhe.',
    image: '/images/tenda16.jpg',
    alt: 'Tendas com cortinas brancas montadas em área de bar',
  },
  {
    icon: BadgeDollarSign,
    title: 'Preço justo',
    desc: 'Transparência e os melhores preços da região, sem abrir mão da qualidade. Cobrimos orçamentos.',
    image: '/images/tenda8.jpg',
    alt: 'Tendas iluminadas à noite ao redor de uma piscina',
  },
];

const Diferenciais = () => (
  <section className="py-24 lg:py-32">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
      <motion.div {...inViewUp()} className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
        <Eyebrow>Por que a MS Tendas</Eyebrow>
        <h2 className={sectionTitle}>Feito para o evento não parar.</h2>
      </motion.div>
      <div className="space-y-6 lg:col-span-8">
        {diferenciais.map((item, i) => (
          <article key={item.title} className="grid items-center gap-6 rounded-[2rem] bg-white p-4 sm:grid-cols-5 sm:p-5">
            <TriangleReveal className={cn('h-56 overflow-hidden rounded-[1.5rem] sm:col-span-2 sm:h-48', i % 2 === 1 && 'sm:order-2')}>
              <img src={item.image} alt={item.alt} loading="lazy" className="h-full w-full object-cover" />
            </TriangleReveal>
            <motion.div {...inViewUp(0.15)} className={cn('px-2 pb-2 sm:col-span-3 sm:pb-0', i % 2 === 1 && 'sm:order-1')}>
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-lona-sky text-lona">
                <item.icon size={22} />
              </span>
              <h3 className="font-display text-2xl font-extrabold">{item.title}</h3>
              <p className="mt-2 text-ink-soft">{item.desc}</p>
            </motion.div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const galeria = [
  { src: '/images/tenda1.jpg', alt: 'Tenda na Arena Pantanal' },
  { src: '/images/tenda12.jpg', alt: 'Tendas com cortinas em jardim florido' },
  { src: '/images/tenda19.jpeg', alt: 'Tendas em evento do Sebrae' },
  { src: '/images/tenda8.jpg', alt: 'Tendas iluminadas à noite ao redor de uma piscina' },
  { src: '/images/tenda37.jpeg', alt: 'Tendas montadas em área com árvores e bancos' },
  { src: '/images/tenda4.jpg', alt: 'Tendas montadas na Polícia Rodoviária Federal' },
  { src: '/images/tenda33.jpeg', alt: 'Tenda em jardim com flores laranjas' },
  { src: '/images/tenda5.jpg', alt: 'Tendas em área aberta com jardim' },
];

const GaleriaHeader = () => (
  <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
    <div>
      <Eyebrow>Galeria</Eyebrow>
      <h2 className={sectionTitle}>Já montamos por aqui.</h2>
    </div>
    <Button to="/galeria" variant="ghost" size="md" className="self-start text-ink md:self-auto">
      Ver todas as fotos
    </Button>
  </div>
);

const Avaliacoes = () => (
  <section id="avaliacoes" className="scroll-mt-20 bg-lona-sky py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <motion.div {...inViewUp()}>
          <Eyebrow>Avaliações reais</Eyebrow>
          <h2 className={sectionTitle}>Quem contrata, recomenda.</h2>
        </motion.div>
        <div className="flex items-center gap-4">
          <span className="font-display text-6xl font-extrabold tracking-tight text-lona">{GOOGLE_RATING}</span>
          <span>
            <Stars size={18} />
            <span className="mt-1 block text-sm text-ink-soft">{GOOGLE_REVIEWS_COUNT} avaliações no Google</span>
          </span>
        </div>
      </div>
      <div className="elfsight-app-6d90414c-6778-4e36-9c24-4aa0362d68eb" data-elfsight-app-lazy></div>
    </div>
  </section>
);

const Home = () => (
  <>
    <Hero />
    <FactsStrip />
    <Medidas />
    <ComoMontamos />
    <Diferenciais />
    <HorizontalGallery images={galeria} header={<GaleriaHeader />} />
    <Avaliacoes />
  </>
);

export default Home;
