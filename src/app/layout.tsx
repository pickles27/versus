import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TopNav } from "@/components/nav/TopNav";
import { AppSidebar } from "@/components/nav/AppSidebar";
import { Providers } from "@/providers/Providers";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Versus",
  description: "Will you be victorious?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <AppSidebar />
          <TopNav />
          <main className="w-full">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
