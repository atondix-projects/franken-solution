"use client";

import Link from "next/link";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html lang="de">
      <body
        style={{
          margin: 0,
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily:
            "'IBM Plex Sans', system-ui, -apple-system, 'Segoe UI', sans-serif",
          background: "#ffffff",
          color: "#050505",
          textAlign: "center",
          padding: "1.5rem",
        }}
      >
        <div style={{ maxWidth: "32rem", width: "100%" }}>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
              fontSize: "0.72rem",
              textTransform: "uppercase",
              letterSpacing: "0.24em",
              color: "#e30613",
              margin: 0,
            }}
          >
            Fehler · Technischer Vorfall
          </p>

          <h1
            style={{
              marginTop: "1.25rem",
              marginBottom: 0,
              fontSize: "clamp(1.75rem, 5vw, 2.75rem)",
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "#050505",
            }}
          >
            Kritischer Fehler
          </h1>

          <p
            style={{
              marginTop: "1rem",
              marginBottom: 0,
              fontWeight: 300,
              lineHeight: 1.6,
              color: "#2f2f2f",
            }}
          >
            Die Anwendung konnte nicht geladen werden. Bitte laden Sie die Seite
            neu.
          </p>

          {error.digest && (
            <p
              style={{
                marginTop: "1rem",
                marginBottom: 0,
                fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                fontSize: "0.72rem",
                color: "rgba(5,5,5,0.45)",
                letterSpacing: "0.08em",
              }}
              aria-label={`Fehlerreferenz: ${error.digest}`}
            >
              Referenz · {error.digest}
            </p>
          )}

          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              justifyContent: "center",
            }}
          >
            <button
              onClick={reset}
              style={{
                padding: "0.625rem 1.5rem",
                background: "#e30613",
                color: "#ffffff",
                border: "none",
                borderRadius: "0.375rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                cursor: "pointer",
                fontFamily:
                  "'IBM Plex Sans', system-ui, -apple-system, sans-serif",
              }}
            >
              Seite neu laden
            </button>
            <Link
              href="/"
              style={{
                padding: "0.625rem 1.5rem",
                background: "transparent",
                color: "#050505",
                border: "1px solid rgba(5,5,5,0.15)",
                borderRadius: "0.375rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                cursor: "pointer",
                fontFamily:
                  "'IBM Plex Sans', system-ui, -apple-system, sans-serif",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Zur Startseite
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
