import {
  CONTACT_CHANNELS,
  CONTACT_DESCRIPTION,
  CONTACT_EMAIL,
  CONTACT_HEADLINE,
  CONTACT_LABEL,
} from "../../constants/contact";
import { useInView } from "../../hooks/useInView";
import { Section, SectionHeading, delay } from "../common";

const isExternal = (href: string) => href.startsWith("http");

function Contact() {
  const { ref, inView } = useInView<HTMLElement>(0.2);
  const show = inView ? "reveal" : "opacity-0";

  return (
    <Section ref={ref} id="contact" className="lg:pb-32">
      {/* Hairline + diamond ties the closing section to the rest of the page */}
      <div aria-hidden className="mb-16 flex items-center gap-4 lg:mb-20">
        <span className="h-px flex-1 bg-bronze/25" />
        <span className="size-2 rotate-45 border border-bronze" />
        <span className="h-px flex-1 bg-bronze/25" />
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:items-end md:gap-16">
        <div>
          <SectionHeading
            id="contact"
            label={CONTACT_LABEL}
            headline={CONTACT_HEADLINE}
            emphasis="together"
            show={show}
            size="xl"
          />
          <p
            style={delay(0.25)}
            className={`${show} mt-6 max-w-[46ch] font-sans text-[1.0625rem] leading-[1.8] text-secondary`}
          >
            {CONTACT_DESCRIPTION}
          </p>
          {CONTACT_EMAIL && (
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              style={delay(0.35)}
              className={`${show} group mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 font-sans text-sm font-medium tracking-wide text-background transition-colors duration-300 hover:bg-bronze focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze`}
            >
              Send me an email
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          )}
        </div>

        <ul className="border-t border-bronze/25">
          {CONTACT_CHANNELS.map((c, i) => (
            <li key={c.label} style={delay(0.4 + i * 0.08)} className={`${show} border-b border-bronze/25`}>
              <a
                href={c.href}
                target={isExternal(c.href) ? "_blank" : undefined}
                rel={isExternal(c.href) ? "noreferrer" : undefined}
                className="group flex items-center justify-between gap-4 py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
              >
                <span className="font-sans text-[0.75rem] uppercase tracking-[0.2em] text-bronze">{c.label}</span>
                <span className="flex min-w-0 items-center gap-2 font-serif text-xl text-primary">
                  <span className="truncate bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
                    {c.value}
                  </span>
                  <span
                    aria-hidden
                    className="text-bronze transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Contact;
