import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chiya Holics — Artisan Chiya & Coffee | Kathmandu, Nepal",
  description:
    "Chiya Holics is a cozy artisan café in Sunrise Height, Raniban, Kathmandu. Serving authentic Nepali masala chiya, highland coffee, hand-folded momos, and Himalayan breakfast. Crafted with care since 2024.",
  keywords: [
    "Chiya Holics",
    "best café Kathmandu",
    "Nepali chiya",
    "masala tea Nepal",
    "coffee Kathmandu",
    "Raniban cafe",
    "premium cafe Nepal",
    "momo Kathmandu",
    "Nepal beverage",
  ],
  authors: [{ name: "Chiya Holics" }],
  icons: {
    icon: "/images/cafe/chiya-holics-exterior.jpg",
  },
  openGraph: {
    title: "Chiya Holics — Artisan Chiya & Coffee | Kathmandu",
    description:
      "Authentic Nepali masala chiya, freshly brewed highland coffee, and hand-folded momos in Sunrise Height, Raniban, Kathmandu.",
    siteName: "Chiya Holics",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chiya Holics — Artisan Chiya & Coffee | Kathmandu",
    description:
      "Authentic Nepali masala chiya, freshly brewed highland coffee, and hand-folded momos in Raniban, Kathmandu.",
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
        className={`${playfair.variable} ${cormorant.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
