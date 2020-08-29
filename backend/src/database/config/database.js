require("dotenv").config();
const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "yelp",
  password: process.env.DATABASE_PASSWORD,
  port: 5432,
});

module.exports = pool;
//process.env.DATABASE_PASSWORD
