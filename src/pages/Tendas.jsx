import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tendas = () => {
  const tendas = [
    {
      title: "Tendas 3x3",
      desc: "Ideal para pequenos eventos, recepções e stands de vendas.",
      image: "/images/tenda20.jpeg",
      features: ["Montagem em 20min", "Capacidade: 10 pessoas"]
    },
    {
      title: "Tendas 4x4",
      desc: "A mais versátil para festas particulares e áreas de convivência.",
      image: "/images/tenda11.jpg",
      features: ["Capacidade 25 pessoas", "Calhas de Escoamento", "Design Moderno"]
    },
    {
      title: "Tendas 5x5",
      desc: "Estrutura robusta para grandes eventos corporativos e feiras.",
      image: "/images/tenda14.jpeg",
      features: ["Vão Livre Total", "Alta Resistência a Ventos", "Capacidade: 100 pessoas"]
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Nossas Tendas</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Estruturas modulares de alta qualidade, projetadas para oferecer segurança e conforto em qualquer tipo de evento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {tendas.map((tenda, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col lg:flex-row"
            >
              <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                <img 
                  src={tenda.image} 
                  alt={tenda.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{tenda.title}</h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">{tenda.desc}</p>
                  <ul className="grid grid-cols-1 gap-3 mb-8">
                    {tenda.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                        <CheckCircle2 size={16} className="text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link 
                  to="/contato" 
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all group"
                >
                  Solicitar Orçamento
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tendas;