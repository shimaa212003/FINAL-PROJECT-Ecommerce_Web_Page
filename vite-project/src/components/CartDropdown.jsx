
import { useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "./CartContext";

function CartDropdown({ isOpen, closeCart }) {
  const { cartItems, setCartItems, removeProduct, message } = useContext(CartContext);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Detect clicks outside the dropdown
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

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

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
              <div className="cartManageProduct">
                <div className="quantity-control">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      decreaseQuantity(item.id);
                    }}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      increaseQuantity(item.id);
                    }}
                  >
                    +
                  </button>
                </div>
                <span className="price">${(item.price * item.quantity).toFixed(2)}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeProduct(item.id);
                  }}
                >
                  <span>x</span>
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
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
        <Link to="/cart">
          <div className="cartDropdownGoToCart">Go to Cart</div>
        </Link>
      </div>

      {/* Display the message when a product is added */}
      {message && <div className="cart-message">{message}</div>}
    </div>
  );
}

export default CartDropdown;
