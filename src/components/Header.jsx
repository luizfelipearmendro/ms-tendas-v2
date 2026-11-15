import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import { getWhatsAppUrl } from '../config/site';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Início', path: '/' },
  { name: 'Tendas', path: '/tendas' },
  { name: 'Galeria', path: '/galeria' },
  { name: 'Contato', path: '/contato' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 24));

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const isActive = (path) => location.pathname === path;
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || isMenuOpen ? 'border-b border-ink/10 bg-paper/90 backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" onClick={closeMenu} aria-label="MS Tendas, página inicial">
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'group relative py-2 font-semibold transition-colors',
                isActive(link.path) ? 'text-lona' : 'text-ink/70 hover:text-ink'
              )}
            >
              {link.name}
              {/* Indicador em forma de "telhadinho" sob o link ativo */}
              <span
                className={cn(
                  'absolute -bottom-1 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[6px] border-b-[6px] border-x-transparent border-b-lona transition-transform duration-300',
                  isActive(link.path) ? 'scale-100' : 'scale-0 group-hover:scale-100'
                )}
              />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            href={getWhatsAppUrl('Olá! Vim pelo site e gostaria de um orçamento de tenda.')}
            size="md"
            arrow={false}
            icon={<MessageCircle size={18} />}
            className="hidden md:inline-flex"
          >
            Pedir orçamento
          </Button>

          <button
            className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
          >
            <span className="relative block h-3 w-5">
              <span className={cn('absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-300', isMenuOpen && 'translate-y-[5px] rotate-45')} />
              <span className={cn('absolute bottom-0 left-0 h-0.5 w-5 bg-current transition-transform duration-300', isMenuOpen && '-translate-y-[5px] -rotate-45')} />
            </span>
          </button>
        </div>
      </nav>

      {/* Menu mobile: painel azul que abre a partir do topo, como uma lona */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ clipPath: 'polygon(50% 0%, 50% 0%, 50% 0%, 50% 0%)' }}
            animate={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
            exit={{ clipPath: 'polygon(50% 0%, 50% 0%, 50% 0%, 50% 0%)' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[4.5rem] h-[calc(100dvh-4.5rem)] bg-lona px-6 pb-10 pt-10 text-white md:hidden"
          >
            <ul className="space-y-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={closeMenu}
                    className={cn('block py-2 font-display text-5xl font-extrabold tracking-tight', isActive(link.path) ? 'text-coral-soft' : 'text-white')}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="absolute inset-x-6 bottom-10 space-y-3">
              <Button
                href={getWhatsAppUrl('Olá! Vim pelo site e gostaria de um orçamento de tenda.')}
                variant="white"
                icon={<MessageCircle size={18} />}
                className="w-full"
              >
                Pedir orçamento
              </Button>
              <p className="text-center text-sm text-white/70">(65) 99904-7060 · Cuiabá - MT</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
