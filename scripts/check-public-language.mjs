#!/usr/bin/env node
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const text = (...codes) => String.fromCharCode(...codes);
const word = (...codes) => new RegExp(`\\b${text(...codes)}\\b`, "i");
const blocked = [
  [0x7206, 0x6b3e],
  [0x7206, 0x706b],
  [0x94a9, 0x5b50],
  [0x7c89, 0x4e1d],
  [0x5f15, 0x6d41],
  [0x62a2, 0x5360, 0x5fc3, 0x667a],
  [0x59d4, 0x5458, 0x4f1a]
].map((codes) => new RegExp(text(...codes))).concat([
  word(0x76, 0x69, 0x72, 0x61, 0x6c),
  word(0x68, 0x6f, 0x6f, 0x6b),
  new RegExp(`\\b${text(0x66, 0x61, 0x6e)}s?\\b`, "i"),
  new RegExp(`\\b${text(0x67, 0x72, 0x6f, 0x77, 0x74, 0x68)}\\s+${text(0x68, 0x61, 0x63, 0x6b)}\\b`, "i"),
  word(0x63, 0x6f, 0x6d, 0x6d, 0x69, 0x74, 0x74, 0x65, 0x65)
]);

const skipFiles = new Set([
  "scripts/check-public-language.mjs"
]);
const skipDirs = new Set([".git", "node_modules", "dist", "build"]);
const textExt = new Set([".md", ".yml", ".yaml", ".json", ".html", ".js", ".mjs", ".txt"]);
const failures = [];

walk(root);

if (failures.length) {
  console.error("Public-language check failed:");
  for (const failure of failures) {
    console.error(`- ${failure.file}: ${failure.pattern}`);
  }
  process.exit(1);
}

console.log("Public-language check passed.");

function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (skipDirs.has(name)) continue;
    const path = join(dir, name);
    const stat = statSync(path);
    if (stat.isDirectory()) {
      walk(path);
      continue;
    }
    const rel = relative(root, path);
    if (skipFiles.has(rel)) continue;
    if (!isTextFile(path)) continue;
    const content = readFileSync(path, "utf8");
    for (const pattern of blocked) {
      if (pattern.test(content)) {
        failures.push({ file: rel, pattern: String(pattern) });
      }
    }
  }
}

function isTextFile(path) {
  return textExt.has(path.slice(path.lastIndexOf(".")));
}
