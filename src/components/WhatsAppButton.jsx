import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { getWhatsAppUrl } from '../config/site';

const WhatsAppButton = () => {
  return (
    <motion.a
      href={getWhatsAppUrl('Olá! Vim pelo site e gostaria de um orçamento de tenda.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 220, damping: 20 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-ink shadow-lg shadow-[#25D366]/40"
    >
      <MessageCircle size={30} />
    </motion.a>
  );
};

export default WhatsAppButton;
