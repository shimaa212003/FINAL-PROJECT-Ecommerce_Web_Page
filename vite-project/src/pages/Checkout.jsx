import  { useContext } from "react";
import "../styles/Checkout.css";
import  {countries}  from "countries-list";
import CartContext from "../components/CartContext";
import { Link } from "react-router-dom";
import WarrantyBanner from "../components/WarrantyBanner";

function Checkout() {
  const countryList = Object.values(countries).map((country) => country.name);
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.cost,
    0
  );

  return (
    <div>
      <div className="checkoutBanner">
        <h2>Checkout</h2>
        <p>
          <span>Home {">"} </span>
          Checkout
        </p>
      </div>
      <div className="checkoutContainer">
        <div className="billingDetails">
          <h3>Billing Details</h3>
          <div className="nameInputs">
            <form>
              <label>
                First Name
                <input type="text" name="firstName" placeholder="First Name" />
              </label>

              <label>
                Last Name
                <input type="text" name="lastName" placeholder="Last Name" />
              </label>
            </form>
          </div>
          <form>
            <label>
              Company Name (Optional)
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
              />
            </label>

            <label>
              Country
              <select name="country">
                {countryList.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Street address
              <input type="text" name="address" placeholder="Address" />
            </label>

            <label>
              City
              <input type="text" name="city" placeholder="City" />
            </label>

            <label>
              State/Region
              <input type="text" name="state" placeholder="Region" />
            </label>

            <label>
              Postal/ZIP Code
              <input type="text" name="postalCode" placeholder="ZIP Code" />
            </label>

            <label>
              Email address
              <input type="email" name="emailAddress" placeholder="Email" />
            </label>

            <label>
              Additional information
              <input
                type="text"
                name="additionalInformation"
                placeholder="Additional informations"
              />
            </label>
          </form>
        </div>
        <div className="billingRecap">
          <div className="checkoutProducts">
            <div className="checkoutProductsLine1">
              <p>Product(s)</p>
              <p>Subtotal</p>
            </div>
            {cartItems.map((item) => (
              <div className="checkoutProductsLine2" key={item.id}>
                <p>
                  <span>{item.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  x&nbsp;&nbsp;
                  {item.quantity}
                </p>
                <p>{item.cost * item.quantity}&nbsp;$</p>
              </div>
            ))}
            <div className="checkoutProductsLine3">
              <p>Subtotal</p>
              <p>{totalPrice.toFixed(2)}&nbsp;$</p>
            </div>
            <div className="checkoutProductsLine4">
              <p>Total</p>
              <p>
                <span>{totalPrice.toFixed(2)}&nbsp;$</span>
              </p>
            </div>
          </div>
          <div className="payment-methods">
            <h4>Select Payment Method:</h4>

            <div className="paymentOption">
              <input
                type="radio"
                id="payment1"
                name="payment"
                value="option1"
              />
              <label htmlFor="payment1">Direct Bank Transfer</label>
              <p>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </div>

            <div className="paymentOption">
              <input
                type="radio"
                id="payment2"
                name="payment"
                value="option2"
              />
              <label htmlFor="payment2">Direct Bank Transfer</label>
            </div>

            <div className="paymentOption">
              <input
                type="radio"
                id="payment3"
                name="payment"
                value="option3"
              />
              <label htmlFor="payment3">Cash On Delivery</label>
            </div>
            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your accout, and for
              other purposes described in our privacy policy.
            </p>
          </div>
          <div className="placeOrderButton">
            <Link>
              <button>Place Order</button>
            </Link>
          </div>
        </div>
      </div>
      <WarrantyBanner />
    </div>
  );
}

export default Checkout