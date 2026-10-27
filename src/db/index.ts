import "@tanstack/react-start/server-only"
import { env } from "cloudflare:workers"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

type Database = ReturnType<typeof drizzle>

/**
 * One client per request, reused by every query that request makes.
 *
 * Opening a fresh connection costs roughly 80ms, and a single page view asks the
 * database more than once — the layout reads the plan and the page reads what it
 * needs. Keeping one client per request turns the second query into a reuse
 * instead of a second handshake.
 *
 * The client is deliberately not cached between requests: Cloudflare TCP sockets
 * cannot outlive the request that created them, so the entry is released in
 * `finally` and the map stays empty between requests.
 */
const clients = new Map<string, ReturnType<typeof postgres>>()

function clientFor(databaseUrl: string) {
  const existing = clients.get(databaseUrl)
  if (existing) return existing

  const created = postgres(databaseUrl, {
    prepare: false,
    max: 1,
    idle_timeout: 5,
    connect_timeout: 10,
  })
  clients.set(databaseUrl, created)
  return created
}

/**
 * Server-only database access. The `server-only` import above is this file's
 * environment marker — do not copy it onto a `createServerFn` module; routes
 * must be able to import those. Call `withDatabase` from a `.handler()` only.
 */
export async function withDatabase<T>(
  run: (database: Database) => Promise<T>,
): Promise<T> {
  const databaseUrl = env.DATABASE_URL
  if (!databaseUrl) throw new Error("DATABASE_URL is not set")

  const sql = clientFor(databaseUrl)

  try {
    return await run(drizzle(sql))
  } finally {
    clients.delete(databaseUrl)
    await sql.end().catch(() => undefined)
  }
}
