import React, { useState, useEffect } from "react";
import { api } from "../services/api.js";
import { useParams } from "react-router-dom";
import StarRating from "./StarRating";

const TitleReview = () => {
  const id = useParams().id;
  const [title, setTitle] = useState();
  const [average, setAverage] = useState();
  const [total, setTotal] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await api.get(`restaurant/${id}`);
      setTitle(response.data.name);
    };
    getData();
  }, [id]);

  useEffect(() => {
    const getData = async () => {
      const response = await api.get(`reviews/${id}/average`);
      setAverage(response.data);
    };
    getData();
  }, [id]);

  useEffect(() => {
    const getData = async () => {
      const response = await api.get(`reviews/${id}/total`);
      setTotal(response.data);
    };
    getData();
  }, [id]);

  return (
    <div className="d-flex justify-content-center ">
      <h1>{title}</h1>
      <div className="d-flex align-items-center  ml-3">
        <span>
          <StarRating rating={average} />
        </span>
        <span className="text-warning" style={{ fontSize: "1.2rem" }}>
          {" "}
          ({total})
        </span>
      </div>
    </div>
  );
};

export default TitleReview;
