#!/usr/bin/env node
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const skipDirs = new Set([".git", "node_modules", "dist", "build"]);
const failures = [];

walk(root);

if (failures.length) {
  console.error("i18n page check failed:");
  for (const failure of failures) {
    console.error(`- ${failure.file}: ${failure.reason}`);
  }
  process.exit(1);
}

console.log("i18n page check passed.");

function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (skipDirs.has(name)) continue;
    const path = join(dir, name);
    const stat = statSync(path);
    if (stat.isDirectory()) {
      walk(path);
      continue;
    }
    if (!path.endsWith(".md")) continue;
    checkFile(path);
  }
}

function checkFile(path) {
  const rel = relative(root, path);
  const content = readFileSync(path, "utf8");
  const isEnglishPage = rel.endsWith(".en.md");
  const samePageMarkers = [
    "](#english)",
    "](#简体中文)",
    "<a id=\"english\"",
    "<a id=\"简体中文\"",
    "<a id=\"zh-cn\"",
    "href=\"#english\"",
    "href=\"#zh-cn\""
  ];
  for (const marker of samePageMarkers) {
    if (content.includes(marker)) {
      failures.push({
        file: rel,
        reason: `uses same-page language switch marker ${JSON.stringify(marker)}`
      });
    }
  }

  if (content.includes("## English") && content.includes("## 简体中文")) {
    failures.push({
      file: rel,
      reason: "contains both Chinese and English language sections"
    });
  }

  if (isEnglishPage && /[\u4e00-\u9fff]/.test(content)) {
    failures.push({
      file: rel,
      reason: "English page contains Chinese body text"
    });
  }

  if (!isEnglishPage && content.includes("\nLanguages: [")) {
    failures.push({
      file: rel,
      reason: "Chinese page uses English language-switch label"
    });
  }
}
