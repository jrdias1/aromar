import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

interface GalleryItem {
    title: string;
    image: string;
}

interface GalleryProps {
    gallery: GalleryItem[];
    fadeUp: any;
}

export default function Gallery({ gallery, fadeUp }: GalleryProps) {
    return (
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
    );
}
