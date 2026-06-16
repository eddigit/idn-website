import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const files = [
  "app/mentions-legales/page.tsx",
  "app/politique-de-confidentialite/page.tsx",
  "app/api/contact/route.ts",
];

for (const file of files) {
  const content = readFileSync(join(root, file), "utf8");
  assert.doesNotMatch(content, /idngbadvisory@gmail\.com/i, `${file} must not reference legacy Gmail`);
}

const legal = readFileSync(join(root, "app/mentions-legales/page.tsx"), "utf8");
const privacy = readFileSync(join(root, "app/politique-de-confidentialite/page.tsx"), "utf8");

assert.match(legal, /strategy@idnadvisory\.com/);
assert.match(privacy, /strategy@idnadvisory\.com/);

console.log("IDN contact email smoke test passed");
