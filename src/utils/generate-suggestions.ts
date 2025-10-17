export type Suggestion = {
  label: string;
  tab: string;
  phrase: string;
  shortPhrase: string;
};

export type AutocompleteToken = {
  word: string;
  next?: string;
  tab: string;
  phrase: string;
  shortPhrase: string;
};

export function generateSuggestionsTokens(suggestions: Suggestion[]): AutocompleteToken[] {
  const tokens: AutocompleteToken[] = [];
  
  const seen: Record<string, Set<string>> = {}; // { tabName: Set<word> }

  suggestions.forEach(({ label, tab, phrase, shortPhrase }) => {
    if (!seen[tab]) seen[tab] = new Set();

    // token principal
    if (!seen[tab].has(label)) {
      tokens.push({ word: label, tab, phrase, shortPhrase });
      seen[tab].add(label);
    }

    // también puedes hacer lo mismo para cada palabra de shortPhrase si quieres autocompletar palabra a palabra
    shortPhrase.split(/\s+/).forEach(word => {
      if (!seen[tab].has(word)) {
        tokens.push({ word, tab, phrase, shortPhrase });
        seen[tab].add(word);
      }
    });
  });

  return tokens;
}