
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import ProductCard from "../components/ProductCard";
import "../styles/CategoryProduct.css";
import { fetchProductsByCategory } from '../api'; // Import the API function

function CategoryProducts() {
  const { categoryName } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchProductsByCategory(categoryName);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [categoryName]);

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`); // Navigate to the product page
  };

  if (products.length === 0) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="categoryProductsContainer">
      <h2>{categoryName}</h2>
      <div className="productGrid">
        {products.map((product) => (
          <div key={product.id} onClick={() => handleProductClick(product)}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryProducts;
