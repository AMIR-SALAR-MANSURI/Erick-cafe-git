import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LayoutMain from "@/layouts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body dir="rtl">
        {/* <LayoutMain> */}
        {children}
        {/* </LayoutMain> */}
      </body>
    </html>
  );
}
