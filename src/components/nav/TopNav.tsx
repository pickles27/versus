import { auth0 } from "@/lib/auth0";
import Link from "next/link";
import icon from "../../app/icon.svg";
import Image from "next/image";
import { SidebarTrigger } from "../ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../ui/button";

export async function TopNav() {
  const session = await auth0.getSession();

  return (
    <nav className="fixed z-20 w-full grid grid-cols-3 items-center px-3 py-2 bg-gradient-to-r from-[var(--color-neon-orange)] dark:from-[var(--color-purple-600)] to-[var(--color-neon-tangerine)] dark:to-[var(--color-blue-500)] shadow-sm">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="mr-auto">
              <SidebarTrigger className="bg-background" />
            </span>
          </TooltipTrigger>
          <TooltipContent side="right">Open sidebar</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Link
        href="/"
        className="text-xl font-bold text-shadow-sm flex items-center gap-2 mx-auto"
      >
        <Image alt="Versus icon" src={icon} width={32} />
        Versus
      </Link>
      {!session && (
        <Button asChild>
          <a
            className="ml-auto w-32 bg-background grid place-items-center shadow-neon-orange dark:shadow-purple-600 shadow-sm"
            href="/auth/login"
          >
            Login
          </a>
        </Button>
      )}
    </nav>
  );
}
