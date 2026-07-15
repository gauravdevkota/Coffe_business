"use client";

import { Coffee, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart, selectCount } from "@/lib/cart-store";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const setOpen = useCart((s) => s.setOpen);
  const count = useCart(selectCount);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-[0_4px_30px_-10px_rgba(60,30,15,0.15)] border-b border-gold/20"
          : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-500",
          scrolled ? "h-16" : "h-20"
        )}
      >
        <a href="#top" className="flex items-center gap-3 group">
          <span
            className={cn(
              "flex items-center justify-center rounded-full border transition-all duration-500",
              scrolled
                ? "h-9 w-9 border-gold/40 bg-primary text-primary-foreground"
                : "h-11 w-11 border-cream/40 bg-cream/10 text-cream backdrop-blur"
            )}
          >
            <Coffee className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "font-serif font-semibold tracking-tight transition-colors duration-500",
                scrolled ? "text-foreground text-lg" : "text-cream text-xl"
              )}
            >
              Chiya Holics
            </span>
            <span
              className={cn(
                "text-[10px] uppercase tracking-[0.25em] mt-1 transition-colors duration-500",
                scrolled ? "text-gold-dark" : "text-cream/70"
              )}
            >
              Est. 2024 · Kathmandu
            </span>
          </span>
        </a>

        <nav
          className={cn(
            "hidden lg:flex items-center gap-10 text-sm font-medium transition-colors duration-500",
            scrolled ? "text-muted-foreground" : "text-cream/80"
          )}
        >
          {[
            { href: "#menu", label: "Menu" },
            { href: "#craft", label: "Our Craft" },
            { href: "#reviews", label: "Reviews" },
            { href: "#visit", label: "Visit" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="gold-underline transition-colors hover:text-current"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          onClick={() => setOpen(true)}
          className={cn(
            "group relative rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-500",
            scrolled
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-cream text-espresso hover:bg-cream/90"
          )}
          aria-label="Open cart"
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          <span className="hidden sm:inline">Cart</span>
          {mounted && count > 0 && (
            <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1.5 text-xs font-bold text-espresso">
              {count}
            </span>
          )}
        </Button>
      </div>
    </header>
  );
}
