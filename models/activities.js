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
