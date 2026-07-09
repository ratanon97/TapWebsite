import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tapwebsite-eta.vercel.app"),
  title: "Tap Suksumrun - Product Manager",
  description:
    "Product Manager passionate about building great products and solving real problems.",
  openGraph: {
    title: "Tap Suksumrun - Product Manager",
    description:
      "Product Manager passionate about building great products and solving real problems.",
    url: "/",
    siteName: "Tap Suksumrun",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tap Suksumrun - Product Manager",
    description:
      "Product Manager passionate about building great products and solving real problems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
