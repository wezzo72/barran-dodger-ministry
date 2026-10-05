import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/frame-BYJ3j8wB.js
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		to: "/",
		label: "Cover"
	},
	{
		to: "/ministry",
		label: "Ministry"
	},
	{
		to: "/shelves",
		label: "Shelves"
	},
	{
		to: "/dataset",
		label: "Dataset"
	},
	{
		to: "/licences",
		label: "Licences"
	},
	{
		to: "/sources",
		label: "Sources"
	},
	{
		to: "/desk",
		label: "Desk"
	}
];
function Frame({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "border-b border-ink/15",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-3xl items-start justify-between gap-4 px-4 pt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-widest text-bronze uppercase",
							children: "McLean Corpus"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl text-ink",
							children: "Licence desk"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-44 pt-1 text-right text-sm leading-snug text-slate",
							children: "Finding aid. Not a court. Not a verdict."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mt-4 h-1.5 max-w-3xl px-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-0.5 bg-ink" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-1 h-px bg-line" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mx-auto flex max-w-3xl flex-wrap gap-x-1 px-2 py-2",
						children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							className: "inline-flex min-h-11 items-center px-2 text-sm font-semibold text-slate",
							activeOptions: { exact: true },
							children: link.label
						}, link.to))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto w-full max-w-3xl px-4 pt-6 pb-12",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-ink/15",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-4 py-6 text-sm leading-relaxed text-slate",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Dr Richard William McLean · Barran Dodger. The public record stays free to read. A fee is for a licence letter, packaging, or sustenance. Money does not write the archive." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3",
							children: "The ministry is the author’s offering of the gospels and prophetic writing to the vulnerable. It is not a finding."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3",
							children: "A hash is not proof the words are true. This desk is not legal advice, not a medical opinion, and not a promise of compensation."
						})
					]
				})
			})
		]
	});
}
function Kicker({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-semibold tracking-widest text-bronze uppercase",
		children
	});
}
function Paper({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border border-ink/15 bg-ivory px-4 py-4",
		children
	});
}
//#endregion
export { Kicker as n, Paper as r, Frame as t };
