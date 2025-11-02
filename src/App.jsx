
import Headers from './components/Headers.jsx'
import ProductList from './components/ProductList.jsx'
import SearchBar from './components/SearchBar.jsx'
import ProductCategory from './components/ProductCategory.jsx' 
import { ProductProvider } from "./components/ProductContext"; 
import { useState } from 'react'

function App() {
  const [SearchItem, setSearchItem] = useState("")
  return (
    <>
    <ProductProvider>
      <Headers />
      <SearchBar onSearch={setSearchItem} />
      <ProductCategory />
      <ProductList searchTerm={SearchItem} />
      </ProductProvider>
    </>
  )
}

export default App
