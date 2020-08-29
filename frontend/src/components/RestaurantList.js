import React, { useState, useEffect } from "react";
import { api } from "../services/api.js";
import { Link } from "react-router-dom";

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState([""]);
  useEffect(() => {
    const getData = async () => {
      const response = await api.get("/");
      setRestaurants(response.data);
    };
    getData();
  }, []);

  const deleteRestaurant = async (id) => {
    await api.delete(`/delete/${id}`);
    const response = await api.get("/");
    return setRestaurants(response.data);
  };

  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => {
            return (
              <tr key={restaurant.id}>
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{"$".repeat(restaurant.price_range)}</td>
                <td>Rating</td>
                <td>
                  <button className="btn btn-warning">
                    <Link to={`/restaurants/${restaurant.id}/update`}>
                      Update
                    </Link>
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteRestaurant(restaurant.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
