"use client";

import { useState } from "react";
import { Header } from "@/components/coffee/Header";
import { Hero } from "@/components/coffee/Hero";
import { MenuSection } from "@/components/coffee/MenuSection";
import { CartSheet } from "@/components/coffee/CartSheet";
import { Footer } from "@/components/coffee/Footer";
import type { MenuCategory } from "@/lib/menu-data";

export default function Home() {
  const [active, setActive] = useState<MenuCategory | "all">("all");
  const [query, setQuery] = useState("");

  return (
    <div className="flex min-h-screen flex-col bg-background bg-grain">
      <Header />
      <main className="flex-1">
        <Hero />
        <MenuSection
          active={active}
          setActive={setActive}
          query={query}
          setQuery={setQuery}
        />
      </main>
      <Footer />
      <CartSheet />
    </div>
  );
}
