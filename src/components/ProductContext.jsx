// ProductContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";


const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setData] = useState([]);

   useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then((response) => setData(response.data.products));
    }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductContext);
