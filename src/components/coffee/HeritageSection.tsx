"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Flame, HandHeart, Mountain } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    title: "Sourced from the hills",
    description:
      "Our tea comes from Ilam in eastern Nepal, our coffee from the highland farms of Palpa and Gulmi — single-origin, ethically traded, roasted in small batches.",
  },
  {
    icon: Flame,
    title: "Brewed fresh, every cup",
    description:
      "No batch pots, no thermoses. Every cup of chiya and coffee is brewed to order so the aromatics and oils are at their peak when they reach your table.",
  },
  {
    icon: HandHeart,
    title: "Hand-folded, never frozen",
    description:
      "Our momos are folded by hand each morning. Nothing on the menu is frozen or reheated — if it isn't fresh, we don't serve it.",
  },
  {
    icon: Mountain,
    title: "Rooted in Raniban",
    description:
      "We're a small neighborhood café on the hill above Raniban, built by and for the community. The valley view is on the house.",
  },
];

export function HeritageSection() {
  return (
    <section
      id="craft"
      className="relative overflow-hidden bg-espresso py-24 text-cream sm:py-32"
    >
      {/* Mandala overlay */}
      <div className="absolute inset-0 bg-mandala-dark opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-px w-12 bg-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold-light">
              04 — Our Craft
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            From the hills of Nepal
            <br />
            <span className="font-accent italic font-light text-gold-light">
              to your cup
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg leading-relaxed text-cream/75"
          >
            Chiya Holics started as a tiny corner stall pouring masala chiya
            to early-morning walkers in Raniban. Today we&apos;re a cozy
            neighborhood café — but the philosophy hasn&apos;t changed. Source
            the best. Brew it fresh. Serve it with care.
          </motion.p>
        </div>

        {/* Pillars grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group border-t border-gold/20 pt-6"
            >
              <p className="editorial-number text-sm mb-4">
                0{i + 1}
              </p>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold-light transition-all duration-500 group-hover:bg-gold group-hover:text-espresso">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-cream">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-cream/70">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Image + quote band */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-24 grid gap-12 md:grid-cols-2 md:items-center"
        >
          <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1200&q=80"
              alt="Coffee being poured in a Nepali café"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />
          </div>
          <div>
            <span className="font-serif text-6xl text-gold-light leading-none">
              &ldquo;
            </span>
            <blockquote className="-mt-6 font-accent text-3xl italic leading-snug text-cream sm:text-4xl">
              A great cup of chiya isn&apos;t a recipe — it&apos;s a ritual.
              The ginger has to be fresh, the milk has to be full, and the
              cardamom has to crack open in the pot, not before.
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-12 bg-gold" />
              <div>
                <p className="font-serif font-semibold text-cream">
                  The Chiya Holics Team
                </p>
                <p className="text-sm text-cream/60">
                  Raniban, Kathmandu
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
