import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Kicker, r as Paper, t as Frame } from "./frame-BYJ3j8wB.mjs";
import { t as instruments } from "./desk-padkObNJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/licences-CD1R8wBs.js
var import_jsx_runtime = require_jsx_runtime();
function LicencesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Opening schedule" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl",
			children: "Licences, not a checkout"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4",
			children: "Figures are an opening schedule in Australian dollars. Change them in the letter before you send anything. Nothing on this desk charges a card. PayID and the bank line are the ones already printed on the public finding aid."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid gap-3",
			children: instruments.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Paper, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-widest text-bronze uppercase",
					children: item.amountLabel
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-2xl",
					children: item.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-slate",
					children: item.who
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2",
					children: item.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/desk",
					search: { instrument: item.id },
					className: "mt-3 inline-flex min-h-11 items-center text-sm font-semibold underline decoration-line underline-offset-4",
					children: "Write the request"
				})
			] }, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 text-sm text-slate",
			children: "Reading support and sustenance can be any sum. An advocacy group may ask for a waiver. A research body should expect to name its use: teaching, a brief, a thesis, or a case-reading room."
		})
	] });
}
//#endregion
export { LicencesPage as component };
