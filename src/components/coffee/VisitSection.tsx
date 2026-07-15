"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Navigation } from "lucide-react";

const hours = [
  { day: "Sunday – Friday", time: "6:30 AM – 8:00 PM" },
  { day: "Saturday", time: "7:30 AM – 9:00 PM" },
];

export function VisitSection() {
  return (
    <section
      id="visit"
      className="relative overflow-hidden bg-espresso py-24 text-cream sm:py-32"
    >
      <div className="absolute inset-0 bg-mandala-dark opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold-light">
              06 — Visit Us
            </span>
            <span className="h-px w-8 bg-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
          >
            Find us on{" "}
            <span className="font-accent italic font-light text-gold-light">
              the hill
            </span>
          </motion.h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[400px] overflow-hidden rounded-sm border border-gold/20"
          >
            <iframe
              title="Chiya Holics location on Google Maps"
              src="https://www.google.com/maps?q=Chiya+Holics,+Sunrise+Height,+Raniban,+Kathmandu&output=embed"
              className="absolute inset-0 h-full w-full"
              style={{ border: 0, filter: "saturate(0.85)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>

          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-between gap-8 rounded-sm border border-gold/20 bg-espresso-light/40 p-8 sm:p-10"
          >
            {/* Address */}
            <div>
              <div className="mb-4 flex items-center gap-2 text-gold-light">
                <MapPin className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                  Address
                </span>
              </div>
              <address className="not-italic font-serif text-xl leading-relaxed text-cream">
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
                className="mt-4 inline-flex items-center gap-2 text-sm text-gold-light transition-colors hover:text-gold"
              >
                <Navigation className="h-4 w-4" />
                Open in Google Maps
              </a>
            </div>

            {/* Hours */}
            <div className="border-t border-gold/15 pt-8">
              <div className="mb-4 flex items-center gap-2 text-gold-light">
                <Clock className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                  Hours
                </span>
              </div>
              <ul className="space-y-2">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between gap-4 text-sm text-cream/85"
                  >
                    <span>{h.day}</span>
                    <span className="font-medium tabular-nums text-gold-light">
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-cream/50">
                Open all year round, including public holidays.
              </p>
            </div>

            {/* Phone */}
            <div className="border-t border-gold/15 pt-8">
              <div className="mb-4 flex items-center gap-2 text-gold-light">
                <Phone className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                  Reservations
                </span>
              </div>
              <a
                href="tel:+97714000000"
                className="font-serif text-2xl text-cream transition-colors hover:text-gold-light"
              >
                +977-1-4000000
              </a>
              <p className="mt-2 text-sm text-cream/60">
                Call ahead for large groups or weekend brunch.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
