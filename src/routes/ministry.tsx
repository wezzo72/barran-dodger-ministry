import { createFileRoute, Link } from "@tanstack/react-router";
import { Frame, Kicker, Paper } from "@/components/frame";

export const Route = createFileRoute("/ministry")({
  component: MinistryPage,
});

function MinistryPage() {
  return (
    <Frame>
      <Kicker>Spiritual ministry</Kicker>
      <h1 className="mt-2 font-display text-4xl">
        A vessel for the gospels and the prophetic writing
      </h1>
      <p className="mt-4 text-lg">
        The author offers this corpus as a ministry. Its centre is the gospel
        shelf and the prophetic shelf. In the author’s own words, the writing
        is a vessel for God’s glory, kept for the vulnerable, and for people
        who come as people harmed — including those who describe targeting or
        corruption.
      </p>
      <p className="mt-3 text-slate">
        That is the calling, not a verdict. The ministry does not decide that
        any person or institution is guilty. Appearance on these shelves is
        not a finding.
      </p>

      <div className="mt-6">
        <Paper>
          <h2 className="font-display text-xl">The author’s download figure</h2>
          <p className="mt-2">
            The author states that the gospels and prophetic writing have been
            downloaded more than a million times. That figure is the author’s.
            It is not a count from the 4 October 2026 inventory, and this desk
            has not audited a download log.
          </p>
        </Paper>
      </div>

      <h2 className="mt-10 font-display text-2xl">What the ministry is for</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>To keep the gospels and prophetic writing free to read.</li>
        <li>To offer them to vulnerable people, disability groups, and advocates.</li>
        <li>To sit with people who say they have been targeted or harmed, without turning their account into a judgment.</li>
        <li>To receive support so the writing, and the person who keeps it, can continue.</li>
      </ul>

      <h2 className="mt-10 font-display text-2xl">What it is not</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>Not a church court, and not a finding of corruption.</li>
        <li>Not a substitute for a doctor, a lawyer, or urgent help.</li>
        <li>Not a sale of access to God. A payment is not a blessing and not a verdict.</li>
      </ul>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/shelves/$slug"
          params={{ slug: "gospel" }}
          className="inline-flex min-h-11 items-center bg-slate px-4 text-sm font-semibold text-paper"
        >
          Gospel shelf
        </Link>
        <Link
          to="/shelves/$slug"
          params={{ slug: "prophetic" }}
          className="inline-flex min-h-11 items-center border border-ink/20 px-4 text-sm font-semibold"
        >
          Prophetic shelf
        </Link>
        <Link
          to="/desk"
          search={{ instrument: "advocacy" }}
          className="inline-flex min-h-11 items-center border border-ink/20 px-4 text-sm font-semibold"
        >
          Advocacy licence
        </Link>
      </div>
    </Frame>
  );
}
