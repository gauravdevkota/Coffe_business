"use client";

const items = [
  "Masala Chiya",
  "Highland Coffee",
  "Hand-folded Momos",
  "Himalayan Breakfast",
  "Fresh Pastries",
  "Nepali Sekuwa",
  "Sunrise Views",
  "Est. 2024",
];

export function Marquee() {
  // Duplicate the list so the marquee can loop seamlessly
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-gold/20 bg-espresso py-4">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-serif text-lg italic text-gold-light">
              {item}
            </span>
            <span className="text-gold">✦</span>
          </div>
        ))}
      </div>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-espresso to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-espresso to-transparent" />
    </div>
  );
}
