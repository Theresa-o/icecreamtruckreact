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
      <div className="shop">
        <div className="shopTitle">
          <h1>IceCreamIe</h1>
        </div>
        <div className="iceCreamItems">
          <ul>
            {foodItems.map((foodItem) => (
              <li key={foodItem.id}>
                <Link to={`/fooditem/${foodItem.id}`}>
                  <img src={foodItem.image} alt={foodItem.name} />
                  <strong>{foodItem.name}</strong>
                  <p>Price: ${foodItem.price}</p>
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
