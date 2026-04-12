import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Start", href: "/", active: true },
  { label: "Leistungen", href: "/leistungen", active: false },
  { label: "Portfolio", href: "/portfolio", active: false },
  { label: "Resourcen", href: "/resourcen", active: false },
];

export function Navbar() {
  return (
    <header className="absolute z-20 flex h-25 w-full items-center justify-between px-25 gap-2.5 shadow-[0px_4px_11.8px_rgba(0,0,0,0.1)] backdrop-blur-[2px]">
      <div className="w-75 shrink-0">
        <Link href="/" className="relative h-22.5 w-auto">
          <Image
            fill
            src="/logo.svg"
            alt="FrankenSolution"
          />
        </Link>
      </div>

      <nav className="hidden items-center gap-10 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`text-[22.5px] leading-[1.2] text-foreground transition-colors hover:text-accent ${link.active ? "font-medium" : "font-light"
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
