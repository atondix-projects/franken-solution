"use client";

import Link from "next/link";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html
      lang="de"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`}
    >
      <body className="m-0 flex min-h-dvh flex-col items-center justify-center bg-background px-6 text-center font-sans text-base text-foreground">
        <div className="w-full max-w-lg">
          <p className="m-0 font-mono text-xs uppercase tracking-[0.24em] text-accent">
            Fehler · Technischer Vorfall
          </p>

          <h1 className="mt-5 mb-0 text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-4xl">
            Kritischer Fehler
          </h1>

          <p className="mt-4 mb-0 font-light leading-relaxed text-foreground-muted">
            Die Anwendung konnte nicht geladen werden. Bitte laden Sie die Seite
            neu.
          </p>

          {error.digest && (
            <p
              className="mt-4 mb-0 font-mono text-xs tracking-[0.08em] text-foreground/45"
              aria-label={`Fehlerreferenz: ${error.digest}`}
            >
              Referenz · {error.digest}
            </p>
          )}

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={reset}
              className="cursor-pointer rounded-md border-none bg-accent px-6 py-2.5 text-sm font-medium text-white"
            >
              Seite neu laden
            </button>
            <Link
              href="/"
              className="inline-flex cursor-pointer items-center justify-center rounded-md border border-foreground/15 bg-transparent px-6 py-2.5 text-sm font-medium text-foreground no-underline"
            >
              Zur Startseite
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
