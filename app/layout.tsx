import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Electron Exp",
  description: "Electron Exp that wraps a Next.js app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
