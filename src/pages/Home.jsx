import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  ShieldCheck, 
  DollarSign, 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2,
  ChevronRight,
  Star,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const tendas = [
    {
      title: "Tenda Piramidal 3x3",
      desc: "Ideal para pequenos eventos, recepções e stands de vendas.",
      image: "/images/tenda13.jpg",
      features: ["Lona Anti-chamas", "Estrutura Galvanizada", "Montagem em 30min"]
    },
    {
      title: "Tendas 4x4",
      desc: "A mais versátil para festas particulares e áreas de convivência.",
      image: "/images/tenda17.jpg",
      features: ["Capacidade 25 pessoas", "Calhas de Escoamento", "Design Moderno"]
    },
    {
      title: "Tendas 5x5",
      desc: "Estrutura robusta para grandes eventos corporativos e feiras.",
      image: "/images/tenda16.jpg",
      features: ["Vão Livre Total", "Alta Resistência a Ventos", "Ideal para B2B"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans scroll-smooth">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent opacity-70"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-blue-100">
                <Zap size={16} className="fill-blue-700" />
                MONTAGEM NO MESMO DIA
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Estruturas que <span className="text-blue-600">elevam</span> seu evento.
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                Tendas piramidais de alta resistência para grandes empresas e festas particulares em Cuiabá. Agilidade, segurança e o melhor custo-benefício.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contato" 
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 group"
                >
                  Orçamento Rápido
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href="https://wa.me/5565999047060" 
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all"
                >
                  <MessageCircle className="text-green-500" />
                  Falar no WhatsApp
                </a>
              </div>
              
              <div className="mt-10 flex items-center gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-blue-600" />
                  Empresa Registrada
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-blue-600" />
                  Suporte 24h
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="/images/tenda2.jpg" 
                  alt="Tenda Piramidal MS Tendas" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm font-bold uppercase tracking-widest mb-1 opacity-80">Destaque</p>
                  <h3 className="text-2xl font-bold">Tendas Piramidais Premium</h3>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <DollarSign size={24} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase">Preço Imbatível</p>
                    <p className="text-slate-900 font-extrabold text-lg">Cobrimos Orçamentos</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Por que a MS Tendas?</h2>
            <p className="text-4xl font-extrabold text-slate-900 mb-6">Inovação e agilidade para o seu evento não parar.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="text-blue-600" />,
                title: "Montagem Express",
                desc: "Nossa equipe é treinada para montagens rápidas e seguras, garantindo que sua estrutura esteja pronta no mesmo dia."
              },
              {
                icon: <ShieldCheck className="text-blue-600" />,
                title: "Segurança Total",
                desc: "Estruturas galvanizadas e lonas anti-chamas com laudos técnicos. Segurança em primeiro lugar para seus convidados."
              },
              {
                icon: <DollarSign className="text-blue-600" />,
                title: "Preço Justo",
                desc: "Trabalhamos com transparência e os melhores preços da região, sem abrir mão da qualidade premium."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Catálogo Digital</h2>
              <p className="text-4xl font-extrabold text-slate-900">Nossas Soluções em Tendas</p>
            </div>
            <Link to="/tendas" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Ver todas as medidas <ChevronRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tendas.map((tenda, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={tenda.image} 
                    alt={tenda.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{tenda.title}</h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">{tenda.desc}</p>
                  <Link 
                    to="/contato" 
                    className="block w-full text-center py-4 rounded-xl border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-all"
                  >
                    Solicitar Preço
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Pronto para elevar o nível do seu evento?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Entre em contato agora e receba um orçamento personalizado em menos de 15 minutos.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contato" 
              className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-50 transition-all shadow-2xl"
            >
              Solicitar Orçamento
            </Link>
            <a 
              href="https://wa.me/5565999047060" 
              target="_blank"
              className="bg-green-500 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-green-600 transition-all shadow-2xl flex items-center justify-center gap-3"
            >
              <MessageCircle size={28} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;