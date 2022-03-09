import db from "../db/connection.js";

export async function getAllActivities(location, type, date, user_id) {
  const result = await db.query(
    `SELECT *
    FROM activities
      LEFT JOIN users ON activities.organiser_id = users.user_id
    WHERE activities.activity_id NOT IN (
      SELECT activity_id FROM participants
      WHERE user_id = $4
    )
    AND (activities.date_time > CURRENT_TIMESTAMP)
    AND (activities.organiser_id != $4)
    AND ($1::text is null OR activities.type ILIKE '%'||$1||'%')
    AND ($2::text is null OR activities.location_name ILIKE '%'||$2||'%')
    AND ($3::text is null OR activities.date_time::text ILIKE '%'||$3||'%');`,
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
