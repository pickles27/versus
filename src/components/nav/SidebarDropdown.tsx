'use client';

import { ChevronsLeftRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown";
import { SidebarMenuButton, useSidebar } from "../ui/sidebar";

interface SidebarDropdownProps {
  firstInitial?: string;
  nickname?: string;
  picture?: string;
};

export const SidebarDropdown = ({
  firstInitial,
  nickname,
  picture,
}: SidebarDropdownProps) => {
  const { state } = useSidebar();

  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild className="cursor-pointer">
      <SidebarMenuButton tooltip="Account">
        <Avatar className="size-5">
          <AvatarImage
            src={picture}
            alt="User Avatar"
          />
          <AvatarFallback>
            {firstInitial}
          </AvatarFallback>
        </Avatar>
       {state === "expanded" && <span>{nickname}</span>}
        <ChevronsLeftRight className="ml-auto" />
      </SidebarMenuButton>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      side="right"
      className="ml-2"
    >
      <DropdownMenuItem asChild>
        <a href="/auth/logout">Sign Out</a>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  );

};