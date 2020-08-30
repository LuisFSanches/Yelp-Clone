const db = require("./config/database");

async function dropTables() {
  await db.connect();
  await db.query("DROP TABLE reviews");
  await db.end();
  console.log("Table deleted");
}

async function createTables() {
  await db.connect();
  await db.query(
    "CREATE TABLE reviews (Id SERIAL PRIMARY KEY, restaurant_id INT, FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE, name VARCHAR(50), content TEXT, rating INT check(rating>=1 and rating <=5))"
  );
  console.log("Table created");
}
createTables();
