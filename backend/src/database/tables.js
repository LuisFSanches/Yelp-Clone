const db = require("./config/database");

async function dropTables() {
  await db.connect();
  await db.query("DROP TABLE name_of_the_table");
  await db.end();
  console.log("Table deleted");
}

async function createTables() {
  await db.connect();
  await db.query(
    "CREATE TABLE restaurants (Id SERIAL PRIMARY KEY, name VARCHAR(50), location VARCHAR(50), price_range INT)"
  );
  console.log("Table created");
}
createTables();
