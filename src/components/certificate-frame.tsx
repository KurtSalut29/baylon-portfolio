"use client";

import { Expand } from "lucide-react";
import Image from "next/image";
import { certificate, profile } from "@/lib/content";
import { useImageViewer } from "./image-viewer";

/** Her certificate shown framed, like a print on a mat, opening full size on tap. */
export function CertificateFrame() {
  const { open, viewer } = useImageViewer();
  const c = certificate;

  return (
    <>
      <button
        type="button"
        onClick={() =>
          open({
            src: c.image,
            alt: `${c.kind} for "${c.title}", presented to ${profile.fullName} by ${c.issuer}.`,
            title: c.title,
            subtitle: `${c.kind} · ${c.issuer} · ${c.date}`,
            width: c.width,
            height: c.height,
          })
        }
        aria-label={`View the ${c.title} certificate full size`}
        className="group relative block w-full rounded-[22px] border border-line bg-card p-3 shadow-[0_40px_80px_-50px_rgba(30,58,138,0.6)] transition-[translate,box-shadow] duration-700 ease-silk hover:-translate-y-1 sm:p-5"
      >
        <span className="block rounded-[14px] bg-paper p-3 sm:p-6">
          <span className="relative block overflow-hidden rounded-md shadow-[0_18px_36px_-20px_rgba(30,58,138,0.55)]" style={{ aspectRatio: `${c.width} / ${c.height}` }}>
            <Image
              src={c.image}
              alt=""
              fill
              quality={90}
              sizes="(min-width: 1024px) 640px, 92vw"
              className="object-cover transition-transform duration-[1.2s] ease-silk group-hover:scale-[1.02]"
            />
          </span>
        </span>
        <span className="absolute right-6 bottom-6 grid size-10 place-items-center rounded-full bg-card/90 text-ink shadow-lg backdrop-blur transition-opacity duration-300 sm:right-9 sm:bottom-9 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
          <Expand aria-hidden="true" className="size-4" />
        </span>
      </button>
      {viewer}
    </>
  );
}
