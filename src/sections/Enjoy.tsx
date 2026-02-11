import { motion } from 'framer-motion';

interface EnjoyProps {
    fadeUp: any;
}

export default function Enjoy({ fadeUp }: EnjoyProps) {
    return (
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
    );
}
