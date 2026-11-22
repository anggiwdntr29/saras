import { useRef, useState } from "react";
import {
  EXPERIENCES,
  EXPERIENCE_HEADLINE,
  EXPERIENCE_INTRO,
  EXPERIENCE_LABEL,
} from "../../constants/experience";
import { useInView } from "../../hooks/useInView";
import { Section, SectionHeading, Tag, delay } from "../common";

const SHOWN_POINTS = 4;
const pad = (n: number) => String(n).padStart(2, "0");

function Experience() {
  const { ref, inView } = useInView<HTMLElement>(0.2);
  const show = inView ? "reveal" : "opacity-0";
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const role = EXPERIENCES[active];
  const points = expanded ? role.responsibilities : role.responsibilities.slice(0, SHOWN_POINTS);
  const hidden = role.responsibilities.length - SHOWN_POINTS;

  const select = (i: number, focus = false) => {
    setActive(i);
    setExpanded(false);
    if (focus) tabRefs.current[i]?.focus();
  };

  const onKey = (e: React.KeyboardEvent) => {
    const n = EXPERIENCES.length;
    if (["ArrowDown", "ArrowRight"].includes(e.key)) {
      e.preventDefault();
      select((active + 1) % n, true);
    } else if (["ArrowUp", "ArrowLeft"].includes(e.key)) {
      e.preventDefault();
      select((active - 1 + n) % n, true);
    }
  };

  return (
    <Section ref={ref} id="experience">
      {/* Heading + career summary */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:items-end md:gap-12">
        <SectionHeading
          id="experience"
          label={EXPERIENCE_LABEL}
          headline={EXPERIENCE_HEADLINE}
          emphasis="worked"
          show={show}
        />
        <p
          style={delay(0.25)}
          className={`${show} max-w-[48ch] font-sans text-base leading-[1.8] text-secondary`}
        >
          {EXPERIENCE_INTRO}
        </p>
      </div>

      <div
        style={delay(0.35)}
        className={`${show} mt-12 grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-12 lg:mt-16 lg:gap-20`}
      >
        {/* Timeline (tabs) — horizontal scroller on mobile, vertical line on desktop */}
        <div
          role="tablist"
          aria-label="Career timeline"
          aria-orientation="vertical"
          onKeyDown={onKey}
          className="relative -mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:px-8 md:mx-0 md:flex-col md:gap-0 md:overflow-visible md:px-0 md:pb-0"
        >
          <span aria-hidden className="absolute bottom-3 left-[5px] top-3 hidden w-px bg-bronze/25 md:block" />
          {EXPERIENCES.map((r, i) => {
            const on = i === active;
            return (
              <button
                key={r.company}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`exp-tab-${i}`}
                aria-selected={on}
                aria-controls="exp-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => select(i)}
                className={`group relative shrink-0 snap-start rounded-full border px-4 py-2.5 text-left transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze md:rounded-none md:border-0 md:py-4 md:pl-8 md:pr-0 ${
                  on ? "border-bronze bg-bronze/10 md:bg-transparent" : "border-bronze/30"
                }`}
              >
                {/* Timeline node */}
                <span
                  aria-hidden
                  className={`absolute left-0 top-[1.4rem] hidden size-[11px] rounded-full border transition-all duration-500 md:block ${
                    on
                      ? "border-bronze bg-bronze shadow-[0_0_0_4px_var(--color-background),0_0_0_5px_rgba(165,139,98,0.35)]"
                      : "border-bronze/50 bg-background group-hover:border-bronze"
                  }`}
                />
                <span
                  className={`block whitespace-nowrap font-sans text-sm transition-colors duration-300 md:whitespace-normal md:text-[0.975rem] ${
                    on ? "font-medium text-primary" : "text-secondary group-hover:text-primary"
                  }`}
                >
                  {r.company}
                </span>
                <span className="mt-1 hidden font-sans text-[0.75rem] uppercase tracking-[0.16em] text-bronze md:block">
                  {r.period}
                </span>
              </button>
            );
          })}
        </div>

        {/* Panel — remounts on change to replay the entrance */}
        <div
          key={active}
          id="exp-panel"
          role="tabpanel"
          aria-labelledby={`exp-tab-${active}`}
          className="md:min-h-[30rem] md:border-l md:border-bronze/20 md:pl-12 lg:pl-16"
        >
          <div className="exp-mask flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-bronze">
              {role.period}
            </span>
            <span aria-hidden className="h-px w-6 bg-bronze/50" />
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-secondary">
              {role.industry}
            </span>
            <span className="ml-auto hidden font-sans text-xs tracking-[0.2em] text-secondary sm:inline">
              {pad(active + 1)} / {pad(EXPERIENCES.length)}
            </span>
          </div>

          <h3
            style={delay(0.06)}
            className="exp-mask mt-4 text-balance font-serif text-[1.875rem] font-medium leading-[1.12] sm:text-4xl lg:text-[2.5rem]"
          >
            {role.position}
          </h3>
          <p style={delay(0.12)} className="exp-mask mt-3 font-serif text-xl italic text-bronze">
            {role.company}
            {role.entity && (
              <span className="font-sans text-sm not-italic text-secondary"> · {role.entity}</span>
            )}
          </p>

          <p
            style={delay(0.18)}
            className="exp-blur mt-6 max-w-[60ch] border-t border-bronze/20 pt-6 font-sans text-base leading-[1.8] text-primary/85"
          >
            {role.summary}
          </p>

          <ul id="exp-points" className="mt-6 space-y-3">
            {points.map((r, i) => (
              <li
                key={r}
                style={delay(i < SHOWN_POINTS ? 0.26 + i * 0.06 : 0)}
                className="exp-blur relative max-w-[64ch] pl-6 font-sans text-[0.9375rem] leading-relaxed text-secondary"
              >
                <span aria-hidden className="absolute left-0 top-[0.72em] h-px w-3 bg-bronze" />
                {r}
              </li>
            ))}
          </ul>

          {hidden > 0 && (
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls="exp-points"
              onClick={() => setExpanded((v) => !v)}
              className="mt-5 inline-flex items-center gap-2 border-b border-bronze/40 pb-1 font-sans text-[0.8125rem] font-medium tracking-wide text-primary transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze"
            >
              {expanded ? "Show fewer" : `Show all ${role.responsibilities.length} responsibilities`}
              <span aria-hidden className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}>
                ↓
              </span>
            </button>
          )}

          <div className="mt-8">
            <p className="font-sans text-[0.75rem] uppercase tracking-[0.18em] text-secondary">
              Related projects
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {role.projects.map((p, i) => (
                <Tag key={p} style={delay(0.45 + i * 0.05)} className="exp-blur">
                  <a href="#projects" className="hover:text-bronze">
                    {p}
                  </a>
                </Tag>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Experience;
