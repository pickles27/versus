"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import { ThemeProvider } from "./ThemeProvider";

export const Providers = ({ children }: { children: ReactNode }) => (
  <ThemeProvider>
    <SidebarProvider defaultOpen={false}>{children}</SidebarProvider>
  </ThemeProvider>
);
