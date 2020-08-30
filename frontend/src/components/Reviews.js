import React, { useState, useEffect } from "react";
import StarRating from "./StarRating";
import { api } from "../services/api.js";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const id = useParams().id;
  const [reviews, setReviews] = useState([""]);

  useEffect(() => {
    const getData = async () => {
      const response = await api.get(`/reviews/${id}`);
      setReviews(response.data);
    };

    getData();
  }, [id]);

  return (
    <div className="row row-cols-3 mb-2">
      {reviews.map((review) => {
        return (
          <div
            className="card text-white bg-primary mb-3 mr-4"
            style={({ maxWidth: "30%" }, { margin: "1rem" })}
          >
            <div className="card-header d-flex justify-content-between">
              <span>{review.name}</span>
              <span>
                <StarRating rating={review.rating} />
              </span>
            </div>
            <div className="card-body">
              <p className="card-text">{review.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Reviews;
