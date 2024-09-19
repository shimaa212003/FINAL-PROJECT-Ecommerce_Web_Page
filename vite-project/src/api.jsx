// api.js
export const fetchCategories = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/categories");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error; // Re-throw the error for further handling if needed
    }
  };



  // api.js
export const fetchProductById = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };
  
  export const fetchRelatedProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };
  
  


  // api.js

// Function to fetch products by category
export const fetchProductsByCategory = async (categoryName) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    throw error;
  }
};





