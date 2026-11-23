import React, { useId } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { tentPaths, tentClipPoints } from './tentGeometry';
import { cn } from '../../lib/utils';

const ease = [0.22, 1, 0.36, 1];

// Assinatura da marca: o contorno da tenda se desenha e, ao fechar, a foto "preenche" a tenda.
// Sem `image`, desenha só o contorno (uso decorativo).
// `imageBox` reposiciona a foto no viewBox 400x400 (útil para fotos largas em que a tenda ocupa toda a largura).
const DEFAULT_BOX = { x: 0, y: 0, width: 400, height: 400 };

const TentDraw = ({ image, alt = '', className, stroke = 'currentColor', delay = 0, inView = false, imageBox = DEFAULT_BOX }) => {
  const reduce = useReducedMotion();
  const clipId = useId();

  const draw = (order) => ({
    hidden: { pathLength: 0, opacity: 0 },
    show: {
      pathLength: 1,
      opacity: 1,
      transition: { pathLength: { duration: 0.9, delay: delay + order * 0.25, ease }, opacity: { duration: 0.01, delay: delay + order * 0.25 } },
    },
  });

  const photo = {
    hidden: { opacity: 0, scale: 1.15 },
    show: { opacity: 1, scale: 1, transition: { duration: 1.2, delay: delay + 1.1, ease } },
  };

  const trigger = reduce
    ? { initial: 'show', animate: 'show' }
    : inView
      ? { initial: 'hidden', whileInView: 'show', viewport: { once: true, margin: '-15% 0px' } }
      : { initial: 'hidden', animate: 'show' };

  return (
    <motion.svg
      viewBox="0 0 400 400"
      className={cn('h-auto w-full overflow-visible', className)}
      role={image ? 'img' : undefined}
      aria-label={image ? alt : undefined}
      aria-hidden={image ? undefined : true}
      {...trigger}
    >
      {image && (
        <>
          <defs>
            <clipPath id={clipId}>
              <polygon points={tentClipPoints} />
            </clipPath>
          </defs>
          <g clipPath={`url(#${clipId})`}>
            <motion.image
              href={image}
              x={imageBox.x}
              y={imageBox.y}
              width={imageBox.width}
              height={imageBox.height}
              preserveAspectRatio="xMidYMid slice"
              variants={photo}
              style={{ transformOrigin: '200px 200px' }}
            />
          </g>
        </>
      )}
      <g fill="none" stroke={stroke} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <motion.path d={tentPaths.ground} variants={draw(0)} strokeWidth="3" />
        <motion.path d={tentPaths.poleLeft} variants={draw(1)} />
        <motion.path d={tentPaths.poleRight} variants={draw(1)} />
        <motion.path d={tentPaths.roof} variants={draw(2)} />
        <motion.path d={tentPaths.valance} variants={draw(3)} />
      </g>
    </motion.svg>
  );
};

export default TentDraw;
