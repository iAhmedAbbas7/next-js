// <== IMPORTS ==>
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// <== FONT-CONFIGURATION ==>
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// <== FONT-CONFIGURATION ==>
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// <== METADATA ==>
export const metadata: Metadata = {
  title: "Next JS",
  description: "Next JS Learner Project!",
};

// <== APP ROOT LAYOUT ==>
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
        {children}
      </body>
    </html>
  );
}
