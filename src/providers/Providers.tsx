"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import { ThemeProvider } from "./ThemeProvider";

interface ProvidersProps {
  children: ReactNode;
  isSidebarDefaultOpen: boolean;
}

export const Providers = ({
  children,
  isSidebarDefaultOpen,
}: ProvidersProps) => (
  <ThemeProvider>
    <SidebarProvider defaultOpen={isSidebarDefaultOpen}>
      {children}
    </SidebarProvider>
  </ThemeProvider>
);
