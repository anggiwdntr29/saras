import { useEffect, useState } from "react";
import {
  COURSES,
  COURSES_TITLE,
  EDUCATION,
  EDUCATION_HEADLINE,
  EDUCATION_LABEL,
} from "../../constants/education";
import { useInView } from "../../hooks/useInView";
import { Eyebrow, Section, SectionHeading, Tag, delay } from "../common";

const R = 88;
const C = 2 * Math.PI * R;
const ARC = 0.75; // dial covers 270°

/** Counts from 0 to `to` once `run` turns true (respects reduced motion). */
function useCountUp(to: number, run: boolean, ms = 1800) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    // Reduced motion: jump straight to the final value on the first frame.
    const dur = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : ms;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = dur === 0 ? 1 : Math.min(1, (t - t0) / dur);
      setV(to * (1 - Math.pow(1 - p, 4)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, run, ms]);
  return v;
}

function GpaDial({ run }: { run: boolean }) {
  const { gpa, gpaMax } = EDUCATION;
  const value = useCountUp(gpa, run);
  const ratio = gpa / gpaMax;
  const track = C * ARC;
  const ticks = Array.from({ length: 41 }, (_, i) => i);

  return (
    <figure className="relative mx-auto aspect-square w-full max-w-[17rem]">
      <svg viewBox="0 0 220 220" className="h-full w-full rotate-[135deg]" aria-hidden>
        {/* tick ring */}
        {ticks.map((i) => {
          const a = (i / 40) * ARC * 2 * Math.PI;
          const major = i % 10 === 0;
          const lit = i / 40 <= ratio;
          return (
            <line
              key={i}
              x1={110 + Math.cos(a) * 102}
              y1={110 + Math.sin(a) * 102}
              x2={110 + Math.cos(a) * (major ? 94 : 98)}
              y2={110 + Math.sin(a) * (major ? 94 : 98)}
              className={`edu-tick ${run && lit ? "edu-tick-on" : ""}`}
              style={{ transitionDelay: `${0.4 + (i / 40) * 1.6}s` }}
              strokeWidth={major ? 1.4 : 0.8}
            />
          );
        })}
        <circle
          cx="110" cy="110" r={R} fill="none"
          className="stroke-bronze/15" strokeWidth="2"
          strokeDasharray={`${track} ${C}`} strokeLinecap="round"
        />
        <circle
          cx="110" cy="110" r={R} fill="none"
          className="stroke-bronze transition-[stroke-dashoffset] duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-300"
          strokeWidth="2.5" strokeLinecap="round"
          strokeDasharray={`${track} ${C}`}
          strokeDashoffset={run ? track * (1 - ratio) : track}
        />
      </svg>
      <figcaption className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-sans text-[0.75rem] uppercase tracking-[0.28em] text-secondary">
          Cumulative GPA
        </span>
        <span className="mt-1 font-serif text-6xl font-medium leading-none tabular-nums text-primary">
          {value.toFixed(2)}
        </span>
        <span className="mt-2 font-sans text-xs tracking-[0.2em] text-bronze">
          / {gpaMax.toFixed(2)}
        </span>
        <span className="sr-only">
          GPA {gpa} out of {gpaMax}
        </span>
      </figcaption>
    </figure>
  );
}

function Education() {
  const { ref, inView } = useInView<HTMLElement>(0.2);
  const show = inView ? "reveal" : "opacity-0";
  const e = EDUCATION;
  const years = Array.from({ length: e.endYear - e.startYear + 1 }, (_, i) => e.startYear + i);
  const [hover, setHover] = useState<number | null>(null);

  return (
    <Section ref={ref} id="education">
        <SectionHeading
          id="education"
          label={EDUCATION_LABEL}
          headline={EDUCATION_HEADLINE}
          emphasis="learned"
          show={show}
        />

        {/* Diploma card */}
        <article
          style={delay(0.35)}
          className={`${show} edu-card relative mt-12 grid grid-cols-1 gap-10 border border-bronze/30 bg-surface/70 p-6 sm:p-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12 lg:mt-16 lg:p-14`}
        >
          {/* corner marks */}
          {["left-3 top-3 border-l border-t", "right-3 top-3 border-r border-t", "bottom-3 left-3 border-b border-l", "bottom-3 right-3 border-b border-r"].map((c) => (
            <span key={c} aria-hidden className={`absolute h-5 w-5 border-bronze ${c}`} />
          ))}

          <GpaDial run={inView} />

          <div className="flex flex-col justify-center">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-bronze">
              {e.qualification}
            </p>
            <h3 className="mt-4 text-balance font-serif text-[2rem] font-medium leading-[1.1] sm:text-4xl lg:text-[2.75rem]">
              {e.institution}
            </h3>

            {/* Study timeline */}
            <div className="mt-8" aria-label={`Studied from ${e.startYear} to ${e.endYear}`}>
              <div className="relative h-px bg-bronze/20">
                <span
                  aria-hidden
                  className={`absolute inset-y-0 left-0 w-full origin-left bg-bronze transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-500 ${
                    inView ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </div>
              <ol className="mt-3 flex justify-between">
                {years.map((y, i) => (
                  <li
                    key={y}
                    style={delay(0.6 + i * 0.25)}
                    className={`${show} relative font-sans text-xs tabular-nums tracking-[0.15em] ${
                      i === years.length - 1 ? "text-bronze" : "text-secondary"
                    }`}
                  >
                    <span aria-hidden className="absolute -top-[1.05rem] left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border border-bronze bg-surface" />
                    {y}
                    {i === years.length - 1 && <span className="ml-1.5 font-serif italic normal-case tracking-normal">graduated</span>}
                  </li>
                ))}
              </ol>
            </div>

            <p className="mt-8 max-w-[58ch] font-sans text-base leading-[1.8] text-secondary">
              {e.background}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {e.pillars.map((p) => (
                <Tag key={p}>{p}</Tag>
              ))}
            </ul>
          </div>
        </article>

        {/* Courses ledger */}
        <div className="mt-16 lg:mt-20">
          <div style={delay(0.5)} className={`${show} mb-6 flex items-center justify-between gap-4`}>
            <Eyebrow>{COURSES_TITLE}</Eyebrow>
            <span className="font-sans text-xs tracking-[0.2em] text-secondary">
              {String(COURSES.length).padStart(2, "0")} entries
            </span>
          </div>

          <ol className="border-t border-bronze/25" onMouseLeave={() => setHover(null)}>
            {COURSES.map((c, i) => {
              const dim = hover !== null && hover !== i;
              return (
                <li
                  key={c.title}
                  style={delay(0.55 + i * 0.08)}
                  onMouseEnter={() => setHover(i)}
                  className={`${show} edu-row group relative isolate grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 gap-y-1 border-b border-bronze/25 py-5 transition-opacity duration-500 sm:grid-cols-[3rem_1fr_auto] sm:gap-x-8 lg:py-6 ${
                    dim ? "opacity-40" : "opacity-100"
                  }`}
                >
                  <span aria-hidden className="edu-row-fill absolute inset-0 -z-10 origin-left bg-bronze/[0.07]" />
                  <span className="font-sans text-xs tracking-[0.2em] text-bronze">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-serif text-[1.375rem] leading-snug text-primary transition-transform duration-500 ease-out group-hover:translate-x-2 motion-reduce:transition-none sm:text-2xl lg:text-[1.75rem]">
                    {c.title}
                  </span>
                  <span className="col-start-2 font-sans text-[0.75rem] uppercase tracking-[0.16em] text-secondary sm:col-start-3 sm:text-right">
                    {c.provider ?? "—"}
                    {c.note && (
                      <span className="block pt-1 text-[0.8125rem] normal-case tracking-normal text-secondary/90">
                        {c.note}
                      </span>
                    )}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
    </Section>
  );
}

export default Education;
