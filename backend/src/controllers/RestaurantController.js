const db = require("../database/config/database.js");

module.exports = {
  async index(req, res) {
    const data = await db.query(
      "SELECT * FROM restaurants left JOIN (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id"
    );
    return res.json(data.rows);
  },

  async store(req, res) {
    //CREATING A NEW RESTAURANT
    const { name, location, price } = req.body;
    try {
      await db.query(
        "INSERT INTO restaurants (name, location, price_range) VALUES($1,$2,$3)",
        [name, location, price]
      );
      return res.status(204).json(req.body);
    } catch (err) {
      console.log(err);
    }
  },
  async update(req, res) {
    let { name, location, price } = req.body;
    const restaurant_id = req.params.id;
    const data = await db.query("SELECT * FROM restaurants WHERE id=$1", [
      restaurant_id,
    ]);

    if (name === "" || name === undefined) {
      name = data.rows[0].name;
    }
    if (location === "" || location === undefined) {
      location = data.rows[0].location;
    }
    if (price === "" || price === undefined) {
      price = data.rows[0].price_range;
    }
    console.log(price);

    try {
      await db.query(
        "UPDATE restaurants  SET (name,location,price_range) = ($1,$2,$3) WHERE id = $4",
        [name, location, price, restaurant_id]
      );
      const data_updated = await db.query(
        "SELECT * FROM restaurants WHERE id=$1",
        [restaurant_id]
      );
      return await res.status(204).json(data_updated.rows[0]);
    } catch (err) {
      console.log(err);
    }
  },
  async delete(req, res) {
    const restaurant_id = req.params.id;
    try {
      const data = await db.query("DELETE FROM restaurants WHERE id=$1", [
        restaurant_id,
      ]);
      return res.status(204).json({ status: "restaurant deleted" });
    } catch (err) {
      console.log(err);
    }
  },
};
