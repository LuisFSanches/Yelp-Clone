const express = require("express");
const routes = express.Router();

//IMPORTING CONTROLLERS
const Restaurant = require("./controllers/RestaurantController.js");

const GetOneRestaurant = require("./controllers/GetOneRestaurantController.js");

const ReviewController = require("./controllers/ReviewController.js");

routes.get("/", Restaurant.index);
routes.post("/new", Restaurant.store);
routes.put("/update/:id", Restaurant.update);
routes.delete("/delete/:id", Restaurant.delete);

routes.get("/restaurant/:id", GetOneRestaurant.index);

routes.get("/reviews/:id", ReviewController.index);
routes.post("/newreview/:id", ReviewController.store);
module.exports = routes;
