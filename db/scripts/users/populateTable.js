import db from "../../connection.js";

const response = await db.query(
  `INSERT INTO users (user_id, name, email) VALUES ($1, $2, $3);`,
  ["1", "Paddington Bear", "paddington@bear.com"]
);

console.log(response);

db.end();
