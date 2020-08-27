require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes.js");

//MIDDLEWARES
app.use(express.json());

app.use("/", routes);

app.listen(3333);
