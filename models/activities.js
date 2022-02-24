import db from "../db/connection.js";

export async function getAllActivities(location, type, date) {
  const result = await db.query(
    `SELECT * FROM activities 
    LEFT JOIN users on users.user_id=activities.organiser_id 
    LEFT JOIN locations on locations.location_id=activities.location_id 
    WHERE ($1::text is null OR $1::text = activities.type)
    AND ($2::text is null OR $2::text = locations.location_name)
    AND ($3::timestamp is null OR $3::timestamp = activities.date_time);`,
    [type, location, date]
  );
  return result.rows;
}

export async function createNewActivity(
  organiser_id,
  location_id,
  max_attendees,
  date_time,
  description,
  type
) {
  const sqlString = `INSERT INTO activities
  (organiser_id, location_id, max_attendees, date_time, description, type)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *;
  `;
  const result = await db.query(sqlString, [
    organiser_id,
    location_id,
    max_attendees,
    date_time,
    description,
    type,
  ]);
  return result.rows;
}
