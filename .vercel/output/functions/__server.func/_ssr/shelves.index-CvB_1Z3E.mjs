import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Kicker, t as Frame } from "./frame-BYJ3j8wB.mjs";
import { a as shelves } from "./corpus-BMCJ5ksa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shelves.index-CvB_1Z3E.js
var import_jsx_runtime = require_jsx_runtime();
function ShelvesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Public shelves" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl",
			children: "What can be read, cited, and licensed"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-slate",
			children: "Every shelf links to a file that is already public. A licence does not unlock them. It records permission to rely on the packaging."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid gap-3",
			children: shelves.map((shelf) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/shelves/$slug",
				params: { slug: shelf.slug },
				className: "block border border-ink/15 bg-ivory px-4 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-bronze uppercase",
						children: shelf.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl text-ink",
						children: shelf.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm font-semibold tabular-nums text-slate",
						children: shelf.count
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-ink",
						children: shelf.summary
					})
				]
			}, shelf.slug))
		})
	] });
}
//#endregion
export { ShelvesPage as component };
