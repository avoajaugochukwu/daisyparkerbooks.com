import type { Metadata } from "next";
import { Fraunces, Newsreader, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://daisyparkerbooks.com"),
  title: {
    default: "Daisy Parker — Novelist",
    template: "%s — Daisy Parker",
  },
  description:
    "Daisy Parker writes quiet, devastating novels about water, family, and the long weather of grief. Author of The Salt in Our Hands and three earlier books.",
  openGraph: {
    title: "Daisy Parker — Novelist",
    description:
      "Quiet, devastating novels about water, family, and the long weather of grief.",
    url: "https://daisyparkerbooks.com",
    siteName: "Daisy Parker",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${newsreader.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-clip">{children}</body>
    </html>
  );
}
