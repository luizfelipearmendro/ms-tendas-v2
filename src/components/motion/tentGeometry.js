// Silhueta frontal de uma tenda piramidal num viewBox 400x400:
// telhado baixo com beirais largos, sanefa (acabamento ondulado da lona) e dois pés.
export const TENT = {
  apex: [200, 74],
  eaveLeft: [12, 184],
  eaveRight: [388, 184],
  valanceTop: 184,
  valanceBottom: 206,
  scallops: 8,
  legInset: 30,
  ground: 380,
};

const [ax, ay] = TENT.apex;
const [lx, ly] = TENT.eaveLeft;
const [rx, ry] = TENT.eaveRight;
const vb = TENT.valanceBottom;

// Borda inferior da sanefa: uma sequência de "ondinhas" da direita para a esquerda
const scallopEdge = () => {
  const w = (rx - lx) / TENT.scallops;
  let d = '';
  for (let i = 0; i < TENT.scallops; i++) {
    const x0 = rx - i * w;
    d += ` Q${x0 - w / 2} ${vb + 14} ${x0 - w} ${vb}`;
  }
  return d;
};

const legL = lx + TENT.legInset;
const legR = rx - TENT.legInset;

export const tentPaths = {
  roof: `M${lx} ${ly} L${ax} ${ay} L${rx} ${ry}`,
  valance: `M${lx} ${TENT.valanceTop} L${rx} ${TENT.valanceTop} L${rx} ${vb}${scallopEdge()} Z`,
  poleLeft: `M${legL} ${vb} L${legL} ${TENT.ground}`,
  poleRight: `M${legR} ${vb} L${legR} ${TENT.ground}`,
  ground: `M0 ${TENT.ground} L400 ${TENT.ground}`,
};

// Área "dentro" da tenda (telhado + espaço sob ela), usada para recortar fotos
export const tentClipPoints = `${ax},${ay} ${rx},${ry} ${rx},${vb} ${legR},${vb} ${legR},${TENT.ground} ${legL},${TENT.ground} ${legL},${vb} ${lx},${vb} ${lx},${ly}`;

// Versão parametrizada (largura em px) para desenhar tendas lado a lado em escala
export const tentShape = ({ x, w, base, legHeight }) => {
  const roofH = w * 0.3;
  const valH = Math.max(8, w * 0.06);
  const eaveY = base - legHeight - valH;
  const inset = w * 0.07;
  const n = Math.max(4, Math.round(w / 40));
  const sw = w / n;
  let edge = '';
  for (let i = 0; i < n; i++) {
    const x0 = x + w - i * sw;
    edge += ` Q${x0 - sw / 2} ${eaveY + valH + valH * 0.7} ${x0 - sw} ${eaveY + valH}`;
  }
  return {
    roof: `M${x} ${eaveY} L${x + w / 2} ${eaveY - roofH} L${x + w} ${eaveY} Z`,
    valance: `M${x} ${eaveY} L${x + w} ${eaveY} L${x + w} ${eaveY + valH}${edge} Z`,
    legs: `M${x + inset} ${eaveY + valH} L${x + inset} ${base} M${x + w - inset} ${eaveY + valH} L${x + w - inset} ${base}`,
    top: eaveY - roofH,
  };
};
