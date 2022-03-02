import db from "../db/connection.js";

export async function getAllActivities(location, type, date, user_id) {
  const result = await db.query(
    `SELECT DISTINCT activities.activity_id, activities.organiser_id, activities.location_name, activities.max_attendees, activities.date_time, activities.description, 
    activities.type, users.user_id, users.user_name, users.email 
    FROM activities 
        LEFT JOIN users on users.user_id=activities.organiser_id 
        LEFT JOIN participants on activities.activity_id=participants.activity_id
    WHERE ($4 != participants.user_id)
    AND ($1::text is null OR $1::text = activities.type)
    AND ($2::text is null OR $2::text = activities.location_name)
    AND ($3::timestamp is null OR $3::timestamp = activities.date_time);`,
    [type, location, date, user_id]
  );
  return result.rows;
}

export async function createNewActivity(
  organiser_id,
  location_name,
  max_attendees,
  date_time,
  description,
  type
) {
  const sqlString = `INSERT INTO activities
  (organiser_id, location_name, max_attendees, date_time, description, type)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *;
  `;
  const result = await db.query(sqlString, [
    organiser_id,
    location_name,
    max_attendees,
    date_time,
    description,
    type,
  ]);
  return result.rows;
}
