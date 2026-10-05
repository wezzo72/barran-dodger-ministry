import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Frame, Kicker, Paper } from "@/components/frame";
import { payment, shelves } from "@/lib/corpus";
import {
  instruments,
  letterFor,
  useDesk,
  type InstrumentId,
} from "@/lib/desk";

type DeskSearch = { instrument?: InstrumentId };

export const Route = createFileRoute("/desk")({
  validateSearch: (search: Record<string, unknown>): DeskSearch => {
    const value = search.instrument;
    if (
      value === "reading" ||
      value === "advocacy" ||
      value === "research" ||
      value === "sustenance"
    ) {
      return { instrument: value };
    }
    return {};
  },
  component: DeskPage,
});

function DeskPage() {
  const search = Route.useSearch();
  const { draft, ready, patch, choose, toggleShelf } = useDesk();
  const [copied, setCopied] = useState<"letter" | "pay" | "">("");
  const [copyError, setCopyError] = useState("");

  useEffect(() => {
    if (!ready || !search.instrument) return;
    choose(search.instrument);
    // Apply the link's instrument once the saved draft has loaded.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, search.instrument]);

  const letter = letterFor(draft);
  const payBlock = [
    `PayID ${payment.payid}`,
    payment.institution,
    `Account name ${payment.accountName}`,
    `BSB ${payment.bsb}`,
    `Account ${payment.account}`,
    `Description ${payment.description}`,
    `Reference ${draft.reference || "MC-pending"}`,
  ].join("\n");

  async function copy(kind: "letter" | "pay", text: string) {
    setCopyError("");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(kind);
    } catch {
      setCopied("");
      setCopyError("Clipboard was blocked. Select the letter and copy it yourself.");
    }
  }

  return (
    <Frame>
      <Kicker>Request · stays in this browser</Kicker>
      <h1 className="mt-2 font-display text-4xl">Write the licence letter</h1>
      <p className="mt-4 text-slate">
        Nothing is sent to a server. Copy the letter, then pay from your own
        bank app if you and the author agree. The draft is saved only on this
        device.
      </p>

      <fieldset className="mt-6 grid gap-2">
        <legend className="text-sm font-semibold">Instrument</legend>
        {instruments.map((item) => {
          const on = draft.instrument === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={on}
              onClick={() => choose(item.id)}
              className={
                on
                  ? "min-h-11 border border-slate bg-slate px-3 py-2 text-left text-sm font-semibold text-paper"
                  : "min-h-11 border border-ink/20 bg-paper px-3 py-2 text-left text-sm font-semibold text-ink"
              }
            >
              {item.title}
              <span className={on ? "mt-0.5 block font-normal text-paper/80" : "mt-0.5 block font-normal text-slate"}>
                {item.amountLabel}
              </span>
            </button>
          );
        })}
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold">Shelves to name</legend>
        <div className="mt-2 grid gap-2">
          {shelves.map((shelf) => {
            const on = draft.shelves.includes(shelf.slug);
            return (
              <label key={shelf.slug} className="flex min-h-11 items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  className="size-5 accent-slate"
                  checked={on}
                  onChange={() => toggleShelf(shelf.slug)}
                />
                {shelf.title}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-4">
        <Field label="Your name" value={draft.name} onChange={(name) => patch({ name })} />
        <Field
          label="Organisation, if any"
          value={draft.organisation}
          onChange={(organisation) => patch({ organisation })}
        />
        <Field
          label="Email"
          value={draft.email}
          onChange={(email) => patch({ email })}
          type="email"
        />
        <label className="grid gap-1 text-sm font-semibold">
          Purpose
          <textarea
            className="min-h-28 border border-ink/20 bg-paper px-3 py-2 text-base font-normal text-ink"
            value={draft.purpose}
            onChange={(event) => patch({ purpose: event.target.value })}
            placeholder="Teaching, a case reading, a thesis, personal reading, or support."
          />
        </label>
        <Field
          label="Amount in Australian dollars"
          value={draft.amount}
          onChange={(amount) => patch({ amount: amount.replace(/[^\d.]/g, "") })}
          inputMode="decimal"
        />
        <label className="flex min-h-11 items-center gap-3 text-sm font-semibold">
          <input
            type="checkbox"
            className="size-5 accent-slate"
            checked={draft.waive}
            onChange={(event) => patch({ waive: event.target.checked })}
          />
          Request a waived or reduced fee
        </label>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          className="inline-flex min-h-11 items-center bg-slate px-4 text-sm font-semibold text-paper"
          onClick={() => copy("letter", letter)}
        >
          {copied === "letter" ? "Letter copied" : "Copy letter"}
        </button>
        <button
          type="button"
          className="inline-flex min-h-11 items-center border border-ink/20 px-4 text-sm font-semibold"
          onClick={() => copy("pay", payBlock)}
        >
          {copied === "pay" ? "Payment copied" : "Copy payment details"}
        </button>
      </div>
      {copyError ? <p className="mt-2 text-sm text-bronze">{copyError}</p> : null}

      <h2 className="mt-8 font-display text-2xl">Letter</h2>
      <pre className="mt-3 overflow-x-auto border border-ink/15 bg-ivory p-4 font-sans text-sm whitespace-pre-wrap text-ink">
        {letter}
      </pre>

      <div className="mt-4">
        <Paper>
          <h2 className="font-display text-xl">Pay from your bank</h2>
          <p className="mt-2 text-sm text-slate">{payment.source}</p>
          <dl className="mt-3 grid gap-2 text-sm">
            <Row term="PayID" detail={payment.payid} />
            <Row term="Bank" detail={payment.institution} />
            <Row term="Name" detail={payment.accountName} />
            <Row term="BSB" detail={payment.bsb} />
            <Row term="Account" detail={payment.account} />
            <Row term="Description" detail={payment.description} />
            <Row term="Reference" detail={draft.reference || "MC-pending"} />
          </dl>
        </Paper>
      </div>
    </Frame>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  inputMode,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  inputMode?: "decimal" | "text" | "email";
}) {
  return (
    <label className="grid gap-1 text-sm font-semibold">
      {label}
      <input
        className="min-h-11 border border-ink/20 bg-paper px-3 text-base font-normal text-ink"
        type={type}
        inputMode={inputMode}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function Row({ term, detail }: { term: string; detail: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-ink/10 py-1">
      <dt className="text-slate">{term}</dt>
      <dd className="text-right font-semibold tabular-nums text-ink">{detail}</dd>
    </div>
  );
}
