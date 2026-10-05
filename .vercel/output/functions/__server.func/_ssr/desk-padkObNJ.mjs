import { i as __toESM } from "../_runtime.mjs";
import { q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as shelves, r as payment } from "./corpus-BMCJ5ksa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/desk-padkObNJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var instruments = [
	{
		id: "reading",
		title: "Reading support",
		who: "A person reading the gospel and prophetic writing",
		summary: "The shelves stay free. This is a voluntary support for a guided reading of the creative scripture, not a lock on the zip.",
		amount: "40",
		amountLabel: "A$40 opening figure"
	},
	{
		id: "advocacy",
		title: "Advocacy licence",
		who: "Disability groups, peer organisations, and advocates",
		summary: "A short licence letter to use the witness shelf in advocacy. The fee can be waived. The files remain public either way.",
		amount: "120",
		amountLabel: "A$120, waiver available"
	},
	{
		id: "research",
		title: "Research dataset licence",
		who: "Universities, legal aid, and human-rights bodies",
		summary: "A licence to cite and reuse the structured inventory — manifest, method, and shelf map — as a research instrument. Not a degree, and not a finding.",
		amount: "2400",
		amountLabel: "A$2,400 opening figure"
	},
	{
		id: "sustenance",
		title: "Sustenance",
		who: "Anyone who wants the archivist housed and answered",
		summary: "Money for keeping, preservation, and a livable situation. It does not buy a verdict, and it is not a condition of reading.",
		amount: "",
		amountLabel: "Any amount"
	}
];
var KEY = "mclean-corpus-desk-v1";
var emptyDraft = {
	instrument: "research",
	shelves: [
		"dataset",
		"witness",
		"gospel"
	],
	name: "",
	organisation: "",
	email: "",
	purpose: "",
	amount: "2400",
	waive: false,
	reference: ""
};
function makeReference() {
	const now = /* @__PURE__ */ new Date();
	return `MC-${[
		now.getFullYear(),
		String(now.getMonth() + 1).padStart(2, "0"),
		String(now.getDate()).padStart(2, "0")
	].join("")}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}
function isInstrument(value) {
	return value === "reading" || value === "advocacy" || value === "research" || value === "sustenance";
}
function useDesk() {
	const [draft, setDraft] = (0, import_react.useState)(emptyDraft);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let next = emptyDraft;
		try {
			const raw = localStorage.getItem(KEY);
			if (raw) {
				const parsed = JSON.parse(raw);
				next = {
					...emptyDraft,
					...parsed,
					instrument: isInstrument(parsed.instrument) ? parsed.instrument : emptyDraft.instrument,
					shelves: Array.isArray(parsed.shelves) ? parsed.shelves.filter((item) => typeof item === "string") : emptyDraft.shelves
				};
			}
		} catch {
			next = emptyDraft;
		}
		if (!next.reference) next = {
			...next,
			reference: makeReference()
		};
		setDraft(next);
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		localStorage.setItem(KEY, JSON.stringify(draft));
	}, [draft, ready]);
	function patch(partial) {
		setDraft((current) => ({
			...current,
			...partial
		}));
	}
	function choose(id) {
		const item = instruments.find((instrument) => instrument.id === id);
		setDraft((current) => ({
			...current,
			instrument: id,
			amount: item?.amount ?? "",
			waive: false
		}));
	}
	function toggleShelf(slug) {
		setDraft((current) => {
			const has = current.shelves.includes(slug);
			return {
				...current,
				shelves: has ? current.shelves.filter((item) => item !== slug) : [...current.shelves, slug]
			};
		});
	}
	return {
		draft,
		ready,
		patch,
		choose,
		toggleShelf
	};
}
function letterFor(draft) {
	const instrument = instruments.find((item) => item.id === draft.instrument) ?? instruments[2];
	const chosen = shelves.filter((shelf) => draft.shelves.includes(shelf.slug)).map((shelf) => shelf.title);
	const amount = draft.waive ? "Waiver requested" : draft.amount.trim() ? `A$${draft.amount.trim()}` : "To be agreed";
	return [
		"McLean Corpus — licence request",
		`Reference: ${draft.reference || "MC-pending"}`,
		"",
		`Instrument: ${instrument.title}`,
		`Shelves: ${chosen.length ? chosen.join("; ") : "None named"}`,
		`Amount: ${amount}`,
		"",
		`From: ${draft.name.trim() || "—"}`,
		`Organisation: ${draft.organisation.trim() || "—"}`,
		`Email: ${draft.email.trim() || "—"}`,
		"",
		"Purpose:",
		draft.purpose.trim() || "—",
		"",
		"I understand the public repositories stay free to read.",
		"I understand a hash, a stamp, and this letter are not a finding that the words are true.",
		"I understand this request is not legal advice, not a medical opinion, and not a remedy already granted.",
		"The author offers the gospels and prophetic writing as a spiritual ministry for the vulnerable. This letter does not turn that offering into a finding.",
		"Any payment is for packaging, preservation, or sustenance. It is not a verdict and it does not by itself produce compensation.",
		"",
		"Payment, repeated from the public finding aid, not a new account:",
		`PayID ${payment.payid}`,
		payment.institution,
		`Account name ${payment.accountName}`,
		`BSB ${payment.bsb}`,
		`Account ${payment.account}`,
		`Description ${payment.description}`,
		`Reference ${draft.reference || "MC-pending"}`
	].join("\n");
}
//#endregion
export { letterFor as n, useDesk as r, instruments as t };
