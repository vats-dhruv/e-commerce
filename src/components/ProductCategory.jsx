import { useProductsContext } from "./ProductContext";

function ProductCategory() {
  const { products } = useProductsContext();

  // Extract unique categories from products
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <>
      <select name="category">
        <option value="">Select Category</option>
        {categories.map((category, index) => (
          <option key={index} value={category} >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </>
  );
}

export default ProductCategory;
