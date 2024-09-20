

function WarrantyBanner() {
  return (
    <div className="servicesBanner">
      <div className="highQuality">
        <div className="highQualityIcon">
         <img src="/trophy 1.svg"></img>
        </div>
        <div className="highQualityText">
          <h3>  High Quality</h3>
          <p>Crafted from top materials</p>
        </div>
      </div>
      <div className="warrantyProtection">
        <div className="warrantyProtectionIcon">
          <img src="/guarantee.svg"></img>
        </div>
        <div className="warrantyProtectionText">
          <h3>Warranty Protection</h3>
          <p>Over 2 years</p>
        </div>
      </div>
      <div className="freeShipping">
        <div className="freeShippingIcon">
        <img src="/shipping.svg"></img>
        </div>
        <div className="freeShippingText">
          <h3>   Free Shipping</h3>
          <p>Order over $150</p>
        </div>
      </div>
      <div className="support">
        <div className="supportIcon">
         <img src="/customer-support.svg"></img>
        </div>
        <div className="supportText">
          <h3>24 / 7 Support</h3>
          <p>Dedicated suppoty</p>
        </div>
      </div>
    </div>
  );
}

export default WarrantyBanner;