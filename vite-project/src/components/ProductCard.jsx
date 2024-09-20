


import { useContext, useState } from "react";
import CartContext from "./CartContext";
import "../styles/ProductCard.css";

const ProductCard = ({ product, onClick }) => {
  const { addProduct, message } = useContext(CartContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (event) => {
    event.stopPropagation();
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
      onClick={onClick}
    >
      <img src={product.image} alt={product.title} />
      <button
        className="add-to-cart-button"
        onClick={handleAddToCart}
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        Add to Cart
      </button>
      <div className="product-info">
        <div className="product-name">{product.title}</div>
        <div className="product-category">{product.category}</div>
        <div className="product-price">${product.price}</div>
      </div>

      {/* Display the message when the product is added to the cart */}
      {message && <div className="cart-message">{message}</div>}
    </div>
  );
};

export default ProductCard;
