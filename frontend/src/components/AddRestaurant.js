import React, { useState } from "react";
import { api } from "../services/api.js";

export default function AddRestaurant() {
  const [inputs, setInputs] = useState({
    name: "",
    location: "",
  });

  const [priceRange, setPriceRange] = useState("Price Range");
  const { name, location } = inputs;

  function onChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  function addRestaurant(e) {
    api.post("/new", {
      name: name,
      location: location,
      price: priceRange,
    });
  }

  return (
    <div className="mb-4">
      <form action="" onSubmit={addRestaurant}>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="name"
              value={name}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="location"
              className="form-control"
              placeholder="location"
              value={location}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="col">
            <select
              className="custom-select my-1 mr-sm-2"
              name="price"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
