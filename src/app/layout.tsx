import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    "Chiya Holics is a cozy artisan café in Sunrise Height, Raniban, Kathmandu. Serving authentic Nepali masala chiya, highland coffee, hand-folded momos, and a full Himalayan breakfast menu. Crafted with care since 2024.",
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
    "Nepali breakfast",
    "chhoila",
    "dhido",
    "sel roti",
  ],
  authors: [{ name: "Chiya Holics" }],
  icons: {
    icon: "/images/cafe/chiya-holics-exterior.jpg",
  },
  openGraph: {
    title: "Chiya Holics — Artisan Chiya & Coffee | Kathmandu",
    description:
      "Authentic Nepali masala chiya, freshly brewed highland coffee, hand-folded momos, and a full Himalayan breakfast menu in Sunrise Height, Raniban, Kathmandu.",
    siteName: "Chiya Holics",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chiya Holics — Artisan Chiya & Coffee | Kathmandu",
    description:
      "Authentic Nepali masala chiya, freshly brewed highland coffee, hand-folded momos, and a full Himalayan breakfast menu in Raniban, Kathmandu.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent theme flash: set initial theme before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('chiya-theme');
                  var theme = stored || 'light';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${cormorant.variable} ${inter.variable} font-sans antialiased bg-background text-foreground transition-colors duration-700`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          storageKey="chiya-theme"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
