"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  /** When true, render the light-on-dark variant (used over the hero) */
  overDark?: boolean;
}

export function ThemeToggle({ overDark = false }: Props) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const current = mounted ? (theme === "system" ? resolvedTheme : theme) : "light";
  const isDark = current === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "rounded-full transition-all duration-500",
        overDark && !isDark
          ? "text-cream hover:bg-cream/10 hover:text-cream"
          : "text-foreground hover:bg-secondary"
      )}
      aria-label={isDark ? "Switch to day mode" : "Switch to night mode"}
    >
      <Sun
        className={cn(
          "h-5 w-5 transition-all duration-500",
          isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0 absolute"
        )}
      />
      <Moon
        className={cn(
          "h-5 w-5 transition-all duration-500",
          isDark ? "rotate-90 scale-0 absolute" : "rotate-0 scale-100"
        )}
      />
    </Button>
  );
}
