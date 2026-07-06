# Connect Prisma to Express — Starter

A working Express + React app whose data currently lives in an **in-memory array**
(`server/routes/threads.js`). Restart the server and every thread disappears.

**Your task:** give it a real database. Connect **Prisma + PostgreSQL** so the app
boots with a live connection — **without changing a single line of the React frontend.**

## Prerequisites
- Node.js 18+
- A local **PostgreSQL** server running, and a database created (e.g. `createdb threadbase`)

## Setup
```bash
npm run setup     # installs root, server, and client deps

# client env (browser needs the API URL)
cp client/.env.development.example client/.env.development
```

## What you implement (all server-side, in `server/`)
1. `cp .env.example .env` and fill in your real `DATABASE_URL`.
2. Install Prisma: `npm install prisma --save-dev` and `npm install @prisma/client`.
3. `npx prisma init` (creates `prisma/schema.prisma`).
4. Write the `Thread` model in `schema.prisma` (`id`, `title`, `body`, `createdAt`).
5. `npx prisma migrate dev --name init` (creates the table + a migration file).
6. Create the **PrismaClient singleton** in `prisma/client.js` and import it in `server.js`.
7. Make `server.js` `await prisma.$connect()` and log a clear "connected" message before it listens.

Follow the `TODO` markers in `server/server.js`.

## Run
```bash
npm run dev       # server on :3001, client on :5173
```

## Success looks like
- The server terminal prints your **"Prisma connected"** message with **no Prisma errors**.
- The React app loads and shows an **empty list from the database** (`GET /api/threads` → `[]`).
- `psql`: `SELECT * FROM "Thread";` shows an empty `Thread` table.

## Project layout
```
server/
  server.js            ← add Prisma import + connect-then-listen (TODOs here)
  routes/threads.js    ← in-memory API — DO NOT edit
  prisma/              ← empty; you create schema.prisma, migrations/, client.js
  .env.example         ← DATABASE_URL placeholder (copy to .env)
client/                ← complete React app — DO NOT change
```

> **Never commit `.env`.** It holds your database password. `.gitignore` already excludes it; commit `.env.example` only.
