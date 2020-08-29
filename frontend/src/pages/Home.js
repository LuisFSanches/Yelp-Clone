import React from "react";

import Header from "../components/Header.js";
import AddRestaurant from "../components/AddRestaurant.js";
import RestaurantList from "../components/RestaurantList.js";

export default function Home() {
  return (
    <div>
      <Header />
      <AddRestaurant />
      <RestaurantList />
    </div>
  );
}
