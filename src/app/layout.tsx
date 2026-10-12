import type { Metadata } from "next";
import { Geist, Playfair_Display, JetBrains_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
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
    "Technical product manager in fintech. Two stories told in full, the role as it stands, and a ledger of the decisions that held.",
  openGraph: {
    title: "Tap Suksumrun - Product Manager",
    description:
      "Technical product manager in fintech. Two stories told in full, the role as it stands, and a ledger of the decisions that held.",
    url: "/",
    siteName: "Tap Suksumrun",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tap Suksumrun - Product Manager",
    description:
      "Technical product manager in fintech. Two stories told in full, the role as it stands, and a ledger of the decisions that held.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
