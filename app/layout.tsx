import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import "@/app/ui.css";
import Particles from "@/components/magicui/particles";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ACM - The Computer Science Chapter of SSCBS",
  description:
    "Computer Science Society of Shaheed Sukhdev College of Business Studies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={inter.className}>
        <Header />
        <div className="fixed h-screen w-screen">
          <Particles
            className=" fixed h-screen min-w-screen opacity-80 z-0"
            size={1}
            quantity={500}
            staticity={10}
          />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
