"use client";

interface Props {
  /** The two colors to blend between. Use any CSS color string or token. */
  from?: string;
  to?: string;
  /** Optional wave shape instead of straight diagonal */
  wave?: boolean;
  /** Height of the divider */
  height?: number;
}

/**
 * CinematicDivider — a smooth gradient transition between two sections.
 * Uses absolute positioning so it sits at the boundary of adjacent sections.
 */
export function CinematicDivider({
  from = "var(--background)",
  to = "var(--background)",
  wave = false,
  height = 80,
}: Props) {
  if (wave) {
    return (
      <div
        className="relative w-full overflow-hidden"
        style={{ height, backgroundColor: from }}
        aria-hidden
      >
        <svg
          className="absolute bottom-0 left-0 w-full"
          style={{ height: height * 1.2, display: "block" }}
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,100 480,0 720,30 C960,60 1200,100 1440,40 L1440,100 L0,100 Z"
            fill={to}
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      className="relative w-full"
      style={{
        height,
        background: `linear-gradient(to bottom, ${from}, ${to})`,
      }}
      aria-hidden
    />
  );
}
