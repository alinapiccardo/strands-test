import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../app/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strands App",
  description: "A Next.js app displaying dog breeds and their image counts for Strands Tech test.",
  icons: {
    icon: "/favicon-32x32.png", 
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png", 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
