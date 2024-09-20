

import { useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "./CartContext";

function CartDropdown({ isOpen, closeCart }) {
  const { cartItems, removeProduct, message } = useContext(CartContext);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeCart();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeCart]);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  const handleProductClick = (productId) => {
    closeCart();
    navigate(`/product/${productId}`);
  };

  return (
    <div ref={dropdownRef} className={`cart-dropdown ${isOpen ? "open" : ""}`}>
      <h3>
        Shopping Cart
        <img src="/shopping.svg" style={{ marginLeft: "50px" }} alt="Cart icon" />
      </h3>

      {cartItems.length === 0 ? (
        <span>Your cart is empty</span>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item" onClick={() => handleProductClick(item.id)}>
            <img src={item.image} alt={item.title} />
            <div className="item-details">
              <span className="name">{item.title}</span>
              <span className="quantity"> {item.quantity}  x</span> {/* Display quantity here */}
              <div className="cartManageProduct">
                <span className="price">Rs.{(item.price * item.quantity).toFixed(2)}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeProduct(item.id);
                  }}
                >
                  <span> <img src="/delete (1).svg" style={{
                    width:"20px",
                    height:"20px"
                  }}></img></span>
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="cartDropdownFooter">
        <div className="cartDropdownTotalQuantity">
          <p>{totalQuantity} product(s) in cart</p>
        </div>
        <div className="cartDropdownTotalPrice">
          <p style={{
            color:"#B88e2F "
          }}>Total Price: Rs{totalPrice.toFixed(2)}</p>
        </div>
        <Link to="/cart">
          <div className="cartDropdownGoToCart">Go to Cart</div>
        </Link>
      </div>

      {message && <div className="cart-message">{message}</div>}
    </div>
  );
}

export default CartDropdown;
