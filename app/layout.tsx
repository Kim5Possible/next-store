import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

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
  title: "Super Store",
  description: "Store for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-[--color-light] dark:bg-[--color-dark] color-[--color-light] dark:color-[--color-dark]"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[1280px] mx-auto`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
