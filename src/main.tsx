import { createRoot } from 'react-dom/client'
import './index.css'
import { ItemTab } from './components/items-tab/item-tab.tsx';
import SearchTab from './components/search-tab/search-tab.tsx';
import { WebProvider } from './contexts/web-context.tsx';
import { WebPreview } from './components/iframe-preview/web-preview.tsx';

function handleSearch(query: string) {
}

createRoot(document.getElementById('root')!).render(
  <>
    <WebProvider>
      <div className="main-container">
        
        <h1>Nico Fiorito</h1>
        <SearchTab onSearch={handleSearch}/>
        <ItemTab/>
        <WebPreview />
      </div>
    </WebProvider>
  </>
)
