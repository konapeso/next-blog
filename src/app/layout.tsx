import type { Metadata } from "next";
import Header from "./Header";
import Footer from "./Footer";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Next Blog",
  description: "next.js blog starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container mx-auto bg-slate-700 text-slate-50">
        <Header />
        <Suspense fallback={<Loading />}> {children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
