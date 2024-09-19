

import { useContext, useState } from "react";
import CartContext from "./CartContext";
import "../styles/ProductCard.css"; // Ensure this path is correct

const ProductCard = ({ product, onClick }) => {
  const { addProduct } = useContext(CartContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (event) => {
    event.stopPropagation(); // Prevent click event from triggering onClick for navigation
    addProduct({
      ...product,
      quantity: 1,
    });
  };

  return (
    <div
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick} // Trigger overlay on click
    >
      <img src={product.image} alt={product.title} />
      <button
        className="add-to-cart-button"
        onClick={handleAddToCart}
        style={{ opacity: isHovered ? 1 : 0 }} // Ensure button visibility on hover
      >
        Add to Cart
      </button>
      <div className="product-info">
        <div className="product-name">{product.title}</div>
        <div className="product-category">{product.category}</div>
        <div className="product-price">${product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
