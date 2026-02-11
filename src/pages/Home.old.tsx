import { useEffect, useState } from 'react';
import { ChevronRight, Sparkles, Heart, Leaf, Play } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Home Page - Oficina Aromar
 * Design: Premium Artisanal with Dynamic Animations
 * Inspired by: Kinpai Sushi - Modern, elegant, interactive
 * Sections: Hero with animations, About, Products carousel, Testimonials, Contact
 */

// Image URLs from generated assets
const HERO_IMAGE = 'https://private-us-east-1.manuscdn.com/sessionFile/j4C9ue5GuESMPBakIZ9OhD/sandbox/fztUek3bR2gGEIgEYoWBCU-img-1_1770755614000_na1fn_aGVyby12ZWxhcy1hcm9tYXItdjI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvajRDOXVlNUd1RVNNUEJha0laOU9oRC9zYW5kYm94L2Z6dFVlazNiUjJnR0VJZ0VZb1dCQ1UtaW1nLTFfMTc3MDc1NTYxNDAwMF9uYTFmbl9hR1Z5YnkxMlpXeGhjeTFoY201dFlYSXRkakkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rTeEQ26tFD-3zSBqskMSSNNxuz38JCuwYuO8vADBNsHqOAB-hZQE1jGR89J~w5Ens2nKGZsNl1Kgog4K20-26gdwQ1-G1-r3TL0wZ2q0zD0qbBveWH8LXdH4HZcOg2wHuU3582W2LZNKzwaIioST4PYqXFsnoWl~Avt4Fk7dXx6j17WsUNYuG~zH9jCdOdkXXZadFodF4Pb2Z0aZhVT7jrtOwwsUS5RZLopLUcjtMdIh6zBugXJVE2Funuv9Tg3UjVfHHVSaAwebg57-wa96~Ho3Sfqmg7TlvHiLWfb5ufV~9c5KFwIqftZzZvQK80rXRo4O7FbpZfSJvsHgFVxMog__';
const PRODUCTS_IMAGE = 'https://private-us-east-1.manuscdn.com/sessionFile/j4C9ue5GuESMPBakIZ9OhD/sandbox/fztUek3bR2gGEIgEYoWBCU-img-2_1770755610000_na1fn_cHJvZHV0b3MtZGVzdGFxdWUtYXJvbWFyLXYy.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvajRDOXVlNUd1RVNNUEJha0laOU9oRC9zYW5kYm94L2Z6dFVlazNiUjJnR0VJZ0VZb1dCQ1UtaW1nLTJfMTc3MDc1NTYxMDAwMF9uYTFmbl9jSEp2WkhWMGIzTXRaR1Z6ZEdGeGRXVXRZWEp2YldGeUxYWXkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rGg7pQHpjZYN~oUZYjv~OvZGDboIT83XpYWQxiaM8jqhzNIkf4NxUUjx-PXuKnn74dGGbBASaajBY1JGnLyJQgqkgSmnyyxQqE3EmlNS0jFbwXp~zWrMAYTa2zGu8-yHzIchU7tWw~-obQPcTaqukVSmkmHdLfLHgRptnHFIHhFDhDUZQCJgp4TxGWFuomb47UfsuLXXoXIZnt-MVwWVAOU5DrAklGZVS-UvaSQUYPKUCVdiHWHhQ1s5Esnw7qSk3Tl3jRVmjKHcLkbFEnn0SSRXD1tjcgF7N2D6nqDlp6wlQlWw8rrlCXn~5t8I8iitxPu6StJXM~UjMknL2JkqHw__';
const AMBIENTE_IMAGE = 'https://private-us-east-1.manuscdn.com/sessionFile/j4C9ue5GuESMPBakIZ9OhD/sandbox/fztUek3bR2gGEIgEYoWBCU-img-3_1770755612000_na1fn_YW1iaWVudGUtYXJvbWFyLXYy.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvajRDOXVlNUd1RVNNUEJha0laOU9oRC9zYW5kYm94L2Z6dFVlazNiUjJnR0VJZ0VZb1dCQ1UtaW1nLTNfMTc3MDc1NTYxMjAwMF9uYTFmbl9ZVzFpYVdWdWRHVXRZWEp2YldGeUxYWXkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=vjiuH~oq3CM4wes-IPPS4brtEfvJUGuL6mVNV19RLcRydqGrRPW730BTY~DF0xBVKCEsHQ0saY0rbg4OsK8jdBPFKY27a-IZ-b3I-Xh~2GKKUwab0F0s1nRL0~SC0ssHh-Fe~flIiOND6b0De0opUEzRezZp-oGuOgPYs35qO-AMjCSf3uF86ltOa1DIGMTqfhBrd941L0QX77MmEqW37QjXaco5G5Kae5w5BUUYe1EInHGvhM5CxzuuYMdHxghbi1VNdoa7VEd8aNN3DdpnJ8YnctKZUiXs3TEEWADUt5xZy55xCG9N1ta9SMJOsqTXyT4svzL5ZjT7cl2c9lmg2Q__';

const products = [
  {
    id: 1,
    name: 'Velas Aromáticas',
    description: 'Velas artesanais feitas com cera de soja pura e óleos essenciais naturais.',
    icon: Sparkles,
  },
  {
    id: 2,
    name: 'Home Spray',
    description: 'Aromatizador de ambiente com fragrâncias premium e duração prolongada.',
    icon: Leaf,
  },
  {
    id: 3,
    name: 'Difusores',
    description: 'Difusores de varetas e elétricos para ambientes acolhedores.',
    icon: Heart,
  },
  {
    id: 4,
    name: 'Personalização',
    description: 'Produtos personalizados para presentes e eventos especiais.',
    icon: Sparkles,
  },
];

const testimonials = [
  {
    name: 'Ana Silva',
    text: 'A qualidade dos produtos é excepcional! Minha casa ficou com um aroma maravilhoso.',
    rating: 5,
  },
  {
    name: 'Carlos Mendes',
    text: 'Entrega rápida e produtos bem embalados. Recomendo muito!',
    rating: 5,
  },
  {
    name: 'Juliana Costa',
    text: 'Adorei a personalização! Ficou perfeito para o meu evento.',
    rating: 5,
  },
];

export default function Home() {
  const [visibleProducts, setVisibleProducts] = useState<number[]>([]);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Animate hero on mount
  useEffect(() => {
    setHeroLoaded(true);
  }, []);

  // Animate products on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleProducts((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-index]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1">
        {/* HERO SECTION - Dynamic with animations */}
        <section
          className="relative h-screen w-full overflow-hidden bg-black"
          style={{
            backgroundImage: `url('${HERO_IMAGE}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

          {/* Animated bokeh background effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-1/3 right-20 w-40 h-40 bg-amber-300/5 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-green-400/5 rounded-full blur-3xl animate-pulse delay-500" />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
            {/* Animated company name */}
            <div
              className={`mb-6 transition-all duration-1000 ${
                heroLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              <div className="inline-block px-6 py-2 border-2 border-amber-400/50 rounded-full mb-4">
                <span className="text-amber-300 text-sm font-semibold tracking-widest">
                  OFICINA AROMAR
                </span>
              </div>
            </div>

            {/* Main title with staggered animation */}
            <h1
              className={`text-6xl md:text-7xl font-serif text-white mb-4 transition-all duration-1000 delay-300 ${
                heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Oficina Aromar
            </h1>

            {/* Subtitle with animation */}
            <p
              className={`text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl transition-all duration-1000 delay-500 ${
                heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Produtos que acolhem, transformam e criam memórias
            </p>

            {/* CTA Buttons with animation */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${
                heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <a
                href="#produtos"
                className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-amber-300 transition-all duration-300 transform hover:scale-105"
              >
                Explorar Produtos
              </a>
              <a
                href="https://wa.me/5524988154470"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-amber-400 text-white font-semibold rounded-lg hover:bg-amber-400/20 transition-all duration-300 transform hover:scale-105"
              >
                Fazer Pedido
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
              heroLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="animate-bounce text-amber-300">
              <ChevronRight className="w-6 h-6 rotate-90" />
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Text content */}
              <div className="space-y-6 animate-fade-in">
                <div>
                  <span className="text-amber-600 text-sm font-semibold tracking-widest">
                    SOBRE A MARCA
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mt-2">
                    Criada com Paixão
                  </h2>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed">
                  Criada por <strong>Marcele Macedo</strong>, a Oficina Aromar é um espaço dedicado à arte de criar produtos que transformam ambientes e bem-estar.
                </p>

                <p className="text-lg text-slate-600 leading-relaxed">
                  Cada vela, cada aroma é feito com dedicação, utilizando ingredientes naturais e de qualidade premium. Acreditamos que o aroma tem o poder de evocar memórias e criar momentos de aconchego.
                </p>

                <p className="text-lg text-slate-600 leading-relaxed">
                  Localizada no Shopping Center Pedro II em Petrópolis, nossa oficina está sempre pronta para receber você e oferecer uma experiência sensorial única.
                </p>

                <div className="pt-4">
                  <a
                    href="https://wa.me/5524988154470"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                  >
                    💬 Enviar Mensagem
                  </a>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <img
                  src={AMBIENTE_IMAGE}
                  alt="Ambiente Oficina Aromar"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section id="produtos" className="py-20 px-4 md:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-amber-600 text-sm font-semibold tracking-widest">
                NOSSOS PRODUTOS
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mt-2">
                Uma Seleção Cuidadosa
              </h2>
              <p className="text-slate-600 mt-4 text-lg">
                Velas, aromas e difusores para transformar seu espaço
              </p>
            </div>

            {/* Product grid with staggered animation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => {
                const Icon = product.icon;
                const isVisible = visibleProducts.includes(index);

                return (
                  <div
                    key={product.id}
                    data-index={index}
                    className={`p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                    }}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-gradient-to-br from-amber-100 to-green-100 rounded-full">
                        <Icon className="w-6 h-6 text-amber-700" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 text-center mb-2">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 text-center text-sm">
                      {product.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <a
                href="https://wa.me/5524988154470"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border-2 border-amber-600 text-amber-600 font-semibold rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Fazer Pedido <ChevronRight className="inline w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION - Auto-rotating carousel */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-50 to-background">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-amber-600 text-sm font-semibold tracking-widest">
                CLIENTES
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mt-2">
                O que Nossos Clientes Dizem
              </h2>
            </div>

            {/* Carousel */}
            <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 min-h-64 flex flex-col justify-center">
              {/* Testimonial content with fade transition */}
              <div className="transition-all duration-500 opacity-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-2xl">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-xl text-slate-700 mb-6 italic">
                  "{testimonials[currentSlide].text}"
                </p>

                <p className="text-lg font-semibold text-slate-900">
                  {testimonials[currentSlide].name}
                </p>
              </div>

              {/* Carousel indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-amber-600 w-8'
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-20 px-4 md:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-amber-600 text-sm font-semibold tracking-widest">
                VISITE-NOS
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mt-2">
                Localização e Contato
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Address */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Endereço
                </h3>
                <p className="text-slate-600">
                  Rua do Imperador, 288
                  <br />
                  Quiosque 2 - Centro
                  <br />
                  Petrópolis - RJ, 25620-000
                </p>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Telefone
                </h3>
                <a
                  href="tel:+5524988154470"
                  className="text-amber-600 hover:text-amber-700 font-semibold text-lg transition-colors duration-300"
                >
                  (24) 98815-4470
                </a>
              </div>

              {/* Social */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Redes Sociais
                </h3>
                <a
                  href="https://www.instagram.com/oficinaaromar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-300"
                >
                  @oficinaaromar
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              <a
                href="https://wa.me/5524988154470"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                💬 Enviar Mensagem no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
