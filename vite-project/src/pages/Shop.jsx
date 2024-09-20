

// // import { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import ProductCard from "../components/ProductCard";
// // import "../styles/Shop.css";
// // import WarrantyBanner from "../components/WarrantyBanner";

// // function Shop() {
// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [isMenuVisible, setIsMenuVisible] = useState(false);
// //   const [shownProducts, setShownProducts] = useState(16);
// //   const [currentPage, setCurrentPage] = useState(1);

// //   const totalPages = Math.ceil(products.length / shownProducts);

// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //         const response = await fetch("https://fakestoreapi.com/products");
// //         const data = await response.json();
// //         setProducts(data);
// //       } catch (error) {
// //         console.error("Error fetching products:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProducts();
// //   }, []);

// //   const toggleMenu = () => {
// //     setIsMenuVisible((prev) => !prev);
// //   };

// //   const handlePageChange = (pageNumber) => {
// //     setCurrentPage(pageNumber);
// //   };

// //   const handlePrevPage = () => {
// //     if (currentPage > 1) {
// //       setCurrentPage(currentPage - 1);
// //     }
// //   };

// //   const handleNextPage = () => {
// //     if (currentPage < totalPages) {
// //       setCurrentPage(currentPage + 1);
// //     }
// //   };

// //   const handleShowChange = (event) => {
// //     const value = event.target.value === "all" ? products.length : parseInt(event.target.value);
// //     setShownProducts(value);
// //     setCurrentPage(1);
// //   };

// //   if (loading) {
// //     return <div className="load">Loading products...</div>;
// //   }

// //   return (
// //     <div className="shopPage">
// //       <div className="shopBanner">
// //         <h2>Shop</h2>
// //         <p>
// //           <span>Home {">"} </span>
// //           Shop
// //         </p>
// //       </div>

// //       <div className="filter-container">
// //         <div className="filter-header" id="filterToggle" onClick={toggleMenu}>
// //           <i className="fa-solid fa-sliders"></i>
// //           <p>Filters</p>
// //         </div>

// //         <div
// //           className="filter-menu"
// //           id="burgerMenu"
// //           style={{ display: isMenuVisible ? "flex" : "none" }}
// //         >
// //           <div className="filter-item-row">
// //             <input type="radio" name="filter" id="filter1" />
// //             <label htmlFor="filter1">Filter 1</label>
// //           </div>
// //           <div className="filter-item-row">
// //             <input type="radio" name="filter" id="filter2" />
// //             <label htmlFor="filter2">Filter 2</label>
// //           </div>
// //         </div>

// //         <div className="showingProducts">
// //           <p>
// //             Showing {Math.min(shownProducts, products.length)} products of {products.length}
// //           </p>
// //         </div>

// //         <div className="showCounter">
// //           <p>Show:</p>
// //           <select id="showCount" defaultValue="16" onChange={handleShowChange}>
// //             <option value="8">8</option>
// //             <option value="16">16</option>
// //             <option value="32">32</option>
// //             <option value="all">All</option>
// //           </select>
// //         </div>

// //         <div className="sortBy">
// //           <p>Sort by:</p>
// //           <select id="sortBy">
// //             <option value="price-asc">Price (Low to High)</option>
// //             <option value="price-desc">Price (High to Low)</option>
// //             <option value="alpha-asc">Alphabetical (A-Z)</option>
// //             <option value="alpha-desc">Alphabetical (Z-A)</option>
// //             <option value="rating">Ratings</option>
// //           </select>
// //         </div>
// //       </div>

// //       <div className="productsContainer">
// //         {products
// //           .slice(
// //             (currentPage - 1) * shownProducts,
// //             currentPage * shownProducts
// //           )
// //           .map((product) => (
// //             <div key={product.id} className="productCard">
// //               <Link to={`/product/${product.id}`}>
// //                 <ProductCard product={product} />
// //               </Link>
// //             </div>
// //           ))}
// //       </div>

// //       <div className="pagination">
// //         {currentPage > 1 && (
// //           <button className="page-button" onClick={handlePrevPage}>
// //             Previous
// //           </button>
// //         )}
// //         {[...Array(totalPages)].map((_, index) => (
// //           <button
// //             key={index}
// //             className={`page-button ${currentPage === index + 1 ? "active" : ""}`}
// //             onClick={() => handlePageChange(index + 1)}
// //           >
// //             {index + 1}
// //           </button>
// //         ))}
// //         {currentPage < totalPages && (
// //           <button className="page-button" onClick={handleNextPage}>
// //             Next
// //           </button>
// //         )}
// //       </div>

// //       <WarrantyBanner />
// //     </div>
// //   );
// // }

// // export default Shop;



// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import ProductCard from "../components/ProductCard";
// import "../styles/Shop.css";
// import WarrantyBanner from "../components/WarrantyBanner";

// function Shop() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isMenuVisible, setIsMenuVisible] = useState(false);
//   const [shownProducts, setShownProducts] = useState(16);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isOverlayVisible, setIsOverlayVisible] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const totalPages = Math.ceil(products.length / shownProducts);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("https://fakestoreapi.com/products");
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuVisible((prev) => !prev);
//   };

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handleShowChange = (event) => {
//     const value = event.target.value === "all" ? products.length : parseInt(event.target.value);
//     setShownProducts(value);
//     setCurrentPage(1);
//   };

//   // Function to open overlay
//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//     setIsOverlayVisible(true);
//   };

//   // Function to close overlay
//   const closeOverlay = () => {
//     setIsOverlayVisible(false);
//     setSelectedProduct(null);
//   };

//   if (loading) {
//     return <div className="load">Loading products...</div>;
//   }

//   return (
//     <div className="shopPage">
//       <div className="shopBanner">
//         <h2>Shop</h2>
//         <p>
//           <span>Home {">"} </span>
//           Shop
//         </p>
//       </div>

//       <div className="filter-container">
//         <div className="filter-header" id="filterToggle" onClick={toggleMenu}>
//           <i className="fa-solid fa-sliders"></i>
//           <p>Filters</p>
//         </div>

//         <div
//           className="filter-menu"
//           id="burgerMenu"
//           style={{ display: isMenuVisible ? "flex" : "none" }}
//         >
//           <div className="filter-item-row">
//             <input type="radio" name="filter" id="filter1" />
//             <label htmlFor="filter1">Filter 1</label>
//           </div>
//           <div className="filter-item-row">
//             <input type="radio" name="filter" id="filter2" />
//             <label htmlFor="filter2">Filter 2</label>
//           </div>
//         </div>

//         <div className="showingProducts">
//           <p>
//             Showing {Math.min(shownProducts, products.length)} products of {products.length}
//           </p>
//         </div>

//         <div className="showCounter">
//           <p>Show:</p>
//           <select id="showCount" defaultValue="16" onChange={handleShowChange}>
//             <option value="8">8</option>
//             <option value="16">16</option>
//             <option value="32">32</option>
//             <option value="all">All</option>
//           </select>
//         </div>

//         <div className="sortBy">
//           <p>Sort by:</p>
//           <select id="sortBy">
//             <option value="price-asc">Price (Low to High)</option>
//             <option value="price-desc">Price (High to Low)</option>
//             <option value="alpha-asc">Alphabetical (A-Z)</option>
//             <option value="alpha-desc">Alphabetical (Z-A)</option>
//             <option value="rating">Ratings</option>
//           </select>
//         </div>
//       </div>

//       <div className="productsContainer">
//         {products
//           .slice(
//             (currentPage - 1) * shownProducts,
//             currentPage * shownProducts
//           )
//           .map((product) => (
//             <div key={product.id} className="productCard" onClick={() => handleProductClick(product)}>
//               <ProductCard product={product} />
//             </div>
//           ))}
//       </div>

//       <div className="pagination">
//         {currentPage > 1 && (
//           <button className="page-button" onClick={handlePrevPage}>
//             Previous
//           </button>
//         )}
//         {[...Array(totalPages)].map((_, index) => (
//           <button
//             key={index}
//             className={`page-button ${currentPage === index + 1 ? "active" : ""}`}
//             onClick={() => handlePageChange(index + 1)}
//           >
//             {index + 1}
//           </button>
//         ))}
//         {currentPage < totalPages && (
//           <button className="page-button" onClick={handleNextPage}>
//             Next
//           </button>
//         )}
//       </div>

//       {isOverlayVisible && selectedProduct && (
//         <div className="product-overlay">
//           <div className="overlay-content">
//             <button className="close-overlay" onClick={closeOverlay}>X</button>
//             <h2>{selectedProduct.title}</h2>
//             <img src={selectedProduct.image} alt={selectedProduct.title} />
//             <p>{selectedProduct.description}</p>
//             <p>Price: ${selectedProduct.price}</p>
//           </div>
//         </div>
//       )}

//       <WarrantyBanner />
//     </div>
//   );
// }

// export default Shop;




import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "../styles/Shop.css";
import WarrantyBanner from "../components/WarrantyBanner";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [shownProducts, setShownProducts] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

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

  // Function to open overlay
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsOverlayVisible(true);
  };

  // Function to close overlay
  const closeOverlay = () => {
    setIsOverlayVisible(false);
    setSelectedProduct(null);
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
        <div className="filter-header" id="filterToggle" onClick={toggleMenu}>
          <i className="fa-solid fa-sliders"></i>
          <p>Filters</p>
        </div>

        <div
          className="filter-menu"
          id="burgerMenu"
          style={{ display: isMenuVisible ? "flex" : "none" }}
        >
          <div className="filter-item-row">
            <input type="radio" name="filter" id="filter1" />
            <label htmlFor="filter1">Filter 1</label>
          </div>
          <div className="filter-item-row">
            <input type="radio" name="filter" id="filter2" />
            <label htmlFor="filter2">Filter 2</label>
          </div>
        </div>

        <div className="showingProducts">
          <p>
            Showing {Math.min(shownProducts, products.length)} products of {products.length}
          </p>
        </div>

        <div className="showCounter">
          <p>Show:</p>
          <select id="showCount" defaultValue="16" onChange={handleShowChange}>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="all">All</option>
          </select>
        </div>

        <div className="sortBy">
          <p>Sort by:</p>
          <select id="sortBy">
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
            <option value="alpha-asc">Alphabetical (A-Z)</option>
            <option value="alpha-desc">Alphabetical (Z-A)</option>
            <option value="rating">Ratings</option>
          </select>
        </div>
      </div>

      <div className="productsContainer">
        {products
          .slice(
            (currentPage - 1) * shownProducts,
            currentPage * shownProducts
          )
          .map((product) => (
            <div key={product.id} className="productCard" onClick={() => handleProductClick(product)}>
              <ProductCard product={product} />
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

      {/* Overlay for Product Details */}
      {isOverlayVisible && selectedProduct && (
        <div className="product-overlay">
          <div className="overlay-content">
            <button className="close-overlay" onClick={closeOverlay}>X</button>
            <div className="overlay-scrollable">
              <h2>{selectedProduct.title}</h2>
              <img src={selectedProduct.image} alt={selectedProduct.title} />
              <p>{selectedProduct.description}</p>
              <p>Price: ${selectedProduct.price}</p>
            </div>
          </div>
        </div>
      )}

      <WarrantyBanner />
    </div>
  );
}

export default Shop;

