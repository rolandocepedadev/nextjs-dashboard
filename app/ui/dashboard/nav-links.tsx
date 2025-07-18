"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "group relative flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
              {
                "bg-secondary text-primary font-semibold": isActive,
                "text-gris hover:text-white": !isActive,
              },
            )}
          >
            {/* Neon hover accent bar */}
            <span
              className={clsx(
                "absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full bg-secondary transition-opacity duration-300",
                {
                  "opacity-100": isActive,
                  "opacity-0 group-hover:opacity-100": !isActive,
                },
              )}
            />
            <LinkIcon className="w-5 h-5 shrink-0 group-hover:scale-105 transition-transform" />
            <span className="hidden md:inline">{link.name}</span>
          </Link>
        );
      })}
    </>
  );
}
