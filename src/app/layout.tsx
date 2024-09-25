import {Inter} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import React from "react";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-white p-10`}>
        <header className="container flex justify-between mb-8">
          <div className="text-xl font-bold">CodeMary</div>
          <nav className="flex gap-5">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              Sobre
            </Link>
            <Link href="/contact" className="hover:underline">
              Contato
            </Link>
          </nav>
        </header>

        <main className="container max-w-[800px]">{children}</main>
      </body>
    </html>
  );
}