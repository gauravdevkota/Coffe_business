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
  title: "Chiya Holics — Cozy Chiya & Coffee Café in Raniban, Kathmandu",
  description:
    "Chiya Holics is a cozy café in Sunrise Height, Raniban, Kathmandu serving authentic Nepali masala chiya, freshly brewed coffee, momos, sekuwa, and breakfast. Browse the menu and build your order.",
  keywords: [
    "Chiya Holics",
    "chiya cafe Kathmandu",
    "Nepali tea",
    "masala chiya",
    "coffee Kathmandu",
    "Raniban cafe",
    "momo Kathmandu",
    "sekuwa",
    "Nepal cafe",
  ],
  authors: [{ name: "Chiya Holics" }],
  icons: {
    icon: "/images/cafe/chiya-holics-exterior.jpg",
  },
  openGraph: {
    title: "Chiya Holics — Cozy Chiya & Coffee Café",
    description:
      "Authentic Nepali masala chiya, freshly brewed coffee, and momos in Sunrise Height, Raniban, Kathmandu.",
    siteName: "Chiya Holics",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chiya Holics — Cozy Chiya & Coffee Café",
    description:
      "Authentic Nepali masala chiya, freshly brewed coffee, and momos in Raniban, Kathmandu.",
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
