import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../lib/utils';

// Revela o conteúdo como um telhado de tenda abrindo: nasce de um ponto no topo,
// vira um triângulo e então se abre no retângulo completo.
const frames = [
  'polygon(50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%)',
  'polygon(50% 0%, 50% 0%, 100% 70%, 0% 70%, 50% 0%)',
  'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%)',
];

const TriangleReveal = ({ children, className, delay = 0, duration = 1.2, as = 'div', ...rest }) => {
  const reduce = useReducedMotion();
  const Comp = motion[as];

  if (reduce) {
    const Static = as;
    return (
      <Static className={className} {...rest}>
        {children}
      </Static>
    );
  }

  return (
    <Comp
      className={cn('will-change-[clip-path]', className)}
      initial={{ clipPath: frames[0] }}
      whileInView={{ clipPath: frames }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration, delay, times: [0, 0.45, 1], ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Comp>
  );
};

export default TriangleReveal;
