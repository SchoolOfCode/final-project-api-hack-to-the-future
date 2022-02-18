import db from "../../connection.js";

const response = await db.query(
  `CREATE TABLE IF NOT EXISTS activities (activity_id SERIAL PRIMARY KEY, organiser_id INT NOT NULL REFERENCES users(user_id),location_id int NOT NULL REFERENCES locations(location_id), max_attendees INT NOT NULL, date_time timestamp NOT NULL, description text NOT NULL, type text NOT NULL);`
);

console.log(response);
db.end();
