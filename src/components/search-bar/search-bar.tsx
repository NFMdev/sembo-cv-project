import { useState, useEffect, useRef } from "react";
import suggestions from "../../data/suggestions.json";
import "./search-bar.css";

type Suggestion = {
    label: string;
    tab: string;
};

type AutocompleteToken = {
    word: string;
    next?: string;
    tab: string;
}

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

    useEffect(() => {
        const tempTokens: AutocompleteToken[] = [];
        (suggestions as Suggestion[]).forEach(({ label, tab }) => {
            const words = label.split(/\s+/);
            for (let i = 0; i < words.length; i++) {
                tempTokens.push({
                    word: words[i],
                    next: words[i + 1], // undefined si es la última
                    tab,
                });
            }
        });
        setTokens(tempTokens);
    }, []);


    useEffect(() => {
        if (!query) {
            setFiltered([]);
            return;
        }

        const lastWord = query.split(/\s+/).pop()?.toLowerCase() || "";

        const matches = tokens.filter((t) =>
            t.word.toLowerCase().startsWith(lastWord)
        );

        setFiltered(matches);
        setActiveIndex(-1);
        setShowSuggestions(matches.length > 0);
    }, [query, tokens]);

    const handleSelect = (token: AutocompleteToken) => {
        const words = query.trim().split(/\s+/);
        const lastWord = words[words.length - 1];

        // Si la palabra actual coincide con token.word, añadir la siguiente palabra si existe
        if (lastWord.toLowerCase() === token.word.toLowerCase() && token.next) {
            words.push(token.next);
        }

        const newQuery = words.join(" ");
        setQuery(newQuery);
        setShowSuggestions(false);

        // Abrir la pestaña correspondiente
        onSearch(token.tab);
    };

    const handleSearch = () => {
        if (!query) return;

        const token = tokens.find((t) => t.word.toLowerCase() === query.toLowerCase());
        if (token) onSearch(token.tab);
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
            <button
                onClick={() => filtered[0] && handleSelect(filtered[0])}
                className="search-button"
            >
                Search
            </button>

            {showSuggestions && filtered.length > 0 && (
                <ul className="suggestions-list">
                    {filtered.map((item, index) => (
                        <li
                            key={item.word}
                            className={`suggestion-item ${index === activeIndex ? "active" : ""}`}
                            onMouseDown={() => handleSelect(item)}
                            onMouseEnter={() => setActiveIndex(index)}
                        >
                            {item.word}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
