"use client";

import {
  Home,
  Inbox,
  Settings,
  Trophy,
  PersonStanding,
  PlayIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { SidebarDropdown } from "./SidebarDropdown";
import { usePathname } from "next/navigation";
import { User } from "auth0";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: Inbox,
  },
  {
    title: "Leaderboard",
    url: "/leaderboard",
    icon: Trophy,
  },
  {
    title: "Friends",
    url: "/friends",
    icon: PersonStanding,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

interface AppSidebarProps {
  user?: User;
}

export function AppSidebar({ user }: AppSidebarProps) {
  const currentPathname = usePathname();

  return (
    <Sidebar className="mt-12" collapsible="icon">
      <SidebarContent className="gap-0">
        <SidebarGroup>
          <SidebarGroupLabel>Versus</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={currentPathname === item.url}
                    tooltip={item.title}
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Games</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={currentPathname === "/new-game"}
                  tooltip="New Game"
                >
                  <a href="/new-game">
                    <PlayIcon />
                    <span>New Game</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {user && (
          <>
            <SidebarSeparator />
            <SidebarGroup>
              <SidebarGroupLabel>Account</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarDropdown user={user} />
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
