"use client";

import { Coffee, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart, selectCount } from "@/lib/cart-store";
import { useEffect, useState } from "react";

export function Header() {
  const setOpen = useCart((s) => s.setOpen);
  const count = useCart(selectCount);
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
            <Coffee className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
              Chiya Holics
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Chiya &amp; Coffee Café
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#menu" className="transition-colors hover:text-foreground">
            Menu
          </a>
          <a href="#about" className="transition-colors hover:text-foreground">
            Our Story
          </a>
          <a href="#hours" className="transition-colors hover:text-foreground">
            Hours
          </a>
          <a href="#visit" className="transition-colors hover:text-foreground">
            Visit
          </a>
        </nav>

        <Button
          onClick={() => setOpen(true)}
          className="group relative rounded-full bg-primary px-4 text-primary-foreground hover:bg-primary/90"
          aria-label="Open cart"
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Cart
          {mounted && count > 0 && (
            <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-xs font-semibold text-accent-foreground">
              {count}
            </span>
          )}
        </Button>
      </div>
    </header>
  );
}
