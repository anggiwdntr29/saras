import { useRef, useState } from "react";
import { EXPERIENCES } from "../../constants/experience";
import {
  PROJECT_GROUPS,
  PROJECTS_HEADLINE,
  PROJECTS_INTRO,
  PROJECTS_LABEL,
  type Project,
} from "../../constants/projects";
import { useInView } from "../../hooks/useInView";
import { Section, SectionHeading, Tag, delay } from "../common";

const SPREAD = 13; // horizontal offset of each preview card, % of card width
const SCALE_STEP = 0.07;

type Item = Project & {
  company: string;
  entity?: string;
  role?: string;
  period?: string;
  industry?: string;
};

// Role, period and industry come from the matching experience entry — no new data.
const ITEMS: Item[] = PROJECT_GROUPS.flatMap((g) => {
  const exp = EXPERIENCES.find((e) => e.company === g.company);
  return g.projects.map((p) => ({
    ...p,
    company: g.company,
    entity: g.entity,
    role: exp?.position,
    period: exp?.period,
    industry: exp?.industry,
  }));
});

const COMPANIES = PROJECT_GROUPS.map((g) => ({
  company: g.company,
  first: ITEMS.findIndex((it) => it.company === g.company),
  count: g.projects.length,
}));

const pad = (n: number) => String(n).padStart(2, "0");

function Projects() {
  const { ref, inView } = useInView<HTMLElement>(0.15);
  const show = inView ? "reveal" : "opacity-0";

  const [active, setActive] = useState(0);
  const dragX = useRef<number | null>(null);
  const n = ITEMS.length;
  const current = ITEMS[active];

  const go = (dir: 1 | -1) => setActive((a) => (a + dir + n) % n);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    }
  };

  return (
    <Section
      ref={ref}
      id="projects"
      className="overflow-x-clip bg-[linear-gradient(to_bottom,var(--color-background),color-mix(in_srgb,var(--color-accent)_55%,var(--color-background))_18%,color-mix(in_srgb,var(--color-accent)_55%,var(--color-background))_82%,var(--color-background))]"
    >
      {/* Heading */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:items-end md:gap-12">
        <SectionHeading
          id="projects"
          label={PROJECTS_LABEL}
          headline={PROJECTS_HEADLINE}
          emphasis="work"
          show={show}
        />
        <p style={delay(0.25)} className={`${show} max-w-[48ch] font-sans text-base leading-[1.8] text-secondary`}>
          {PROJECTS_INTRO}
        </p>
      </div>

      {/* Company index */}
      <nav
        aria-label="Projects by company"
        style={delay(0.35)}
        className={`${show} -mx-5 mt-12 overflow-x-auto px-5 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0 lg:mt-14`}
      >
        <ul className="flex min-w-max gap-x-7 border-b border-bronze/25 lg:min-w-0 lg:flex-wrap">
          {COMPANIES.map((c) => {
            const on = current.company === c.company;
            return (
              <li key={c.company}>
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => setActive(c.first)}
                  className={`relative -mb-px whitespace-nowrap border-b py-3 font-sans text-[0.8125rem] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze ${
                    on ? "border-bronze text-primary" : "border-transparent text-secondary hover:text-primary"
                  }`}
                >
                  {c.company}
                  <span className="ml-1.5 text-[0.75rem] text-bronze">{pad(c.count)}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Stacked showcase — all cards share one grid cell, so height follows content */}
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label={`Project ${active + 1} of ${n}`}
        tabIndex={0}
        onKeyDown={onKey}
        onPointerDown={(e) => (dragX.current = e.clientX)}
        onPointerUp={(e) => {
          if (dragX.current === null) return;
          const dx = e.clientX - dragX.current;
          dragX.current = null;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        }}
        style={delay(0.45)}
        className={`${show} mt-10 grid touch-pan-y [grid-template-areas:'stack'] focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-bronze lg:mt-12`}
      >
        {ITEMS.map((p, i) => {
          let d = (i - active + n) % n;
          if (d > n / 2) d -= n;
          const dist = Math.abs(d);
          const front = d === 0;
          const visible = dist <= 1;
          return (
            <article
              key={p.title}
              aria-hidden={!front}
              onClick={front || !visible ? undefined : () => setActive(i)}
              style={{
                transform: `translateX(${d * SPREAD}%) scale(${1 - dist * SCALE_STEP})`,
                zIndex: 10 - dist,
                opacity: visible ? 1 : 0,
                visibility: visible ? undefined : "hidden",
              }}
              className={`relative w-full justify-self-center overflow-hidden rounded-sm border border-bronze/20 bg-background shadow-[0_30px_60px_-34px_rgba(41,41,35,0.45)] transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [grid-area:stack] motion-reduce:transition-none md:w-[82%] ${
                front ? "" : "cursor-pointer"
              }`}
            >
              <div inert={!front} className="h-full">
                <Card item={p} index={i} total={n} />
              </div>
              {/* Veil keeps previews quiet so the focus card reads first */}
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-0 bg-background transition-opacity duration-700 ${
                  front ? "opacity-0" : "opacity-75 hover:opacity-60"
                }`}
              />
            </article>
          );
        })}
      </div>

      {/* Controls */}
      <div style={delay(0.5)} className={`${show} mx-auto mt-8 flex items-center gap-5 md:w-[82%] sm:gap-8`}>
        <p aria-live="polite" className="shrink-0 font-sans text-xs uppercase tracking-[0.2em] text-secondary">
          <span className="font-serif text-2xl normal-case tracking-normal text-primary">{pad(active + 1)}</span> /{" "}
          {pad(n)}
        </p>
        <div aria-hidden className="h-px flex-1 bg-bronze/20">
          <div
            className="h-px bg-bronze transition-[width] duration-700 motion-reduce:transition-none"
            style={{ width: `${((active + 1) / n) * 100}%` }}
          />
        </div>
        <div className="flex shrink-0 gap-2">
          <ArrowButton label="Previous project" onClick={() => go(-1)} dir="←" />
          <ArrowButton label="Next project" onClick={() => go(1)} dir="→" />
        </div>
      </div>
    </Section>
  );
}

function ArrowButton({ label, onClick, dir }: { label: string; onClick: () => void; dir: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex size-11 items-center justify-center rounded-full border border-bronze/50 font-sans text-base text-primary transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
    >
      <span aria-hidden>{dir}</span>
    </button>
  );
}

function Card({ item, index, total }: { item: Item; index: number; total: number }) {
  const img = item.images?.[0];
  return (
    <div className="grid h-full grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,8fr)]">
      {/* Context panel */}
      <aside className="flex flex-col gap-5 border-b border-bronze/15 bg-accent/60 p-6 sm:p-8 md:border-b-0 md:border-r lg:p-10">
        {img && (
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            draggable={false}
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
        )}
        <div className="flex items-baseline justify-between gap-4 md:block">
          <span className="font-serif text-5xl leading-none text-bronze md:text-6xl">{pad(index + 1)}</span>
          <span className="font-sans text-xs tracking-[0.15em] text-secondary md:mt-2 md:block">
            of {pad(total)}
          </span>
        </div>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-bronze/20 pt-5 font-sans md:grid-cols-1">
          <div className="col-span-2 md:col-span-1">
            <dt className="text-[0.75rem] uppercase tracking-[0.18em] text-bronze">Company</dt>
            <dd className="mt-1 text-[0.9375rem] text-primary">
              {item.company}
              {item.entity && <span className="block text-[0.8125rem] text-secondary">{item.entity}</span>}
            </dd>
          </div>
          {item.role && (
            <div className="col-span-2 md:col-span-1">
              <dt className="text-[0.75rem] uppercase tracking-[0.18em] text-bronze">Role</dt>
              <dd className="mt-1 text-[0.9375rem] leading-snug text-primary">{item.role}</dd>
            </div>
          )}
          {item.period && (
            <div>
              <dt className="text-[0.75rem] uppercase tracking-[0.18em] text-bronze">Period</dt>
              <dd className="mt-1 text-[0.875rem] text-secondary">{item.period}</dd>
            </div>
          )}
          {item.industry && (
            <div>
              <dt className="text-[0.75rem] uppercase tracking-[0.18em] text-bronze">Industry</dt>
              <dd className="mt-1 text-[0.875rem] text-secondary">{item.industry}</dd>
            </div>
          )}
        </dl>
      </aside>

      {/* Story */}
      <div className="flex flex-col p-6 sm:p-8 lg:p-12">
        <h3 className="text-balance font-serif text-[1.75rem] font-medium leading-[1.15] sm:text-[2rem] lg:text-[2.375rem]">
          {item.title}
        </h3>
        <p className="mt-4 font-sans text-base leading-[1.75] text-primary/85">{item.overview}</p>

        <p className="mt-7 font-sans text-[0.75rem] uppercase tracking-[0.18em] text-secondary">My contribution</p>
        <ul className="mt-3 space-y-2.5">
          {item.contributions.map((c) => (
            <li key={c} className="relative pl-6 font-sans text-[0.9375rem] leading-relaxed text-secondary">
              <span aria-hidden className="absolute left-0 top-[0.72em] h-px w-3 bg-bronze" />
              {c}
            </li>
          ))}
        </ul>

        <ul className="mt-auto flex flex-wrap gap-2 pt-7">
          {item.keyAreas.map((k) => (
            <Tag key={k}>{k}</Tag>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
