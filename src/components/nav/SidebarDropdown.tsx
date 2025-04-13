"use client";

import { ChevronsLeftRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown";
import { SidebarMenuButton, useSidebar } from "../ui/sidebar";
import { User } from "auth0";
import Image from "next/image";

interface SidebarDropdownProps {
  user?: User;
}
export const SidebarDropdown = ({ user }: SidebarDropdownProps) => {
  const { state } = useSidebar();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <SidebarMenuButton tooltip="Account">
          <Image
            src={user?.picture || ""}
            alt={`${user?.nickname ?? "User"} avatar`}
            width={28}
            height={28}
            className="rounded-full"
          />
          {state === "expanded" && (
            <>
              <span>{user?.nickname}</span>
              <ChevronsLeftRight className="ml-auto" />
            </>
          )}
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
