

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "../styles/CategoryProduct.css";
import { fetchProductsByCategory } from '../api'; // Import the API function

function CategoryProducts() {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [activeProductId, setActiveProductId] = useState(null); // Track active product

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

  return (
    <div className="categoryProductsContainer">
      <h2>{categoryName}</h2>
      <div className="productGrid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            activeProductId={activeProductId}
            setActiveProductId={setActiveProductId} // Pass the state function down
            onClick={() => handleProductClick(product)} // Handle product click
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryProducts;

