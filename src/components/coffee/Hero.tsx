"use client";

import { ArrowDown, Star } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-primary text-primary-foreground"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2000&q=80')",
        }}
        aria-hidden
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/85 via-primary/70 to-primary"
        aria-hidden
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/90 backdrop-blur">
          <Star className="h-3.5 w-3.5 fill-accent text-accent" />
          Roasted in-house since 2014
        </span>

        <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Bean &amp; Brew
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-lg text-primary-foreground/85 sm:text-xl">
          A neighborhood coffee house serving single-origin espresso,
          slow-steeped cold brew, and pastries baked fresh every morning.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5 hover:bg-accent/90"
          >
            Explore the Menu
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#hours"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Today&apos;s Hours
          </a>
        </div>

        {/* Stats strip */}
        <dl className="mt-16 grid w-full max-w-3xl grid-cols-3 gap-4 border-t border-primary-foreground/20 pt-8 text-center">
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">
              Origins
            </dt>
            <dd className="mt-1 font-serif text-2xl font-semibold">12</dd>
          </div>
          <div className="border-x border-primary-foreground/20">
            <dt className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">
              Drinks
            </dt>
            <dd className="mt-1 font-serif text-2xl font-semibold">40+</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">
              Years Brewing
            </dt>
            <dd className="mt-1 font-serif text-2xl font-semibold">11</dd>
          </div>
        </dl>
      </div>

      {/* Decorative wave divider */}
      <svg
        className="block w-full text-background"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,40 C240,60 480,0 720,20 C960,40 1200,60 1440,30 L1440,60 L0,60 Z"
        />
      </svg>
    </section>
  );
}
