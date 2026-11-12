import Link from "next/link";
import {
  getPages,
  getSiteSetting,
  getStrapiHealth,
  getStrapiPublicUrl,
} from "@/lib/strapi";

export async function CmsStatusPanel() {
  const [health, siteSettingResult, pagesResult] = await Promise.all([
    getStrapiHealth(),
    getSiteSetting(),
    getPages(),
  ]);

  const strapiUrl = getStrapiPublicUrl();
  const siteSetting = siteSettingResult.data;
  const pages = pagesResult.data;
  const isHealthy = health.ok && health.database.connected;

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              {siteSetting?.tagline || "Next.js + Strapi v5 + PostgreSQL"}
            </p>
            <h1
              className="text-zinc-900 dark:text-zinc-50"
              style={{
                fontFamily: "Urbanist",
                fontWeight: 800,
                fontStyle: "ExtraBold",
                fontSize: "88px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                width: "1080.2576904296875px",
                height: "106px",
                top: "359px",
                left: "417.37px",
                opacity: 1,
                background: "#FFFFFF",
              }}
            >
              {siteSetting?.heroTitle ||
                siteSetting?.siteName ||
                "Walstar Technologies"}
            </h1>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {siteSetting?.heroSubtitle ||
                "Starter platform wired to Strapi v5 CMS backed by PostgreSQL. Update content from the Strapi Admin panel to see live updates here."}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`${strapiUrl}/admin`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              Open Strapi Admin
            </a>
            <a
              href={`${strapiUrl}/api/health`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
            >
              Inspect /api/health
            </a>
          </div>
        </div>

        {siteSetting?.contactEmail ? (
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
            Contact:{" "}
            <a
              href={`mailto:${siteSetting.contactEmail}`}
              className="font-medium text-zinc-800 underline underline-offset-4 dark:text-zinc-200"
            >
              {siteSetting.contactEmail}
            </a>
          </p>
        ) : null}
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Strapi Backend
          </p>
          <div className="mt-2 flex items-center gap-2">
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                health.ok ? "bg-emerald-500" : "bg-amber-500"
              }`}
            />
            <span className="text-lg font-semibold capitalize text-zinc-900 dark:text-zinc-100">
              {health.status}
            </span>
          </div>
          <p className="mt-1 truncate text-xs text-zinc-500">{strapiUrl}</p>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Database Engine
          </p>
          <div className="mt-2 flex items-center gap-2">
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                health.database.connected ? "bg-emerald-500" : "bg-rose-500"
              }`}
            />
            <span className="text-lg font-semibold uppercase text-zinc-900 dark:text-zinc-100">
              {health.database.client || "postgres"}
            </span>
          </div>
          <p className="mt-1 text-xs text-zinc-500">
            {health.database.connected ? "PostgreSQL connected" : "Waiting for database"}
          </p>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Published CMS Pages
          </p>
          <p className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {pages.length}
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            Fetched from <code className="font-mono">/api/pages</code>
          </p>
        </div>
      </section>

      {!isHealthy ? (
        <section className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-950 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-200">
          <h2 className="font-semibold">Start the backend stack to connect live data</h2>
          <p className="mt-1 text-amber-800 dark:text-amber-300">
            {health.database.error ||
              "Strapi API is not reachable yet. Start PostgreSQL and Strapi in separate terminals:"}
          </p>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-zinc-900 p-4 font-mono text-xs text-zinc-100">
            {`# 1. Start PostgreSQL 16 (port 5433)\nnpm run db:up\n\n# 2. Start Strapi CMS (port 1337)\nnpm run backend:dev`}
          </pre>
        </section>
      ) : null}

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            CMS Pages
          </h2>
          <span className="text-xs text-zinc-500">
            Managed in Strapi &rarr; Content Manager &rarr; Page
          </span>
        </div>

        {pages.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {pages.map((page) => {
              const targetHref =
                page.isHomepage || page.slug === 'home'
                  ? '/'
                  : `/${encodeURIComponent(page.slug)}`;
              return (
                <Link
                  key={page.documentId}
                  href={targetHref}
                  className="group rounded-xl border border-zinc-200 bg-white p-5 transition hover:border-indigo-400 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-indigo-500"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-zinc-900 group-hover:text-indigo-600 dark:text-zinc-100 dark:group-hover:text-indigo-400">
                      {page.title}
                    </h3>
                    <span className="rounded bg-zinc-100 px-2 py-0.5 font-mono text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
                      {targetHref}
                    </span>
                  </div>
                  {page.summary ? (
                    <p className="mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {page.summary}
                    </p>
                  ) : null}
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-zinc-300 bg-white p-6 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
            {pagesResult.error
              ? "Pages will appear here once Strapi is running and public permissions are active."
              : "No published pages found yet. Create and publish a Page entry in Strapi Admin."}
          </div>
        )}
      </section>
    </div>
  );
}
