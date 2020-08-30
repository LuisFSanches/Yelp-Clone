import React, { useState } from "react";
import { api } from "../services/api.js";
import { useParams } from "react-router-dom";

const AddReview = () => {
  const id = useParams().id;
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = async (e) => {
    await api.post(`/newreview/${id}`, {
      name: name,
      content: review,
      rating: rating,
    });
    return await api.get(`/reviews/${id}`);
  };

  return (
    <div className="mb-2">
      <form action="" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              value={name}
              placeholder="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="from-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              name="rating"
              value={rating}
              required
              onChange={(e) => setRating(e.target.value)}
              className="custom-select"
            >
              <option disabled value="rating">
                Rating
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Review">Review</label>
          <textarea
            name="review"
            cols="30"
            rows="10"
            value={review}
            required
            onChange={(e) => setReview(e.target.value)}
            className="form-control"
          ></textarea>
        </div>
        <button className="btn-primary">Send</button>
      </form>
    </div>
  );
};
export default AddReview;
