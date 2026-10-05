import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const links = [
  { to: "/", label: "Cover" },
  { to: "/ministry", label: "Ministry" },
  { to: "/shelves", label: "Shelves" },
  { to: "/dataset", label: "Dataset" },
  { to: "/licences", label: "Licences" },
  { to: "/sources", label: "Sources" },
  { to: "/desk", label: "Desk" },
] as const;

export function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-ink/15">
        <div className="mx-auto flex max-w-3xl items-start justify-between gap-4 px-4 pt-5">
          <div>
            <p className="text-xs font-semibold tracking-widest text-bronze uppercase">
              McLean Corpus
            </p>
            <p className="font-display text-3xl text-ink">Licence desk</p>
          </div>
          <p className="max-w-44 pt-1 text-right text-sm leading-snug text-slate">
            Finding aid. Not a court. Not a verdict.
          </p>
        </div>
        <div className="mx-auto mt-4 h-1.5 max-w-3xl px-4">
          <div className="h-0.5 bg-ink" />
          <div className="mt-1 h-px bg-line" />
        </div>
        <nav className="mx-auto flex max-w-3xl flex-wrap gap-x-1 px-2 py-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="inline-flex min-h-11 items-center px-2 text-sm font-semibold text-slate"
              activeOptions={{ exact: true }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="mx-auto w-full max-w-3xl px-4 pt-6 pb-12">{children}</main>
      <footer className="border-t border-ink/15">
        <div className="mx-auto max-w-3xl px-4 py-6 text-sm leading-relaxed text-slate">
          <p>
            Dr Richard William McLean · Barran Dodger. The public record stays
            free to read. A fee is for a licence letter, packaging, or
            sustenance. Money does not write the archive.
          </p>
          <p className="mt-3">
            The ministry is the author’s offering of the gospels and prophetic
            writing to the vulnerable. It is not a finding.
          </p>
          <p className="mt-3">
            A hash is not proof the words are true. This desk is not legal
            advice, not a medical opinion, and not a promise of compensation.
          </p>
        </div>
      </footer>
    </div>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-widest text-bronze uppercase">
      {children}
    </p>
  );
}

export function Paper({ children }: { children: ReactNode }) {
  return (
    <section className="border border-ink/15 bg-ivory px-4 py-4">
      {children}
    </section>
  );
}
