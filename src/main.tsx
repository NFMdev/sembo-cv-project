import { createRoot } from 'react-dom/client'
import './index.css'
import { ItemTab } from './components/items-tab/item-tab.tsx';
import { MenuBar } from './components/menu-bar/menu-bar.tsx';
import SearchTab from './components/search-tab/search-tab.tsx';

function handleSearch(query: string) {
  console.log("Searching for:", query);
}

createRoot(document.getElementById('root')!).render(
  <>
    <MenuBar/>
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"2rem", marginTop:"3rem"}}>
      <h1>CV Nicolás Fiorito</h1>
      <SearchTab onSearch={handleSearch}/>
    </div>
    <ItemTab/>
  </>
)
