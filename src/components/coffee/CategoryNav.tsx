"use client";

import { useMemo } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { categories, type MenuCategory } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

interface Props {
  active: MenuCategory | "all";
  setActive: (c: MenuCategory | "all") => void;
  query: string;
  setQuery: (q: string) => void;
}

export function CategoryNav({ active, setActive, query, setQuery }: Props) {
  const pills = useMemo(
    () => [{ id: "all" as const, label: "All" }, ...categories],
    []
  );

  return (
    <div className="sticky top-16 z-30 -mx-6 mb-12 border-y border-border/60 bg-background/90 px-6 py-4 backdrop-blur-md sm:-mx-8 lg:-mx-12 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div
          className="flex flex-1 gap-2 overflow-x-auto pb-1 lg:pb-0"
          role="tablist"
          aria-label="Menu categories"
        >
          {pills.map((p) => (
            <Button
              key={p.id}
              role="tab"
              aria-selected={active === p.id}
              variant={active === p.id ? "default" : "outline"}
              onClick={() => setActive(p.id)}
              className={cn(
                "shrink-0 rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-all",
                active === p.id
                  ? "bg-foreground text-background hover:bg-foreground/90"
                  : "border-border bg-transparent text-foreground hover:border-gold hover:bg-gold/10 hover:text-foreground"
              )}
            >
              {p.label}
            </Button>
          ))}
        </div>

        <div className="relative w-full lg:w-72">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the menu..."
            className="rounded-full border-border bg-card pl-11 pr-10 focus:border-gold"
            aria-label="Search menu items"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-espresso"
              aria-label="Clear search"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
