

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";  // Import useNavigate
// import "../styles/Home.css";
// import WarrantyBanner from "../components/WarrantyBanner";

// const categoryImages = {
//   "jewelery":"/images.jfif",
//   "electronics": "/download.jfif",
//   "men's clothing": "/mensclothing.jfif",
//   "women's clothing": "/womensclothing.jfif",
// }

// function Home() {
//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate();  // Initialize useNavigate

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch("https://fakestoreapi.com/products/categories");
//         const data = await response.json();
//         setCategories(data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   // Handle image click to navigate to the respective category page
//   const handleCategoryClick = (category) => {
//     navigate(`/category/${category}`);  // Navigate to the category page
//   };

//   return (
//     <>
//       <div className="banner"></div>

//       <div className="categories">
//         <h2>Categories</h2>

//         <div className="categoriesCarousel">
//           {categories.length > 0 ? (
//             categories.map((category, index) => (
//               <div
//                 key={index}
//                 className="categoryItem"
//                 onClick={() => handleCategoryClick(category)}  // On click, go to the category page
//               >
//                 <div className="categoryImg">
//                   <img src={categoryImages[category.toLowerCase()]} alt={category} />
//                 </div>
//                 <div className="categoryTitle">
//                   <h3>{category}</h3>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>Loading categories...</p>
//           )}
//         </div>
//       </div>

//       <WarrantyBanner />
//     </>
//   );
// }

// export default Home;




import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  
import { fetchCategories } from "../api"; // Import the API function
import "../styles/Home.css";
import WarrantyBanner from "../components/WarrantyBanner";

const categoryImages = {
  "jewelery": "/images.jfif",
  "electronics": "/download.jfif",
  "men's clothing": "/mensclothing.jfif",
  "women's clothing": "/womensclothing.jfif",
};

function Home() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();  

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getCategories();
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);  
  };

  return (
    <>
      <div className="banner"></div>

      <div className="categories">
        <h2>Categories</h2>

        <div className="categoriesCarousel">
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <div
                key={index}
                className="categoryItem"
                onClick={() => handleCategoryClick(category)}
              >
                <div className="categoryImg">
                  <img src={categoryImages[category.toLowerCase()]} alt={category} />
                </div>
                <div className="categoryTitle">
                  <h3>{category}</h3>
                </div>
              </div>
            ))
          ) : (
            <p>Loading categories...</p>
          )}
        </div>
      </div>

      <WarrantyBanner />
    </>
  );
}

export default Home;

