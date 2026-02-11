import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Leaf,
  Heart,
  Droplets,
  Play,
  MapPin,
  Phone,
  Instagram,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HERO_IMAGE = '/assets/1.jpg';
const PRODUCTS_IMAGE = '/assets/unnamed.jpg';
const AMBIENTE_IMAGE = '/assets/849f667c-b466-4c6d-b481-a5f4f59f8aab.jfif';

const heroVideos = ['/video-hero-1.mp4', '/video-hero-2.mp4', '/video-hero-3.mp4'];

const features = [
  {
    title: 'Velas Aromáticas',
    description: 'Cera vegetal, pavio de algodão e fragrâncias com memória afetiva.',
    icon: Sparkles,
  },
  {
    title: 'Difusores e Home Spray',
    description: 'Perfume de ambiente elegante, duradouro e equilibrado.',
    icon: Leaf,
  },
  {
    title: 'Presentes Personalizados',
    description: 'Etiquetas, caixas e combinações para eventos e momentos especiais.',
    icon: Heart,
  },
  {
    title: 'Aromas Naturais',
    description: 'Notas suaves que acolhem e transformam o clima do lar.',
    icon: Droplets,
  },
];

const rituals = [
  {
    title: 'Escolha a essência',
    text: 'Notas amadeiradas, florais ou cítricas para cada humor do dia.',
  },
  {
    title: 'Acenda e desacelere',
    text: 'Um ritual simples para transformar o ambiente e o tempo.',
  },
  {
    title: 'Deixe a memória ficar',
    text: 'Fragrâncias que viram lembranças e criam aconchego.',
  },
];

const gallery = [
  { title: 'Coleção Botânica', image: '/assets/1.jpg' },
  { title: 'Finos Detalhes', image: '/assets/16b165d5-32e6-41b5-9310-b30aed3a268c.jfif' },
  { title: 'Linha Premium', image: '/assets/674d3e4b-95fc-428e-bc02-41a78b0c4aa0.jfif' },
  { title: 'Mesa Sensorial', image: '/assets/80cf39a7-c441-4843-8e2c-7f6f69e9686d.jfif' },
  { title: 'Momento Especial', image: '/assets/849f667c-b466-4c6d-b481-a5f4f59f8aab.jfif' },
  { title: 'Presentes Artesanais', image: '/assets/unnamed.jpg' },
];

const testimonials = [
  {
    name: 'Ana Silva',
    text: 'A qualidade e o cuidado em cada detalhe são impecáveis. Minha casa mudou.',
    rating: 5,
  },
  {
    name: 'Juliana Costa',
    text: 'As velas personalizadas ficaram perfeitas para o meu evento. Lindas!',
    rating: 5,
  },
  {
    name: 'Carlos Mendes',
    text: 'Entrega rápida, embalagem linda e fragrâncias sofisticadas.',
    rating: 5,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % heroVideos.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="overflow-hidden">
        {/* HERO */}
        <section className="relative h-[100svh] w-full hero-spotlight">
          <div className="absolute inset-0">
            {heroVideos.map((src, index) => (
              <motion.video
                key={src}
                src={src}
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                initial={{ opacity: 0 }}
                animate={{ opacity: index === activeVideo ? 1 : 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
            ))}
          </div>

          <div className="absolute inset-0 hero-overlay" />

          <div className="relative z-10 h-full flex items-center">
            <div className="container">
              <motion.div
                className="max-w-2xl"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-xs tracking-[0.3em] uppercase">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand-gold)]" />
                  Oficina Aromar
                </div>
                <h1 className="mt-6 text-5xl md:text-7xl font-serif text-white leading-tight">
                  Oficina Aromar: Aromas que <span className="text-[color:var(--brand-gold)]">acolhem</span>
                  <br /> e criam memórias.
                </h1>
                <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
                  Velas e fragrâncias artesanais feitas com calma, afeto e uma
                  estética natural que transforma qualquer ambiente.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="#produtos"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[color:var(--brand-gold)] text-[color:var(--brand-charcoal)] font-semibold shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Ver Colecao <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/5524988154470"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/60 text-white font-semibold hover:bg-white/10 transition-colors"
                  >
                    Falar no WhatsApp
                  </a>
                </div>

                <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { label: 'Artesanal', value: '100%' },
                    { label: 'Ingredientes', value: 'Naturais' },
                    { label: 'Cidade', value: 'Petrópolis' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white"
                    >
                      <div className="text-sm uppercase tracking-[0.25em] text-white/70">
                        {item.label}
                      </div>
                      <div className="text-lg font-semibold mt-1">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

        </section>

        {/* SOBRE */}
        <section id="sobre" className="section-pad bg-[color:var(--brand-beige)]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-[color:var(--brand-sage)]">
                  Sobre a marca
                </p>
                <h2 className="text-4xl md:text-5xl font-serif text-[color:var(--brand-charcoal)]">
                  Criada com paixão e cuidado em cada detalhe
                </h2>
                <p className="text-lg text-[color:var(--brand-charcoal)] opacity-80">
                  A Oficina Aromar nasce do desejo de oferecer um ritual de bem-estar
                  completo. Cada produto é feito a mão, com ingredientes selecionados
                  e um olhar estético que combina natureza, elegância e aconchego.
                </p>
                <p className="text-lg text-[color:var(--brand-charcoal)] opacity-80">
                  Localizada no Shopping Center Pedro II, em Petrópolis, a oficina
                  recebe você com um atendimento caloroso e um universo de aromas.
                </p>
                <a
                  href="https://wa.me/5524988154470"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[color:var(--brand-terra)] text-white font-semibold shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Agendar visita <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative"
              >
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[rgba(212,165,116,0.3)] blur-2xl" />
                <div className="absolute -bottom-6 -right-8 w-32 h-32 rounded-full bg-[rgba(139,157,131,0.3)] blur-2xl" />
                <div className="rounded-[32px] overflow-hidden shadow-2xl border border-white/50">
                  <img
                    src={AMBIENTE_IMAGE}
                    alt="Interior da Oficina Aromar em Petrópolis, decorado com plantas e aromas premium"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PRODUTOS */}
        <section id="produtos" className="section-pad bg-white">
          <div className="container">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[color:var(--brand-sage)]">
                  Coleção
                </p>
                <h2 className="text-4xl md:text-5xl font-serif text-[color:var(--brand-charcoal)]">
                  Uma seleção para transformar o seu dia
                </h2>
              </div>
              <p className="max-w-xl text-[color:var(--brand-charcoal)] opacity-70 text-lg">
                De velas a difusores, cada item é pensado para criar atmosferas
                elegantes, acolhedoras e memoráveis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="rounded-3xl border border-[color:var(--brand-beige)] bg-[rgba(245,241,237,0.4)] p-6 shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow">
                      <Icon className="w-5 h-5 text-[color:var(--brand-terra)]" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-[color:var(--brand-charcoal)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[color:var(--brand-charcoal)] opacity-70 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="mt-12 rounded-[32px] overflow-hidden border border-[color:var(--brand-beige)] shadow-2xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <img
                  src={PRODUCTS_IMAGE}
                  alt="Coleção exclusiva de velas artesanais e difusores de ambiente da Oficina Aromar"
                  className="h-full w-full object-cover"
                />
                <div className="p-10 lg:p-12 bg-[rgba(245,241,237,0.6)]">
                  <div className="flex items-center gap-2 text-sm uppercase tracking-[0.35em] text-[color:var(--brand-sage)]">
                    Coleção exclusiva
                  </div>
                  <h3 className="mt-4 text-3xl font-serif text-[color:var(--brand-charcoal)]">
                    Um ritual para cada momento
                  </h3>
                  <p className="mt-4 text-[color:var(--brand-charcoal)] opacity-70">
                    Linha completa com aromas florais, amadeirados e cítricos. Uma
                    curadoria que combina bem-estar, sofisticação e sensorialidade.
                  </p>
                  <a
                    href="https://wa.me/5524988154470"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[color:var(--brand-terra)] font-semibold"
                  >
                    Solicitar catálogo <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* RITUAL */}
        <section className="section-pad bg-[color:var(--brand-beige)]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="space-y-8"
              >
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-[color:var(--brand-sage)]">
                    Ritual sensorial
                  </p>
                  <h2 className="text-4xl md:text-5xl font-serif text-[color:var(--brand-charcoal)]">
                    Pequenos gestos, grandes memórias
                  </h2>
                </div>
                <div className="space-y-6">
                  {rituals.map((item, index) => (
                    <div
                      key={item.title}
                      className="flex gap-4 items-start"
                    >
                      <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[color:var(--brand-terra)] font-semibold shadow">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-[color:var(--brand-charcoal)]">
                          {item.title}
                        </h3>
                        <p className="text-[color:var(--brand-charcoal)] opacity-70 mt-2">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[color:var(--brand-sage)] text-white font-semibold"
                  type="button"
                >
                  <Play className="w-4 h-4" /> Ver processo
                </button>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative"
              >
                <div className="rounded-[32px] overflow-hidden shadow-2xl">
                  <img
                    src={HERO_IMAGE}
                    alt="Processo artesanal de fabricação de velas na Oficina Aromar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 right-6 rounded-2xl bg-white px-5 py-4 shadow-lg border border-[color:var(--brand-beige)]">
                  <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--brand-sage)]">
                    Atelier
                  </p>
                  <p className="text-[color:var(--brand-charcoal)] font-semibold">
                    Produzido com calma e afeto
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* COMO APROVEITAR AO MÁXIMO */}
        <section id="aproveitar" className="section-pad bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="relative order-2 lg:order-1"
              >
                <div className="rounded-[32px] overflow-hidden shadow-2xl">
                  <img
                    src="/assets/como-aproveitar.jfif"
                    alt="Como aproveitar ao máximo sua vela"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="space-y-8 order-1 lg:order-2"
              >
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-[color:var(--brand-sage)]">
                    Dicas de Uso
                  </p>
                  <h2 className="text-4xl md:text-5xl font-serif text-[color:var(--brand-charcoal)]">
                    Como aproveitar ao máximo sua vela
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-2 text-[color:var(--brand-terra)]">
                      <span className="w-8 h-8 rounded-full bg-[color:var(--brand-beige)] flex items-center justify-center text-sm">1</span>
                      Preparação
                    </h3>
                    <ul className="space-y-2 text-[color:var(--brand-charcoal)] opacity-80">
                      <li><strong>Escolha o local certo:</strong> Coloque a vela em um local estável, longe de correntes de ar e fontes de calor.</li>
                      <li><strong>Corte a mecha:</strong> Certifique-se de que a mecha esteja cortada para evitar que a chama fique muito alta.</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-2 text-[color:var(--brand-terra)]">
                      <span className="w-8 h-8 rounded-full bg-[color:var(--brand-beige)] flex items-center justify-center text-sm">2</span>
                      Queima
                    </h3>
                    <ul className="space-y-2 text-[color:var(--brand-charcoal)] opacity-80">
                      <li><strong>Queime corretamente:</strong> Queime a vela por pelo menos 2 horas na primeira vez para criar uma poça de cera uniforme.</li>
                      <li><strong>Chama estável:</strong> Ajuste a mecha para manter a chama estável e evitar que a vela queime demais.</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-2 text-[color:var(--brand-terra)]">
                      <span className="w-8 h-8 rounded-full bg-[color:var(--brand-beige)] flex items-center justify-center text-sm">3</span>
                      Manutenção
                    </h3>
                    <ul className="space-y-2 text-[color:var(--brand-charcoal)] opacity-80">
                      <li><strong>Limpeza:</strong> Limpe a vela regularmente para remover resíduos de cera e fuligem.</li>
                      <li><strong>Armazenamento:</strong> Armazene em local fresco e seco para evitar danos.</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-2 text-[color:var(--brand-terra)]">
                      <span className="w-8 h-8 rounded-full bg-[color:var(--brand-beige)] flex items-center justify-center text-sm">4</span>
                      Dicas Adicionais
                    </h3>
                    <ul className="space-y-2 text-[color:var(--brand-charcoal)] opacity-80">
                      <li><strong>Aproveite o aroma:</strong> Se a vela for aromática, aproveite para criar um ambiente aconchegante.</li>
                      <li><strong>Segurança:</strong> Nunca deixe uma vela acesa sem supervisão.</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* GALERIA */}
        <section id="galeria" className="section-pad bg-white">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[color:var(--brand-sage)]">
                  Galeria
                </p>
                <h2 className="text-4xl md:text-5xl font-serif text-[color:var(--brand-charcoal)]">
                  Um olhar sobre o universo Aromar
                </h2>
              </div>
              <a
                href="https://www.instagram.com/oficinaaromar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[color:var(--brand-terra)] font-semibold"
              >
                Ver no Instagram <Instagram className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((item, index) => (
                <motion.div
                  key={`${item.title}-${index}`}
                  className="group relative overflow-hidden rounded-3xl shadow-lg"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-72 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm uppercase tracking-[0.35em]">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="section-pad bg-[color:var(--brand-beige)]">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[color:var(--brand-sage)]">
                Depoimentos
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-[color:var(--brand-charcoal)]">
                Experiências reais, sentimentos verdadeiros
              </h2>
            </div>

            <div className="mt-10 rounded-[32px] bg-white border border-[color:var(--brand-beige)] shadow-xl p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex gap-1 text-[color:var(--brand-gold)] text-xl">
                    {Array.from({ length: testimonials[activeTestimonial].rating }).map(
                      (_, index) => (
                        <span key={index}>★</span>
                      )
                    )}
                  </div>
                  <p className="mt-6 text-xl text-[color:var(--brand-charcoal)] opacity-80 italic">
                    "{testimonials[activeTestimonial].text}"
                  </p>
                  <p className="mt-6 font-semibold text-[color:var(--brand-charcoal)]">
                    {testimonials[activeTestimonial].name}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${index === activeTestimonial
                      ? 'w-10 bg-[color:var(--brand-terra)]'
                      : 'w-4 bg-[color:var(--brand-beige)]'
                      }`}
                    aria-label={`Ver depoimento ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="section-pad bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-sm uppercase tracking-[0.35em] text-[color:var(--brand-sage)]">
                Visite-nos
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-[color:var(--brand-charcoal)]">
                Vamos criar um momento especial
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Endereco',
                  text: 'Rua do Imperador, 288, Quiosque 2 - Centro, Petrópolis - RJ',
                  icon: MapPin,
                },
                {
                  title: 'Telefone',
                  text: '(24) 98815-4470',
                  icon: Phone,
                },
                {
                  title: 'Instagram',
                  text: '@oficinaaromar',
                  icon: Instagram,
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  className="rounded-3xl border border-[color:var(--brand-beige)] bg-[rgba(245,241,237,0.4)] p-6 shadow-lg"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow">
                    <item.icon className="w-5 h-5 text-[color:var(--brand-terra)]" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[color:var(--brand-charcoal)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[color:var(--brand-charcoal)] opacity-70">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/5524988154470"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[color:var(--brand-terra)] text-white font-semibold shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-0.5"
              >
                Falar no WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/oficinaaromar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[color:var(--brand-terra)] text-[color:var(--brand-terra)] font-semibold"
              >
                Visitar Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
