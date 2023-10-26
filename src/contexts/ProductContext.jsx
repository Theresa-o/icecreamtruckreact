// import React, { createContext, useState, useEffect } from "react";

// // create context
// export const ProductContext = createContext();

// const ProductProvider = ({ children }) => {
//   // fetching items via fetch
//   const [foodItems, setFoodItems] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await fetch("http://127.0.0.1:8000/api/FoodItem/");
//       const data = await response.json();
//       console.log(data);
//     };
//     axios.get("http://127.0.0.1:8000/api/FoodItem/").then((response) => {
//       setFoodItems(response.data);
//       console.log(response.data);
//     });
//     fetchProducts();
//   }, []);

//   //   // fetching items via axios
//   //   const [foodItems, setFoodItems] = useState([]);

//   //   useEffect(() => {
//   //     axios.get("http://127.0.0.1:8000/api/FoodItem/").then((response) => {
//   //       setFoodItems(response.data);
//   //       console.log(response.data);
//   //     });
//   //   }, []);
//   return <ProductContext.Provider>{children}</ProductContext.Provider>;
// };

// export default ProductContext;
