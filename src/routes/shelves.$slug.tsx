import { createFileRoute, Link } from "@tanstack/react-router";
import { Frame, Kicker, Paper } from "@/components/frame";
import { getShelf } from "@/lib/corpus";

export const Route = createFileRoute("/shelves/$slug")({
  component: ShelfPage,
});

function ShelfPage() {
  const { slug } = Route.useParams();
  const shelf = getShelf(slug);

  if (!shelf) {
    return (
      <Frame>
        <h1 className="font-display text-3xl">This shelf is not on the desk</h1>
        <Link to="/shelves" className="mt-4 inline-flex min-h-11 items-center font-semibold underline">
          Back to the shelves
        </Link>
      </Frame>
    );
  }

  return (
    <Frame>
      <Kicker>{shelf.kicker}</Kicker>
      <h1 className="mt-2 font-display text-4xl">{shelf.title}</h1>
      <p className="mt-2 text-sm font-semibold tabular-nums text-slate">{shelf.count}</p>
      <p className="mt-4">{shelf.summary}</p>
      <Paper>
        <h2 className="font-display text-xl">Who it is for</h2>
        <p className="mt-2">{shelf.fit}</p>
      </Paper>
      <div className="mt-3">
        <Paper>
          <h2 className="font-display text-xl">Seal</h2>
          <p className="mt-2">{shelf.seal}</p>
        </Paper>
      </div>
      <h2 className="mt-8 font-display text-2xl">Editions on the public shelf</h2>
      <ul className="mt-3 grid gap-3">
        {shelf.editions.map((edition) => (
          <li key={edition.href} className="border border-ink/15 px-4 py-3">
            {edition.cover ? (
              <img
                src={edition.cover}
                alt={`${edition.title}, a still-life cover with no person in it`}
                className="mb-3 h-48 w-32 border border-ink/15 object-cover"
              />
            ) : null}
            {edition.cover ? (
              <p className="mb-2 text-xs text-slate">
                Still life for this edition. Not a picture of the file, and not a finding.
              </p>
            ) : null}
            <a
              href={edition.href}
              className="font-semibold text-ink underline decoration-line underline-offset-4"
              rel="noreferrer"
              target="_blank"
            >
              {edition.title}
            </a>
            <p className="mt-1 text-sm text-slate">{edition.note}</p>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={shelf.href}
          className="inline-flex min-h-11 items-center bg-slate px-4 text-sm font-semibold text-paper"
          rel="noreferrer"
          target="_blank"
        >
          {shelf.hrefLabel}
        </a>
        <Link
          to="/desk"
          search={{ instrument: shelf.slug === "dataset" ? "research" : "reading" }}
          className="inline-flex min-h-11 items-center border border-ink/20 px-4 text-sm font-semibold"
        >
          Licence this shelf
        </Link>
      </div>
    </Frame>
  );
}
