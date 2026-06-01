#!/usr/bin/env node
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const deny = [
  /AKIA[0-9A-Z]{16}/,
  /sk-[A-Za-z0-9_-]{20,}/,
  /ghp_[A-Za-z0-9_]{20,}/,
  /api[_-]?key\\s*[:=]/i,
  /password\\s*[:=]/i,
  /token\\s*[:=]/i,
  /secret\\s*[:=]/i,
  /验证码\s*[:=：]/,
  /二维码\s*[:=：]/,
  new RegExp(["", "Users", "[^\\s)]+"].join("/"))
];

const skipDirs = new Set([".git", "node_modules", "dist", "build"]);
const textExt = new Set([".md", ".yml", ".yaml", ".json", ".html", ".js", ".mjs", ".txt", ".srt"]);

const failures = [];

walk(root);

if (failures.length) {
  console.error("Public-safety check failed:");
  for (const item of failures) console.error(`- ${item.file}: ${item.pattern}`);
  process.exit(1);
}

console.log("Public-safety check passed.");

function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (skipDirs.has(name)) continue;
    const path = join(dir, name);
    const stat = statSync(path);
    if (stat.isDirectory()) {
      walk(path);
      continue;
    }
    if (!isTextFile(path)) continue;
    const content = readFileSync(path, "utf8");
    for (const pattern of deny) {
      if (pattern.test(content)) {
        failures.push({ file: relative(root, path), pattern: String(pattern) });
      }
    }
  }
}

function isTextFile(path) {
  return textExt.has(path.slice(path.lastIndexOf(".")));
}
