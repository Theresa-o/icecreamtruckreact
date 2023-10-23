import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const [foodItem, setFoodItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://127.0.0.1:8000/api/FoodItem/${id}`)
        .then((res) => {
          console.log("API Response:", res.data);
          setFoodItem(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  return (
    <div>
      <h2>View Food Item</h2>
      <p>
        <strong>Name:</strong> {foodItem.name}
      </p>
      <p>
        <strong>Price:</strong> ${foodItem.price}
      </p>
      <img src={foodItem.image} alt={foodItem.name} />
    </div>
  );
};

export default Product;
