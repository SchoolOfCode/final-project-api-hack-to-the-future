import db from "../../connection.js";

const response = await db.query(
  `INSERT INTO activities (organiser_id, location_id, max_attendees, date_time, description, type) VALUES ($1, $2, $3, $4, $5, $6);`,
  [
    1,
    1,
    8,
    new Date(Date.now()).toISOString(),
    "All abilities welcome to a walk round Cannon Hill Park followed by coffee at the park cafe",
    "walk",
  ]
);

console.log(response);

db.end();
