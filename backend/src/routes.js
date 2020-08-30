const express = require("express");
const routes = express.Router();

//IMPORTING CONTROLLERS
const Restaurant = require("./controllers/RestaurantController.js");

const GetOneRestaurant = require("./controllers/GetOneRestaurantController.js");

const ReviewController = require("./controllers/ReviewController.js");

const AverageReviewController = require("./controllers/AverageReviewController.js");

const TotalReviewController = require("./controllers/TotalReviewController.js");

routes.get("/", Restaurant.index);
routes.post("/new", Restaurant.store);
routes.put("/update/:id", Restaurant.update);
routes.delete("/delete/:id", Restaurant.delete);

routes.get("/restaurant/:id", GetOneRestaurant.index);

routes.get("/reviews/:id", ReviewController.index);
routes.post("/newreview/:id", ReviewController.store);

routes.get("/reviews/:id/average", AverageReviewController.index);

routes.get("/reviews/:id/total", TotalReviewController.index);
module.exports = routes;
