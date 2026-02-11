import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

/**
 * Footer Component - Oficina Aromar
 * Design: Premium with smooth animations
 * Features: Contact info, social links, responsive layout
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[color:var(--brand-charcoal)] text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[color:var(--brand-terra)] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">Oficina Aromar</h3>
                <p className="text-[color:var(--brand-gold)] text-sm">Velas & Aromas Premium</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Produtos que acolhem, transformam e criam memórias. Cada vela é feita com dedicação e ingredientes naturais.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { label: 'Início', href: '#' },
                { label: 'Sobre', href: '#sobre' },
                { label: 'Produtos', href: '#produtos' },
                { label: 'Contato', href: '#contato' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-[color:var(--brand-gold)] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="tel:+5524988154470"
                className="flex items-center gap-3 text-slate-300 hover:text-[color:var(--brand-gold)] transition-colors duration-300 text-sm"
              >
                <Phone size={16} />
                (24) 98815-4470
              </a>
              <a
                href="https://www.instagram.com/oficinaaromar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-[color:var(--brand-gold)] transition-colors duration-300 text-sm"
              >
                <Instagram size={16} />
                @oficinaaromar
              </a>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <MapPin size={16} />
                <div>
                  <p>Rua do Imperador, 288</p>
                  <p>Petrópolis - RJ</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm">
          <div className="text-center md:text-left">
            <p>&copy; {currentYear} Oficina Aromar. Todos os direitos reservados.</p>
            <p className="mt-1 text-xs opacity-70">
              Desenvolvido por{' '}
              <a
                href="https://www.instagram.com/essencial_comunicacao/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[color:var(--brand-gold)] border-b border-transparent hover:border-[color:var(--brand-gold)] transition-all"
              >
                Essencial Comunicação
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a
              href="https://www.instagram.com/oficinaaromar/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[color:var(--brand-gold)] transition-colors duration-300 transform hover:scale-110"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/oficinaaromar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[color:var(--brand-gold)] transition-colors duration-300 transform hover:scale-110"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://wa.me/5524988154470"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[color:var(--brand-terra)] transition-colors duration-300 transform hover:scale-110"
            >
              💬
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
