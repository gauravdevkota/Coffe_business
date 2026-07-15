"use client";

import { Coffee, Instagram, Facebook, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-espresso text-cream">
      {/* Top decorative band */}
      <div className="h-1 bg-stripe-gold opacity-30" />

      {/* Newsletter CTA */}
      <div className="border-b border-cream/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gold-light">
              Stay in the loop
            </p>
            <h3 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              New seasonal blends,
              <br />
              <span className="font-accent italic font-light text-gold-light">
                straight to your inbox
              </span>
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/70">
              Get the first word on new menu additions, special momo days,
              and limited chiya blends. No spam — just the good stuff.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex w-full flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-full border border-cream/20 bg-cream/5 px-6 py-4 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
            <button
              type="submit"
              className="btn-gold inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-8 py-4 text-sm uppercase tracking-[0.15em]"
            >
              Subscribe
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-cream/10 text-gold-light backdrop-blur">
                <Coffee className="h-5 w-5" />
              </span>
              <div>
                <p className="font-serif text-2xl font-semibold">Chiya Holics</p>
                <p className="text-xs uppercase tracking-[0.25em] text-gold-light">
                  Est. 2024 · Kathmandu
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/70">
              A cozy artisan café in Sunrise Height, Raniban — pouring
              authentic Nepali masala chiya, highland coffee, and hand-folded
              momos to a loyal neighborhood crowd.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Facebook, label: "Facebook", href: "#" },
                { Icon: Instagram, label: "Instagram", href: "#" },
                { Icon: MessageCircle, label: "WhatsApp", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-all hover:border-gold hover:bg-gold hover:text-espresso"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
              Explore
            </p>
            <ul className="space-y-3 text-sm">
              {[
                { href: "#menu", label: "Menu" },
                { href: "#craft", label: "Our Craft" },
                { href: "#reviews", label: "Reviews" },
                { href: "#visit", label: "Visit Us" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="gold-underline text-cream/80 transition-colors hover:text-gold-light"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
              Reach Us
            </p>
            <address className="not-italic text-sm leading-relaxed text-cream/80">
              Sunrise Height, Raniban
              <br />
              Kathmandu, Nepal
            </address>
            <a
              href="tel:+97714000000"
              className="mt-3 block text-sm text-cream/80 transition-colors hover:text-gold-light"
            >
              +977-1-4000000
            </a>
            <a
              href="https://www.google.com/maps/place/Chiya+Holics/@27.733976,85.2832764,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-sm text-cream/80 transition-colors hover:text-gold-light"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-cream/50 sm:flex-row sm:px-8 lg:px-12">
          <p>© {new Date().getFullYear()} Chiya Holics. All rights reserved.</p>
          <p className="font-accent italic">
            Made with chiya &amp; coffee in Kathmandu.
          </p>
        </div>
      </div>
    </footer>
  );
}
