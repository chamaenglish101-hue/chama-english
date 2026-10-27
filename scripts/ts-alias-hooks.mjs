// Resolves the project's "#/*" specifiers to ./src/* when running under plain Node.
import path from "node:path"
import { pathToFileURL } from "node:url"

const ROOT = path.resolve(import.meta.dirname, "..")

export async function resolve(specifier, context, next) {
  if (specifier.startsWith("#/")) {
    const target = path.join(ROOT, "src", specifier.slice(2))
    return next(pathToFileURL(target).href, context)
  }
  return next(specifier, context)
}
