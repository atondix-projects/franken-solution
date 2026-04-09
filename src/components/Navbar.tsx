import Link from "next/link";

const navLinks = [
  { label: "Start", href: "/", active: true },
  { label: "Leistungen", href: "/leistungen", active: false },
  { label: "Portfolio", href: "/portfolio", active: false },
  { label: "Resourcen", href: "/resourcen", active: false },
];

export function Navbar() {
  return (
    <header
      className="relative z-20 flex h-[100px] w-full items-center justify-between px-6 shadow-[0px_4px_11.8px_rgba(0,0,0,0.1)] backdrop-blur-[2px] md:px-16 xl:px-[100px]"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 90.87%, rgba(255, 255, 255, 0.08) 100%)",
      }}
    >
      <div className="w-[300px] shrink-0">
        <Link href="/">
          <img
            src="/logo.svg"
            alt="FrankenSolution"
            className="h-[90px] w-auto"
          />
        </Link>
      </div>

      <nav className="hidden items-center gap-10 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`text-[22.5px] leading-[1.2] text-foreground transition-colors hover:text-accent ${
              link.active ? "font-medium" : "font-light"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex w-[300px] shrink-0 justify-end">
        <Link
          href="/kontakt"
          className="rounded-md bg-accent px-4 py-2 text-[20px] font-medium tracking-[0.4px] text-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#c00510]"
        >
          Beratung anfragen
        </Link>
      </div>
    </header>
  );
}
