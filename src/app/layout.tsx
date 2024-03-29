import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TanstackProvider from "./providers/tanstackProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desafio técnico",
};

export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}><TanstackProvider>{children}</TanstackProvider></body>
    </html >
  );
}
