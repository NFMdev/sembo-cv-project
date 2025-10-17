import { useState, useEffect, useRef } from "react";
import suggestions from "../../data/suggestions.json";
import { generateSuggestionsTokens, AutocompleteToken } from "../../utils/generate-suggestions";
import Fuse from "fuse.js";
import "./search-bar.css";
import { mapTabItem } from "../shared/item-tab-mapper";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<AutocompleteToken[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const [tokens, setTokens] = useState<AutocompleteToken[]>([]);
  const [fuse, setFuse] = useState<Fuse<AutocompleteToken> | null>(null);

  useEffect(() => {
    const tokens = generateSuggestionsTokens(suggestions);
    setTokens(tokens);
    const fuseInstance = new Fuse(tokens, {
      keys: ["word"],
      threshold: 0.3,
      minMatchCharLength: 2,
    });
    setFuse(fuseInstance);
  }, []);

  useEffect(() => {
    if (!query || !fuse) {
      setFiltered([]);
      return;
    }

    const lastWord = query.split(/\s+/).pop()?.toLowerCase() || "";
    if (lastWord.length === 0) {
      setFiltered([]);
      return;
    }

    const results = fuse.search(lastWord);
    const matches = results.map(r => r.item);

    // Limitar frases a 5 palabras a partir de la coincidencia
    const processed = matches.map(item => {
      const words = item.phrase.split(/\s+/);
      const idx = words.findIndex(w => w.toLowerCase().startsWith(lastWord));
      const shortWords = words.slice(idx, idx + 5).join(" ");
      return { ...item, shortPhrase: shortWords };
    });

    setFiltered(processed);
    setActiveIndex(-1);
    setShowSuggestions(processed.length > 0);
  }, [query, fuse]);

  const handleSelect = (token: AutocompleteToken) => {
    setQuery(token.phrase);
    setShowSuggestions(false);
    onSearch(token.tab);
  };

  const handleSearch = () => {
    if (!query) return;
    const token = tokens.find(t => t.phrase.toLowerCase() === query.toLowerCase());
    if (token) onSearch(token.tab);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex(prev => (prev < filtered.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex(prev => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0) handleSelect(filtered[activeIndex]);
      else handleSearch();
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  return (
    <div className="search-bar">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={e => {
          setQuery(e.target.value);
          setShowSuggestions(true);
        }}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
        className="search-input"
      />
      <button
        onClick={handleSearch}
        className="search-button"
      >
        Search
      </button>

      {showSuggestions && filtered.length > 0 && (
        <ul className="suggestions-list">
            {filtered.map((item, index) => (
                <li
                key={`${item.word}-${index}`}
                className={`suggestion-item ${index === activeIndex ? "active" : ""}`}
                onMouseDown={() => handleSelect(item)}
                onMouseEnter={() => setActiveIndex(index)}
                >
                <span className="suggestion-word">{item.word}</span>
                <span className="suggestion-tab"> → {mapTabItem(item.tab)}</span>
                </li>
            ))}
        </ul>
      )}
    </div>
  );
}