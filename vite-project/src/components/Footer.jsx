
import "../styles/Footer.css"
import { Link } from "react-router-dom"
function Footer() {
  return (
    <div className="footerPart">
      <div className="footer">
        <div className="footerAddress">
          <h3>Furniro.</h3>
          <p>
            400 University Drive Suite 200 Coral
            <br />
            Gables,
            <br />
            FL 33134 USA
          </p>
        </div>
        <div className="footerLinks">
          <p>Links</p>
          <ul>
          <li> <Link to= '/'>Home</Link> </li>
           <li> <Link to='/shop' >Shop</Link></li>
              <li> About</li>
            <li> <Link to='/Contact'>Contact</Link></li>
          </ul>
        </div>
        <div className="footerHelp">
          <p>Help</p>
          <ul>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
        <div className="footerNewsletter">
          <p>Newsletter</p>
          <div className="footerNewsletterInput">
            <input type="text" placeholder="Enter Your Email Address"></input>
            <p>SUBSCRIBE</p>
          </div>
        </div>
      </div>
      <div className="rightReserved">
        <p>2023 furniro. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer