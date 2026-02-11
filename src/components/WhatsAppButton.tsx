import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

/**
 * Floating WhatsApp Button
 * Always visible, smooth entrance animation, pulse effect
 */
export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5524988154470?text=Olá! Gostaria de saber mais sobre os produtos da Oficina Aromar."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl hover:bg-green-600 transition-colors group w-fit"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08, boxShadow: '0 20px 40px rgba(34,197,94,0.4)' }}
      whileTap={{ scale: 0.95 }}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-6 h-6 shrink-0" />
      <span className="hidden sm:inline font-semibold text-sm whitespace-nowrap">
        Fale Conosco
      </span>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20 pointer-events-none" />
    </motion.a>
  );
}
