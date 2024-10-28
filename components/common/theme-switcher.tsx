"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="relative w-14 h-7 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors"
      >
        <span
          className={`absolute flex items-center justify-center w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md transition-transform ${
            theme === "dark"
              ? "transform translate-x-7"
              : "transform translate-x-0"
          }`}
        >
          {theme === "dark" ? (
            <Icon icon="solar:sun-bold" className="text-yellow-400 w-4 h-4" />
          ) : (
            <Icon icon="solar:moon-bold" className="text-yellow-500 w-4 h-4" />
          )}
        </span>
      </button>
    </div>
  );
}
