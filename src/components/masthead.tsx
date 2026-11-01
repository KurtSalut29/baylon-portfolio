"use client";

import { FileText } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { navLinks, profile } from "@/lib/content";
import { useActiveSection } from "@/lib/use-active-section";
import { ThemeToggle } from "./theme-toggle";

const hrefs = ["#top", ...navLinks.map((link) => link.href)];

/**
 * Large screens: a magazine-style masthead pinned to the top. At the top of the page her
 * name sits centered in serif type above the section links; once you scroll, the name row
 * folds away and the links row carries a small wordmark and the résumé button. A blue dot
 * slides under the section you're reading. Phones use the bottom pill instead.
 */
export function Masthead() {
  const active = useActiveSection(hrefs);
  const [folded, setFolded] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setFolded(window.scrollY > 60);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Centers the dot under the active link, straight from the DOM so it follows width
  // changes (fonts loading, resizes) without extra renders.
  useEffect(() => {
    const list = listRef.current;
    const dot = dotRef.current;
    if (!list || !dot) return;

    const place = () => {
      const link = list.querySelector<HTMLElement>(`a[href="${active}"]`);
      if (!link) {
        dot.style.opacity = "0";
        return;
      }
      const wasHidden = dot.style.opacity !== "1";
      if (wasHidden) dot.style.transitionProperty = "opacity";
      dot.style.translate = `${link.offsetLeft + link.offsetWidth / 2 - 3}px 0`;
      if (wasHidden) {
        void dot.offsetWidth;
        dot.style.transitionProperty = "";
      }
      dot.style.opacity = "1";
    };

    place();
    const observer = new ResizeObserver(place);
    observer.observe(list);
    return () => observer.disconnect();
  }, [active]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 hidden border-b bg-page/90 backdrop-blur-xl transition-[border-color,box-shadow] duration-500 lg:block ${
        folded ? "border-line shadow-[0_10px_30px_-24px_rgba(30,58,138,0.5)]" : "border-transparent"
      }`}
    >
      {/* Name row: folds away on scroll. */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-600 ease-silk ${
          folded ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"
        }`}
        inert={folded}
      >
        <div className="overflow-hidden">
          <div className="mx-auto grid h-[76px] max-w-[1200px] grid-cols-[1fr_auto_1fr] items-center px-12">
            <p className="rise text-[13px] font-semibold tracking-[0.08em] text-muted uppercase">{profile.role}</p>
            <a href="#top" className="rise font-serif text-[2rem] leading-none text-ink" style={{ "--i": 1 } as CSSProperties}>
              Gelli Mae <em className="text-accent">Baylon</em>
            </a>
            <div className="rise flex items-center justify-end gap-5" style={{ "--i": 2 } as CSSProperties}>
              <ThemeToggle />
              <Link
                href="/resume"
                className="inline-flex h-10 items-center gap-2 rounded-full bg-btn px-5 text-sm font-semibold text-btn-text transition-colors duration-300 hover:bg-btn-hover"
              >
                <FileText aria-hidden="true" className="size-4" />
                Résumé
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Links row: always visible. */}
      <div className="mx-auto grid h-[52px] max-w-[1200px] grid-cols-[1fr_auto_1fr] items-center px-12">
        <a
          href="#top"
          tabIndex={folded ? 0 : -1}
          aria-hidden={!folded}
          className={`justify-self-start font-serif text-xl text-ink transition-[opacity,translate] duration-500 ease-silk ${
            folded ? "translate-x-0 opacity-100" : "pointer-events-none -translate-x-2 opacity-0"
          }`}
        >
          Gelli Mae <em className="text-accent">Baylon</em>
        </a>

        <nav aria-label="Main" className="rise" style={{ "--i": 3 } as CSSProperties}>
          <ul ref={listRef} className="relative flex items-center gap-1">
            <span
              ref={dotRef}
              aria-hidden="true"
              className="absolute -bottom-1 left-0 size-1.5 rounded-full bg-blue opacity-0 transition-[translate,opacity] duration-500 ease-silk"
            />
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative block px-4 py-2 text-[0.93rem] font-semibold transition-colors duration-300 ${
                      isActive ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className={`flex items-center justify-end gap-4 transition-[opacity,translate] duration-500 ease-silk ${
            folded ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-2 opacity-0"
          }`}
          inert={!folded}
        >
          <ThemeToggle />
          <Link
            href="/resume"
            className="inline-flex h-9 items-center gap-2 rounded-full bg-btn px-4 text-sm font-semibold text-btn-text transition-colors duration-300 hover:bg-btn-hover"
          >
            <FileText aria-hidden="true" className="size-4" />
            Résumé
          </Link>
        </div>
      </div>
    </header>
  );
}
