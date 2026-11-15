import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const variants = {
  primary: 'bg-lona text-white hover:bg-lona-deep',
  coral: 'bg-coral text-ink hover:bg-white',
  white: 'bg-white text-lona hover:bg-lona-sky',
  ghost: 'border-2 border-current bg-transparent hover:bg-ink hover:border-ink hover:text-white',
  ghostLight: 'border-2 border-white/40 text-white hover:bg-white hover:text-lona',
  whatsapp: 'bg-[#25D366] text-ink hover:bg-[#1EBE5A]',
};

const sizes = {
  md: 'h-12 px-5 text-sm',
  lg: 'h-14 px-7 text-base',
};

// Botão com seta que desliza no hover; aceita `to` (rota interna), `href` (link) ou vira <button>
const Button = ({ to, href, children, variant = 'primary', size = 'lg', icon, arrow = true, className, ...rest }) => {
  const classes = cn(
    'group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-colors duration-300',
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {icon}
      <span>{children}</span>
      {arrow && (
        <span className="relative -mr-1 flex h-5 w-5 items-center overflow-hidden">
          <ArrowRight size={18} className="absolute transition-transform duration-300 ease-out-expo group-hover:translate-x-full" />
          <ArrowRight size={18} className="absolute -translate-x-full transition-transform duration-300 ease-out-expo group-hover:translate-x-0" />
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a href={href} className={classes} {...(external && { target: '_blank', rel: 'noopener noreferrer' })} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
};

export default Button;
