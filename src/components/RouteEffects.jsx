import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pages, notFound } from '../seo';

const RouteEffects = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = (pages[pathname] ?? notFound).title;
  }, [pathname]);

  return null;
};

export default RouteEffects;
