import db from "../connection.js";

const response = await db.query(
  `DROP TABLE users, activities, participants CASCADE;`
);

console.log(response);
db.end();
