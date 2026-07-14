import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bean & Brew — Artisan Coffee House",
  description:
    "Bean & Brew is a neighborhood coffee house serving single-origin espresso, slow-steeped cold brew, loose-leaf teas, and pastries baked fresh every morning. Browse the menu and build your order.",
  keywords: [
    "coffee shop",
    "cafe menu",
    "espresso",
    "cold brew",
    "matcha latte",
    "pastries",
    "breakfast",
    "Bean & Brew",
  ],
  authors: [{ name: "Bean & Brew" }],
  icons: {
    icon: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=64&q=80",
  },
  openGraph: {
    title: "Bean & Brew — Artisan Coffee House",
    description:
      "Single-origin espresso, slow-steeped cold brew, and pastries baked in-house.",
    siteName: "Bean & Brew",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bean & Brew — Artisan Coffee House",
    description:
      "Single-origin espresso, slow-steeped cold brew, and pastries baked in-house.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
