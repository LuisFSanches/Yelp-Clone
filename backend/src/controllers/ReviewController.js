const db = require("../database/config/database.js");
require("dotenv").config();
module.exports = {
  async index(req, res) {
    const restaurant_id = req.params.id;

    try {
      const reviews = await db.query(
        "SELECT * FROM reviews WHERE restaurant_id =$1",
        [restaurant_id]
      );

      return res.json(reviews.rows);
    } catch (err) {
      console.log(err);
      return res.status(400);
    }
  },

  async store(req, res) {
    const restaurant_id = req.params.id;
    const { name, content, rating } = req.body;
    try {
      const save_review = await db.query(
        "INSERT INTO reviews (restaurant_id, name, content, rating) VALUES ($1,$2,$3,$4) RETURNING *",
        [restaurant_id, name, content, rating]
      );
      //console.log(save_review.rows[0]);
      return res.json(save_review.rows[0]);
    } catch (err) {
      console.log(err);
      return res.status(400);
    }
  },
};
