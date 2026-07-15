"use client";

import { useState } from "react";
import { ScrollProgress } from "@/components/coffee/ScrollProgress";
import { Header } from "@/components/coffee/Header";
import { Hero } from "@/components/coffee/Hero";
import { Marquee } from "@/components/coffee/Marquee";
import { FeaturedSection } from "@/components/coffee/FeaturedSection";
import { BreakfastSection } from "@/components/coffee/BreakfastSection";
import { MenuSection } from "@/components/coffee/MenuSection";
import { HeritageSection } from "@/components/coffee/HeritageSection";
import { TestimonialsSection } from "@/components/coffee/TestimonialsSection";
import { VisitSection } from "@/components/coffee/VisitSection";
import { CartSheet } from "@/components/coffee/CartSheet";
import { Footer } from "@/components/coffee/Footer";
import type { MenuCategory } from "@/lib/menu-data";

export default function Home() {
  const [active, setActive] = useState<MenuCategory | "all">("all");
  const [query, setQuery] = useState("");

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <FeaturedSection />
        <BreakfastSection />
        <MenuSection
          active={active}
          setActive={setActive}
          query={query}
          setQuery={setQuery}
        />
        <HeritageSection />
        <TestimonialsSection />
        <VisitSection />
      </main>
      <Footer />
      <CartSheet />
    </div>
  );
}
