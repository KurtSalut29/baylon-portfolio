"use client";

import { Award, Briefcase, Phone, Sparkles, User, type LucideIcon } from "lucide-react";
import { navLinks } from "@/lib/content";
import { useActiveSection } from "@/lib/use-active-section";
import { ThemeToggle } from "./theme-toggle";

const icons: Record<string, LucideIcon> = {
  "#about": User,
  "#work": Briefcase,
  "#skills": Sparkles,
  "#certificate": Award,
  "#contact": Phone,
};

const hrefs = ["#top", ...navLinks.map((link) => link.href)];

/**
 * Phones and tablets: a floating pill at the bottom. Sections show as icons; the active
 * one widens into a navy capsule with its name (on very small phones it just fills),
 * so you always know where you are.
 */
export function PillNav() {
  const active = useActiveSection(hrefs);

  return (
    <nav
      aria-label="Sections"
      className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] lg:hidden"
    >
      <div className="flex h-[60px] items-center gap-0.5 rounded-full border border-line bg-card/90 px-1.5 shadow-[0_18px_40px_-16px_rgba(30,58,138,0.45)] backdrop-blur-xl">
        <ul className="flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            const Icon = icons[link.href];
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex h-11 items-center rounded-full transition-[background-color,color,padding] duration-500 ease-silk ${
                    isActive ? "bg-btn px-3 text-btn-text min-[380px]:pr-3.5" : "px-2.5 text-muted min-[380px]:px-3"
                  }`}
                >
                  <Icon aria-hidden="true" className="size-[19px] shrink-0" strokeWidth={1.9} />
                  <span
                    aria-hidden="true"
                    className={`grid transition-[grid-template-columns,opacity,margin] duration-500 ease-silk max-[379px]:hidden ${
                      isActive ? "ml-1.5 grid-cols-[1fr] opacity-100" : "ml-0 grid-cols-[0fr] opacity-0"
                    }`}
                  >
                    <span className="min-w-0 overflow-hidden text-[13px] font-semibold whitespace-nowrap">
                      {link.label}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
        <span aria-hidden="true" className="mx-0.5 h-6 w-px bg-line" />
        <ThemeToggle compact />
      </div>
    </nav>
  );
}
