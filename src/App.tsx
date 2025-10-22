import { useState } from 'react';
import './index.css';
import './App.css';
import { Header } from './components/header/header';
import SearchBar from './components/search-bar/search-bar';
import { ItemTab } from './components/items-tab/item-tab';
import { Footer } from './components/footer/footer';

function App() {
  const [activeTab, setActiveTab] = useState<string>("About");
  const [activeSubtab, setActiveSubtab] = useState<string | undefined>();
  const [searchQuery, setSearchQuery] = useState<string>("");


  const handleSearch = (tab: string, query: string, subtab?: string) => {
    setActiveTab(tab);
    setActiveSubtab(subtab);
    setSearchQuery(query);
  }

  return (
    <div className="app-wrapper">
      <Header />
      <div className="main-container">
        <SearchBar onSearch={handleSearch} />
        <ItemTab
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeSubtab={activeSubtab}
          setActiveSubtab={setActiveSubtab}
          searchQuery={searchQuery}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App
