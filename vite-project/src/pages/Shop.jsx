

import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/Shop.css";
import WarrantyBanner from "../components/WarrantyBanner";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shownProducts, setShownProducts] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeProductId, setActiveProductId] = useState(null); // Track active product

  const totalPages = Math.ceil(products.length / shownProducts);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleShowChange = (event) => {
    const value = event.target.value === "all" ? products.length : parseInt(event.target.value);
    setShownProducts(value);
    setCurrentPage(1);
  };

  if (loading) {
    return <div className="load">Loading products...</div>;
  }

  return (
    <div className="shopPage">
      <div className="shopBanner">
        <h2>Shop</h2>
        <p>
          <span>Home {">"} </span>
          Shop
        </p>
      </div>

      <div className="filter-container">
        {/* Filter UI */}
      </div>

      <div className="productsContainer">
        {products
          .slice((currentPage - 1) * shownProducts, currentPage * shownProducts)
          .map((product) => (
            <div key={product.id} className="productCard">
              <ProductCard
                product={product}
                activeProductId={activeProductId}
                setActiveProductId={setActiveProductId}
              />
            </div>
          ))}
      </div>

      <div className="pagination">
        {currentPage > 1 && (
          <button className="page-button" onClick={handlePrevPage}>
            Previous
          </button>
        )}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`page-button ${currentPage === index + 1 ? "active" : ""}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        {currentPage < totalPages && (
          <button className="page-button" onClick={handleNextPage}>
            Next
          </button>
        )}
      </div>

      <WarrantyBanner />
    </div>
  );
}

export default Shop;
