import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Shop = () => {
  //   const [foodItems, setFoodItems] = useState([]);

  //   useEffect(() => {
  //     // Define the URL of your API
  //     const apiUrl = "http://127.0.0.1:8000/api/FoodItem/";

  //     // Fetch data from the API
  //     fetch(apiUrl)
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         setFoodItems(data);
  //       })
  //       .catch((error) => {
  //         console.error("There was a problem with the fetch operation:", error);
  //       });
  //   }, []);

  // axios
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/FoodItem/").then((response) => {
      setFoodItems(response.data);
    });
  }, []);
  return (
    <div>
      <div className="container mx-auto py-8">
        <div className="shopTitle">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Products
          </h1>
        </div>
        <div className="iceCreamItems">
          <ul>
            {foodItems.map((foodItem) => (
              <li key={foodItem.id}>
                <Link to={`/fooditem/${foodItem.id}`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <img
                        src={foodItem.image}
                        alt={foodItem.name}
                        className="w-full h-48 object-cover mx-auto max-w-xs"
                      />
                      <div className="p-4">
                        <h2 className="text-xl font-semibold text-gray-800">
                          {foodItem.name}
                        </h2>
                        <p className="text-indigo-700 font-bold mt-2">
                          ${foodItem.price}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <img src={foodItem.image} alt={foodItem.name} />
                  <strong>{foodItem.name}</strong>
                  <p>Price: ${foodItem.price}</p> */}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Shop;
