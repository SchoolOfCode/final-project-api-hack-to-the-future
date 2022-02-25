import db from "../../connection.js";

const response = await db.query(
  `CREATE TABLE IF NOT EXISTS activities 
  (activity_id SERIAL PRIMARY KEY, 
    organiser_id TEXT NOT NULL REFERENCES users(user_id),
    location_name TEXT NOT NULL, 
    max_attendees INT NOT NULL, date_time timestamp NOT NULL, 
    description text NOT NULL, 
    type text NOT NULL);`
);

console.log(response);
db.end();
