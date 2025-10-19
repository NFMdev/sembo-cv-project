import fs from "fs";
import path from "path";
import { removeStopwords } from "stopword";

const SRC_DIR = path.resolve("src/components/items-tab/topics");
const DATA_DIR = path.resolve("src/data");
const OUTPUT_FILE = path.resolve(DATA_DIR, "suggestions.json");

const EXTRA_KEYWORDS = ["about", "experience", "education", "skills", "tech-stack", "contact"];

export type Suggestion = {
  label: string;
  tab?: string;
  subtab?: string;
  phrase: string;
  shortPhrase: string;
};

// Clean and filter text
function cleanText(text: string) {
  const trimmed = text.trim();
  if (/[:\/\\]|_blank|noopener|noreferrer/.test(trimmed)) return "";

  const words = trimmed
    .split(/\s+/)
    .map(w => w.replace(/[^\w]+$/g, ""))
    .filter(w => w.length > 1 && !w.includes("-"));

  const filtered = removeStopwords(words);
  return filtered.join(" ");
}

function scanDir(dir: string, results: Suggestion[] = []): Suggestion[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      scanDir(fullPath, results);
    } else if (entry.isFile() && /\.(ts|tsx|js|jsx)$/.test(entry.name)) {
      const content = fs.readFileSync(fullPath, "utf8");

      // Check main tab
      const relativePath = path.relative(SRC_DIR, fullPath);
      const parts = relativePath.split(path.sep);
      const tabName = EXTRA_KEYWORDS.find(t => t.toLowerCase() === parts[0].toLowerCase());

      // Group techs by category
      const categoryBlocks = Array.from(
        content.matchAll(/title:\s*"([^"]+)"[^}]+techs:\s*\[([^\]]+)\]/g)
      );

      categoryBlocks.forEach(match => {
        const categoryTitle = match[1];
        const techBlock = match[2];

        const cleanedCategory = cleanText(categoryTitle);
        if (!cleanedCategory) return;

        // Get tech names inside category block
        const techNames = Array.from(techBlock.matchAll(/name:\s*"([^"]+)"/g)).map(m => m[1]);

        techNames.forEach(tech => {
          const cleanedTech = cleanText(tech);
          if (cleanedTech) {
            results.push({
              label: cleanedTech,
              tab: tabName,
              subtab: cleanedCategory,
              phrase: cleanedTech,
              shortPhrase: cleanedTech.split(/\s+/).slice(0, 5).join(" "),
            });
          }
        });
      });

      // Generic strings
      const genericStrings = Array.from(content.match(/"([^"]+)"/g) || []).map(s => s.replace(/"/g, ""));
      genericStrings.forEach(s => {
        const cleaned = cleanText(s);
        if (cleaned) {
          results.push({
            label: cleaned,
            tab: tabName,
            phrase: cleaned,
            shortPhrase: cleaned.split(/\s+/).slice(0, 5).join(" "),
          });
        }
      });
    }
  }
  return results;
}

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

let results = scanDir(SRC_DIR);

// Remove duplicates (same label + tab + subtab)
results = results.filter(
  (obj, index, self) =>
    index === self.findIndex(o => o.label === obj.label && o.tab === obj.tab && o.subtab === obj.subtab)
);

// Add base keywords
EXTRA_KEYWORDS.forEach(tab => {
  if (!results.some(r => r.label.toLowerCase() === tab.toLowerCase())) {
    results.push({
      label: tab,
      tab,
      phrase: tab,
      shortPhrase: tab,
    });
  }
});

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2));
console.log(`Suggestions file created: ${OUTPUT_FILE}`);
