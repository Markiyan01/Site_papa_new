import type { Metadata } from "next";

import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'

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
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
