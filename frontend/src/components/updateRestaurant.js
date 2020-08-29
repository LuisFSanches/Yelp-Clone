import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api.js";

const UpdateRestaurant = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price_range, setPrice] = useState("");
  const [message, setMessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/update/${id}`, {
        name: name,
        location: location,
        price: price_range,
      });
      setMessage("Fields updated");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2></h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            className="form-control"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price_range">Price</label>
          <input
            type="number"
            id="price_range"
            className="form-control"
            name="price_range"
            value={price_range}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
        <p>{message}</p>
      </form>
    </div>
  );
};
export default UpdateRestaurant;
