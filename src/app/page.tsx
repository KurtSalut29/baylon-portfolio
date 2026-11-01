import { ArrowDown, ArrowUp, ArrowUpRight, FileText, Mail, MessageSquare, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { CertificateFrame } from "@/components/certificate-frame";
import { CopyButton } from "@/components/copy-button";
import { Masthead } from "@/components/masthead";
import { PillNav } from "@/components/pill-nav";
import { WorkSheets } from "@/components/work-sheets";
import { certificate, navLinks, profile, project, skills } from "@/lib/content";

const container = "mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12";

const delay = (i: number) => ({ "--i": i }) as CSSProperties;
const stagger = (ms: number) => ({ "--d": ms }) as CSSProperties;

// Text for the slowly turning ring around the portrait.
const ringText = `${profile.role} · Computer Science · `;

/** Section opener: small label, serif title, and a hairline that draws across. */
function SectionHead({ label, id, children, intro }: { label: string; id: string; children: ReactNode; intro?: string }) {
  return (
    <div data-reveal="" className="grid gap-6 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-7">
        <p className="text-[13px] font-semibold tracking-[0.1em] text-accent uppercase">{label}</p>
        <h2 id={id} className="mt-4 text-[2.3rem] leading-[1.02] tracking-[-0.02em] sm:text-5xl lg:text-[3.6rem]">
          {children}
        </h2>
      </div>
      {intro && <p className="text-lg leading-relaxed lg:col-span-4 lg:col-start-9">{intro}</p>}
      <span aria-hidden="true" className="rule-draw block h-px bg-line lg:col-span-12" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[70] rounded-md bg-btn px-4 py-2 font-semibold text-btn-text focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>

      <Masthead />

      <main id="main">
        {/* ───────────── Hero ───────────── */}
        <section id="top" aria-label="Introduction" className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(ellipse_60%_55%_at_75%_40%,var(--c-tint),transparent_70%)]"
          />
          <div
            className={`${container} relative grid items-center gap-14 pt-14 pb-20 sm:pt-20 lg:grid-cols-12 lg:gap-8 lg:pt-48 lg:pb-28`}
          >
            <div className="text-center lg:col-span-7 lg:text-left">
              <p
                className="rise inline-flex items-center gap-2.5 text-[13px] font-semibold tracking-[0.1em] text-accent uppercase"
                style={delay(0)}
              >
                <span aria-hidden="true" className="h-px w-8 bg-blue" />
                {profile.role}
              </p>

              <h1 className="mt-6 text-[clamp(3.2rem,14vw,7.5rem)] leading-[0.92] tracking-[-0.035em]">
                <span className="mask-line">
                  <span style={delay(0)}>{profile.first}</span>
                </span>
                <span className="mask-line">
                  <span style={delay(1)}>
                    <em className="text-accent">{profile.last}</em>
                  </span>
                </span>
              </h1>

              <p
                className="rise mx-auto mt-8 max-w-xl font-serif text-[1.45rem] leading-snug text-ink italic sm:text-[1.7rem] lg:mx-0"
                style={delay(1)}
              >
                {profile.statement}
              </p>
              <p className="rise mx-auto mt-4 max-w-lg leading-relaxed lg:mx-0" style={delay(2)}>
                {profile.degree} student at {profile.school}.
              </p>

              <div
                className="rise mx-auto mt-9 grid max-w-sm grid-cols-2 gap-3 sm:flex sm:max-w-none sm:justify-center lg:justify-start"
                style={delay(3)}
              >
                <a
                  href="#work"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-btn px-4 font-semibold whitespace-nowrap text-btn-text transition-colors duration-300 hover:bg-btn-hover min-[380px]:px-6"
                >
                  See my work
                  <ArrowDown
                    aria-hidden="true"
                    className="hidden size-4 transition-transform duration-300 ease-silk group-hover:translate-y-0.5 min-[400px]:block"
                  />
                </a>
                <Link
                  href="/resume"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-card px-4 font-semibold whitespace-nowrap text-ink transition-colors duration-300 hover:border-blue/50 hover:bg-tint min-[380px]:px-6"
                >
                  <FileText aria-hidden="true" className="size-4" />
                  Résumé
                </Link>
              </div>
            </div>

            {/* Oval portrait with a turning ring of text */}
            <figure className="relative order-first mx-auto w-[min(62vw,260px)] lg:order-none lg:col-span-4 lg:col-start-9 lg:w-full lg:max-w-[340px]">
              <div className="relative aspect-[3/4]">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 translate-x-3 translate-y-3 rounded-[999px] border border-blue/50"
                />
                <div className="oval-open relative size-full overflow-hidden rounded-[999px] bg-paper shadow-[0_40px_70px_-36px_rgba(30,58,138,0.55)]">
                  <Image
                    src={profile.photo}
                    alt="Portrait of Gelli Mae Baylon in a black blazer."
                    fill
                    preload
                    quality={90}
                    sizes="(min-width: 1024px) 340px, 62vw"
                    className="origin-bottom scale-[1.07] object-cover object-[50%_40%]"
                  />
                </div>
                {/* Text ring badge */}
                <div className="rise absolute -bottom-6 -left-6 size-28 sm:-left-10 sm:size-32" style={delay(4)}>
                  <div className="grid size-full place-items-center rounded-full bg-btn text-btn-text shadow-[0_18px_36px_-16px_rgba(30,58,138,0.6)]">
                    <svg viewBox="0 0 100 100" aria-hidden="true" className="turn absolute inset-0 size-full">
                      <defs>
                        <path id="ring" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
                      </defs>
                      <text className="fill-current text-[8px] font-semibold uppercase">
                        {/* textLength spreads the text evenly around the whole ring. */}
                        <textPath href="#ring" textLength="230" lengthAdjust="spacing">
                          {ringText}
                        </textPath>
                      </text>
                    </svg>
                    <span className="font-serif text-2xl italic">G.</span>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </section>

        {/* ───────────── About ───────────── */}
        <section id="about" aria-labelledby="about-title" className="bg-paper py-20 lg:py-32">
          <div className={container}>
            <SectionHead label="About me" id="about-title">
              Useful, <em className="text-accent">user-friendly</em> work.
            </SectionHead>

            <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12">
              <blockquote data-reveal="" className="lg:col-span-7">
                <p className="font-serif text-[1.55rem] leading-[1.45] text-ink sm:text-[1.9rem]">
                  <span aria-hidden="true" className="mr-1 font-serif text-blue">“</span>
                  {profile.careerGoal}
                  <span aria-hidden="true" className="ml-0.5 font-serif text-blue">”</span>
                </p>
              </blockquote>

              <dl data-reveal="" style={stagger(150)} className="divide-y divide-line border-y border-line lg:col-span-4 lg:col-start-9">
                {[
                  ["Name", profile.fullName],
                  ["Role", profile.role],
                  ["Course", profile.degree],
                  ["School", profile.school],
                  ["Phone", profile.phone],
                  ...(profile.email ? [["Email", profile.email]] : []),
                ].map(([term, value]) => (
                  <div key={term} className="flex flex-col gap-0.5 py-4">
                    <dt className="text-xs font-semibold tracking-[0.1em] text-muted uppercase">{term}</dt>
                    <dd className="font-semibold text-ink [overflow-wrap:anywhere]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ───────────── Work ───────────── */}
        <section id="work" aria-labelledby="work-title" className="py-20 lg:py-32">
          <div className={container}>
            <SectionHead label="Selected work" id="work-title" intro={project.summary}>
              {project.name}
            </SectionHead>
            <div data-reveal="" className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-tint px-3.5 py-1.5 text-[13px] font-semibold text-accent">{project.kind}</span>
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-line px-3.5 py-1.5 text-[13px] font-semibold text-ink">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-12 lg:mt-16">
              <WorkSheets screens={project.screens} project={project.name} />
            </div>
          </div>
        </section>

        {/* ───────────── Skills ───────────── */}
        <section id="skills" aria-labelledby="skills-title" className="bg-paper py-20 lg:py-32">
          <div className={container}>
            <SectionHead
              label="Skills"
              id="skills-title"
              intro="Hands-on web skills, and the strengths I bring to every team."
            >
              What I <em className="text-accent">bring</em>.
            </SectionHead>

            <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12">
              <div data-reveal="" className="lg:col-span-5">
                <p className="text-xs font-semibold tracking-[0.1em] text-muted uppercase">Technical</p>
                <ul className="mt-4 space-y-3">
                  {skills.technical.map((skill) => (
                    <li
                      key={skill.name}
                      className="group rounded-[22px] bg-btn p-6 text-btn-text transition-[translate] duration-500 ease-silk hover:-translate-y-1"
                    >
                      <p className="font-serif text-[1.7rem] leading-tight">{skill.name}</p>
                      <p className="mt-2 text-[0.95rem] leading-relaxed opacity-75">{skill.text}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div data-reveal="" style={stagger(140)} className="lg:col-span-6 lg:col-start-7">
                <p className="text-xs font-semibold tracking-[0.1em] text-muted uppercase">Personal</p>
                <ul className="mt-4 divide-y divide-line border-y border-line">
                  {skills.personal.map((skill) => (
                    <li key={skill.name} className="group flex items-start gap-5 py-6">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 size-2.5 shrink-0 rounded-full border-2 border-blue transition-colors duration-300 group-hover:bg-blue"
                      />
                      <div>
                        <p className="font-serif text-[1.5rem] leading-tight text-ink transition-transform duration-500 ease-silk group-hover:translate-x-1">
                          {skill.name}
                        </p>
                        <p className="mt-1.5 leading-relaxed">{skill.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── Certificate ───────────── */}
        <section id="certificate" aria-labelledby="certificate-title" className="py-20 lg:py-32">
          <div className={container}>
            <SectionHead label="Certificate" id="certificate-title">
              Always <em className="text-accent">learning</em>.
            </SectionHead>
            <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:items-center">
              <div data-reveal="" className="lg:col-span-7">
                <CertificateFrame />
              </div>
              <div data-reveal="" style={stagger(140)} className="lg:col-span-4 lg:col-start-9">
                <p className="text-[13px] font-semibold tracking-[0.1em] text-accent uppercase">{certificate.kind}</p>
                <h3 className="mt-3 text-[1.9rem] leading-tight">{certificate.title}</h3>
                <p className="mt-2 font-semibold text-ink">{certificate.issuer}</p>
                <p className="mt-1 text-sm">
                  Webinar · <time dateTime={certificate.dateTime}>{certificate.date}</time>
                </p>
                <p className="mt-5 leading-relaxed">{certificate.details}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── Contact ───────────── */}
        <section id="contact" aria-labelledby="contact-title" className="px-3 pb-6 sm:px-5 lg:pb-5">
          <div className="relative overflow-hidden rounded-[32px] bg-[#1e3a8a] py-20 text-white lg:rounded-[44px] lg:py-28 dark:bg-[#14245c]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-40 -right-24 size-[520px] rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-8 size-[360px] rounded-full border border-white/10"
            />
            <div className={`${container} relative`}>
              <div data-reveal="" className="max-w-3xl">
                <p className="text-[13px] font-semibold tracking-[0.1em] text-[#9cc2ff] uppercase">Contact</p>
                <h2 id="contact-title" className="mt-4 text-[2.5rem] leading-[1.02] tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl">
                  Let&apos;s build something <em className="text-[#9cc2ff]">useful</em>.
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">
                  I&apos;m looking for opportunities to grow as a web developer. Call or text me anytime.
                </p>
              </div>

              <div data-reveal="" style={stagger(140)} className="mt-12 border-t border-white/15 pt-10">
                <p className="text-xs font-semibold tracking-[0.1em] text-white/60 uppercase">Phone</p>
                <a
                  href={profile.phoneHref}
                  className="link-draw mt-2 inline-block font-serif text-[clamp(2.2rem,9vw,4.5rem)] leading-none text-white"
                >
                  {profile.phone}
                </a>
                {profile.email && (
                  <p className="mt-4">
                    <a href={`mailto:${profile.email}`} className="link-draw inline-flex items-center gap-2 text-lg text-white/85">
                      <Mail aria-hidden="true" className="size-4" />
                      {profile.email}
                    </a>
                  </p>
                )}

                <div className="mt-9 grid max-w-md gap-3 min-[420px]:grid-cols-2 sm:flex sm:max-w-none">
                  <a
                    href={profile.phoneHref}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 font-semibold text-[#1e3a8a] transition-colors hover:bg-[#e8f0fe]"
                  >
                    <Phone aria-hidden="true" className="size-4" />
                    Call me
                  </a>
                  <a
                    href={profile.smsHref}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
                  >
                    <MessageSquare aria-hidden="true" className="size-4" />
                    Send a text
                  </a>
                  <CopyButton value={profile.phone.replace(/\s/g, "")} label="Copy number" variant="onNavy" className="min-[420px]:col-span-2" />
                  <Link
                    href="/resume"
                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-full px-4 font-semibold text-white min-[420px]:col-span-2 sm:ml-auto"
                  >
                    <span className="link-draw">View my résumé</span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={`${container} pt-10 pb-[calc(env(safe-area-inset-bottom)+6.5rem)] lg:pb-10`}>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="font-serif text-2xl text-ink">
            Gelli Mae <em className="text-accent">Baylon</em>
          </p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="link-draw text-muted hover:text-ink">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {profile.fullName} · {profile.role}
          </p>
          <a href="#top" className="group inline-flex items-center gap-2 font-semibold text-ink">
            Back to top
            <span className="grid size-8 place-items-center rounded-full border border-line transition-[translate,border-color] duration-300 ease-silk group-hover:-translate-y-0.5 group-hover:border-blue/50">
              <ArrowUp aria-hidden="true" className="size-4" />
            </span>
          </a>
        </div>
      </footer>

      <PillNav />
    </>
  );
}
