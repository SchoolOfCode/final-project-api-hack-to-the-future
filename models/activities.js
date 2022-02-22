import db from "../db/connection.js";

export async function getAllActivities(location, type, date) {
  const result = await db.query(
    `SELECT * FROM activities 
    LEFT JOIN users on users.user_id=activities.organiser_id 
    LEFT JOIN locations on locations.location_id=activities.location_id 
    WHERE activities.type = $1;`,
    [type]
  );
  return result.rows;
}
