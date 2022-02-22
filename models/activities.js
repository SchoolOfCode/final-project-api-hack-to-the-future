import db from "../db/connection.js";

export async function getAllActivities() {
  const result = await db.query(
    `SELECT * FROM activities LEFT JOIN users on users.user_id=activities.organiser_id LEFT JOIN locations on locations.location_id=activities.location_id`
  );
  return result.rows;
}
