import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Kicker, r as Paper, t as Frame } from "./frame-BYJ3j8wB.mjs";
import { n as inventory } from "./corpus-BMCJ5ksa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dataset-CUaPhhoo.js
var import_jsx_runtime = require_jsx_runtime();
var rows = [
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
	["Official-drive PDFs in wezzo72/Barrandodger", inventory.officialDrive]
];
function DatasetPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Kicker, { children: ["Research instrument · ", inventory.method] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl",
			children: "A dataset that can be offered, not a value already proved"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4",
			children: [
				"Counted on ",
				inventory.date,
				" from the git trees of drbarrandodger and wezzo72. The same method a research reader expects: a date, an exclusion, a deduplicated total, and a note on figures that were not reproduced."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-slate",
			children: "It is suitable to place before disability organisations, legal aid, and human-rights scholarship as primary-source material. Those readers still have to assess it. This page does not confer a doctorate, an institutional valuation, or international certification."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 border border-ink/15",
			children: rows.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline justify-between gap-4 border-b border-ink/10 px-3 py-3 last:border-b-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-ink",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl tabular-nums",
					children: value
				})]
			}, label))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-slate",
			children: "Path categories overlap. Do not add them. Filename years run from 1981 to 2026 where a year is written in the path. That is not the span of the life record."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-2xl",
			children: "What a research licence covers"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Paper, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl",
				children: "Included"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-2 list-disc space-y-1 pl-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The manifest, the changelog, and the shelf map." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A letter naming the licensee, the shelves, and the permitted use." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Citation to the public git trees, so a reader can check the count." })
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Paper, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl",
				children: "Not included"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-2 list-disc space-y-1 pl-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A claim that every historical number on the old pages was reproduced. Several were not. The changelog says which." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A blockchain count beyond the three OpenTimestamps files the inventory found." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Legal advice, a medical finding, or a remedy." })
				]
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-2xl",
			children: "Why the thirty-five years are named"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3",
			children: "The author’s public brief is titled as a cumulative thirty-five-year record of exile, institutional detriment, and the search for protection. The desk keeps that as the author’s statement. It is the reason the corpus is offered to disability and human-rights readers. It is not, on this page, a fact already found by a court."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/desk",
			search: { instrument: "research" },
			className: "mt-6 inline-flex min-h-11 items-center bg-slate px-4 text-sm font-semibold text-paper",
			children: "Request the research licence"
		})
	] });
}
//#endregion
export { DatasetPage as component };
