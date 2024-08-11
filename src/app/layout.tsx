import type { Metadata } from "next";
import "./globals.css";
import {inter} from "@/app/lib/font";


export const metadata: Metadata = {
  title: "Sunva AI",
  description: "TODO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
