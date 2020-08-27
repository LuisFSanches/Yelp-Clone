const db = require("../database/config/database.js");

module.exports = {
  async store(req, res) {
    //CREATING A NEW RESTAURANT
    const { name, location, price } = req.body;
    await db.query(
      "INSERT INTO restaurants (name, location, price_range) VALUES($1,$2,$3)",
      [name, location, price]
    );
    return res.json(req.body);
  },
};
