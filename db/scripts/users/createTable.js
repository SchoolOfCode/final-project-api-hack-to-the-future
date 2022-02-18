import db from "../../connection.js";

const response = await db.query(
  `CREATE TABLE IF NOT EXISTS users (user_id SERIAL PRIMARY KEY, first_name text NOT NULL, last_name text NOT NULL);`
);

console.log(response);
db.end();
