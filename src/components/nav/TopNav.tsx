import { auth0 } from "@/lib/auth0";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NavigationMenuContent,
} from "../ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import icon from "../../app/icon.svg";
import Image from "next/image";
import { SidebarTrigger } from "../ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const navigationMenuLinkStyles =
  "w-32 bg-background grid place-items-center shadow-neon-orange shadow-sm";

export async function TopNav() {
  const session = await auth0.getSession();

  return (
    <div className="fixed z-20 w-full flex items-center justify-between px-3 py-2 bg-gradient-to-r from-[var(--color-neon-orange)] to-[var(--color-neon-tangerine)] shadow-sm">
      <div className="flex-1 mr-auto">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <SidebarTrigger className="bg-background" />
              </span>
            </TooltipTrigger>
            <TooltipContent side="right">
              Open sidebar
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Link
        href="/"
        className="text-xl font-bold text-shadow-sm flex items-center gap-2 flex-1"
      >
        <Image alt="Versus icon" src={icon} width={32} />
        Versus
      </Link>
      <NavigationMenu className="flex justify-end">
        <NavigationMenuList>
          <NavigationMenuItem>
            {session ? (
              <>
                <NavigationMenuTrigger className="shadow-neon-orange shadow-sm">
                  <div className="flex items-center gap-2">
                    <Avatar className="size-6">
                      <AvatarImage
                        src={session.user.picture}
                        alt="User Avatar"
                      />
                      <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
                    </Avatar>
                    <span>{session.user.nickname}</span>
                  </div>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-38 p-2 bg-gradient-to-r from-[var(--color-neon-tangerine)] to-[var(--color-neon-orange)]">
                    <NavigationMenuLink
                      className={navigationMenuLinkStyles}
                      href="/auth/logout"
                    >
                      Logout
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                className={navigationMenuLinkStyles}
                href="/auth/login"
              >
                Login
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        </NavigationMenuList>
        {/* https://github.com/shadcn-ui/ui/issues/2671#issuecomment-2076503381 */}
        <NavigationMenuViewport />
      </NavigationMenu>
    </div>
  );
}
