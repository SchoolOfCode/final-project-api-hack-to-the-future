import db from "../connection.js";

const response = await db.query(
  `TRUNCATE users, activities, participants RESTART IDENTITY CASCADE;`
);

console.log(response);
db.end();
