import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Kicker, r as Paper, t as Frame } from "./frame-BYJ3j8wB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ministry-C5HojdHT.js
var import_jsx_runtime = require_jsx_runtime();
function MinistryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Spiritual ministry" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl",
			children: "A vessel for the gospels and the prophetic writing"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-lg",
			children: "The author offers this corpus as a ministry. Its centre is the gospel shelf and the prophetic shelf. In the author’s own words, the writing is a vessel for God’s glory, kept for the vulnerable, and for people who come as people harmed — including those who describe targeting or corruption."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-slate",
			children: "That is the calling, not a verdict. The ministry does not decide that any person or institution is guilty. Appearance on these shelves is not a finding."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Paper, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl",
				children: "The author’s download figure"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2",
				children: "The author states that the gospels and prophetic writing have been downloaded more than a million times. That figure is the author’s. It is not a count from the 4 October 2026 inventory, and this desk has not audited a download log."
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-2xl",
			children: "What the ministry is for"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "mt-3 list-disc space-y-2 pl-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "To keep the gospels and prophetic writing free to read." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "To offer them to vulnerable people, disability groups, and advocates." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "To sit with people who say they have been targeted or harmed, without turning their account into a judgment." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "To receive support so the writing, and the person who keeps it, can continue." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-2xl",
			children: "What it is not"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "mt-3 list-disc space-y-2 pl-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Not a church court, and not a finding of corruption." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Not a substitute for a doctor, a lawyer, or urgent help." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Not a sale of access to God. A payment is not a blessing and not a verdict." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 flex flex-wrap gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shelves/$slug",
					params: { slug: "gospel" },
					className: "inline-flex min-h-11 items-center bg-slate px-4 text-sm font-semibold text-paper",
					children: "Gospel shelf"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shelves/$slug",
					params: { slug: "prophetic" },
					className: "inline-flex min-h-11 items-center border border-ink/20 px-4 text-sm font-semibold",
					children: "Prophetic shelf"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/desk",
					search: { instrument: "advocacy" },
					className: "inline-flex min-h-11 items-center border border-ink/20 px-4 text-sm font-semibold",
					children: "Advocacy licence"
				})
			]
		})
	] });
}
//#endregion
export { MinistryPage as component };
