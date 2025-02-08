import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/header";
import Footer from "./components/footer";
import CartProvider from "./components/provider";
import ShoppingCardModel from "./components/shoppingCardModel";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "hackathon-template8",
  description: "created by Hina Nisar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
        <Navbar />
        <ShoppingCardModel/>
        {children}
        <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
