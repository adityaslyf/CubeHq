import type { Metadata } from "next";
import { Inter, Oxanium } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GTG Perfumes",
  description: "Experience the timeless allure backed by modern artistry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oxanium.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
