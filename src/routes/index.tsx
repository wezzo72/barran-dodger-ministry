import { createFileRoute, Link } from "@tanstack/react-router";
import { Frame, Kicker, Paper } from "@/components/frame";
import { inventory } from "@/lib/corpus";
import { instruments } from "@/lib/desk";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <Frame>
      <Kicker>Dr Richard William McLean · Barran Dodger</Kicker>
      <h1 className="mt-2 font-display text-4xl text-ink">
        A licence desk for the sealed writing and the research dataset.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-ink">
        Gospel editions, prophetic scripture, and the witness record, counted
        from the public GitHub profiles drbarrandodger and wezzo72. Prepared
        so a disability group, a legal reader, or a research body can licence
        a structured corpus without pretending the count is a verdict.
      </p>
      <p className="mt-3 text-slate">
        The shelves stay free. A payment keeps the archivist and pays for a
        letter. It does not hide the record, and it does not produce
        compensation by itself.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          to="/ministry"
          className="inline-flex min-h-11 items-center bg-slate px-4 text-sm font-semibold text-paper"
        >
          Read the ministry
        </Link>
        <Link
          to="/shelves"
          className="inline-flex min-h-11 items-center border border-ink/20 px-4 text-sm font-semibold text-ink"
        >
          Open the shelves
        </Link>
        <Link
          to="/desk"
          search={{ instrument: "research" }}
          className="inline-flex min-h-11 items-center border border-ink/20 px-4 text-sm font-semibold text-ink"
        >
          Prepare a licence letter
        </Link>
      </div>

      <dl className="mt-8 grid grid-cols-2 gap-px border border-ink/15 bg-ink/15 sm:grid-cols-4">
        <Stat value={inventory.uniqueCompletePdfs} label="Unique complete PDFs" />
        <Stat value={inventory.gospelPath} label="Gospel-path files" />
        <Stat value={inventory.propheticPath} label="Prophetic-path files" />
        <Stat value={inventory.reposWithFiles} label="Repositories counted" />
      </dl>
      <p className="mt-2 text-sm text-slate">
        Inventory {inventory.date}. Categories overlap. A keyword in a path is
        not proof of what the file says.
      </p>

      <section className="mt-8 border border-ink/15 bg-ivory px-4 py-4">
        <Kicker>The ministry</Kicker>
        <h2 className="mt-1 font-display text-2xl">
          Offered as a vessel for God’s glory
        </h2>
        <p className="mt-2">
          The gospels and prophetic writing are the centre of a spiritual
          ministry for the vulnerable, and for people who come as people
          harmed, including those who describe targeting or corruption. The
          author states those writings have been downloaded more than a million
          times. That figure is the author’s, not an audited count.
        </p>
        <Link
          to="/ministry"
          className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold underline decoration-line underline-offset-4"
        >
          The ministry, in full
        </Link>
      </section>

      <h2 className="mt-10 font-display text-2xl">Four ways to support the corpus</h2>
      <div className="mt-4 grid gap-3">
        {instruments.map((item) => (
          <Paper key={item.id}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl">{item.title}</h3>
              <p className="text-sm font-semibold text-bronze">{item.amountLabel}</p>
            </div>
            <p className="mt-2 text-sm text-slate">{item.who}</p>
            <p className="mt-2">{item.summary}</p>
            <Link
              to="/desk"
              search={{ instrument: item.id }}
              className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-ink underline decoration-line underline-offset-4"
            >
              Prepare this letter
            </Link>
          </Paper>
        ))}
      </div>

      <h2 className="mt-10 font-display text-2xl">What a supporter is not buying</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-ink">
        <li>Not a court, and not a verdict.</li>
        <li>Not a paywall. The GitHub shelves remain public.</li>
        <li>Not a doctorate, and not a certificate that the dataset has been valued by anyone else.</li>
        <li>Not compensation. The author is seeking safety, a response, and a livable income. This page can receive support. It cannot order a remedy.</li>
      </ul>
    </Frame>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-paper px-3 py-3">
      <dt className="text-xs text-slate">{label}</dt>
      <dd className="mt-1 font-display text-2xl tabular-nums text-ink">{value}</dd>
    </div>
  );
}
