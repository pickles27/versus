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

const navigationMenuLinkStyles =
  "w-32 grid place-items-center bg-yellow-50 shadow-neon-orange shadow-sm";

export async function TopNav() {
  const session = await auth0.getSession();

  return (
    <div className="fixed w-full flex items-center justify-between px-4 py-2 bg-gradient-to-r from-[var(--color-neon-orange)] to-[var(--color-neon-tangerine)] shadow-sm">
      <div className="flex items-center gap-2">
        <Image alt="Versus icon" src={icon} width={32} />
        <Link href="/" className="text-lg font-bold text-shadow-sm">
          Versus
        </Link>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            {session ? (
              <>
                <NavigationMenuTrigger className="drop-shadow-sm">
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
                  <div className="w-38 p-2">
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
