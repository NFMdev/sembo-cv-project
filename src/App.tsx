import { useState } from 'react'
import './index.css'
import './App.css'
import { WebProvider } from './contexts/web-context';
import SearchBar from './components/search-bar/search-bar';
import { ItemTab } from './components/items-tab/item-tab';
import { WebPreview } from './components/iframe-preview/web-preview';

function App() {
  const [activeTab, setActiveTab] = useState<string>("about");

  return (
    <WebProvider>
      <div className="main-container">
        
        <h1>Nico Fiorito</h1>
        <SearchBar onSearch={setActiveTab}/>
        <ItemTab activeTab={activeTab} setActiveTab={setActiveTab}/>
        <WebPreview />
      </div>
    </WebProvider>
  );
}

export default App
