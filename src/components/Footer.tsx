import Link from "next/link";
import { Button } from "./ui/Button";

const footerLinks = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Ressourcen", href: "/ressourcen" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.24em] text-black/45">
      <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-black/10 bg-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-48"
        style={{
          background:
            "linear-gradient(180deg, rgba(227, 6, 19, 0.12) 0%, rgba(255, 255, 255, 0) 100%)",
        }}
        aria-hidden="true"
      />

      <svg
        className="pointer-events-none absolute -right-24 top-10 hidden h-72 w-72 text-black/5 lg:block"
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="58" cy="68" r="10" fill="currentColor" />
        <circle cx="166" cy="118" r="8" fill="currentColor" />
        <circle cx="244" cy="64" r="7" fill="currentColor" />
        <circle cx="248" cy="204" r="9" fill="currentColor" />
        <circle cx="104" cy="236" r="7" fill="currentColor" />
        <path
          d="M58 68H208V64H244M166 118V204H248M166 118H58V236H104"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-8 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-black/45">
              Franken Solution
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#010202] sm:text-4xl">
              Sichere hybride IT, planbar betreut.
            </h2>
            <p className="mt-4 max-w-2xl text-base font-light leading-7 text-black/70 sm:text-lg">
              Franken Solution unterstuetzt Unternehmen mit klaren Standards,
              persoenlicher Betreuung und laufender IT-Sicherheit fuer hybride
              Umgebungen.
            </p>
          </div>

          <div className="shrink-0">
            <Button renderAs="link" href="/kontakt" variant="primary">
              Beratung anfragen
            </Button>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-6 text-sm text-black/55 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.22em]">
            &copy; {currentYear} Franken Solution
          </p>

          <nav
            className="flex flex-wrap gap-x-5 gap-y-2"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
