import db from "../../connection.js";

const response = await db.query(
  `INSERT INTO users (first_name, last_name) VALUES ($1, $2);`,
  ["Paddington", "Bear"]
);

console.log(response);

db.end();
