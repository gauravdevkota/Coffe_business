"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The masala chiya here is the best I've had in Kathmandu — and I've tried a lot. Perfectly spiced, never too sweet, and the cup just feels right in your hands.",
    name: "Sushma Karki",
    role: "Regular since 2024",
    location: "Raniban",
  },
  {
    quote:
      "I came for the coffee and stayed for the momos. The chicken sekuwa with beaten rice at sunset, with the valley view — that's my happy place now.",
    name: "Bishnu Thapa",
    role: "Coffee enthusiast",
    location: "Balaju",
  },
  {
    quote:
      "Cozy spot, friendly people, and you can taste that everything is made fresh. The sel roti and achar breakfast is straight out of a Nepali home kitchen.",
    name: "Anjali Maharjan",
    role: "Food blogger",
    location: "Lazimpat",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-gold-dark" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold-dark">
              05 — Reviews
            </span>
            <span className="h-px w-8 bg-gold-dark" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            What our regulars{" "}
            <span className="font-accent italic font-light text-terracotta">
              say
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex items-center justify-center gap-3"
          >
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              4.9 average · 1,000+ cups poured
            </span>
          </motion.div>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative flex flex-col rounded-sm border border-border/60 bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_60px_-30px_rgba(60,30,15,0.4)]"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-gold/15 transition-colors duration-500 group-hover:text-gold/30" />
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="h-4 w-4 fill-gold text-gold"
                  />
                ))}
              </div>
              <blockquote className="flex-1 font-accent text-lg italic leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-espresso font-serif text-base font-semibold text-gold-light">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-serif font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} · {t.location}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
