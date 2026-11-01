"use client";

import { Check, Expand } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import type { Screen } from "@/lib/content";
import { useImageViewer } from "./image-viewer";

/**
 * The project's two sides as sheets. On large screens each sheet sticks below the
 * masthead and the next one slides over it, while the one underneath settles back.
 * On phones they are simply stacked cards.
 */
export function WorkSheets({ screens, project }: { screens: Screen[]; project: string }) {
  const { open, viewer } = useImageViewer();

  return (
    <>
      <ol className="space-y-6 lg:space-y-10">
        {screens.map((screen, i) => (
          <li
            key={screen.key}
            className="lg:sticky"
            style={{ top: `calc(8rem + ${i * 1.25}rem)` } as CSSProperties}
          >
            <article
              aria-labelledby={`sheet-${screen.key}`}
              className="sheet-recede grid grid-cols-1 gap-7 overflow-hidden rounded-[28px] border border-line bg-card p-5 shadow-[0_30px_60px_-40px_rgba(30,58,138,0.45)] sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12 lg:p-10"
            >
              <div>
                <p className="flex items-center gap-3 text-[13px] font-semibold tracking-[0.08em] text-accent uppercase">
                  <span className="grid size-7 place-items-center rounded-full border border-line font-serif text-sm tracking-normal text-ink normal-case">
                    {i + 1}
                  </span>
                  {screen.label}
                </p>
                <h3 id={`sheet-${screen.key}`} className="mt-5 text-[2rem] leading-[1.05] sm:text-[2.4rem]">
                  {screen.title}
                </h3>
                <p className="mt-4 leading-relaxed">{screen.text}</p>
                <ul className="mt-6 space-y-3">
                  {screen.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-blue" strokeWidth={2.4} />
                      <span className="text-ink">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => open({ ...screen, title: `${project}: ${screen.label}`, subtitle: screen.alt })}
                aria-label={`View the ${screen.label.toLowerCase()} screenshot full size`}
                className="group relative block min-w-0 overflow-hidden rounded-2xl border border-line bg-paper text-left"
              >
                <span className="flex h-8 items-center gap-1.5 border-b border-line bg-card px-3.5">
                  <span className="size-2 rounded-full bg-line" />
                  <span className="size-2 rounded-full bg-line" />
                  <span className="size-2 rounded-full bg-line" />
                </span>
                <span className="relative block" style={{ aspectRatio: `${screen.width} / ${screen.height}` }}>
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    fill
                    quality={90}
                    sizes="(min-width: 1024px) 640px, 92vw"
                    className="object-cover object-top transition-transform duration-[1.2s] ease-silk group-hover:scale-[1.03]"
                  />
                </span>
                <span className="absolute right-3 bottom-3 grid size-10 place-items-center rounded-full bg-card/90 text-ink shadow-lg backdrop-blur transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
                  <Expand aria-hidden="true" className="size-4" />
                </span>
              </button>
            </article>
          </li>
        ))}
      </ol>
      {viewer}
    </>
  );
}
