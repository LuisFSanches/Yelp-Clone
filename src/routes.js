const express = require("express");
const routes = express.Router();

//IMPORTING CONTROLLERS
const Restaurant = require("./controllers/RestaurantController.js");

routes.post("/new", Restaurant.store);

module.exports = routes;
