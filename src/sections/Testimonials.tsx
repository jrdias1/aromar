import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
    name: string;
    text: string;
    rating: number;
}

interface TestimonialsProps {
    testimonials: Testimonial[];
    activeTestimonial: number;
    setActiveTestimonial: (index: number) => void;
    fadeUp: any;
}

export default function Testimonials({
    testimonials,
    activeTestimonial,
    setActiveTestimonial,
    fadeUp,
}: TestimonialsProps) {
    return (
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
    );
}
