"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MenuItemCard } from "./MenuItemCard";
import { CategoryNav } from "./CategoryNav";
import { categories, menuItems, type MenuCategory } from "@/lib/menu-data";
import { SearchX } from "lucide-react";
import { useMemo } from "react";

interface Props {
  active: MenuCategory | "all";
  setActive: (c: MenuCategory | "all") => void;
  query: string;
  setQuery: (q: string) => void;
}

export function MenuSection({ active, setActive, query, setQuery }: Props) {
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menuItems.filter((item) => {
      const matchesCat = active === "all" || item.category === active;
      const matchesQuery =
        q === "" ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.tags ?? []).some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });
  }, [active, query]);

  const activeCategory = categories.find((c) => c.id === active);

  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mb-8 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          The Menu
        </p>
        <h2 className="mt-2 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {active === "all" ? "Everything we serve" : activeCategory?.label}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-balance text-muted-foreground">
          {active === "all"
            ? "Browse the full menu across coffee, cold brew, tea, pastries, and all-day breakfast."
            : activeCategory?.description}
        </p>
      </div>

      <CategoryNav
        active={active}
        setActive={setActive}
        query={query}
        setQuery={setQuery}
      />

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 px-6 py-20 text-center">
          <SearchX className="h-10 w-10 text-muted-foreground" />
          <p className="mt-4 font-serif text-xl font-semibold text-foreground">
            No items found
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try a different search or category.
          </p>
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
}
