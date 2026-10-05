import { createFileRoute, Link } from "@tanstack/react-router";
import { Frame, Kicker, Paper } from "@/components/frame";
import { inventory } from "@/lib/corpus";

export const Route = createFileRoute("/dataset")({
  component: DatasetPage,
});

const rows = [
  ["Unique complete PDFs, identical bytes once", inventory.uniqueCompletePdfs],
  ["Unique PDF blobs, including stubs", inventory.uniquePdfBlobs],
  ["Gospel-path unique complete PDFs", inventory.gospelPath],
  ["Prophetic-path unique complete PDFs", inventory.propheticPath],
  ["Statement or testimony path", inventory.statementPath],
  ["Essay path", inventory.essayPath],
  ["Legal path", inventory.legalPath],
  ["Official or government path", inventory.officialPath],
  ["Correspondence path", inventory.correspondencePath],
  ["Repositories with files", inventory.reposWithFiles],
  ["OpenTimestamps files found", inventory.otsFiles],
  ["SHA-256 list lines, not recomputed", inventory.sha256Lines],
  ["Preservation-crawl pages", inventory.preservationPages],
  ["Official-drive PDFs in wezzo72/Barrandodger", inventory.officialDrive],
];

function DatasetPage() {
  return (
    <Frame>
      <Kicker>Research instrument · {inventory.method}</Kicker>
      <h1 className="mt-2 font-display text-4xl">A dataset that can be offered, not a value already proved</h1>
      <p className="mt-4">
        Counted on {inventory.date} from the git trees of drbarrandodger and
        wezzo72. The same method a research reader expects: a date, an
        exclusion, a deduplicated total, and a note on figures that were not
        reproduced.
      </p>
      <p className="mt-3 text-slate">
        It is suitable to place before disability organisations, legal aid,
        and human-rights scholarship as primary-source material. Those readers
        still have to assess it. This page does not confer a doctorate, an
        institutional valuation, or international certification.
      </p>

      <div className="mt-6 border border-ink/15">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="flex items-baseline justify-between gap-4 border-b border-ink/10 px-3 py-3 last:border-b-0"
          >
            <p className="text-sm text-ink">{label}</p>
            <p className="font-display text-xl tabular-nums">{value}</p>
          </div>
        ))}
      </div>
      <p className="mt-2 text-sm text-slate">
        Path categories overlap. Do not add them. Filename years run from 1981
        to 2026 where a year is written in the path. That is not the span of
        the life record.
      </p>

      <h2 className="mt-10 font-display text-2xl">What a research licence covers</h2>
      <div className="mt-4 grid gap-3">
        <Paper>
          <h3 className="font-display text-xl">Included</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>The manifest, the changelog, and the shelf map.</li>
            <li>A letter naming the licensee, the shelves, and the permitted use.</li>
            <li>Citation to the public git trees, so a reader can check the count.</li>
          </ul>
        </Paper>
        <Paper>
          <h3 className="font-display text-xl">Not included</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>A claim that every historical number on the old pages was reproduced. Several were not. The changelog says which.</li>
            <li>A blockchain count beyond the three OpenTimestamps files the inventory found.</li>
            <li>Legal advice, a medical finding, or a remedy.</li>
          </ul>
        </Paper>
      </div>

      <h2 className="mt-10 font-display text-2xl">Why the thirty-five years are named</h2>
      <p className="mt-3">
        The author’s public brief is titled as a cumulative thirty-five-year
        record of exile, institutional detriment, and the search for
        protection. The desk keeps that as the author’s statement. It is the
        reason the corpus is offered to disability and human-rights readers.
        It is not, on this page, a fact already found by a court.
      </p>
      <Link
        to="/desk"
        search={{ instrument: "research" }}
        className="mt-6 inline-flex min-h-11 items-center bg-slate px-4 text-sm font-semibold text-paper"
      >
        Request the research licence
      </Link>
    </Frame>
  );
}
