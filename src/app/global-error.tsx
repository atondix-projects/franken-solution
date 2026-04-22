"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="de">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          background: "#ffffff",
          color: "#050505",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <p
          style={{
            fontFamily: "monospace",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.24em",
            color: "#e30613",
          }}
        >
          Fehler
        </p>
        <h1
          style={{
            marginTop: "1rem",
            fontSize: "1.875rem",
            fontWeight: 600,
            letterSpacing: "-0.04em",
          }}
        >
          Kritischer Fehler
        </h1>
        <p
          style={{
            marginTop: "0.75rem",
            maxWidth: "28rem",
            fontWeight: 300,
            lineHeight: 1.6,
          }}
        >
          Die Anwendung konnte nicht geladen werden. Bitte laden Sie die Seite
          neu.
        </p>
        <button
          onClick={reset}
          style={{
            marginTop: "2rem",
            padding: "0.625rem 1.5rem",
            background: "#e30613",
            color: "#ffffff",
            border: "none",
            borderRadius: "9999px",
            fontSize: "0.875rem",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Seite neu laden
        </button>
      </body>
    </html>
  );
}
