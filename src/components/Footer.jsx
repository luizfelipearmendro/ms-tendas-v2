import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">MS</div>
              <span className="text-2xl font-bold tracking-tight text-white">Tendas</span>
            </div>
            <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
              Líder em estruturas para eventos em Cuiabá e região. Tendas piramidais de alta qualidade para festas, feiras e eventos corporativos.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/5565999047060" target="_blank" className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-blue-500 transition-colors">Início</Link></li>
              <li><Link to="/tendas" className="hover:text-blue-500 transition-colors">Nossas Tendas</Link></li>
              <li><Link to="/galeria" className="hover:text-blue-500 transition-colors">Galeria de Fotos</Link></li>
              <li><Link to="/contato" className="hover:text-blue-500 transition-colors">Solicitar Orçamento</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500" />
                (65) 99904-7060
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500" />
                (65) 99208-7365
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                mstendas2016@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-500" />
                Cuiabá - MT
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2026 MS Tendas Ltda. Todos os direitos reservados.</p>
          <p>CNPJ: 28.100.559/0001-02</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;