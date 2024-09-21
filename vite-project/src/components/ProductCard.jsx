
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "./CartContext";
import "../styles/ProductCard.css";

const ProductCard = ({ product, onClick, activeProductId, setActiveProductId }) => {
  const { addProduct, message } = useContext(CartContext);
  
  const isActive = activeProductId === product.id; // Check if this product is active

  const handleAddToCart = (event) => {
    event.stopPropagation(); // Prevent parent click event
    addProduct({
      ...product,
      quantity: 1,
    });
  };

  // Handle mobile touch - set this product as active
  const handleTouchStart = () => {
    setActiveProductId(product.id); // Set this product as active on touch
  };

  return (
    <div
      className={`product-card ${isActive ? "active" : ""}`}
      onMouseEnter={() => setActiveProductId(product.id)} // Set product active on hover
      onMouseLeave={() => setActiveProductId(null)} // Clear active product on mouse leave
      onTouchStart={handleTouchStart}  // Set product active on touch
      onClick={onClick} // Handle product click
    >
      <div className="image-container">
        <img src={product.image} alt={product.title} />
        {isActive && ( // Show overlay only if this product is active
          <div className="overlay">
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        )}
      </div>
      <div className="product-info">
        <Link to={`/product/${product.id}`} className="product-name">
          {product.title}
        </Link>
        <div className="product-category">{product.category}</div>
        <div className="product-price">${product.price}</div>
      </div>

      {/* Display the message when the product is added to the cart */}
      {message && <div className="cart-message">{message}</div>}
    </div>
  );
};

export default ProductCard;


