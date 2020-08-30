import React, { useState, useEffect } from "react";
import { useParams, withRouter } from "react-router-dom";
import { api } from "../services/api.js";

const UpdateRestaurant = ({ history }) => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price_range, setPrice] = useState("");
  const [message, setMessage] = useState();

  const [name_from_db, setName_from_db] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await api.get(`/restaurant/${id}`);

      setName_from_db(response.data.name);
    };
    getData();
  }, [id]);

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
    setTimeout(() => {
      history.push("/");
    }, 2000);
  };

  return (
    <div>
      <h2>{name_from_db}</h2>
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
export default withRouter(UpdateRestaurant);
