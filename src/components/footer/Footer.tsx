import { CONTACT_CHANNELS, FOOTER_LINKS, FOOTER_TAGLINE } from "../../constants/contact";
import { HERO_NAME } from "../../constants/hero";
import { toSectionId } from "../../constants/navigation";
import { CONTAINER } from "../common";

function Footer() {
  const year = new Date().getFullYear();
  const socials = CONTACT_CHANNELS.filter((c) => c.label !== "Location");

  return (
    <footer className="bg-primary text-background">
      <div className={`${CONTAINER} py-14 sm:py-16`}>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#home" className="font-serif text-4xl font-semibold leading-none tracking-tight transition-opacity hover:opacity-80">
              Saras
            </a>
            <p className="mt-3 font-sans text-xs uppercase tracking-[0.2em] text-bronze">{FOOTER_TAGLINE}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
              {FOOTER_LINKS.map((l) => (
                <li key={l}>
                  <a
                    href={`#${toSectionId(l)}`}
                    className="font-sans text-sm text-background/75 transition-colors hover:text-bronze"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-background/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs tracking-[0.1em] text-background/65">
            © {year} {HERO_NAME}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                className="font-sans text-xs uppercase tracking-[0.2em] text-background/70 transition-colors hover:text-bronze"
              >
                {s.label}
              </a>
            ))}
            <a href="#home" className="font-sans text-xs uppercase tracking-[0.2em] text-bronze hover:text-background">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
