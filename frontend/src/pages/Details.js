import React from "react";

import Reviews from "../components/Reviews.js";
import AddReview from "../components/AddReview.js";
import TitleReview from "../components/TitleReview.js";

const Details = () => {
  return (
    <>
      <div className="mt-3">
        <Reviews />
        <TitleReview />
        <AddReview />
      </div>
    </>
  );
};
export default Details;
