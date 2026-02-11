import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
    activeVideo: number;
    heroVideos: string[];
    fadeUp: any;
}

const HERO_IMAGE = '/assets/1.jpg';

export default function Hero({ activeVideo, heroVideos, fadeUp }: HeroProps) {
    return (
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
                                Ver Coleção <ArrowRight className="w-4 h-4" />
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
    );
}
