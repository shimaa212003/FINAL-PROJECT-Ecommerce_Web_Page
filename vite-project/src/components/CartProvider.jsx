
 import { useState, useEffect } from "react";
 import CartContext from "./CartContext";
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState(""); // State for displaying messages

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addProduct = (product) => {
    const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);

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
    setMessage(`Added ${product.title} to cart!`);
    
    setTimeout(() => {
      setMessage("");
    }, 3000); // Clear message after 3 seconds
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addProduct,
        totalItems: cartItems.reduce((total, item) => total + item.quantity, 0),
        message,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
