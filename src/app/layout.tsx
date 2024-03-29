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
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<Loading />}> {children}</Suspense>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
