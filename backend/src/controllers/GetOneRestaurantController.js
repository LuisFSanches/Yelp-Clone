const db = require("../database/config/database");
module.exports = {
  async index(req, res) {
    const id = req.params.id;

    try {
      const data = await db.query(
        "SELECT * FROM restaurants WHERE id  = ($1)",
        [id]
      );
      return res.json(data.rows[0]);
    } catch (err) {
      console.log(err);
    }
  },
};
