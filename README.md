# 🍁 MapleMigrant – Your Canadian Immigration Companion  
*A modern, community‑driven blogging platform built with React, Tailwind CSS, Hono, and Prisma.*

![MapleMigrant Banner](./assets/banner.png)

> **Mission:** Empower newcomers, immigrants, international students, and expats with real stories, expert guidance, and a welcoming Canadian community.

---

## ✨ What Makes MapleMigrant Stand Out
| Area / Goal           | Solution & Impact                                                                                 |
| --------------------- | -------------------------------------------------------------------------------------------------- |
|**Real‑world domain, real constraints**  | Built to serve immigrants who rely on fast, reliable information.                |
| **Blazing‑fast API**  | Runs on Cloudflare Workers (edge), so requests hit the nearest PoP. Typical response < **20 ms**.  |
| **Type‑safety**       | One shared Zod schema → Prisma types → React hooks. <br>Zero `any`, fewer runtime bugs.            |
| **Secure Auth**       | JWT (HS256) + bcrypt. Login endpoint rate‑limited to block brute‑force.                            |
| **CI / CD**           | GitHub Actions lint + tests + type‑check, then Vercel preview URLs on every pull request.          |
| **Accessible UI**     | WCAG‑AA colour contrast, keyboard‑friendly, screen‑reader labels. Lighthouse a11y **95+**.         |

---

## 🛠️ Tech Stack
| Layer            | Stack                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------- |
| **Frontend**     | React 18 · TypeScript · Tailwind CSS · shadcn/ui                                                    |
| **Backend**      | [Hono](https://hono.dev/) (Cloudflare Workers) · JWT Auth                                                  |
| **Database**     | PostgreSQL (via Aiven) · Prisma ORM                                                                         |

---

## 📸 Gallery
| Landing Page | Blog Feed | Single Post | Create Post |
| ------------ | --------- | ---------- | ----------- |
| ![](./assets/screenshot-landing.png) | ![](./assets/screenshot-feed.png) | ![](./assets/screenshot-post.png) | ![](./assets/screenshot-create.png) |

> **Tip:** Replace the placeholder images (`./assets/…`) with your own screenshots or GIFs.

---

## 🚀 Quick Start

```bash
# 1. Clone
git clone https://github.com/Pranav-Talwar/MapleMigrant.git && cd MapleMigrant

# 2. Install deps
pnpm install

# 3. Set environment variables
cp .env.example .env
#   - DATABASE_URL=...
#   - JWT_SECRET=...

# 4. Dev mode (frontend + backend in one command)
pnpm dev
