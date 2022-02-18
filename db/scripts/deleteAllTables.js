import db from "../connection.js";

const response = await db.query(`DROP TABLE users;`);

console.log(response);
db.end();
