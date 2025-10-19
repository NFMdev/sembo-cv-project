export type Suggestion = {
  label: string;
  tab: string;
  subtab?: string;
  phrase: string;
  shortPhrase: string;
};

export type AutocompleteToken = {
  word: string;
  next?: string;
  tab: string;
  subtab?: string;
  phrase: string;
  shortPhrase: string;
};

export function generateSuggestionsTokens(suggestions: Suggestion[]): AutocompleteToken[] {
  const tokens: AutocompleteToken[] = [];
  const seen: Record<string, Set<string>> = {}; // Evita duplicados: { "tab:subtab": Set<word> }

  suggestions.forEach(({ label, tab, subtab, phrase, shortPhrase }) => {
    const key = `${tab}:${subtab || ""}`;
    if (!seen[key]) seen[key] = new Set();

    // Limpiar y dividir las palabras
    const words = phrase.split(/\s+/).map(w => w.replace(/[.,;!?]+$/g, ""));

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (!word || seen[key].has(word)) continue;

      tokens.push({
        word,
        next: i < words.length - 1 ? words[i + 1] : undefined,
        tab,
        subtab,
        phrase,
        shortPhrase,
      });

      seen[key].add(word);
    }
  });

  return tokens;
}