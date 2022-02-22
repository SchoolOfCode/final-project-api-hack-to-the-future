import db from "../../connection.js";

const response = await db.query(
  `CREATE TABLE IF NOT EXISTS locations (location_id SERIAL PRIMARY KEY, name text NOT NULL,lat_long text NOT NULL, is_accessible boolean);`
);

console.log(response);
db.end();
