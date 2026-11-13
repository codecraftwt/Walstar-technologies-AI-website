# Walstar Technologies

Full-stack web platform setup using **Next.js** (frontend), **Strapi v5** (headless CMS backend), and **PostgreSQL** (database), with page layouts fully controllable from the Strapi Admin **Page** collection using **Dynamic Zones**.

## Tech Stack

- **Frontend (`frontend/`)**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Backend (`backend/`)**: Strapi v5 (`5.61.1`), TypeScript, `pg` PostgreSQL driver
- **Database (`docker-compose.yml`)**: PostgreSQL 16 (`postgres:16-alpine`)

## Strapi Backend APIs & Content Architecture

- **Single Types:**
  - `GET /api/site-setting` — Topbar, brand wordmarks, header navigation, footer links, office details
- **Collection Types (`backend/`):**
  - `GET /api/navbars` & `GET /api/navbars/active` — Navbar builder (`logoImage`, logo sizing/text fallback, navigation `items` with optional `page` relation or custom `route`, repeatable dropdown `subItems` with descriptions/badges, and configurable CTA pill button)
  - `GET /api/pages` & `GET /api/pages/resolve/:slug` — Dynamic Zone Page Builder (`Homepage`, `About Us`, `Contact`, `Service 1`, `Welcome`, etc.) with optional per-page `navbar` override
  - `GET /api/services` & `/api/services/:documentId` — Capability cards (`AI Solutions & Business Automation`, etc.)
  - `GET /api/products` & `/api/products/:documentId` — Products (`NRI Circle`, `Talk2site`, `Panchayat Pro`, `Smart Aptitude`, `Multispecialty Hospital`, `Swift Reach`, `Chat Walstargroup`)
  - `GET /api/case-studies` & `/api/case-studies/:documentId` — Client case studies
  - `GET /api/testimonials` & `/api/testimonials/:documentId` — Client reviews
  - `POST /api/consultation-leads` — Stores consultation & contact form submissions in PostgreSQL
- **Custom Endpoints:**
  - `GET /api/landing` — Aggregated homepage (`isHomepage: true`) payload (`page`, `siteSetting`, `services`, `products`, `caseStudies`, `testimonials`, `pages`)
  - `GET /api/health` — Live PostgreSQL (`SELECT 1`) connectivity check

All public read permissions (plus `api::page.page.resolve` and `consultation-lead.create`) and starter content are seeded automatically on Strapi bootstrap via `backend/src/index.ts`.

## Frontend Routes (`frontend/`)

- `/` — Walstar Technologies homepage rendered dynamically from the `Homepage` entry in Strapi `Page` collection (with seed fallback when offline)
- `/[slug]` and `/pages/[slug]` — Dynamic Zone CMS pages (`/about-us`, `/contact`, `/service-1`, `/welcome`, and any future admin-created pages)
- `/services/[slug]` — Individual capability/service detail page
- `/products/[slug]` — Individual product detail page
- `/case-studies/[slug]` — Individual case study page
- `/status` — Strapi + PostgreSQL health and CMS connection dashboard
- `POST /api/consultation` — Validates consultation & contact submissions and forwards them to Strapi `/api/consultation-leads`

## Shared Strapi CMS (Team Workflow)

The team shares one deployed Strapi instance so content and media stay in sync and local databases do not conflict:

- **CMS URL**: `https://walstar-technologies-ai-website.onrender.com`
- **Admin panel**: `https://walstar-technologies-ai-website.onrender.com/admin`

Each developer points their local frontend at this instance by creating `frontend/.env.local`. That file is gitignored, so it never causes merge conflicts:

```bash
cp frontend/.env.example frontend/.env.local
```

```env
NEXT_PUBLIC_STRAPI_URL=https://walstar-technologies-ai-website.onrender.com
STRAPI_URL=https://walstar-technologies-ai-website.onrender.com
```

Guidelines for working together:

- Create a **separate Strapi admin account per developer** instead of sharing one login.
- Content changes are shared instantly by everyone using the deployed CMS. Coordinate large content edits, or set up a staging CMS if you need isolated environments.
- Never commit `.env` files, API tokens, or admin passwords.
- Backend schema/component changes are deployed to Render through code; keep them in reviewed pull requests.

### Optional Local Database

A local PostgreSQL is only needed if you want to run Strapi on your own machine. Strapi v5 requires **PostgreSQL 14+**. To avoid colliding with any local PostgreSQL server running on port `5432`, `docker-compose.yml` exposes PostgreSQL 16 on host port **`5433`** by default:

- **Host**: `127.0.0.1`
- **Port**: `5433`
- **Database**: `walstar_cms`
- **Username**: `strapi`
- **Password**: `strapi_password`

Copy `backend/.env.example` to `backend/.env` and adjust the database credentials if needed. Do **not** point multiple local Strapi instances at the shared production database.

## Getting Started

### Frontend against the shared CMS (recommended)

1. **Create your local env file**:
   ```bash
   cp frontend/.env.example frontend/.env.local
   ```

2. **Start Next.js Frontend** (`http://localhost:3000`, or the next free port):
   ```bash
   npm run frontend:dev
   ```

The frontend reads pages, services, products, case studies, and testimonials from the shared Strapi CMS. If the CMS is unreachable it falls back to the seeded content in `frontend/src/lib/default-landing.ts`.

### Full local stack (optional)

Only do this if you need to modify the Strapi backend locally.

1. **Start PostgreSQL** (install Docker Desktop first; alternatively use an existing local PostgreSQL):
   ```bash
   npm run db:up
   ```

2. **Create `backend/.env`**:
   ```bash
   cp backend/.env.example backend/.env
   ```
   Generate values for the secrets listed in the file (`APP_KEYS`, `API_TOKEN_SALT`, `ADMIN_JWT_SECRET`, etc.).

3. **Start Strapi CMS** (`http://localhost:1337`):
   ```bash
   npm run backend:dev
   ```
   Open `http://localhost:1337/admin` to create your admin user and manage pages under **Content Manager -> Page**. Starter content and public permissions are seeded automatically on boot.

4. **Point the frontend at your local Strapi** by setting `NEXT_PUBLIC_STRAPI_URL=http://localhost:1337` and `STRAPI_URL=http://localhost:1337` in `frontend/.env.local`, then start the frontend:
   ```bash
   npm run frontend:dev
   ```

## Verification Scripts

- `npm run backend:build` — Build Strapi TypeScript & Admin UI
- `npm run frontend:lint` — Run ESLint
- `npm run frontend:build` — Build Next.js production app
