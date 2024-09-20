
import { useState, useEffect } from "react";
import CartContext from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState("");

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
        quantity: existingProduct.quantity + product.quantity,
      };
    } else {
      updatedCart = [...cartItems, product];
    }

    setCartItems(updatedCart);
    setMessage(`Added ${product.title} to cart!`);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const removeProduct = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    setMessage(`Removed item from cart!`);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addProduct,
        removeProduct,
        totalItems: cartItems.reduce((total, item) => total + item.quantity, 0),
        message,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
