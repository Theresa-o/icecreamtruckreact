import React, { useState, useEffect } from "react";
import axios from "axios";

const Shop = () => {
  // fetch data using axios
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/fooditem/")
      .then((response) => {
        setFoodItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="container mx-auto py-8 ml-7">
        <div className="flex justify-center content-center">
          <ul>
            {foodItems.map((foodItem) => (
              <li key={foodItem.id}>
                <div className="grid grid-cols-3 gap-5 ">
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Shop;
