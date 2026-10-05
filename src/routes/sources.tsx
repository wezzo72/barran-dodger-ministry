import { createFileRoute } from "@tanstack/react-router";
import { Frame, Kicker } from "@/components/frame";
import { repositories } from "@/lib/corpus";

export const Route = createFileRoute("/sources")({
  component: SourcesPage,
});

function SourcesPage() {
  return (
    <Frame>
      <Kicker>drbarrandodger · wezzo72</Kicker>
      <h1 className="mt-2 font-display text-4xl">The repositories the count was taken from</h1>
      <p className="mt-4 text-slate">
        File and PDF counts are the 4 October 2026 git-tree inventory. Empty
        repositories examined and left out of the total: wezzo72/New,
        drbarrandodger/Bazdod-, and drbarrandodger/HTML-.
      </p>
      <div className="mt-6 grid gap-3">
        {repositories.map((row) => (
          <a
            key={row.href}
            href={row.href}
            rel="noreferrer"
            target="_blank"
            className="block border border-ink/15 px-4 py-4"
          >
            <p className="text-xs font-semibold tracking-widest text-bronze uppercase">
              {row.owner}
            </p>
            <h2 className="font-display text-xl text-ink">{row.repo}</h2>
            <p className="mt-2 text-sm tabular-nums text-slate">
              {row.files} files · {row.pdfs} PDF instances
            </p>
            <p className="mt-2 text-ink">{row.note}</p>
          </a>
        ))}
      </div>
      <p className="mt-6 text-sm text-slate">
        Dependency trees are excluded from archive totals and reported apart.
        A mirror is not a second archive of new documents.
      </p>
    </Frame>
  );
}
