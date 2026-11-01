"use client";

import { Moon, Sun } from "lucide-react";
import { toggleTheme, useIsDark } from "@/lib/theme";

/**
 * A typographic toggle: "Light" and "Dark" side by side, with a thin line sliding under
 * the active one. `compact` shows a single round icon button (phones).
 */
export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const isDark = useIsDark();

  if (compact) {
    return (
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label="Dark mode"
        onClick={toggleTheme}
        className="relative grid size-11 shrink-0 place-items-center rounded-full text-ink transition-colors duration-300 hover:bg-tint"
      >
        <Sun
          aria-hidden="true"
          className="absolute size-5 transition-[opacity,rotate,scale] duration-500 ease-silk dark:scale-50 dark:-rotate-90 dark:opacity-0"
          strokeWidth={1.8}
        />
        <Moon
          aria-hidden="true"
          className="absolute size-5 scale-50 rotate-90 opacity-0 transition-[opacity,rotate,scale] duration-500 ease-silk dark:scale-100 dark:rotate-0 dark:opacity-100"
          strokeWidth={1.8}
        />
      </button>
    );
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      className="group relative inline-flex h-10 items-center gap-3 px-1 text-[13px] font-semibold tracking-[0.06em] uppercase"
    >
      <span className="relative py-1 text-ink transition-colors duration-300 dark:text-muted dark:group-hover:text-ink">
        Light
        <span
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-right rounded-full bg-blue transition-[scale] duration-500 ease-silk dark:scale-x-0"
        />
      </span>
      <span aria-hidden="true" className="h-3.5 w-px bg-line" />
      <span className="relative py-1 text-muted transition-colors duration-300 group-hover:text-ink dark:text-ink">
        Dark
        <span
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full bg-blue transition-[scale] duration-500 ease-silk dark:scale-x-100"
        />
      </span>
    </button>
  );
}
