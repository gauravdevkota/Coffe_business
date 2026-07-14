"use client";

import { Coffee, Clock, MapPin, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";
import Image from "next/image";

const hours = [
  { day: "Sunday – Friday", time: "6:30 AM – 8:00 PM" },
  { day: "Saturday", time: "7:30 AM – 9:00 PM" },
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
              A cozy cup in Sunrise Height
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/85">
              Chiya Holics started as a tiny corner stall serving masala chiya
              to early-morning walkers in Raniban. Today we&apos;re a cozy
              neighborhood café serving authentic Nepali chiya, freshly brewed
              highland coffee, momos, and breakfast plates to a regular crowd
              of regulars.
            </p>
            <p className="mt-4 text-primary-foreground/70">
              Every cup is brewed fresh, every momo is hand-folded, and every
              order comes with a smile. Come find us up on the hill — the view
              of the valley is on the house.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/cafe/chiya-holics-exterior.jpg"
              alt="Chiya Holics café storefront in Sunrise Height, Raniban, Kathmandu"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
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
          <p className="mt-4 text-xs text-primary-foreground/60">
            Open all year round, including public holidays.
          </p>
        </div>

        <div id="visit">
          <div className="flex items-center gap-2 text-accent">
            <MapPin className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">
              Visit
            </span>
          </div>
          <address className="mt-4 not-italic text-sm leading-relaxed text-primary-foreground/85">
            Sunrise Height, Raniban
            <br />
            Nagarjun Municipality
            <br />
            Kathmandu, Bagmati, Nepal
          </address>
          <a
            href="https://www.google.com/maps/place/Chiya+Holics/@27.733976,85.2832764,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-primary-foreground"
          >
            <MapPin className="h-4 w-4" />
            Open in Google Maps
          </a>
          <a
            href="tel:+97714000000"
            className="mt-2 flex items-center gap-2 text-sm text-primary-foreground/85 transition-colors hover:text-accent"
          >
            <Phone className="h-4 w-4" />
            +977-1-4000000
          </a>
        </div>

        <div>
          <div className="flex items-center gap-2 text-accent">
            <Coffee className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">
              Chiya Holics
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/85">
            Get updates on new seasonal chiya blends, special momo days, and
            offers straight to your inbox.
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
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: MessageCircle, label: "WhatsApp" },
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
          <p>© {new Date().getFullYear()} Chiya Holics. All rights reserved.</p>
          <p>Made with chiya &amp; coffee in Kathmandu.</p>
        </div>
      </div>
    </footer>
  );
}
