import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Kicker, t as Frame } from "./frame-BYJ3j8wB.mjs";
import { i as repositories } from "./corpus-BMCJ5ksa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sources-BbkNuLDJ.js
var import_jsx_runtime = require_jsx_runtime();
function SourcesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "drbarrandodger · wezzo72" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl",
			children: "The repositories the count was taken from"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-slate",
			children: "File and PDF counts are the 4 October 2026 git-tree inventory. Empty repositories examined and left out of the total: wezzo72/New, drbarrandodger/Bazdod-, and drbarrandodger/HTML-."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid gap-3",
			children: repositories.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: row.href,
				rel: "noreferrer",
				target: "_blank",
				className: "block border border-ink/15 px-4 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-bronze uppercase",
						children: row.owner
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl text-ink",
						children: row.repo
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm tabular-nums text-slate",
						children: [
							row.files,
							" files · ",
							row.pdfs,
							" PDF instances"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-ink",
						children: row.note
					})
				]
			}, row.href))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 text-sm text-slate",
			children: "Dependency trees are excluded from archive totals and reported apart. A mirror is not a second archive of new documents."
		})
	] });
}
//#endregion
export { SourcesPage as component };
