"use client";

import { ChevronsLeftRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown";
import { SidebarMenuButton, useSidebar } from "../ui/sidebar";
import { User } from "auth0";

interface SidebarDropdownProps {
  user?: User;
}
export const SidebarDropdown = ({ user }: SidebarDropdownProps) => {
  const { state } = useSidebar();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <SidebarMenuButton tooltip="Account">
          <Avatar className="size-5">
            <AvatarImage src={user?.picture} alt="User Avatar" />
            <AvatarFallback>{user?.nickname?.[0]}</AvatarFallback>
          </Avatar>
          {state === "expanded" && <span>{user?.nickname}</span>}
          <ChevronsLeftRight className="ml-auto" />
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right" className="ml-2">
        <DropdownMenuItem asChild>
          <a href="/auth/logout">Sign Out</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
