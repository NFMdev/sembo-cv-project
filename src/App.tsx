import { useState } from 'react'
import './index.css'
import './App.css'
import { WebProvider } from './contexts/web-context';
import { Header } from './components/header/header';
import SearchBar from './components/search-bar/search-bar';
import { ItemTab } from './components/items-tab/item-tab';
import { WebPreview } from './components/iframe-preview/web-preview';
import { Footer } from './components/footer/footer';

function App() {
  const [activeTab, setActiveTab] = useState<string>("about");
  const [activeSubtab, setActiveSubtab] = useState<string | undefined>();
  const [searchQuery, setSearchQuery] = useState<string>("");


  const handleSearch = (tab: string, query: string, subtab?: string) => {
    setActiveTab(tab);
    setActiveSubtab(subtab);
    setSearchQuery(query);
  }

  return (
    <WebProvider>
      <div className="app-wrapper">
        <Header />
        <div className="main-container">
          <SearchBar onSearch={handleSearch}/>
          <ItemTab 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            activeSubtab={activeSubtab}
            setActiveSubtab={setActiveSubtab}
            searchQuery={searchQuery}
          />
          <WebPreview />
        </div>
        <Footer />
      </div>
    </WebProvider>
  );
}

export default App
