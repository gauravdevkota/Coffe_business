"use client";

import { Plus, Check, Flame } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-store";
import type { MenuItem } from "@/lib/menu-data";
import { formatPrice } from "@/lib/menu-data";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Props {
  item: MenuItem;
}

export function MenuItemCard({ item }: Props) {
  const add = useCart((s) => s.add);
  const [justAdded, setJustAdded] = useState(false);
  const { toast } = useToast();

  const handleAdd = () => {
    add(item);
    setJustAdded(true);
    toast({
      title: "Added to cart",
      description: `${item.name} — ${formatPrice(item.price)}`,
    });
    window.setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative flex flex-col overflow-hidden rounded-sm border border-border/60 bg-card transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_60px_-30px_rgba(60,30,15,0.45)]"
    >
      <div className="img-zoom relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        {/* Gradient overlay for legibility on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {item.popular && (
          <div className="absolute left-3 top-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-espresso/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-gold-light backdrop-blur">
              <Flame className="h-3 w-3" />
              Popular
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-lg font-semibold leading-snug text-espresso">
            {item.name}
          </h3>
          <span className="shrink-0 font-serif text-lg font-semibold text-terracotta">
            {formatPrice(item.price)}
          </span>
        </div>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>

        {item.tags && item.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-gold/20 bg-gold/5 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-gold-dark"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 flex items-center justify-between pt-1">
          {item.calories !== undefined && (
            <span className="text-xs text-muted-foreground">
              {item.calories} cal
            </span>
          )}
          <Button
            onClick={handleAdd}
            size="sm"
            className="ml-auto rounded-full border border-espresso bg-transparent px-5 text-espresso transition-all hover:bg-espresso hover:text-cream"
          >
            {justAdded ? (
              <>
                <Check className="mr-1.5 h-4 w-4" />
                Added
              </>
            ) : (
              <>
                <Plus className="mr-1.5 h-4 w-4" />
                Add
              </>
            )}
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
