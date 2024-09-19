
import { useContext, useState } from "react";
import CartContext from "./CartContext";

function CounterWithCart({ product, selectedSize, selectedColor }) {
  const { addProduct } = useContext(CartContext);

  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      size: selectedSize,
      color: selectedColor ? [selectedColor] : [],
      quantity: count,
    };
    addProduct(productToAdd);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        marginTop: "5vh",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          border: "solid 1px #9F9F9F",
          borderRadius: "10px",
        }}
      >
        <button
          style={{
            fontSize: "30px",
            fontWeight: 500,
            border: "none",
            backgroundColor: "transparent",
            padding: "12px",
            cursor:"pointer"
          }}
          onClick={handleDecrement}
        >
          -
        </button>
        <div
          style={{
            fontSize: "22px",
            margin: "0 10px",
            fontWeight: 500,
            border: "none",
            backgroundColor: "transparent",
            padding: "12px",
            cursor:"pointer"
          }}
        >
          {count}
        </div>
        <button
          style={{
            fontSize: "25px",
            fontWeight: 500,
            border: "none",
            backgroundColor: "transparent",
            padding: "12px",
            cursor:"pointer"
          }}
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "transparent",
          border: "solid 1px black",
          borderRadius: "10px",
          fontSize: "24px",
          paddingLeft: "30px",
          paddingRight: "30px",
          paddingTop: "14px",
          paddingBottom: "14px",
          marginLeft: "2vw",
          cursor:"pointer"
        }}
        onClick={() => handleAddToCart(product)}
      >
        Add to cart
      </button>
    </div>
  );
}

export default CounterWithCart