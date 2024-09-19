
import { useState, useEffect } from "react";
import "../styles/Header.css";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import CartDropdown from "./CartDropdown";
import { useCart } from "./CartContext";

function Header() {
  const { totalItems } = useCart();  // Get total items from the CartContext
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Toggle cart state when clicking the cart icon
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  
  // Close the cart when clicking outside or other actions
  const closeCart = () => setIsCartOpen(false);

  useEffect(() => {
    // Add event listener to handle clicks outside the cart
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
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="Logo Furniro" className="logoImg" />
        <h1 className="logoText">Furniro</h1>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <img src="/menu_FILL0_wght400_GRAD0_opsz24.svg" alt="Menu" />
      </div>

      {/* Mobile Navigation */}
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
              {totalItems > 0 && <span className="cartItemCount">{totalItems}</span>} {/* Show only if items are added */}
            </div>
          </li>
        </ul>
      </div>
    
      {/* Desktop Navigation */}
      <ul className="navLinks">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Right Section (Cart and other links) */}
      <ul className="rightLinks">
        <li>
          <div className="cart-container" onClick={toggleCart}>
            <img src="/ant-design_shopping-cart-outlined.svg" alt="Cart" />
            {totalItems > 0 && <span className="cartItemCount">{totalItems}</span>} {/* Conditionally render total items */}
          </div>
        </li>
      </ul>

      {/* Cart Dropdown */}
      {isCartOpen && <CartDropdown isOpen={isCartOpen} closeCart={closeCart} />}
      
      {/* Overlay */}
      {isCartOpen && <div className="cart-overlay" onClick={closeCart}></div>}
    </div>
  );
}

export default Header;
