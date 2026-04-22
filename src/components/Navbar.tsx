"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "./BrandLogo";
import { Button } from "./ui/Button";

const SCROLL_COMPACT_OFFSET = 24;
const COMPACT_ENTRY_DELAY_MS = 110;
const COMPACT_CONTENT_STAGGER_MS = 80;
const FULL_BLEED_MAX_WIDTH = "100%";
const COMPACT_SHELL_MAX_WIDTH = "80rem";
const TOP_CONTENT_MAX_WIDTH = "96rem";

const navLinks = [
  { label: "Start", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Resourcen", href: "/resourcen" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShellCompact, setIsShellCompact] = useState(false);
  const [isContentCompact, setIsContentCompact] = useState(false);
  const pathname = usePathname();
  const compactTargetRef = useRef(false);
  const shellDelayRef = useRef<number | null>(null);
  const contentDelayRef = useRef<number | null>(null);

  const clearCompactTimers = () => {
    if (shellDelayRef.current !== null) {
      window.clearTimeout(shellDelayRef.current);
      shellDelayRef.current = null;
    }

    if (contentDelayRef.current !== null) {
      window.clearTimeout(contentDelayRef.current);
      contentDelayRef.current = null;
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    let animationFrame = 0;

    const applyCompactState = (nextIsCompact: boolean, immediate = false) => {
      if (!immediate && compactTargetRef.current === nextIsCompact) {
        return;
      }

      compactTargetRef.current = nextIsCompact;
      clearCompactTimers();

      if (immediate) {
        setIsShellCompact(nextIsCompact);
        setIsContentCompact(nextIsCompact);
        return;
      }

      if (nextIsCompact) {
        shellDelayRef.current = window.setTimeout(() => {
          setIsShellCompact(true);
          shellDelayRef.current = null;
        }, COMPACT_ENTRY_DELAY_MS);

        contentDelayRef.current = window.setTimeout(() => {
          setIsContentCompact(true);
          contentDelayRef.current = null;
        }, COMPACT_ENTRY_DELAY_MS + COMPACT_CONTENT_STAGGER_MS);

        return;
      }

      setIsContentCompact(false);
      setIsShellCompact(false);
    };

    const syncCompactState = (immediate = false) => {
      applyCompactState(window.scrollY > SCROLL_COMPACT_OFFSET, immediate);
    };

    const handleScroll = () => {
      if (animationFrame !== 0) {
        return;
      }

      animationFrame = window.requestAnimationFrame(() => {
        syncCompactState();
        animationFrame = 0;
      });
    };

    syncCompactState(true);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame);
      }

      clearCompactTimers();
    };
  }, []);

  function isActiveLink(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`w-full transition-[padding] duration-[580ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${isShellCompact
          ? "px-3 pt-3 sm:px-4 lg:px-6"
          : "px-0 pt-0"
          }`}
      >
        <div
          style={{
            maxWidth: isShellCompact
              ? COMPACT_SHELL_MAX_WIDTH
              : FULL_BLEED_MAX_WIDTH,
          }}
          className={`mx-auto w-full border transition-[max-width,border-radius,box-shadow,background-color,border-color,backdrop-filter] duration-[580ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${isShellCompact
            ? "rounded-[1.75rem] border-black/10 bg-white/72 shadow-[0_1px_3px_rgba(5,5,5,0.06),0_10px_28px_rgba(5,5,5,0.12),0_24px_48px_rgba(5,5,5,0.04)] backdrop-blur-xl"
            : "rounded-none border-x-0 border-t-0 border-b border-black/8 bg-white/20 shadow-none backdrop-blur-md"
            }`}
        >
          <div
            style={{
              maxWidth: isShellCompact
                ? FULL_BLEED_MAX_WIDTH
                : TOP_CONTENT_MAX_WIDTH,
            }}
            className="mx-auto w-full transition-[max-width] duration-[580ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          >
            <div
              className={`flex w-full items-center justify-between transition-[gap,padding] duration-[460ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${isContentCompact
                ? "gap-4 px-4 py-2 sm:px-5"
                : "gap-6 px-6 py-3"
                }`}
            >
              <Link
                href="/"
                aria-label="Franken Solution"
                onClick={() => setIsOpen(false)}
                className="group relative flex shrink-0 items-center transition-transform active:scale-95"
              >
                <BrandLogo
                  className={`w-auto transition-[height] duration-[460ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${isContentCompact
                    ? "h-10 sm:h-12 md:h-14"
                    : "h-12 sm:h-16 md:h-18"
                    }`}
                />
              </Link>

              <nav
                className={`hidden items-center transition-[gap] duration-[460ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:flex ${isContentCompact
                  ? "gap-6"
                  : "gap-8"
                  }`}
                aria-label="Primary navigation"
              >
                {navLinks.map((link) => {
                  const isActive = isActiveLink(link.href);
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`group relative flex items-center font-medium uppercase transition-[font-size,letter-spacing,padding,color] duration-[460ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${isContentCompact
                        ? "py-1.5 text-xs tracking-[0.18em]"
                        : "py-2 text-sm tracking-[0.14em]"
                        } ${isActive
                          ? "text-accent bg-accent/[0.07] rounded-full px-2.5"
                          : "text-foreground hover:text-accent"
                        }`}
                    >
                      <span className="relative z-10">{link.label}</span>
                      <span
                        className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-accent transition-all duration-300 ease-out ${isActive
                          ? "w-0 opacity-0"
                          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                          }`}
                      />
                    </Link>
                  );
                })}
              </nav>

              <div
                className={`hidden shrink-0 origin-right transition-transform duration-[460ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:flex ${isContentCompact
                  ? "scale-[0.9]"
                  : "scale-100"
                  }`}
              >
                <Button
                  renderAs="link"
                  href="/kontakt"
                  variant="primary"
                  onClick={() => setIsOpen(false)}
                  className="transition-[box-shadow] duration-[460ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
                >
                  Kontakt aufnehmen
                </Button>
              </div>

              <div className="flex shrink-0 justify-end lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`relative z-50 flex flex-col items-center justify-center rounded-full border border-black/8 bg-white/85 transition-[width,height,transform,background-color] duration-[460ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-black/5 motion-reduce:transition-none ${isContentCompact
                    ? "h-10 w-10 scale-95 gap-1.25"
                    : "h-11 w-11 scale-100 gap-1.5"
                    }`}
                  aria-expanded={isOpen}
                  aria-controls="mobile-nav"
                  aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
                >
                  <span
                    className={`h-[2px] rounded-full bg-foreground transition-all duration-300 ease-in-out ${isContentCompact ? "w-5" : "w-6"
                      } ${isOpen ? "translate-y-[8px] rotate-45" : ""
                      }`}
                  />
                  <span
                    className={`h-[2px] rounded-full bg-foreground transition-all duration-300 ease-in-out ${isContentCompact ? "w-5" : "w-6"
                      } ${isOpen ? "opacity-0" : "opacity-100"
                      }`}
                  />
                  <span
                    className={`h-[2px] rounded-full bg-foreground transition-all duration-300 ease-in-out ${isContentCompact ? "w-5" : "w-6"
                      } ${isOpen ? "-translate-y-[8px] -rotate-45" : ""
                      }`}
                  />
                </button>

                <div
                  id="mobile-nav"
                  className={`fixed inset-0 z-40 h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f7f5f2_100%)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${isOpen
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
                            onClick={() => setIsOpen(false)}
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
                        onClick={() => setIsOpen(false)}
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
          </div>
        </div>
      </div>
    </header>
  );
}
