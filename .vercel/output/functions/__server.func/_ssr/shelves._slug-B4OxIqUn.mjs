import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Kicker, r as Paper, t as Frame } from "./frame-BYJ3j8wB.mjs";
import { t as getShelf } from "./corpus-BMCJ5ksa.mjs";
import { n as Route } from "./router-Cir-IPzR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shelves._slug-B4OxIqUn.js
var import_jsx_runtime = require_jsx_runtime();
function ShelfPage() {
	const { slug } = Route.useParams();
	const shelf = getShelf(slug);
	if (!shelf) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "font-display text-3xl",
		children: "This shelf is not on the desk"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/shelves",
		className: "mt-4 inline-flex min-h-11 items-center font-semibold underline",
		children: "Back to the shelves"
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: shelf.kicker }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl",
			children: shelf.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm font-semibold tabular-nums text-slate",
			children: shelf.count
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4",
			children: shelf.summary
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Paper, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl",
			children: "Who it is for"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2",
			children: shelf.fit
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Paper, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl",
				children: "Seal"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2",
				children: shelf.seal
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-8 font-display text-2xl",
			children: "Editions on the public shelf"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 grid gap-3",
			children: shelf.editions.map((edition) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "border border-ink/15 px-4 py-3",
				children: [
					edition.cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: edition.cover,
						alt: `${edition.title}, a still-life cover with no person in it`,
						className: "mb-3 h-48 w-32 border border-ink/15 object-cover"
					}) : null,
					edition.cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-xs text-slate",
						children: "Still life for this edition. Not a picture of the file, and not a finding."
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: edition.href,
						className: "font-semibold text-ink underline decoration-line underline-offset-4",
						rel: "noreferrer",
						target: "_blank",
						children: edition.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-slate",
						children: edition.note
					})
				]
			}, edition.href))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex flex-wrap gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: shelf.href,
				className: "inline-flex min-h-11 items-center bg-slate px-4 text-sm font-semibold text-paper",
				rel: "noreferrer",
				target: "_blank",
				children: shelf.hrefLabel
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/desk",
				search: { instrument: shelf.slug === "dataset" ? "research" : "reading" },
				className: "inline-flex min-h-11 items-center border border-ink/20 px-4 text-sm font-semibold",
				children: "Licence this shelf"
			})]
		})
	] });
}
//#endregion
export { ShelfPage as component };
