import db from "../connection.js";

const response = await db.query(`DROP TABLE users,activities,locations,participants CASCADE;`);

console.log(response);
db.end();
