import db from "../../connection.js";

const response = await db.query(
  `INSERT INTO locations (location_name, lat_long, is_accessible) VALUES ($1, $2, $3);`,
  ["Birmingham", "132,542", true]
);

console.log(response);

db.end();
