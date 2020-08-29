const express = require("express");
const routes = express.Router();

//IMPORTING CONTROLLERS
const Restaurant = require("./controllers/RestaurantController.js");

routes.get("/", Restaurant.index);
routes.post("/new", Restaurant.store);
routes.put("/update/:id", Restaurant.update);
routes.delete("/delete/:id", Restaurant.delete);
module.exports = routes;
