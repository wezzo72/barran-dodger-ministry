import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Kicker, r as Paper, t as Frame } from "./frame-BYJ3j8wB.mjs";
import { n as inventory } from "./corpus-BMCJ5ksa.mjs";
import { t as instruments } from "./desk-padkObNJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BikWs6D8.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Dr Richard William McLean · Barran Dodger" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl text-ink",
			children: "A licence desk for the sealed writing and the research dataset."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-2xl text-lg text-ink",
			children: "Gospel editions, prophetic scripture, and the witness record, counted from the public GitHub profiles drbarrandodger and wezzo72. Prepared so a disability group, a legal reader, or a research body can licence a structured corpus without pretending the count is a verdict."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-slate",
			children: "The shelves stay free. A payment keeps the archivist and pays for a letter. It does not hide the record, and it does not produce compensation by itself."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex flex-wrap gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/ministry",
					className: "inline-flex min-h-11 items-center bg-slate px-4 text-sm font-semibold text-paper",
					children: "Read the ministry"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shelves",
					className: "inline-flex min-h-11 items-center border border-ink/20 px-4 text-sm font-semibold text-ink",
					children: "Open the shelves"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/desk",
					search: { instrument: "research" },
					className: "inline-flex min-h-11 items-center border border-ink/20 px-4 text-sm font-semibold text-ink",
					children: "Prepare a licence letter"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
			className: "mt-8 grid grid-cols-2 gap-px border border-ink/15 bg-ink/15 sm:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					value: inventory.uniqueCompletePdfs,
					label: "Unique complete PDFs"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					value: inventory.gospelPath,
					label: "Gospel-path files"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					value: inventory.propheticPath,
					label: "Prophetic-path files"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					value: inventory.reposWithFiles,
					label: "Repositories counted"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 text-sm text-slate",
			children: [
				"Inventory ",
				inventory.date,
				". Categories overlap. A keyword in a path is not proof of what the file says."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8 border border-ink/15 bg-ivory px-4 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "The ministry" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-2xl",
					children: "Offered as a vessel for God’s glory"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2",
					children: "The gospels and prophetic writing are the centre of a spiritual ministry for the vulnerable, and for people who come as people harmed, including those who describe targeting or corruption. The author states those writings have been downloaded more than a million times. That figure is the author’s, not an audited count."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/ministry",
					className: "mt-3 inline-flex min-h-11 items-center text-sm font-semibold underline decoration-line underline-offset-4",
					children: "The ministry, in full"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-2xl",
			children: "Four ways to support the corpus"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid gap-3",
			children: instruments.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Paper, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-baseline justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-bronze",
						children: item.amountLabel
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-slate",
					children: item.who
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2",
					children: item.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/desk",
					search: { instrument: item.id },
					className: "mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-ink underline decoration-line underline-offset-4",
					children: "Prepare this letter"
				})
			] }, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-2xl",
			children: "What a supporter is not buying"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "mt-3 list-disc space-y-2 pl-5 text-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Not a court, and not a verdict." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Not a paywall. The GitHub shelves remain public." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Not a doctorate, and not a certificate that the dataset has been valued by anyone else." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Not compensation. The author is seeking safety, a response, and a livable income. This page can receive support. It cannot order a remedy." })
			]
		})
	] });
}
function Stat({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-paper px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs text-slate",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 font-display text-2xl tabular-nums text-ink",
			children: value
		})]
	});
}
//#endregion
export { Home as component };
