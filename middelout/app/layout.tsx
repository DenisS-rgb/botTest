import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MIDDLEOUT - Dezvoltare Web Profesională",
  description:
    "Dezvoltăm website-uri puternice care aduc rezultate remarcabile. Soluții web personalizate cu design impresionant și funcționalitate robustă.",
  keywords: [
    "dezvoltare web",
    "website-uri profesionale",
    "hosting",
    "consultanță IT",
    "machine learning",
  ],
  openGraph: {
    title: "MIDDLEOUT - Dezvoltare Web Profesională",
    description:
      "Dezvoltăm website-uri puternice care aduc rezultate remarcabile.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
