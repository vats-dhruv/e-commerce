import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useProductsContext } from "./ProductContext";

function ProductList({ searchTerm }) {
    const { products } = useProductsContext();
    const [data, setData] = useState([])


    

    const filterProduct = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "20px",
                padding: "20px",
            }}>
            {filterProduct.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductList;