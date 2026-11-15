import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { tentPaths, tentClipPoints } from './tentGeometry';

// Traço que só aparece quando começa a ser desenhado
// (evita o "pontinho" que a ponta arredondada deixa com comprimento zero)
const useDraw = (progress, range) => {
  const pathLength = useTransform(progress, range, [0, 1]);
  const opacity = useTransform(pathLength, (v) => (v > 0.01 ? 1 : 0));
  return { pathLength, opacity };
};

// A tenda se constrói conforme `progress` (MotionValue de 0 a 1):
// chão → pés → telhado → lona preenchida → sanefa → bandeirinha no topo.
const TentBuild = ({ progress, className }) => {
  const ground = useDraw(progress, [0, 0.12]);
  const poles = useDraw(progress, [0.08, 0.36]);
  const roof = useDraw(progress, [0.34, 0.62]);
  const valance = useDraw(progress, [0.66, 0.84]);
  const fill = useTransform(progress, [0.6, 0.78], [0, 1]);
  const flag = useTransform(progress, [0.86, 1], [0, 1]);
  const flagY = useTransform(flag, [0, 1], [18, 0]);

  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <motion.polygon points={tentClipPoints} className="fill-lona-sky" style={{ opacity: fill }} />
      <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <motion.path d={tentPaths.ground} strokeWidth="3" style={ground} />
        <motion.path d={tentPaths.poleLeft} style={poles} />
        <motion.path d={tentPaths.poleRight} style={poles} />
        <motion.path d={tentPaths.roof} style={roof} />
        <motion.path d={tentPaths.valance} className="fill-lona" style={{ ...valance, fillOpacity: valance.pathLength }} />
      </g>
      <motion.g style={{ opacity: flag, y: flagY }}>
        <path d="M200 74 L200 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M200 40 L232 48 L200 56 Z" className="fill-coral" />
      </motion.g>
    </svg>
  );
};

export default TentBuild;
