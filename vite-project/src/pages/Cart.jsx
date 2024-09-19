
// import { useContext, useEffect, useState } from "react";
// import "../styles/Cart.css"; // Assuming you have Cart.css for the styles
// import CartContext from "../components/CartContext"; // Importing CartContext
// import WarrantyBanner from "../components/WarrantyBanner"; // Importing WarrantyBanner
// import { Link } from "react-router-dom";

// // FontAwesome for icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';

// const Cart = () => {
//   const [itemsInCart, setItemsInCart] = useState([]); // Local state to hold cart items
//   const { cartItems, removeProduct } = useContext(CartContext); // Accessing cart context

//   // On mount, update the local state from cartItems in context
//   useEffect(() => {
//     setItemsInCart(cartItems);
//   }, [cartItems]);

//   // Handle delete item
//   const handleDelete = (id) => {
//     console.log("Clicked on delete for item with id:", id); // Debugging line
//     removeProduct(id); // Call remove function from context
//   };

//   // Calculate total price
//   const totalPrice = itemsInCart.reduce(
//     (total, item) => total + item.quantity * item.price,
//     0
//   );

//   return (
//     <div>
//       {/* Banner section */}
//       <div className="cartBanner">
//         <h2>Cart</h2>
//         <p>
//           <span>Home {">"} </span> Cart
//         </p>
//       </div>

//       {/* Main cart content */}
//       <div className="div">
//         {/* Conditionally render the table only if itemsInCart is not empty */}
//         {itemsInCart.length > 0 ? (
//           <div className="tab">
//             <table className="table">
//               <thead className="text">
//                 <tr>
//                   <th>
//                     <span />
//                   </th>
//                   <th>Product</th>
//                   <th>Price</th>
//                   <th>Quantity</th>
//                   <th>Subtotal</th>
//                   <th>
//                     <span />
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {itemsInCart.map((item) => (
//                   <tr key={item.id}>
//                     <td>
//                       <img src={item.image} alt={item.title} className="Img" />
//                     </td>
//                     <td>{item.title}</td>
//                     <td>${item.price}</td>
//                     <td>
//                       <button className="btn">{item.quantity}</button>
//                     </td>
//                     <td className="p-4 font-medium">
//                       ${(item.price * item.quantity).toFixed(2)}
//                     </td>
//                     <td>
//                       {/* FontAwesome trash icon with click event */}
//                       <FontAwesomeIcon
//                         icon={faTrash}
//                         className="cursor-pointer"
//                         onClick={() => handleDelete(item.id)}
//                       />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <p className="text-center">Your cart is empty</p>
//         )}

//         {/* Right side (summary section) */}
//         {itemsInCart.length > 0 && (
//           <div className="checkoutSection">
//             <h2>Cart Totals</h2>
//             <div className="totalPrice">
//               <div className="subtotal">
//                 <p>Subtotal</p>
//                 <p>
//                   <span>{totalPrice.toFixed(2)} $</span>
//                 </p>
//               </div>
//               <div className="total">
//                 <p>Total</p>
//                 <p>
//                   <span>{totalPrice.toFixed(2)} $</span>
//                 </p>
//               </div>
//             </div>
//             <Link to="/checkout">
//               <div className="checkoutBtn">
//                 <button className="checkoutButton">Check Out</button>
//               </div>
//             </Link>
//           </div>
//         )}
//       </div>

//       {/* Warranty Banner */}
//       <WarrantyBanner />
//     </div>
//   );
// };

// export default Cart;

import { useContext, useEffect, useState } from "react";
import "../styles/Cart.css"; // Assuming you have Cart.css for the styles
import CartContext from "../components/CartContext"; // Importing CartContext
import WarrantyBanner from "../components/WarrantyBanner"; // Importing WarrantyBanner
import { Link } from "react-router-dom";

// FontAwesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const [itemsInCart, setItemsInCart] = useState([]); // Local state to hold cart items
  const { cartItems, removeProduct } = useContext(CartContext); // Accessing cart context

  // On mount, update the local state from cartItems in context
  useEffect(() => {
    setItemsInCart(cartItems);
  }, [cartItems]);

  // Handle delete item
  const handleDelete = (id) => {
    console.log("Clicked on delete for item with id:", id); // Debugging line
    removeProduct(id); // Call remove function from context
  };

  // Calculate total price
  const totalPrice = itemsInCart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div>
      {/* Banner section */}
      <div className="cartBanner">
        <h2>Cart</h2>
        <p>
          <span>Home {">"} </span> Cart
        </p>
      </div>

      {/* Main cart content */}
      <div className="div">
        {/* Conditionally render the table and its contents only if itemsInCart is not empty */}
        {itemsInCart.length > 0 ? (
          <div className="tab">
            <table className="table">
              <thead className="text">
                <tr>
                  <th>
                    <span />
                  </th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th >
                    <span />
                  </th>
                </tr>
              </thead>
              <tbody>
                {itemsInCart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      {/* The checkbox is part of the cart item row */}
                      {/* <input type="checkbox" className="checkbox" /> */}
                    </td>
                    <td>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="Img"
                      />
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
                      {/* FontAwesome trash icon with click event */}
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

        {/* Right side (summary section) */}
        {itemsInCart.length > 0 && (
          <div className="checkoutSection">
            <h2>Cart Totals</h2>
            <div className="totalPrice">
              <div className="subtotal">
                <p>Subtotal</p>
                <p>
                  <span>{totalPrice.toFixed(2)} $</span>
                </p>
              </div>
              <div className="total">
                <p>Total</p>
                <p>
                  <span>{totalPrice.toFixed(2)} $</span>
                </p>
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
      
      {/* Warranty Banner */}
      <WarrantyBanner />
    </div>
  );
};

export default Cart;


