import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface Feature {
    title: string;
    description: string;
    icon: LucideIcon;
}

interface ProductsProps {
    features: Feature[];
    fadeUp: any;
}

const PRODUCTS_IMAGE = '/assets/unnamed.jpg';

export default function Products({ features, fadeUp }: ProductsProps) {
    return (
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
    );
}
