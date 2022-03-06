import db from "../db/connection.js";

export async function getAllActivities(location, type, date, user_id) {
  const result = await db.query(
    `SELECT DISTINCT activities.activity_id, activities.organiser_id, activities.location_name, activities.max_attendees, activities.date_time, activities.description, 
    activities.type, users.user_id, users.user_name, users.email 
    FROM activities 
        LEFT JOIN users on users.user_id=activities.organiser_id 
        LEFT JOIN participants on activities.activity_id=participants.activity_id
    WHERE (participants.user_id != $4 OR participants.user_id is null)
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

  //add organiser as "attending" on the participants table
  const activity_id = result.rows[0].activity_id;
  await db.query(
    `INSERT INTO participants 
  (user_id ,activity_id, participant_role)
  VALUES ($1, $2, $3) 
  ON CONFLICT (user_id, activity_id) DO UPDATE SET participant_role = $3 RETURNING *;`,
    [organiser_id, activity_id, "attending"]
  );

  return result.rows;
}
