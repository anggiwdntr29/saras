import portrait from "../../assets/saras-portrait.webp";
import {
  ABOUT_CTA,
  ABOUT_HEADLINE,
  ABOUT_HIGHLIGHTS,
  ABOUT_LABEL,
  ABOUT_SUMMARY,
} from "../../constants/about";
import { useInView } from "../../hooks/useInView";
import { Section, SectionHeading, delay } from "../common";

function About() {
  const { ref, inView } = useInView<HTMLElement>(0.15);
  const show = inView ? "reveal" : "opacity-0";

  return (
    <Section ref={ref} id="about" className="lg:pt-24">
      <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-12 lg:gap-20">
        {/* Introduction */}
        <div className="max-w-[36rem]">
          <SectionHeading
            id="about"
            label={ABOUT_LABEL}
            headline={ABOUT_HEADLINE}
            emphasis="about me"
            show={show}
            size="xl"
          />

          <div
            style={delay(0.3)}
            className={`${show} mt-8 space-y-5 font-sans text-[1.0625rem] leading-[1.8] text-secondary lg:mt-10`}
          >
            {ABOUT_SUMMARY.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <a
            href={ABOUT_CTA.href}
            style={delay(0.42)}
            className={`${show} group mt-10 inline-flex items-center gap-3 border-b border-bronze/50 pb-1.5 font-sans text-sm font-medium tracking-wide text-primary transition-colors duration-300 hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze`}
          >
            {ABOUT_CTA.label}
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
            >
              →
            </span>
          </a>
        </div>

        {/* Portrait — arch frame */}
        <div
          className={`${inView ? "about-portrait-reveal" : "opacity-0"} relative mx-auto w-full max-w-[20rem] sm:max-w-[23rem] md:mr-0 md:max-w-none`}
        >
          <div
            aria-hidden
            className="absolute -left-4 -top-4 bottom-6 right-4 rounded-t-full border border-bronze/40 sm:-left-5 sm:-top-5"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-sm bg-accent shadow-[0_30px_60px_-30px_rgba(41,41,35,0.35)]">
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_at_50%_100%,rgba(165,139,98,0.22),transparent_70%)]"
            />
            <img
              src={portrait}
              width={1087}
              height={1446}
              loading="lazy"
              decoding="async"
              alt="Portrait of Saras"
              className="absolute inset-0 h-full w-full origin-[50%_8%] scale-[1.3] object-cover object-[50%_0%]"
            />
          </div>
        </div>
      </div>

      {/* Highlights */}
      <ul className="mt-20 grid grid-cols-1 border-t border-bronze/30 md:grid-cols-3 lg:mt-24">
        {ABOUT_HIGHLIGHTS.map((h, i) => (
          <li
            key={h.title}
            style={delay(0.2 + i * 0.12)}
            className={`${show} border-bronze/30 py-8 md:py-10 ${
              i > 0 ? "border-t md:border-l md:border-t-0" : ""
            } ${i === 0 ? "md:pr-8 lg:pr-12" : "md:px-8 lg:px-12"}`}
          >
            <span className="font-sans text-xs tracking-[0.2em] text-bronze">0{i + 1}</span>
            <h3 className="mt-3 font-serif text-[1.625rem] font-medium leading-tight lg:text-[1.75rem]">
              {h.title}
            </h3>
            <p className="mt-3 max-w-[34ch] font-sans text-[0.9375rem] leading-relaxed text-secondary">
              {h.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default About;
