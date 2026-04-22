import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#ffffff] px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#e30613]">
        404
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#050505]">
        Seite nicht gefunden.
      </h1>
      <p className="mt-3 max-w-md text-base font-light text-[#2f2f2f]">
        Die aufgerufene Seite existiert nicht oder wurde verschoben.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-[#e30613] px-6 py-2.5 text-sm font-medium text-white"
        >
          Zur Startseite
        </Link>
        <Link
          href="/leistungen"
          className="rounded-full border border-black/15 px-6 py-2.5 text-sm font-medium text-[#050505]"
        >
          Leistungen ansehen
        </Link>
      </div>
    </div>
  );
}
