"use client";

import React from "react";

import { cn } from "@/utils/cn";
import { Tooltip } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SidebarItem {
  key: string;
  href: string;
  icon: string;
  title: string;
  endContent?: React.ReactNode;
}

interface SidebarProps {
  items: SidebarItem[];
  isCompact?: boolean;
  onSelect?: (key: string) => void;
  className?: string;
  iconClassName?: string;
}

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  ({ items, isCompact, onSelect, className, iconClassName }, ref) => {
    const location = usePathname();

    // Memoize the active key calculation
    const activeKey = React.useMemo(() => {
      const currentPath = location;
      return (
        items.find((item) => item.href === currentPath)?.key || items[0]?.key
      );
    }, [location, items]);

    // Memoize the render function for items
    const renderItem = React.useCallback(
      (item: SidebarItem) => {
        const isActive = activeKey === item.key;

        const itemContent = (
          <div
            className={cn(
              "flex h-11 w-full items-center gap-2 rounded-lg px-3 transition-colors",
              isCompact ? "justify-center w-11 px-0" : "px-3",
              isActive ? "bg-default-100" : "hover:bg-default-100/80"
            )}
          >
            <Icon
              icon={item.icon}
              className={cn(
                "flex-shrink-0",
                isActive ? "text-foreground" : "text-default-500",
                iconClassName
              )}
              width={24}
            />

            {!isCompact && (
              <>
                <span
                  className={cn(
                    "text-small font-medium",
                    isActive ? "text-foreground" : "text-default-500"
                  )}
                >
                  {item.title}
                </span>
                {item.endContent && (
                  <div className="ml-auto">{item.endContent}</div>
                )}
              </>
            )}
          </div>
        );

        return (
          <Link
            key={item.key}
            href={item.href}
            className="block w-full"
            onClick={() => onSelect?.(item.key)}
          >
            {isCompact ? (
              <Tooltip content={item.title} placement="right">
                {itemContent}
              </Tooltip>
            ) : (
              itemContent
            )}
          </Link>
        );
      },
      [isCompact, activeKey, iconClassName, onSelect]
    );

    return (
      <nav
        ref={ref}
        className={cn(
          "flex flex-col gap-2 p-4",
          isCompact && "items-center",
          className
        )}
      >
        {items.map(renderItem)}
      </nav>
    );
  }
);

export default Sidebar;
