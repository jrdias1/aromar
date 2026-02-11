import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, Instagram, LucideIcon } from 'lucide-react';

interface ContactItem {
    title: string;
    text: string;
    icon: LucideIcon;
}

interface ContactProps {
    fadeUp: any;
}

const contactItems: ContactItem[] = [
    {
        title: 'Endereço',
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
];

export default function Contact({ fadeUp }: ContactProps) {
    return (
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
                    {contactItems.map((item) => (
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
    );
}
