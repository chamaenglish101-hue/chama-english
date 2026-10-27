// Lets Node run the project's TypeScript with its "#/*" imports, so the content
// audit and its tests work without a bundler.
import { register } from "node:module"
import { pathToFileURL } from "node:url"

register("./ts-alias-hooks.mjs", pathToFileURL("./scripts/"))
