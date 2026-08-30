import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";

import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
import '../globals.css'

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin", "cyrillic"],
});

const lora = Lora({
  variable: "--font-lora",
  weight: ["400", "500"],
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "БЦ Розмарин | Гармонія бізнесу та комфорту",
  description: "Сучасний бізнес-центр Розмарин. Оренда офісів, каталог бізнесів та послуги.",
};

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${cormorant.variable} ${lora.variable}`}>
      <body className="antialiased font-sans bg-paper text-ink min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
