import { useState } from "react";
import {
  SKILL_GROUPS,
  SKILL_TOOLS,
  SKILL_TOOLS_TITLE,
  SKILLS_HEADLINE,
  SKILLS_INTRO,
  SKILLS_LABEL,
} from "../../constants/skills";
import { useInView } from "../../hooks/useInView";
import { Eyebrow, Section, SectionHeading, Tag, delay } from "../common";

function Skills() {
  const { ref, inView } = useInView<HTMLElement>(0.15);
  const show = inView ? "reveal" : "opacity-0";
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section ref={ref} id="skills">
      {/* Heading */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:items-end md:gap-12">
        <SectionHeading id="skills" label={SKILLS_LABEL} headline={SKILLS_HEADLINE} emphasis="bring" show={show} />
        <p style={delay(0.25)} className={`${show} max-w-[48ch] font-sans text-base leading-[1.8] text-secondary`}>
          {SKILLS_INTRO}
        </p>
      </div>

      {/* Accordion */}
      <div className="mt-12 border-t border-bronze/25 lg:mt-16">
        {SKILL_GROUPS.map((g, gi) => {
          const on = gi === open;
          return (
            <div key={g.title} style={delay(0.3 + gi * 0.08)} className={`${show} border-b border-bronze/25`}>
              <h3>
                <button
                  type="button"
                  id={`skill-btn-${gi}`}
                  aria-expanded={on}
                  aria-controls={`skill-panel-${gi}`}
                  onClick={() => setOpen(on ? null : gi)}
                  className="group flex w-full items-center gap-4 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze sm:gap-8 lg:py-7"
                >
                  <span
                    className={`w-7 shrink-0 font-sans text-xs tracking-[0.2em] transition-colors duration-500 ${
                      on ? "text-bronze" : "text-secondary"
                    }`}
                  >
                    0{gi + 1}
                  </span>
                  <span
                    className={`flex-1 font-serif text-[1.625rem] leading-[1.1] tracking-tight transition-colors duration-500 sm:text-[2.25rem] lg:text-[2.75rem] ${
                      on ? "text-primary" : "text-primary/65 group-hover:text-primary"
                    }`}
                  >
                    {g.title}
                  </span>
                  <span className="hidden font-sans text-xs uppercase tracking-[0.2em] text-secondary sm:block">
                    {g.items.length} skills
                  </span>
                  <span
                    aria-hidden
                    className={`relative flex size-10 shrink-0 items-center justify-center rounded-full border transition-[transform,border-color,background-color] duration-500 ${
                      on ? "rotate-45 border-bronze bg-bronze/10" : "border-bronze/40 group-hover:border-bronze"
                    }`}
                  >
                    <span className="absolute h-px w-3.5 bg-bronze" />
                    <span className="absolute h-3.5 w-px bg-bronze" />
                  </span>
                </button>
              </h3>

              {/* Smooth height via grid-rows */}
              <div
                id={`skill-panel-${gi}`}
                role="region"
                aria-labelledby={`skill-btn-${gi}`}
                inert={!on}
                className={`grid transition-[grid-template-rows] duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                  on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="flex flex-wrap gap-2 pb-8 sm:pl-[3.75rem] lg:pb-10">
                    {g.items.map((item, i) => (
                      <Tag
                        key={item}
                        style={delay(0.05 + i * 0.04)}
                        className={`${on ? "exp-blur" : "opacity-0"} bg-background/70 px-4 py-2 text-sm transition-colors duration-300 hover:border-bronze`}
                      >
                        {item}
                      </Tag>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tools — static, scannable list */}
      <div style={delay(0.6)} className={`${show} mt-14 grid grid-cols-1 gap-5 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-12 lg:mt-16`}>
        <Eyebrow className="md:pt-2">{SKILL_TOOLS_TITLE}</Eyebrow>
        <ul className="flex flex-wrap gap-2">
          {SKILL_TOOLS.map((t) => (
            <Tag key={t} className="bg-surface/60">
              {t}
            </Tag>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Skills;
