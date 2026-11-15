import React from 'react';
import PageHero from '../components/PageHero';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <div className="min-h-[70vh]">
      <PageHero
        eyebrow="Erro 404"
        title="Essa tenda não está aqui."
        subtitle="O endereço que você acessou não existe ou foi alterado."
      >
        <div className="mt-8">
          <Button to="/">Voltar ao início</Button>
        </div>
      </PageHero>
    </div>
  );
};

export default NotFound;
