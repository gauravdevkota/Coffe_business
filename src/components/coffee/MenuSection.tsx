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
    <section
      id="menu"
      className="relative bg-cream py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
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
              02 — The Menu
            </span>
            <span className="h-px w-8 bg-gold-dark" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl font-semibold tracking-tight text-espresso sm:text-5xl md:text-6xl"
          >
            {active === "all" ? (
              <>
                Everything{" "}
                <span className="font-accent italic font-light text-terracotta">
                  we serve
                </span>
              </>
            ) : (
              activeCategory?.label
            )}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground"
          >
            {active === "all"
              ? "Browse the full menu across chiya, coffee, cold drinks, savory bites, and Himalayan breakfast."
              : activeCategory?.description}
          </motion.p>
        </div>

        <CategoryNav
          active={active}
          setActive={setActive}
          query={query}
          setQuery={setQuery}
        />

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-sm border border-dashed border-border bg-card/50 px-6 py-24 text-center">
            <SearchX className="h-12 w-12 text-muted-foreground" />
            <p className="mt-4 font-serif text-xl font-semibold text-espresso">
              No items found
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try a different search or category.
            </p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
