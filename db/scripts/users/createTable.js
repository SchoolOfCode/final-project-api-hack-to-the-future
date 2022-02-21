import db from "../../connection.js";

const response = await db.query(
  `CREATE TABLE IF NOT EXISTS users (user_id TEXT PRIMARY KEY, name TEXT NOT NULL, email text NOT NULL);`
);

console.log(response);
db.end();
