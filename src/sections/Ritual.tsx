import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface RitualItem {
    title: string;
    text: string;
}

interface RitualProps {
    rituals: RitualItem[];
    fadeUp: any;
}

const HERO_IMAGE = '/assets/1.jpg';

export default function Ritual({ rituals, fadeUp }: RitualProps) {
    return (
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
    );
}
