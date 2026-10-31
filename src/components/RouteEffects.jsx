import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const titles = {
  '/': 'MS Tendas | Aluguel de Tendas em Cuiabá - MT',
  '/tendas': 'Nossas Tendas | MS Tendas',
  '/galeria': 'Galeria de Fotos | MS Tendas',
  '/contato': 'Solicitar Orçamento | MS Tendas',
};

const RouteEffects = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = titles[pathname] ?? 'Página não encontrada | MS Tendas';
  }, [pathname]);

  return null;
};

export default RouteEffects;
