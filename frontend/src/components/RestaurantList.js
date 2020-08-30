import React, { useState, useEffect } from "react";
import { api } from "../services/api.js";
import StarRating from "./StarRating";
import { withRouter } from "react-router-dom";

const RestaurantList = ({ history }) => {
  const [restaurants, setRestaurants] = useState([""]);

  useEffect(() => {
    const getData = async () => {
      const response = await api.get("/");
      console.log(response.data);
      setRestaurants(response.data);
    };
    getData();
  }, []);

  const updateRestaurant = async (e, id) => {
    e.stopPropagation();
    history.push(`/restaurants/${id}/update`);
  };

  const deleteRestaurant = async (e, id) => {
    e.stopPropagation();
    await api.delete(`/delete/${id}`);
    const response = await api.get("/");
    return setRestaurants(response.data);
  };

  const onClickDetails = async (id) => {
    history.push(`/restaurants/${id}`);
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
              <tr
                key={restaurant.id}
                onClick={() => onClickDetails(restaurant.id)}
              >
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{"$".repeat(restaurant.price_range)}</td>
                <td>
                  <StarRating rating={restaurant.average_rating} />
                </td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={(e) => updateRestaurant(e, restaurant.id)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => deleteRestaurant(e, restaurant.id)}
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
};
export default withRouter(RestaurantList);
