import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans, Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spotify Development Project",
  description: "Spotify Project for Training Purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
