"use client";
import React from "react";

import { cn } from "@byte-creators/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  disabled?: boolean;
  href: string;
  icon: React.ReactNode;
  iconActive: React.ReactNode;
  label: string;
};

export const SideNavbarItem = ({
  disabled,
  href,
  icon,
  iconActive,
  label,
}: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      className={cn(
        "flex items-center gap-3 text-sm font-weight500",
        "transition-colors delay-[10ms]",
        !disabled && "global-hover:hover:text-primary-100",
        isActive && "font-weight700 text-primary-500",
        disabled && "text-dark-100 cursor-default",
      )}
      href={href}
    >
      <span className={"w-5 h-5 flex-shrink-0"}>
        {isActive ? iconActive : icon}
      </span>
      <span>{label}</span>
    </Link>
  );
};
