"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => (
  <SidebarProvider defaultOpen={false}>{children}</SidebarProvider>
);
