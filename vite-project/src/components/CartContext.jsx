

import { createContext, useState, useEffect, useContext } from "react";

// Create a context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState(""); // State for displaying messages

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
    const existingProductIndex = cartItems.findIndex((item) => {
      const isColorEqual =
        Array.isArray(item.color) &&
        Array.isArray(product.color) &&
        item.color.length === product.color.length &&
        item.color.every((v, i) => v === product.color[i]);

      return item.id === product.id && item.size === product.size && isColorEqual;
    });

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

    // Set message for 3 seconds
    setMessage(`Added ${product.title} to cart!`);
    setTimeout(() => {
      setMessage(""); // Clear the message after 3 seconds
    }, 3000);
  };

  // Function to remove a product from the cart by ID
  const removeProduct = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Sync to localStorage after removal
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
        message, // Include message in the context
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



