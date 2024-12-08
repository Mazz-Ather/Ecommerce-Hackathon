import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopAnnouncement from '@/app/components/Navbar/TopAnnoucement'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hackathon Ecommerce",
  description: "hackathon ecommerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopAnnouncement/>
        <Navbar/>
        {children}
        <Footer/>
        
        </body>
    </html>
  );
}
