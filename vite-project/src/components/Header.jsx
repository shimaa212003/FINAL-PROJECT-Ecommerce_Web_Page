

// Header.js
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import CartDropdown from "./CartDropdown";
import logo from "../assets/Logo.png";
import "../styles/Header.css";

function Header() {
  const { totalItems, message } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const closeCart = () => setIsCartOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".cart-dropdown") && !event.target.closest(".cart-container")) {
        closeCart();
      }
    };

    if (isCartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOpen]);

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo Furniro" className="logoImg" />
        <h1 className="logoText">Furniro</h1>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <img src="/menu_FILL0_wght400_GRAD0_opsz24.svg" alt="Menu" />
      </div>
      <div className={`mobile-nav ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/shop" onClick={toggleMenu}>Shop</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
        <ul className="mobile-rightLinks">
          <li>
            <div className="cart-container" onClick={toggleCart}>
              <img src="/ant-design_shopping-cart-outlined.svg" alt="Cart" />
              {totalItems > 0 && <span className="cartItemCount">{totalItems}</span>}
            </div>
          </li>
        </ul>
      </div>
      <ul className="navLinks">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <ul className="rightLinks">
        <li>
          <div className="cart-container" onClick={toggleCart}>
            <img src="/ant-design_shopping-cart-outlined.svg" alt="Cart" />
            {totalItems > 0 && <span className="cartItemCount">{totalItems}</span>}
          </div>
        </li>
      </ul>
      {isCartOpen && <CartDropdown isOpen={isCartOpen} closeCart={closeCart} />}
      {isCartOpen && <div className="cart-overlay" onClick={closeCart}></div>}
      {message && <div className="cart-message show">{message}</div>} {/* Display the message */}
    </div>
  );
}

export default Header;



