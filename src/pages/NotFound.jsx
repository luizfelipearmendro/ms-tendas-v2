import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-blue-600 font-black text-8xl mb-6">404</p>
        <h1 className="text-4xl font-black text-slate-900 mb-6">Página não encontrada</h1>
        <p className="text-xl text-slate-600 mb-10">
          O endereço que você acessou não existe ou foi alterado.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all group"
        >
          Voltar ao início
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
