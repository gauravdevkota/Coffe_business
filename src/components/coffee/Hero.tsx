"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Star, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-espresso text-cream"
    >
      {/* Background image — Chiya Holics storefront */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/cafe/chiya-holics-exterior.jpg"
          alt="Chiya Holics café storefront in Raniban, Kathmandu"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />
        {/* Cinematic mesh gradient overlay */}
        <div className="absolute inset-0 bg-mesh-animated opacity-60" aria-hidden />
        {/* Gradient overlays for cinematic depth */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/70 to-espresso/30"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-transparent to-espresso/40"
          aria-hidden
        />
        {/* Mandala dot overlay */}
        <div className="absolute inset-0 bg-mandala-dark opacity-50" aria-hidden />
      </div>

      {/* Decorative gold corner frame */}
      <div className="pointer-events-none absolute left-6 right-6 top-6 bottom-6 border border-gold/15 rounded-sm hidden md:block" aria-hidden />
      <div className="pointer-events-none absolute left-8 top-8 h-12 w-12 border-l-2 border-t-2 border-gold/50 hidden md:block" aria-hidden />
      <div className="pointer-events-none absolute right-8 top-8 h-12 w-12 border-r-2 border-t-2 border-gold/50 hidden md:block" aria-hidden />
      <div className="pointer-events-none absolute left-8 bottom-8 h-12 w-12 border-l-2 border-b-2 border-gold/50 hidden md:block" aria-hidden />
      <div className="pointer-events-none absolute right-8 bottom-8 h-12 w-12 border-r-2 border-b-2 border-gold/50 hidden md:block" aria-hidden />

      <div className="mx-auto w-full max-w-7xl px-6 py-32 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          {/* Top eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-gold" />
            <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-gold-light">
              <MapPin className="h-3.5 w-3.5" />
              Sunrise Height · Raniban · Kathmandu
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="font-serif text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Chiya
            <br />
            <span className="font-accent italic font-light text-gold-light">
              Holics
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-cream/80 sm:text-xl"
          >
            A cozy artisan café pouring authentic Nepali masala chiya,
            highland coffee, and hand-folded momos — crafted with care since
            2024 in the hills above Kathmandu.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#menu"
              className="btn-gold inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm uppercase tracking-[0.15em]"
            >
              Explore the Menu
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#craft"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-cream transition-all hover:border-gold hover:text-gold-light"
            >
              Our Story
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-cream/15 pt-8"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold text-gold"
                  />
                ))}
              </div>
              <span className="text-sm text-cream/70">
                Loved by 1,000+ regulars
              </span>
            </div>
            <div className="hidden h-4 w-px bg-cream/20 sm:block" />
            <div className="text-sm text-cream/70">
              <span className="font-serif text-2xl font-semibold text-gold-light">
                25+
              </span>{" "}
              menu items
            </div>
            <div className="hidden h-4 w-px bg-cream/20 sm:block" />
            <div className="text-sm text-cream/70">
              <span className="font-serif text-2xl font-semibold text-gold-light">
                6:30 AM
              </span>{" "}
              open daily
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/50"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
