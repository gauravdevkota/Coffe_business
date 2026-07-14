"use client";

import { Coffee, Clock, MapPin, Phone, Instagram, Twitter, Facebook } from "lucide-react";

const hours = [
  { day: "Monday – Friday", time: "6:30 AM – 8:00 PM" },
  { day: "Saturday", time: "7:00 AM – 9:00 PM" },
  { day: "Sunday", time: "7:00 AM – 6:00 PM" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-primary text-primary-foreground">
      {/* Our Story */}
      <section id="about" className="border-b border-primary-foreground/15">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Our Story
            </p>
            <h2 className="mt-2 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
              From green bean to your cup
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/85">
              Bean &amp; Brew started in 2014 as a single roaster in a converted
              garage. Today we roast every bean in-house, source directly from
              twelve farms across four continents, and bake all our pastries
              each morning before the doors open.
            </p>
            <p className="mt-4 text-primary-foreground/70">
              We believe a great cup of coffee should be approachable,
              traceable, and consistent — and that the room you drink it in
              should feel like home.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80"
              alt="Inside the Bean & Brew coffee shop"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Hours + Visit */}
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div id="hours">
          <div className="flex items-center gap-2 text-accent">
            <Clock className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">
              Hours
            </span>
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {hours.map((h) => (
              <li
                key={h.day}
                className="flex justify-between gap-4 text-primary-foreground/85"
              >
                <span>{h.day}</span>
                <span className="font-medium tabular-nums">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div id="visit">
          <div className="flex items-center gap-2 text-accent">
            <MapPin className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">
              Visit
            </span>
          </div>
          <address className="mt-4 not-italic text-sm leading-relaxed text-primary-foreground/85">
            142 Maple Avenue
            <br />
            Brookside District
            <br />
            Portland, OR 97201
          </address>
          <a
            href="tel:+15035551234"
            className="mt-3 inline-flex items-center gap-2 text-sm text-primary-foreground/85 transition-colors hover:text-accent"
          >
            <Phone className="h-4 w-4" />
            (503) 555-1234
          </a>
        </div>

        <div>
          <div className="flex items-center gap-2 text-accent">
            <Coffee className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">
              Bean &amp; Brew
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/85">
            Sign up for our newsletter to hear about new seasonal roasts and
            limited pastries.
          </p>
          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Join
            </button>
          </form>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Facebook, label: "Facebook" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/25 text-primary-foreground/85 transition-colors hover:bg-primary-foreground/10 hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Bean &amp; Brew Coffee House. All rights reserved.</p>
          <p>Crafted with care, one cup at a time.</p>
        </div>
      </div>
    </footer>
  );
}
