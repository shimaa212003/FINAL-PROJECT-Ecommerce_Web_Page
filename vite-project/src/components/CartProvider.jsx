
// export default CartProvider;

import { useState, useEffect } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on initial load
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Sync cartItems to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add a product to the cart
  const addProduct = (product) => {
    const existingProductIndex = cartItems.findIndex(
      (item) =>
        item.id === product.id &&
        item.size === product.size &&
        item.color.length === product.color.length &&
        item.color.every((v, i) => v === product.color[i])
    );

    let updatedCart;

    if (existingProductIndex > -1) {
      const existingProduct = cartItems[existingProductIndex];
      updatedCart = [...cartItems];
      updatedCart[existingProductIndex] = {
        ...existingProduct,
        quantity: existingProduct.quantity + product.quantity, // Update quantity
      };
    } else {
      updatedCart = [...cartItems, product]; // Add new product to cart
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Sync to localStorage after adding
  };

  // Function to remove a product from the cart
  const removeProduct = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Sync to localStorage after removal
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  // Calculate total number of items in the cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addProduct, removeProduct, clearCart, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
