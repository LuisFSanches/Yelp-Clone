const db = require("../database/config/database");
module.exports = {
  async index(req, res) {
    const restaurant_id = req.params.id;
    try {
      const total_ratings = await db.query(
        "SELECT COUNT (*) FROM reviews WHERE restaurant_id = $1",
        [restaurant_id]
      );
      const total_number = parseInt(total_ratings.rows[0].count);
      return res.json(total_number);
    } catch (err) {
      console.log(err);
    }
  },
};
