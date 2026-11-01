import type { Metadata, Viewport } from "next";
import { Manrope, Newsreader } from "next/font/google";
import { RevealObserver } from "@/components/reveal-observer";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gelli Mae Baylon · Web Developer",
  description:
    "Portfolio of Gelli Mae Baylon, a BS Computer Science student at Biliran Province State University who creates useful and user-friendly applications and websites.",
  authors: [{ name: "Gelli Mae T. Baylon" }],
  openGraph: {
    title: "Gelli Mae Baylon · Web Developer",
    description: "Project, skills, and certificate of Gelli Mae Baylon, aspiring web developer.",
    type: "website",
  },
};

export const viewport: Viewport = {
  // Lets the bottom pill sit above the iPhone home indicator via env(safe-area-inset-bottom).
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1020" },
  ],
};

// Runs before first paint: use the saved theme, otherwise the system preference.
// Also marks JS as available so scroll reveals may start hidden.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){}document.documentElement.classList.add("js")})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${newsreader.variable} ${manrope.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh">
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
