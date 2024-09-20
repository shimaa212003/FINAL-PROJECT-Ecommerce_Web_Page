
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import Rating from "../components/Rating";
import "../styles/Product.css";
import CounterWithCart from "../components/CounterWithCart";
import ProductCard from "../components/ProductCard";
import useCartStore from '../stores/Store'; // Zustand hook
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { fetchProductById, fetchRelatedProducts } from '../api'; // Import API functions

function Product() {
  const { id } = useParams(); 
  const navigate = useNavigate(); // Initialize useNavigate
  const [product, setProduct] = useState(null); 
  const [relatedProducts, setRelatedProducts] = useState([]); 
  const [selectedSize, setSelectedSize] = useState(null); 
  const [selectedColor, setSelectedColor] = useState(null); 
  const addToCart = useCartStore((state) => state.addToCart); 
  const [activeProductId, setActiveProductId] = useState(null); // Track active product

  // Fetch product details by ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
        setSelectedSize(data.size?.[0] || null); 
        setSelectedColor(data.colors?.[0] || null); 
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  // Fetch related products when the product is available
  const getRelatedProducts = async () => {
    if (product) {
      try {
        const data = await fetchRelatedProducts();
        const related = data.filter(
          (p) => p.id !== parseInt(id) && p.category === product.category
        );
        setRelatedProducts(related.slice(0, 4)); 
      } catch (error) {
        console.error("Error fetching related products:", error);
      }
    }
  };

  useEffect(() => {
    if (product) getRelatedProducts();
  }, [product]);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color");
      return;
    }

    const productToAdd = {
      ...product,
      size: selectedSize,
      color: selectedColor,
      quantity: 1, 
    };
    
    addToCart(productToAdd);
  };

  // Navigate to the related product page
  const handleRelatedProductClick = (relatedProductId) => {
    navigate(`/product/${relatedProductId}`); // Change to your actual product route
  };

  if (!product) {
    return <div>Loading product...</div>;
  }

  return (
    <div className="productPageContainer">
      <div className="productNav">
        <p>
          <Link to="/">Home</Link>
          <span>{">"}</span>
          <Link to="/shop">Shop</Link>
          <span>{">"}</span>
          <span className="productNameSpan">{product.title}</span>
        </p>
      </div>

      <div className="productDetailsContainer">
        <div className="productDetails">
          <div className="productPicture">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="productInformations">
            <h2>{product.title}</h2>
            <p className="productPrice">{product.price}$</p>
            <Rating rating={product.rating?.rate || 0} className="productRating" />
            <p className="productDescription">{product.description}</p>

            <CounterWithCart
              product={product}
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>

        <div className="productRefs">
          <div className="productRef">
            <p>SKU: {product.id}</p>
            <p>Category: {product.category}</p>
            <p>
              Share:
              <FontAwesomeIcon icon={faFacebook} />{" "}
              <FontAwesomeIcon icon={faLinkedin} />{" "}
              <FontAwesomeIcon icon={faTwitter} />{" "}
              <FontAwesomeIcon icon={faInstagram} />
            </p>
          </div>
        </div>
      </div>

      <div className="line"></div>
      
      <section className="productDescription">
        <h2 className="title">Description</h2>
        <p className="description">{product.description}</p>
      </section>

      {relatedProducts.length > 0 && (
        <div className="relatedProducts">
          <h3>Related Products</h3>
          <div className="relatedProductsContainer">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                product={relatedProduct}
                key={relatedProduct.id}
                activeProductId={activeProductId} // Pass active product ID
                setActiveProductId={setActiveProductId} // Set active product
                onClick={() => handleRelatedProductClick(relatedProduct.id)} // Pass the click handler
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
