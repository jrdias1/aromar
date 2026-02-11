import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Heart,
  Droplets,
  Wind,
} from 'lucide-react';

// Layout Components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Section Components
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Products from '@/sections/Products';
import Ritual from '@/sections/Ritual';
import Gallery from '@/sections/Gallery';
import Testimonials from '@/sections/Testimonials';
import Enjoy from '@/sections/Enjoy';
import Contact from '@/sections/Contact';

// --- Constants & Config ---

const heroVideos = [
  'https://assets.mixkit.co/videos/preview/mixkit-aromatic-candles-burning-in-the-dark-41004-large.mp4',
  'https://assets.mixkit.co/videos/preview/mixkit-relaxing-spa-treatment-with-candles-and-flowers-41005-large.mp4',
];

const features = [
  {
    title: 'Velas Aromáticas',
    description: 'Cera vegetal, pavio de algodão e fragrâncias com memória afetiva.',
    icon: Sparkles,
  },
  {
    title: 'Home Sprays',
    description: 'Ambientes perfumados com apenas algumas borrifadas de frescor.',
    icon: Wind,
  },
  {
    title: 'Presentes Personalizados',
    description: 'Etiquetas, caixas e combinações para eventos e momentos especiais.',
    icon: Heart,
  },
  {
    title: 'Difusores',
    description: 'Perfume contínuo e equilibrado para sua casa ou escritório.',
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
    text: 'Crie um momento só seu, desligando-se do ritmo acelerado lá fora.',
  },
  {
    title: 'Deixe a memória ficar',
    text: 'Fragrâncias que viram lembranças e criam aconchego.',
  },
];

const gallery = [
  { title: 'Ritual Matinal', image: '/assets/1.jpg' },
  { title: 'Finos Detalhes', image: '/assets/16b165d5-32e6-41b5-9310-b30aed3a268c.jfif' },
  { title: 'Linha Premium', image: '/assets/674d3e4b-95fc-428e-bc02-41a78b0c4aa0.jfif' },
  { title: 'Mesa Sensorial', image: '/assets/80cf39a7-c441-4843-8e2c-7f6f69e9686d.jfif' },
  { title: 'Aconchego Noturno', image: '/assets/849f667c-b466-4c6d-b481-a5f4f59f8aab.jfif' },
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
    text: 'Melhor presente que já comprei. O aroma de lavanda é simplesmente divino!',
    rating: 5,
  },
  {
    name: 'Carlos Mendes',
    text: 'Entrega rápida, embalagem linda e fragrâncias sofisticadas.',
    rating: 5,
  },
];

// --- Animation Variants ---

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// --- Page Component ---

export default function Home() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-cycle hero videos
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % heroVideos.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[color:var(--brand-beige)]">
      <Header />

      <main>
        <Hero
          activeVideo={activeVideo}
          heroVideos={heroVideos}
          fadeUp={fadeUp}
        />

        <About fadeUp={fadeUp} />

        <Products
          features={features}
          fadeUp={fadeUp}
        />

        <Ritual
          rituals={rituals}
          fadeUp={fadeUp}
        />

        <Gallery
          gallery={gallery}
          fadeUp={fadeUp}
        />

        <Enjoy fadeUp={fadeUp} />

        <Testimonials
          testimonials={testimonials}
          activeTestimonial={activeTestimonial}
          setActiveTestimonial={setActiveTestimonial}
          fadeUp={fadeUp}
        />

        <Contact fadeUp={fadeUp} />
      </main>

      <Footer />
    </div>
  );
}
