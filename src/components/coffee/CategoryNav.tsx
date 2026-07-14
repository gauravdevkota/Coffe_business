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
    <div className="sticky top-16 z-30 -mx-4 mb-10 border-b border-border/60 bg-background/85 px-4 py-4 backdrop-blur-md sm:-mx-6 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
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
                "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active === p.id
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-transparent text-foreground hover:bg-secondary"
              )}
            >
              {p.label}
            </Button>
          ))}
        </div>

        <div className="relative w-full lg:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the menu..."
            className="rounded-full border-border bg-card pl-9 pr-9"
            aria-label="Search menu items"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
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
