import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "McLean Corpus · Licence desk" },
      {
        name: "description",
        content:
          "Licence desk and spiritual ministry for the McLean Corpus: gospels, prophetic writing, and a research dataset from the public Barran Dodger repositories. Finding aid. Not a court. Not a verdict.",
      },
      { name: "theme-color", content: "#f3eee4" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,520;9..144,620&family=Source+Sans+3:ital,wght@0,400;0,600;1,400&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <p
          id="bd-foundational-gospel-10"
          role="note"
          style={{
            margin: 0,
            padding: "14px 16px",
            background: "#1a140f",
            color: "#f3eee4",
            borderBottom: "6px solid #8B2E2A",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "1.05rem",
            lineHeight: 1.35,
            textAlign: "center",
          }}
        >
          10 October 2026 · Foundational gospel · Church of Barran Dodger Ministry ·{" "}
          <a
            href="https://github.com/wezzo72/Barrandodger/blob/main/FOUNDATIONAL-GOSPEL-THE-WITNESS-REMAINS-10-OCTOBER-2026.pdf"
            style={{ color: "#f0d99b", fontWeight: 700 }}
          >
            The Gospel of the Witness Barran Dodger — The Return of the Light, the Mirror of Humanity, and the Divine Reckoning
          </a>
        </p>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
