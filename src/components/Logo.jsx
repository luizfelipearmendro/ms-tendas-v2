import React from 'react';
import { cn } from '../lib/utils';

export const TentMark = ({ className }) => (
  <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
    <path d="M2 18 L20 7 L38 18 Z" fill="currentColor" />
    <path
      d="M2 18 H38 V21 Q33.5 24.5 29 21 Q24.5 24.5 20 21 Q15.5 24.5 11 21 Q6.5 24.5 2 21 Z"
      fill="currentColor"
      opacity="0.6"
    />
    <path d="M6 22.5 V35 M34 22.5 V35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const Logo = ({ className, light = false }) => (
  <span className={cn('flex items-center gap-2', className)}>
    <TentMark className={cn('h-9 w-9', light ? 'text-white' : 'text-lona')} />
    <span className={cn('font-display text-[1.35rem] font-extrabold leading-none tracking-tight', light ? 'text-white' : 'text-ink')}>
      MS Tendas
    </span>
  </span>
);

export default Logo;
