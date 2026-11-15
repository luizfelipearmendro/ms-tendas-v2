export const WHATSAPP_NUMBER = '5565999047060';

export function getWhatsAppUrl(mensagem) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return mensagem ? `${base}?text=${encodeURIComponent(mensagem)}` : base;
}

export const GOOGLE_RATING = '5,0';
export const GOOGLE_REVIEWS_COUNT = 154;
