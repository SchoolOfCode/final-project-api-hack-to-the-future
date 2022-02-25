import db from "../../connection.js";

const response = await db.query(
  `CREATE TABLE IF NOT EXISTS participants 
  (participant_id SERIAL PRIMARY KEY NOT NULL, 
    user_id TEXT NOT NULL REFERENCES users(user_id),
    activity_id int NOT NULL REFERENCES activities(activity_id), 
    participant_role text NOT NULL, 
    UNIQUE (user_id, activity_id));`
);

console.log(response);
db.end();
