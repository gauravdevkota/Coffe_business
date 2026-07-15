"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sunrise, Clock, Flame } from "lucide-react";
import { menuItems, formatPrice } from "@/lib/menu-data";
import { useCart } from "@/lib/cart-store";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { cn } from "@/lib/utils";

const breakfastPillars = [
  {
    icon: Sunrise,
    label: "Sunrise Service",
    description: "Served fresh from 6:30 AM daily",
  },
  {
    icon: Flame,
    label: "Made to Order",
    description: "Nothing reheated, ever",
  },
  {
    icon: Clock,
    label: "All-Day Breakfast",
    description: "Available until closing",
  },
];

export function BreakfastSection() {
  const breakfastItems = menuItems.filter((m) => m.category === "breakfast");
  const heroItem = breakfastItems.find((m) => m.id === "nepali-thali") ?? breakfastItems[0];
  const sideItems = breakfastItems
    .filter((m) => m.id !== heroItem.id)
    .slice(0, 6);

  const add = useCart((s) => s.add);
  const { toast } = useToast();
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAdd = (id: string) => {
    const item = breakfastItems.find((m) => m.id === id);
    if (!item) return;
    add(item);
    setAddedId(id);
    toast({
      title: "Added to cart",
      description: `${item.name} — ${formatPrice(item.price)}`,
    });
    window.setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <section
      id="breakfast"
      className="relative overflow-hidden bg-mesh-animated py-24 text-cream sm:py-32"
    >
      {/* Mandala overlay */}
      <div className="absolute inset-0 bg-mandala-dark opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center gap-3"
          >
            <Sunrise className="h-5 w-5 text-gold-light" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold-light">
              03 — Himalayan Breakfast
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            Breakfast at{" "}
            <span className="font-accent italic font-light text-gold-light">
              sunrise
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg leading-relaxed text-cream/75"
          >
            The most important meal of the day, done the Nepali way — from
            Newari chhoila with beaten rice to slow-cooked dhido, hand-stuffed
            parathas, and a full traditional thali. Plus café classics for
            when you need a softer start.
          </motion.p>
        </div>

        {/* Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 grid gap-4 sm:grid-cols-3"
        >
          {breakfastPillars.map((p) => (
            <div
              key={p.label}
              className="flex items-center gap-4 rounded-sm border border-gold/20 bg-cream/5 p-4 backdrop-blur-sm"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold-light">
                <p.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-serif text-sm font-semibold text-cream">
                  {p.label}
                </p>
                <p className="text-xs text-cream/60">{p.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Hero feature card + grid */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Hero feature card */}
          <motion.article
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="group relative col-span-1 overflow-hidden rounded-sm bg-card lg:col-span-5 lg:row-span-2"
          >
            <div className="img-zoom relative h-72 overflow-hidden bg-muted lg:h-full lg:min-h-[600px]">
              <Image
                src={heroItem.image}
                alt={heroItem.name}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/95 via-espresso/40 to-transparent" />
              <div className="absolute inset-0 bg-mandala-dark opacity-30" />
            </div>

            {/* Overlay content */}
            <div className="absolute inset-x-0 bottom-0 p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-espresso">
                  Chef&apos;s Pick
                </span>
                <span className="font-serif text-2xl font-semibold text-gold-light">
                  {formatPrice(heroItem.price)}
                </span>
              </div>
              <h3 className="font-serif text-3xl font-semibold text-cream sm:text-4xl">
                {heroItem.name}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/80">
                {heroItem.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {heroItem.tags?.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-gold-light"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => handleAdd(heroItem.id)}
                className={cn(
                  "btn-gold mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs uppercase tracking-[0.15em] transition-all",
                  addedId === heroItem.id && "opacity-70"
                )}
              >
                {addedId === heroItem.id ? "Added!" : "Add to Cart"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.article>

          {/* Side grid of 6 items */}
          <div className="col-span-1 grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {sideItems.map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                className="group relative flex gap-4 overflow-hidden rounded-sm border border-gold/15 bg-cream/5 p-4 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:bg-cream/10"
              >
                <div className="img-zoom relative h-24 w-24 shrink-0 overflow-hidden rounded-sm bg-muted">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-serif text-base font-semibold leading-snug text-cream">
                      {item.name}
                    </h4>
                    <span className="shrink-0 font-serif text-base font-semibold text-gold-light">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-cream/65">
                    {item.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    {item.tags?.[0] && (
                      <span className="text-[10px] uppercase tracking-wide text-gold-light/70">
                        {item.tags[0]}
                      </span>
                    )}
                    <button
                      onClick={() => handleAdd(item.id)}
                      className={cn(
                        "ml-auto rounded-full border border-gold/30 px-4 py-1.5 text-[11px] font-medium uppercase tracking-wide text-gold-light transition-all hover:bg-gold hover:text-espresso",
                        addedId === item.id && "bg-gold text-espresso"
                      )}
                    >
                      {addedId === item.id ? "Added!" : "Add"}
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* See full breakfast in menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-sm border border-gold/20 bg-cream/5 p-8 backdrop-blur-sm sm:flex-row"
        >
          <div>
            <p className="font-serif text-xl font-semibold text-cream">
              Plus {breakfastItems.length - 7} more breakfast plates in the full menu
            </p>
            <p className="mt-1 text-sm text-cream/65">
              Sel roti, aloo tama, Tibetan bread, masala omelette, and more.
            </p>
          </div>
          <a
            href="#menu"
            className="btn-gold inline-flex shrink-0 items-center gap-2 rounded-full px-7 py-3 text-xs uppercase tracking-[0.15em]"
          >
            View Full Menu
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
