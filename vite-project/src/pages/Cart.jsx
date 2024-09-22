
import { useContext, useEffect, useState } from "react";
import "../styles/Cart.css";
import CartContext from "../components/CartContext";
import WarrantyBanner from "../components/WarrantyBanner";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const { cartItems, removeProduct } = useContext(CartContext);

  useEffect(() => {
    setItemsInCart(cartItems);
  }, [cartItems]);

  const handleDelete = (id) => {
    removeProduct(id);
  };

  const totalPrice = itemsInCart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div>
      <div className="cartBanner">
        <h2>Cart</h2>
        <p><span>Home {">"} </span> Cart</p>
      </div>
      <div className="div">
        {itemsInCart.length > 0 ? (
          <div className="tab">
            <table className="table">
              <thead className="text">
                <tr>
                  <th />
                  <th>Product</th>
                  <th></th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {itemsInCart.map((item) => (
                  <tr key={item.id}>
                    <td />
                    <td>
                      <img src={item.image} alt={item.title} className="Img" />
                    </td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>
                      <button className="btn">{item.quantity}</button>
                    </td>
                    <td className="p-4 font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td>
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="cursor-pointer"
                        onClick={() => handleDelete(item.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="center">
            <p className="text-center">Your cart is empty</p>
          </div>
        )}
        {itemsInCart.length > 0 && (
          <div className="checkoutSection">
            <h2>Cart Totals</h2>
            <div className="totalPrice">
              <div className="subtotal">
                <p>Subtotal</p>
                <p><span>{totalPrice.toFixed(2)} $</span></p>
              </div>
              <div className="total">
                <p>Total</p>
                <p><span>{totalPrice.toFixed(2)} $</span></p>
              </div>
            </div>
            <Link to="/checkout">
              <div className="checkoutBtn">
                <button className="checkoutButton">Check Out</button>
              </div>
            </Link>
          </div>
        )}
      </div>
      <WarrantyBanner />
    </div>
  );
};

export default Cart;
