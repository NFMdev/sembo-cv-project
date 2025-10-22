import { useState, useEffect, useRef } from "react";
import suggestions from "../../data/suggestions.json";
import Fuse from "fuse.js";
import "./search-bar.css";
import { AutocompleteToken, generateSuggestionsTokens } from "../../utils/generate-suggestions";

type SearchBarProps = {
  onSearch: (tab: string, query: string, subtab?: string) => void;
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
      keys: ["word", "phrase", "shortPhrase"],
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
    const matches = results.map((r) => r.item);

    // Limit results and avoid duplicates
    const unique = Array.from(
      new Map(matches.map((m) => [`${m.word}-${m.tab}-${m.subtab}`, m])).values()
    ).slice(0, 10);

    setFiltered(unique);
    setActiveIndex(-1);
    setShowSuggestions(unique.length > 0);
  }, [query, fuse]);

  function highlightMatch(text: string, query: string) {
    const regex = new RegExp(`(${query})`, "ig");
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <strong key={i} className="highlight">
              {part}
            </strong>
          ) : (
            part
          )
        )}
      </>
    );
  }

  const handleSelect = (token: AutocompleteToken) => {
    setQuery(token.word);
    setShowSuggestions(false);
    onSearch(token.tab, query, token.subtab);
  };

  const handleSearch = () => {
    if (!query.trim()) return;
    const match = tokens.find(
      (t) => t.word.toLowerCase() === query.toLowerCase()
    );
    if (match) onSearch(match.tab, query, match.subtab);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : -1));
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
        onChange={(e) => {
          setQuery(e.target.value);
          setShowSuggestions(true);
        }}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>

      {showSuggestions && filtered.length > 0 && (
        <ul className="suggestions-list">
          {filtered.map((item, index) => (
            <li
              key={`${item.word}-${item.tab}-${item.subtab}-${index}`}
              className={`suggestion-item ${index === activeIndex ? "active" : ""
                }`}
              onMouseDown={() => handleSelect(item)}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <span className="suggestion-word">
                {highlightMatch(item.word, query)}
              </span>
              <span className="suggestion-path">
                {" "}
                → {item.tab}
                {item.subtab ? ` → ${item.subtab}` : ""}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}