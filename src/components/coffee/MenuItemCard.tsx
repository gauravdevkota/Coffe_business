"use client";

import { Plus, Check, Flame } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {item.popular && (
          <div className="absolute left-3 top-3">
            <Badge className="gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground shadow-sm">
              <Flame className="h-3 w-3" />
              Popular
            </Badge>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-lg font-semibold leading-snug text-foreground">
            {item.name}
          </h3>
          <span className="shrink-0 font-serif text-lg font-semibold text-primary">
            {formatPrice(item.price)}
          </span>
        </div>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>

        {item.tags && item.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-secondary-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center justify-between pt-1">
          {item.calories !== undefined && (
            <span className="text-xs text-muted-foreground">
              {item.calories} cal
            </span>
          )}
          <Button
            onClick={handleAdd}
            size="sm"
            className="ml-auto rounded-full bg-primary px-4 text-primary-foreground hover:bg-primary/90"
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
