

import { createContext, useState, useContext, useEffect } from "react";

// Create a context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
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
    // Check if the product with the same id, size, and color exists in the cart
    const existingProductIndex = cartItems.findIndex(
      (item) =>
        item.id === product.id &&
        item.size === product.size &&
        item.color.length === product.color.length &&
        item.color.every((v, i) => v === product.color[i])
    );

    let updatedCart;

    if (existingProductIndex > -1) {
      // If the product exists, update its quantity
      const existingProduct = cartItems[existingProductIndex];
      updatedCart = [...cartItems];
      updatedCart[existingProductIndex] = {
        ...existingProduct,
        quantity: existingProduct.quantity + product.quantity,
      };
    } else {
      // If the product doesn't exist, add it to the cart
      updatedCart = [...cartItems, product];
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
  };

  // Function to remove a product from the cart by ID
  const removeProduct = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
  };

  // Function to clear the entire cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart"); // Clear localStorage
  };

  // Calculate the total number of items in the cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addProduct,
        removeProduct,
        clearCart,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

export default CartContext;
