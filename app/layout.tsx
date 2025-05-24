import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Baan Growth Solutions",
  description: "We provide unique and modern solutions to grow businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>توسعه کسب‌وکار بان</title>
      </head>
      <body className={`${vazirmatn.variable} antialiased font-bold`}>
        {children}
      </body>
    </html>
  );
}
