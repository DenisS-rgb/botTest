import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MIDDLEOUT - Dezvoltare Web & Soluții IT",
  description:
      "Dezvoltăm website-uri puternice care aduc rezultate remarcabile. Soluții web personalizate pentru afacerea ta.",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="ro" className="scroll-smooth">
      <body className={inter.className}>
      <Header />
      {children}
      <Footer />
      </body>
      </html>
  );
}