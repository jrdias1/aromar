import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Header Component - Oficina Aromar
 * Design: Premium with smooth animations
 * Features: Sticky navigation, mobile menu, smooth transitions
 */

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105"
        >
          <div className="w-10 h-10 rounded-full bg-[color:var(--brand-terra)] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <div className="hidden sm:block">
            <div className="font-serif text-lg font-bold text-[color:var(--brand-charcoal)]">
              Oficina Aromar
            </div>
            <div className="text-xs text-[color:var(--brand-sage)] font-semibold">
              Velas & Aromas
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-semibold transition-all duration-300 relative group ${
                isScrolled
                  ? 'text-[color:var(--brand-charcoal)]'
                  : 'text-white'
              }`}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[color:var(--brand-gold)] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/5524988154470"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              isScrolled
                ? 'bg-[color:var(--brand-terra)] text-white hover:bg-[color:var(--brand-sage)]'
                : 'border-2 border-white text-white hover:bg-white/20'
            }`}
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
            isScrolled
              ? 'text-slate-900 hover:bg-slate-100'
              : 'text-white hover:bg-white/20'
          }`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-2 text-slate-900 font-semibold rounded-lg hover:bg-amber-50 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5524988154470"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 text-center"
              onClick={() => setIsOpen(false)}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
