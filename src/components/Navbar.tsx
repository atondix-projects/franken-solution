"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "./BrandLogo";
import { Button } from "./ui/Button";

const navLinks = [
  { label: "Start", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Resourcen", href: "/resourcen" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);

  // Close mobile menu when route changes (reset during render, not in an effect)
  if (prevPathnameRef.current !== pathname) {
    prevPathnameRef.current = pathname;
    if (isOpen) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function isActiveLink(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/8 bg-white/78 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-3">
        <Link
          href="/"
          aria-label="Franken Solution"
          className="group relative flex shrink-0 items-center transition-transform active:scale-95"
        >
          <BrandLogo className="h-12 w-auto sm:h-16 md:h-18" />
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`group relative flex items-center py-2 text-sm font-medium uppercase tracking-[0.14em] transition-colors ${isActive ? "text-accent" : "text-foreground hover:text-accent"
                  }`}
              >
                <span className="relative z-10">{link.label}</span>
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-accent transition-all duration-300 ease-out ${isActive
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 lg:flex">
          <Button renderAs="link" href="/kontakt" variant="primary">
            Kontaktiere uns
          </Button>
        </div>

        <div className="flex shrink-0 justify-end lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-black/8 bg-white/85 transition-colors hover:bg-black/5"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Menue schliessen" : "Menue oeffnen"}
          >
            <span
              className={`h-[2px] w-6 rounded-full bg-foreground transition-all duration-300 ease-in-out ${isOpen ? "translate-y-[8px] rotate-45" : ""
                }`}
            />
            <span
              className={`h-[2px] w-6 rounded-full bg-foreground transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"
                }`}
            />
            <span
              className={`h-[2px] w-6 rounded-full bg-foreground transition-all duration-300 ease-in-out ${isOpen ? "-translate-y-[8px] -rotate-45" : ""
                }`}
            />
          </button>

          <div
            id="mobile-nav"
            className={`fixed inset-0 z-40 bg-[linear-gradient(180deg,#ffffff_0%,#f7f5f2_100%)] h-screen transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${isOpen
              ? "visible translate-x-0 opacity-100"
              : "invisible translate-x-full opacity-0"
              }`}
          >
            <div className="flex h-full flex-col p-8 pt-32">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => {
                  const isActive = isActiveLink(link.href);
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`text-3xl font-semibold tracking-[-0.04em] text-foreground transition-all duration-500 hover:text-accent ${isOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-12 opacity-0"
                        }`}
                      style={{ transitionDelay: `${i * 75}ms` }}
                    >
                      <span className="relative inline-block">
                        {link.label}
                        {isActive && (
                          <span className="absolute -right-6 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent" />
                        )}
                      </span>
                    </Link>
                  );
                })}
              </nav>

              <div
                className={`mt-12 transition-all duration-500 delay-300 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
              >
                <Button
                  renderAs="link"
                  href="/kontakt"
                  variant="primary"
                  className="w-full"
                >
                  Beratung vereinbaren
                </Button>
              </div>

              <div
                className={`mt-auto border-t border-black/8 pt-8 transition-all duration-500 delay-500 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-black/40">
                  Franken Solution &copy; 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
