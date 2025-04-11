'use client';

import NextLink, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import { NavigationMenuLink } from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

export const NextMenuLink = ({ href, children, className, ...props }: LinkProps & { children: React.ReactNode, className?: string}) => {
	const pathname = usePathname();
	const isActive = href === pathname;

	return (
		<NavigationMenuLink asChild active={isActive}>
			<NextLink href={href} className={cn('p-4', className)} {...props}>{children}</NextLink>
		</NavigationMenuLink>
	);
};