import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TopNav } from "@/components/nav/TopNav";
import { AppSidebar } from "@/components/nav/AppSidebar";
import { Providers } from "@/providers/Providers";

import "./globals.css";
import { cookies } from "next/headers";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const isSidebarDefaultOpen =
    cookieStore.get("sidebar_state")?.value === "true";

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers isSidebarDefaultOpen={isSidebarDefaultOpen}>
          <AppSidebar />
          <TopNav />
          <main className="w-full h-screen px-8 pt-20">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
