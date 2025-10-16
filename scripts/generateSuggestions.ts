import fs from "fs";
import path from "path";
import { glob } from "glob";
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
import * as t from "@babel/types";

interface Suggestion {
    label: string;
    tab: string;
};

const traverse = _traverse.default;

const topicsDir = path.resolve("src/components/items-tab/topics");
const outputFile = path.resolve("src/data/suggestions.json");

function extractTextsFromJSX(code: string): string[] {
  const texts: string[] = [];

  const ast = parse(code, {
    sourceType: "module",
    plugins: ["typescript", "jsx"],
  });

  traverse(ast, {
    JSXText({ node }: { node: t.JSXText }) {
      const value = node.value.trim();
      if (isValidText(value)) texts.push(value);
    },
    StringLiteral({ node }: { node: t.StringLiteral }) {
      const value = node.value.trim();
      if (isValidText(value)) texts.push(value);
    },
  });

  return Array.from(new Set(texts));
}

function isValidText(text: string): boolean {
  // Excluye URLs
  const urlRegex = /(https?:\/\/[^\s]+)/i;
  // Excluye paths de archivos/directorios (ej: src/components/App.tsx)
  const pathRegex = /([a-zA-Z0-9_\-./\\]+\/[a-zA-Z0-9_\-./\\]+\.[a-z]+)/;
  // Excluye emails
  const emailRegex = /\S+@\S+\.\S+/;

  // Excluye si coincide con alguna regex
  if (urlRegex.test(text)) return false;
  if (pathRegex.test(text)) return false;
  if (emailRegex.test(text)) return false;
  if (text.includes("-") || text.includes("/") || text.includes("\\") || text.includes("_")) return false;
  // Evitar strings muy cortas
  if (text.length <= 2) return false;

  return true;
}

async function generateSuggestions() {
  const files = await glob(`${topicsDir}/**/*.tsx`);
  const suggestions: Suggestion[] = [];

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    const section = path.basename(file, path.extname(file));
    const texts = extractTextsFromJSX(content);

    texts.forEach((t) => suggestions.push({ label: t, tab: section }));
  }

  suggestions.sort((a, b) =>
    a.tab.localeCompare(b.tab) || a.label.localeCompare(b.label)
  );

  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
  fs.writeFileSync(outputFile, JSON.stringify(suggestions, null, 2), "utf-8");

  console.log(`Generated ${suggestions.length} suggestions in ${outputFile}`);
}

generateSuggestions();