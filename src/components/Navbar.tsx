"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Start", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Resourcen", href: "/resourcen" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Handle body scroll locking when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-linear-to-r from-transparent to-white/10 shadow-[0px_8px_32px_rgba(0,0,0,0.04)] backdrop-blur-xs transition-all duration-300">
      <div className="mx-auto flex w-full max-w-400 items-center justify-between px-6 py-2">
        <Link href="/" className="group relative flex shrink-0 items-center transition-transform active:scale-95">
          <Image
            src="/logo.svg"
            alt="FrankenSolution"
            width={192}
            height={90}
            priority
            className="h-12 w-auto sm:h-16 md:h-18"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className="group relative flex items-center py-2 text-[15px] font-medium tracking-tight text-foreground transition-colors hover:text-accent"
              >
                <span className="relative z-10">{link.label}</span>
                {/* Precision Indicator */}
                <span
                  className={`absolute -bottom-1 left-1/2 h-1 -translate-x-1/2 rounded-full bg-accent transition-all duration-300 ease-out ${isActive
                    ? "w-1.5 opacity-100"
                    : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100"
                    }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden shrink-0 md:flex">
          <Link
            href="/kontakt"
            className="rounded-full bg-foreground px-6 py-2.5 text-[14px] font-semibold tracking-wide text-white shadow-lg transition-all duration-300 hover:bg-accent hover:shadow-[0_8px_20px_rgba(227,6,19,0.2)] active:scale-95"
          >
            Beratung anfragen
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full bg-black/5 transition-colors hover:bg-black/10 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
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

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-40 bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${isOpen ? "opacity-100 visible h-screen" : "translate-x-full opacity-0 invisible"
            }`}
        >
          <div className="flex h-full flex-col p-8 pt-32">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-4xl font-bold tracking-tighter text-foreground transition-all duration-500 hover:text-accent ${isOpen ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
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
              <Link
                href="/kontakt"
                onClick={() => setIsOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-accent py-5 text-xl font-bold text-white shadow-xl transition-transform active:scale-95"
              >
                Beratung anfragen
              </Link>
            </div>

            <div
              className={`mt-auto border-t border-black/5 pt-8 transition-all duration-500 delay-500 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-black/40">
                FrankenSolution Systems &copy; 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
