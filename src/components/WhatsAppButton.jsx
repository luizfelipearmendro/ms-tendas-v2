import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5565999047060"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:bg-green-600 hover:scale-110 transition-all"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>
      <MessageCircle size={32} className="relative" />
    </a>
  );
};

export default WhatsAppButton;
