import { createFileRoute, Link } from "@tanstack/react-router";
import { Frame, Kicker, Paper } from "@/components/frame";
import { instruments } from "@/lib/desk";

export const Route = createFileRoute("/licences")({
  component: LicencesPage,
});

function LicencesPage() {
  return (
    <Frame>
      <Kicker>Opening schedule</Kicker>
      <h1 className="mt-2 font-display text-4xl">Licences, not a checkout</h1>
      <p className="mt-4">
        Figures are an opening schedule in Australian dollars. Change them in
        the letter before you send anything. Nothing on this desk charges a
        card. PayID and the bank line are the ones already printed on the
        public finding aid.
      </p>
      <div className="mt-6 grid gap-3">
        {instruments.map((item) => (
          <Paper key={item.id}>
            <p className="text-xs font-semibold tracking-widest text-bronze uppercase">
              {item.amountLabel}
            </p>
            <h2 className="mt-1 font-display text-2xl">{item.title}</h2>
            <p className="mt-1 text-sm text-slate">{item.who}</p>
            <p className="mt-2">{item.summary}</p>
            <Link
              to="/desk"
              search={{ instrument: item.id }}
              className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold underline decoration-line underline-offset-4"
            >
              Write the request
            </Link>
          </Paper>
        ))}
      </div>
      <p className="mt-6 text-sm text-slate">
        Reading support and sustenance can be any sum. An advocacy group may
        ask for a waiver. A research body should expect to name its use:
        teaching, a brief, a thesis, or a case-reading room.
      </p>
    </Frame>
  );
}
