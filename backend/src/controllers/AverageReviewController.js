const db = require("../database/config/database");
module.exports = {
  async index(req, res) {
    const restaurant_id = req.params.id;
    try {
      const average_ratings = await db.query(
        "SELECT AVG(rating) FROM reviews WHERE restaurant_id = $1",
        [restaurant_id]
      );
      const average_number = parseFloat(average_ratings.rows[0].avg);
      return res.json(average_number);
    } catch (err) {
      console.log(err);
    }
  },
};
