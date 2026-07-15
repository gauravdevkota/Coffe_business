"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { menuItems, formatPrice } from "@/lib/menu-data";
import { useCart } from "@/lib/cart-store";
import { useToast } from "@/hooks/use-toast";

const featuredIds = ["masala-chiya", "chicken-momo", "cafe-latte"];

export function FeaturedSection() {
  const featured = featuredIds
    .map((id) => menuItems.find((m) => m.id === id))
    .filter(Boolean) as typeof menuItems;
  const add = useCart((s) => s.add);
  const { toast } = useToast();

  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-4 flex items-center gap-3"
            >
              <span className="editorial-number text-sm">01 —</span>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold-dark">
                Signatures
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl"
            >
              The cups that
              <br />
              <span className="font-accent italic font-light text-terracotta">
                built our name
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md text-base leading-relaxed text-muted-foreground"
          >
            Three recipes we&apos;ve spent years perfecting — brewed, folded,
            and pulled fresh from sunrise to sunset. The regulars&apos;
            favorites, and our proudest pours.
          </motion.p>
        </div>

        {/* Featured grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-sm bg-card shadow-[0_20px_60px_-30px_rgba(60,30,15,0.4)] transition-all duration-500 hover:shadow-[0_30px_80px_-30px_rgba(60,30,15,0.5)]"
            >
              {/* Numbered tag */}
              <div className="absolute left-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-espresso/80 font-serif text-sm italic text-gold-light backdrop-blur">
                0{i + 1}
              </div>

              {/* Image */}
              <div className="img-zoom relative aspect-[4/5] overflow-hidden bg-muted">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/10 to-transparent" />
                {/* Price badge */}
                <div className="absolute right-5 top-5 rounded-full bg-gold px-3 py-1 text-xs font-bold text-espresso">
                  {formatPrice(item.price)}
                </div>
                {/* Hover CTA */}
                <button
                  onClick={() => {
                    add(item);
                    toast({
                      title: "Added to cart",
                      description: `${item.name} — ${formatPrice(item.price)}`,
                    });
                  }}
                  className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-cream text-espresso opacity-0 transition-all duration-500 group-hover:opacity-100 hover:bg-gold hover:text-espresso"
                  aria-label={`Add ${item.name} to cart`}
                >
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="relative -mt-20 p-6 pt-0">
                <div className="relative z-10 rounded-sm bg-card/95 p-5 backdrop-blur-sm">
                  <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-gold-dark">
                    Signature
                  </p>
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
