import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Kicker, r as Paper, t as Frame } from "./frame-BYJ3j8wB.mjs";
import { a as shelves, r as payment } from "./corpus-BMCJ5ksa.mjs";
import { r as Route$5 } from "./router-Cir-IPzR.mjs";
import { n as letterFor, r as useDesk, t as instruments } from "./desk-padkObNJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/desk-COUYNkGg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DeskPage() {
	const search = Route$5.useSearch();
	const { draft, ready, patch, choose, toggleShelf } = useDesk();
	const [copied, setCopied] = (0, import_react.useState)("");
	const [copyError, setCopyError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!ready || !search.instrument) return;
		choose(search.instrument);
	}, [ready, search.instrument]);
	const letter = letterFor(draft);
	const payBlock = [
		`PayID ${payment.payid}`,
		payment.institution,
		`Account name ${payment.accountName}`,
		`BSB ${payment.bsb}`,
		`Account ${payment.account}`,
		`Description ${payment.description}`,
		`Reference ${draft.reference || "MC-pending"}`
	].join("\n");
	async function copy(kind, text) {
		setCopyError("");
		try {
			await navigator.clipboard.writeText(text);
			setCopied(kind);
		} catch {
			setCopied("");
			setCopyError("Clipboard was blocked. Select the letter and copy it yourself.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Request · stays in this browser" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl",
			children: "Write the licence letter"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-slate",
			children: "Nothing is sent to a server. Copy the letter, then pay from your own bank app if you and the author agree. The draft is saved only on this device."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
			className: "mt-6 grid gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
				className: "text-sm font-semibold",
				children: "Instrument"
			}), instruments.map((item) => {
				const on = draft.instrument === item.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": on,
					onClick: () => choose(item.id),
					className: on ? "min-h-11 border border-slate bg-slate px-3 py-2 text-left text-sm font-semibold text-paper" : "min-h-11 border border-ink/20 bg-paper px-3 py-2 text-left text-sm font-semibold text-ink",
					children: [item.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: on ? "mt-0.5 block font-normal text-paper/80" : "mt-0.5 block font-normal text-slate",
						children: item.amountLabel
					})]
				}, item.id);
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
			className: "mt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
				className: "text-sm font-semibold",
				children: "Shelves to name"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 grid gap-2",
				children: shelves.map((shelf) => {
					const on = draft.shelves.includes(shelf.slug);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex min-h-11 items-center gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							className: "size-5 accent-slate",
							checked: on,
							onChange: () => toggleShelf(shelf.slug)
						}), shelf.title]
					}, shelf.slug);
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Your name",
					value: draft.name,
					onChange: (name) => patch({ name })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Organisation, if any",
					value: draft.organisation,
					onChange: (organisation) => patch({ organisation })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email",
					value: draft.email,
					onChange: (email) => patch({ email }),
					type: "email"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-1 text-sm font-semibold",
					children: ["Purpose", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						className: "min-h-28 border border-ink/20 bg-paper px-3 py-2 text-base font-normal text-ink",
						value: draft.purpose,
						onChange: (event) => patch({ purpose: event.target.value }),
						placeholder: "Teaching, a case reading, a thesis, personal reading, or support."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Amount in Australian dollars",
					value: draft.amount,
					onChange: (amount) => patch({ amount: amount.replace(/[^\d.]/g, "") }),
					inputMode: "decimal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex min-h-11 items-center gap-3 text-sm font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						className: "size-5 accent-slate",
						checked: draft.waive,
						onChange: (event) => patch({ waive: event.target.checked })
					}), "Request a waived or reduced fee"]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex flex-wrap gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "inline-flex min-h-11 items-center bg-slate px-4 text-sm font-semibold text-paper",
				onClick: () => copy("letter", letter),
				children: copied === "letter" ? "Letter copied" : "Copy letter"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "inline-flex min-h-11 items-center border border-ink/20 px-4 text-sm font-semibold",
				onClick: () => copy("pay", payBlock),
				children: copied === "pay" ? "Payment copied" : "Copy payment details"
			})]
		}),
		copyError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-bronze",
			children: copyError
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-8 font-display text-2xl",
			children: "Letter"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "mt-3 overflow-x-auto border border-ink/15 bg-ivory p-4 font-sans text-sm whitespace-pre-wrap text-ink",
			children: letter
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Paper, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "Pay from your bank"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-slate",
					children: payment.source
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-3 grid gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							term: "PayID",
							detail: payment.payid
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							term: "Bank",
							detail: payment.institution
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							term: "Name",
							detail: payment.accountName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							term: "BSB",
							detail: payment.bsb
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							term: "Account",
							detail: payment.account
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							term: "Description",
							detail: payment.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							term: "Reference",
							detail: draft.reference || "MC-pending"
						})
					]
				})
			] })
		})
	] });
}
function Field({ label, value, onChange, type = "text", inputMode }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "grid gap-1 text-sm font-semibold",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: "min-h-11 border border-ink/20 bg-paper px-3 text-base font-normal text-ink",
			type,
			inputMode,
			value,
			onChange: (event) => onChange(event.target.value)
		})]
	});
}
function Row({ term, detail }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between gap-4 border-b border-ink/10 py-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-slate",
			children: term
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-right font-semibold tabular-nums text-ink",
			children: detail
		})]
	});
}
//#endregion
export { DeskPage as component };
