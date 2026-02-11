import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface AboutProps {
    fadeUp: any;
}

const AMBIENTE_IMAGE = '/assets/849f667c-b466-4c6d-b481-a5f4f59f8aab.jfif';

export default function About({ fadeUp }: AboutProps) {
    return (
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
    );
}
