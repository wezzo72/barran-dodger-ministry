import { createFileRoute, Link } from "@tanstack/react-router";
import { Frame, Kicker } from "@/components/frame";
import { shelves } from "@/lib/corpus";

export const Route = createFileRoute("/shelves/")({
  component: ShelvesPage,
});

function ShelvesPage() {
  return (
    <Frame>
      <Kicker>Public shelves</Kicker>
      <h1 className="mt-2 font-display text-4xl">What can be read, cited, and licensed</h1>
      <p className="mt-4 text-slate">
        Every shelf links to a file that is already public. A licence does not
        unlock them. It records permission to rely on the packaging.
      </p>
      <div className="mt-6 grid gap-3">
        {shelves.map((shelf) => (
          <Link
            key={shelf.slug}
            to="/shelves/$slug"
            params={{ slug: shelf.slug }}
            className="block border border-ink/15 bg-ivory px-4 py-4"
          >
            <p className="text-xs font-semibold tracking-widest text-bronze uppercase">
              {shelf.kicker}
            </p>
            <h2 className="mt-1 font-display text-2xl text-ink">{shelf.title}</h2>
            <p className="mt-1 text-sm font-semibold tabular-nums text-slate">{shelf.count}</p>
            <p className="mt-2 text-ink">{shelf.summary}</p>
          </Link>
        ))}
      </div>
    </Frame>
  );
}
